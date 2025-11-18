// components/MediaGallery.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Loader2, X, Download } from 'lucide-react';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import type { MediaFile, Pagination } from '@/types/media';
import Link from 'next/link';

interface MediaGalleryProps {
  previewMode?: boolean;
}

export default function MediaGallery({ previewMode = false }: MediaGalleryProps) {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cursor, setCursor] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const infiniteScrollRef = useRef<HTMLDivElement | null>(null);

  // Helper function to generate optimized Cloudinary URL using SDK
  const getOptimizedImageUrl = useCallback((file: MediaFile) => {
    return getOptimizedCloudinaryUrl(file.url, 300);
  }, []);

  const fetchPage = useCallback(async (page: number, appendResults = false) => {
    if (appendResults) {
      setLoadingMore(true);
    } else {
      setLoadingMore(page > 1);
    }
    setError(null);
    try {
      const res = await fetch(`/api/list-media?page=${page}&cursor=${cursor || ''}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');

      if (appendResults) {
        setFiles(prev => [...prev, ...data.files]);
      } else {
        setFiles(data.files);
      }
      setPagination(data.pagination);
      setCurrentPage(page);
      setCursor(data.pagination.nextCursor);
    } catch (err: Error | unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [cursor]);

  // Setup intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute('data-key');
            if (key) {
              setVisibleImages((prev) => new Set(prev).add(key));
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe image containers when files change
  useEffect(() => {
    if (!observerRef.current) return;

    const containers = document.querySelectorAll('[data-key]');
    containers.forEach((container) => {
      observerRef.current?.observe(container);
    });

    return () => {
      containers.forEach((container) => {
        observerRef.current?.unobserve(container);
      });
    };
  }, [files]);

  useEffect(() => {
    fetchPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Infinite scroll observer - disabled in preview mode
  useEffect(() => {
    if (previewMode) return; // Don't setup infinite scroll in preview mode
    
    const pointer = infiniteScrollRef.current;
    const infiniteObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && pagination?.hasNextPage && !loadingMore) {
          fetchPage(currentPage + 1, true);
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (pointer) {
      infiniteObserver.observe(pointer);
    }

    return () => {
      if (pointer) {
        infiniteObserver.unobserve(pointer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination, loadingMore, currentPage]);

  // Get display files - limit to 9 in preview mode
  const displayFiles = previewMode ? files.slice(0, 9) : files;

  if (loading) {
    return (
      <div className="flex justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-3">Cargando galería...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-12 text-red-500">
        <p>Error: {error}</p>
        <button onClick={() => fetchPage(1)} className="mt-4 px-6 py-2 bg-primary text-white rounded">Reintentar</button>
      </div>
    );
  }

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Galería de Fotos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revive los mejores momentos de nuestras carreras
          </p>
        </div>

        {/* Gallery Grid - 5 columns */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {displayFiles.map((file, index) => {
              const isVisible = visibleImages.has(file.key);
              const optimizedUrl = isVisible ? getOptimizedImageUrl(file) : '';
              
              return (
                <div
                  key={file.key}
                  data-key={file.key}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${(index % 20) * 0.03}s` }}
                  onClick={() => {
                    setSelectedImage(optimizedUrl);
                    setSelectedFile(file);
                  }}
                >
                  {isVisible ? (
                    <Image
                      src={optimizedUrl}
                      alt={file.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAA"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* Preview Mode Gradient Overlay */}
          {previewMode && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
          )}
        </div>

        {/* Preview Mode "Ver más" Button */}
        {previewMode && (
          <div className="flex justify-center mt-8">
            <Link
              href="/gallery"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Ver más
            </Link>
          </div>
        )}

        {/* Loading more - only show in full mode */}
        {!previewMode && loadingMore && (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}

        {/* Infinite Scroll Trigger - only in full mode */}
        {!previewMode && <div ref={infiniteScrollRef} className="h-10" />}

        {/* Lightbox Modal */}
        {selectedImage && selectedFile && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => {
              setSelectedImage(null);
              setSelectedFile(null);
            }}
          >
            <button
              onClick={() => {
                setSelectedImage(null);
                setSelectedFile(null);
              }}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const link = document.createElement('a');
                link.href = `/api/download-media?key=${encodeURIComponent(selectedFile.key)}`;
                link.download = selectedFile.name;
                link.click();
              }}
              className="absolute top-4 right-16 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Descargar"
            >
              <Download className="w-6 h-6 text-white" />
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-full object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}