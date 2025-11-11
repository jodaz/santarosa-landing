// app/api/list-media/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: 'auto',
  endpoint: process.env.MEGA_S4_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.MEGA_S4_ACCESS_KEY!,
    secretAccessKey: process.env.MEGA_S4_SECRET_KEY!,
  },
  forcePathStyle: true,
});

const BUCKET = process.env.MEGA_S4_BUCKET!;
const FOLDER = 'santarosa10k/';
const CLOUDINARY_CLOUD_NAME = 'jodaz';  // ← CHANGE THIS!
const PAGE_SIZE = 20;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const cursor = searchParams.get('cursor') || undefined;
    console.log(cursor)
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: FOLDER,
      MaxKeys: PAGE_SIZE + 1,
      ContinuationToken: cursor || undefined,
    });

    const response = await s3Client.send(command);

    const items = (response.Contents || [])
      .filter(obj => obj.Key !== FOLDER)
      .slice(0, PAGE_SIZE); // Limit to exactly PAGE_SIZE

    const files = items.map(obj => {
        const key = obj.Key!;
        const fileName = key.split('/').pop()!;

        // MEGA public Object URL (base for Cloudinary fetch)
        const megaPublicUrl = `https://s3.g.s4.mega.io/${process.env.MEGA_S4_BUCKET_ID}/${BUCKET}/${key}`;
        
        // Cloudinary fetch URL with auto-format + auto-quality
        const cloudinaryUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/fetch/f_auto,q_auto/${encodeURIComponent(megaPublicUrl)}`;

        return {
          key,
          name: fileName,
          size: obj.Size || 0,
          lastModified: obj.LastModified?.toISOString() || '',
          url: cloudinaryUrl,  // Use this for display (Cloudinary fetch)
          // Download proxy route that will stream the file from MEGA/S4 and force download
          downloadUrl: `/api/download-media?key=${encodeURIComponent(key)}`,
          type: 'image',       // All your files are images now
        };
      });


    const hasNextPage = (response.Contents || []).length > PAGE_SIZE;
    const nextCursor = hasNextPage ? response.NextContinuationToken : null;

    return NextResponse.json({ files, pagination: {
        page,
        pageSize: PAGE_SIZE,
        hasNextPage,
        hasPrevPage: page > 1,
        nextCursor,
        total: response.KeyCount
    } });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to list media', details: error.message }, { status: 500 });
  }
}