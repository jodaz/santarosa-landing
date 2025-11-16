// components/MediaGallery.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import {  Loader2, Download } from 'lucide-react';
import { getOptimizedCloudinaryUrl } from '@/lib/cloudinary';
import type { MediaFile, Pagination } from '@/types/media';

export default function MediaGallery() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cursor, setCursor] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
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

  // Infinite scroll observer
  useEffect(() => {
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

  if (loading) {
    return (
      <div className="flex justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        <span className="ml-3">Loading gallery...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-12 text-red-500">
        <p>Error: {error}</p>
        <button onClick={() => fetchPage(1)} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Retry</button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-black/5 rounded-lg shadow-sm w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Media Gallery</h2>
      </div>

      {/* Image Grid - 5 columns (4 rows x 5 photos) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12 w-full">
        {files.map(file => {
          const isVisible = visibleImages.has(file.key);
          const optimizedUrl = isVisible ? getOptimizedImageUrl(file) : '';
          
          return (
            <div
              key={file.key}
              data-key={file.key}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-3">
                <div className="relative max-h-[430px] overflow-hidden rounded-md mb-3 bg-gray-100">
                  {isVisible ? (
                    <Image
                      src={optimizedUrl}
                      alt={file.name}
                      width={430}
                      height={150}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAA"
                    />
                  ) : (
                    <div className="w-full h-[150px] flex items-center justify-center">
                      <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate flex-1 mr-2" title={file.name}>
                    {file.name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const link = document.createElement('a');
                      // Prefer the proxied download URL (same-origin) which forces attachment
                      link.href = file.downloadUrl || file.url;
                      // The server sets Content-Disposition; the download attribute is a hint for same-origin
                      link.download = file.name;
                      link.click();
                    }}
                    className="flex-shrink-0 p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Loading more */}
      {loadingMore && (
        <div className="flex justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      )}

      {/* Infinite Scroll Trigger */}
      <div ref={infiniteScrollRef} className="h-10" />
    </div>
  );
}