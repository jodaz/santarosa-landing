// components/MediaGallery.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Loader2, X, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import type { MediaFile, Pagination } from '@/types/media';
import Link from 'next/link';
import SplitText from './SplitText';
import { useKeyPress } from '@/hooks/useKeyPress';

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

  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  // Helper function to generate optimized Cloudinary URL using SDK
  const getOptimizedImageUrl = useCallback((file: MediaFile) => {
    return getOptimizedCloudinaryUrl(file.url, 400);
  }, []);

  const handlePrev = useCallback(() => {
    if (!selectedFile) return;
    const currentIndex = files.findIndex(f => f.key === selectedFile.key);
    if (currentIndex > 0) {
      const prevFile = files[currentIndex - 1];
      setSelectedFile(prevFile);
      setSelectedImage(getOptimizedImageUrl(prevFile));
    }
  }, [files, selectedFile, getOptimizedImageUrl]);

  const handleNext = useCallback(() => {
    if (!selectedFile) return;
    const currentIndex = files.findIndex(f => f.key === selectedFile.key);
    if (currentIndex < files.length - 1) {
      const nextFile = files[currentIndex + 1];
      setSelectedFile(nextFile);
      setSelectedImage(getOptimizedImageUrl(nextFile));
    }
  }, [files, selectedFile, getOptimizedImageUrl]);

  const leftPressed = useKeyPress({ key: 'ArrowLeft' });
  const rightPressed = useKeyPress({ key: 'ArrowRight' });
  const escapePressed = useKeyPress({ key: 'Escape' });

  useEffect(() => {
    if (leftPressed && selectedFile) handlePrev();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftPressed]);

  useEffect(() => {
    if (rightPressed && selectedFile) handleNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rightPressed]);

  useEffect(() => {
    if (escapePressed && selectedFile) {
      setSelectedImage(null);
      setSelectedFile(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [escapePressed]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
  };

  const currentIndex = selectedFile ? files.findIndex(f => f.key === selectedFile.key) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== -1 && currentIndex < files.length - 1;

  // Refs for infinite scroll state to prevent observer recreation loops
  const stateRef = useRef({
    loadingMore: false,
    hasNextPage: false,
    currentPage: 1,
    cursor: null as string | null,
  });

  // Sync stateRef with state
  useEffect(() => {
    stateRef.current = {
      loadingMore,
      hasNextPage: pagination?.hasNextPage ?? false,
      currentPage,
      cursor,
    };
  }, [loadingMore, pagination, currentPage, cursor]);

  // Synchronous guard for fetching to prevent race conditions
  const isLoadingRef = useRef(false);

  const fetchPage = useCallback(async (page: number, appendResults = false) => {
    // SYNCHRONOUS GUARD: Check and set immediately
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;

    if (appendResults) {
      setLoadingMore(true);
    } else {
      setLoadingMore(page > 1);
    }
    setError(null);
    try {
      const res = await fetch(`/api/list-media?page=${page}&cursor=${stateRef.current.cursor || ''}`);
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
      isLoadingRef.current = false;
    }
  }, []); // Remove cursor dependency, use stateRef.current.cursor inside

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
    if (previewMode) return;
    
    const pointer = infiniteScrollRef.current;
    if (!pointer) return;

    const infiniteObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const { isIntersecting } = entry;
        const { hasNextPage, currentPage: page } = stateRef.current;

        // Use ONLY the synchronous isLoadingRef.current for the guard
        if (isIntersecting && hasNextPage && !isLoadingRef.current) {
          fetchPage(page + 1, true);
        }
      },
      {
        rootMargin: '300px', // Even larger margin to load ahead
        threshold: 0
      }
    );

    infiniteObserver.observe(pointer);

    return () => {
      infiniteObserver.disconnect();
    };
    // fetchPage is stable enough with useCallback, and we use stateRef for volatile values
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewMode, fetchPage]);

  // Get display files - limit to 9 in preview mode
  const displayFiles = previewMode ? files.slice(0, 9) : files;


  if (error) {
    return (
      <div className="text-center p-12 text-red-500">
        <p>Error: {error}</p>
        <button onClick={() => fetchPage(1)} className="mt-4 px-6 py-2 bg-primary text-white rounded">Reintentar</button>
      </div>
    );
  }

  return (
    <section 
      id="galeria" 
      className="py-20 bg-white relative overflow-hidden min-h-screen"
      style={{ overflowAnchor: 'none' }}
    >
      {/* Decorative yellow scribbles */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
          <path d="M10,20 Q30,10 50,20 T90,20" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M15,40 Q35,30 55,40 T95,40" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
          <path d="M10,80 Q30,90 50,80 T90,80" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M15,60 Q35,70 55,60 T95,60" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <SplitText
            text="GALERÍA"
            className="text-4xl md:text-5xl font-permanent font-bold text-black mb-4 py-4"
            delay={50}
            from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            ease="bounce.out"
            splitType="chars"
            tag="h2"
          />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            ¡Revive los mejores momentos! 📸
            <br />
            Fotos llenas de energía, sonrisas y esfuerzo de nuestra comunidad runner.
            <br />
            Haz clic para explorar la galería completa y compartir tus recuerdos con #SantaRosa10K.
          </p>
        </div>

        {loading && !loadingMore && (
          <div className="flex flex-col justify-center items-center py-12 text-black min-h-[60vh]">
            <Loader2 className="w-16 h-16 md:w-24 md:h-24 animate-spin mb-8" />
            <span className="text-[25vw] md:text-[45vw] font-bold leading-none text-center select-none opacity-10 animate-pulse whitespace-nowrap overflow-hidden">
              CARGANDO...
            </span>
          </div>
        )}
        {/* Gallery Grid - 5 columns */}
        <div className="relative" style={{ overflowAnchor: 'none' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ overflowAnchor: 'none' }}>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        {(previewMode && files.length) && (
          <div className="flex justify-center mt-8">
            <Link
              href="/gallery"
              className="px-8 py-3 bg-yellow-500 text-black font-poppins rounded-lg hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl text-sm"
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
        {!previewMode && (
          <div 
            ref={infiniteScrollRef} 
            className="h-10 w-full"
            aria-hidden="true"
          />
        )}

        {/* Lightbox Modal */}
        {selectedImage && selectedFile && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => {
              setSelectedImage(null);
              setSelectedFile(null);
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={() => {
                setSelectedImage(null);
                setSelectedFile(null);
              }}
              className="absolute top-4 right-4 p-2 z-[60] bg-white/10 hover:bg-white/20 rounded-full transition-colors"
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
              className="absolute top-4 right-16 p-2 z-[60] bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Descargar"
            >
              <Download className="w-6 h-6 text-white" />
            </button>

            {hasPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 p-2 z-[60] bg-white/10 hover:bg-white/20 rounded-full transition-colors md:left-8"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
            )}

            <img
              src={selectedFile.url}
              alt="Vista ampliada"
              className="max-w-full max-h-full object-contain animate-scale-in select-none"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />

            {hasNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 p-2 z-[60] bg-white/10 hover:bg-white/20 rounded-full transition-colors md:right-8"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}