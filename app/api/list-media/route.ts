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
const FOLDER = 'santarosaop/gallery';
const PAGE_SIZE = 9;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const cursor = searchParams.get('cursor') || undefined;

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

        return {
          key,
          name: fileName,
          size: obj.Size || 0,
          lastModified: obj.LastModified?.toISOString() || '',
          url: megaPublicUrl,  
          downloadUrl: `/api/download-media?key=${encodeURIComponent(key)}`,
          type: 'image',       
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
  } catch (error: Error | unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: 'Failed to list media', details: message }, { status: 500 });
  }
}