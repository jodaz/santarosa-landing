// components/MediaGallery.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { RefreshCw, ChevronLeft, ChevronRight, Loader2, Download } from 'lucide-react';
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

  // Helper function to generate optimized Cloudinary URL using SDK
  const getOptimizedImageUrl = useCallback((file: MediaFile) => {
    return getOptimizedCloudinaryUrl(file.url, 300);
  }, []);

  const fetchPage = useCallback(async (page: number) => {
    setLoadingMore(page > 1);
    setError(null);
    try {
      const res = await fetch(`/api/list-media?page=${page}&cursor=${cursor || ''}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');

      setFiles(data.files);
      setPagination(data.pagination);
      setCurrentPage(page);
      setCursor(data.pagination.nextCursor);
    } catch (err: any) {
      setError(err.message);
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
  }, []);

  const goToPage = (page: number) => {
    if (page < 1 || (pagination && !pagination.hasNextPage && page > currentPage)) return;
    fetchPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Media Gallery</h2>
        <button onClick={() => fetchPage(currentPage)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>
      </div>

      {/* Image Grid - 5 columns (4 rows x 5 photos) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {files.slice(0, 20).map(file => {
          const isVisible = visibleImages.has(file.key);
          const optimizedUrl = isVisible ? getOptimizedImageUrl(file) : '';
          
          return (
            <div
              key={file.key}
              data-key={file.key}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-3">
                <div className="relative max-h-[150px] overflow-hidden rounded-md mb-3 bg-gray-100">
                  {isVisible ? (
                    <Image
                      src={optimizedUrl}
                      alt={file.name}
                      width={340}
                      height={450}
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

      {/* Pagination Controls */}
      {pagination && (pagination.hasPrevPage || pagination.hasNextPage) && (
        <div className="flex justify-center items-center gap-4 py-8">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={!pagination.hasPrevPage}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              pagination.hasPrevPage
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>

          <span className="text-lg font-medium">
            Page <span className="text-blue-600">{currentPage}</span>
          </span>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={!pagination.hasNextPage}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              pagination.hasNextPage
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Optional: Infinite Scroll Trigger */}
      {/* Uncomment below to enable infinite scroll */}
      {/* 
      <div ref={infiniteScrollRef} className="h-10" />
      */}
    </div>
  );
}