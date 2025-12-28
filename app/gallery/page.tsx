// app/gallery/page.tsx
import type { Metadata } from 'next';
import { GalleryView } from '@/views/GalleryView';

export const metadata: Metadata = {
  title: 'Galería de Fotos - Carrera Santa Rosa 2025 | Carúpano',
  description: 'Revive los mejores momentos de la Carrera y Caminata a Santa Rosa de Lima 2025 en Carúpano. Descarga tus fotos del evento deportivo 10K y 5K.',
  keywords: [
    'fotos carrera Santa Rosa',
    'galería Santa Rosa 10K',
    'fotos evento Carúpano',
    'imágenes running Venezuela',
    'galería deportiva',
    'fotos atletas Carúpano'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Galería de Fotos - Carrera Santa Rosa 2025',
    description: 'Descubre y descarga las fotos oficiales de la Carrera y Caminata a Santa Rosa de Lima. Revive los mejores momentos del evento deportivo en Carúpano.',
    url: 'https://santarosa10k.com/gallery',
    type: 'website',
    images: [
      {
        url: 'https://santarosa10k.com/og-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Galería de fotos Carrera Santa Rosa 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galería de Fotos - Carrera Santa Rosa 2025',
    description: 'Descubre y descarga las fotos oficiales del evento deportivo en Carúpano.',
    images: ['https://santarosa10k.com/og-gallery.jpg']
  }
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col w-full gap-8">
      <GalleryView />
    </main>
  );
}