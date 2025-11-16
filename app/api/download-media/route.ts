// app/api/download-media/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  if (!key) {
    return NextResponse.json({ error: 'Missing key parameter' }, { status: 400 });
  }

  const BUCKET = process.env.MEGA_S4_BUCKET!;
  const MEGA_BUCKET_ID = process.env.MEGA_S4_BUCKET_ID!;

  // Public MEGA/S4 object URL
  const megaPublicUrl = `https://s3.g.s4.mega.io/${MEGA_BUCKET_ID}/${BUCKET}/${key}`;

  try {
    const res = await fetch(megaPublicUrl);

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch object from storage', status: res.status }, { status: res.status });
    }

    const contentType = res.headers.get('content-type') || 'application/octet-stream';
    const filename = decodeURIComponent(key.split('/').pop() || 'download');
    const disposition = `attachment; filename="${filename}"`;

    // Stream the remote response back to the client with attachment headers
    return new NextResponse(res.body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': disposition,
      },
    });
  } catch (err: Error | unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: 'Error fetching from storage', details: message }, { status: 500 });
  }
}
