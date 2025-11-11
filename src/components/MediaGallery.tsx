// components/MediaGallery.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { RefreshCw, ChevronLeft, ChevronRight, Loader2, Download } from 'lucide-react';

interface MediaFile {
  key: string;
  name: string;
  size: number;
  lastModified: string;
  url: string;
  type: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextCursor: string | null;
}

export default function MediaGallery() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cursor, setCursor] = useState<string | null>(null);

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
        {files.slice(0, 20).map(file => (
          <div
            key={file.key}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-3">
              <div className="relative max-h-[150px] overflow-hidden rounded-md mb-3">
                <Image
                  src={file.url}
                  alt={file.name}
                  width={300}
                  height={150}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAA"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 truncate flex-1 mr-2" title={file.name}>
                  {file.name}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const link = document.createElement('a');
                    link.href = file.url;
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
        ))}
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