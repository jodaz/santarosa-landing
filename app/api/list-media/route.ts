// app/api/list-media/route.ts
import { NextResponse } from 'next/server';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '../../../src/lib/s3';

const BUCKET = process.env.MEGA_S4_BUCKET!;
const FOLDER = 'santarosa10k'; // Change this to your folder (include trailing slash)

export async function GET() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: FOLDER,
    });

    const response = await s3Client.send(command);
    
    const files = await Promise.all(
      (response.Contents || [])
        .filter(obj => obj.Key !== FOLDER) // Exclude folder itself
        .map(async (obj) => {
          const key = obj.Key!;
          const fileName = key.split('/').pop()!;
          const extension = fileName.split('.').pop()?.toLowerCase() || '';
          const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension);
          const isVideo = ['mp4', 'webm', 'mov', 'avi'].includes(extension);
          const isAudio = ['mp3', 'wav', 'ogg'].includes(extension);

          // Generate temporary signed URL (expires in 1 hour)
          const signedUrl = await getSignedUrl(
            s3Client,
            new GetObjectCommand({ Bucket: BUCKET, Key: key }),
            { expiresIn: 3600 }
          );

          // Public URL (if you enabled Object URL access in MEGA)
          const publicUrl = `https://s3.g.s4.mega.io/${BUCKET}/${key}`;

          return {
            key,
            name: fileName,
            size: obj.Size || 0,
            lastModified: obj.LastModified?.toISOString() || '',
            signedUrl,
            publicUrl,
            type: isImage ? 'image' : isVideo ? 'video' : isAudio ? 'audio' : 'other',
          };
        })
    );

    return NextResponse.json({ files });
  } catch (error: any) {
    console.error('List media error:', error);
    return NextResponse.json(
      { error: 'Failed to list media', details: error.message },
      { status: 500 }
    );
  }
}