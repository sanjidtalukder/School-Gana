"use client";
import React from "react";


type PaginationProps = {
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void; 
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) endPage = Math.min(totalPages, maxPagesToShow);
    if (currentPage >= totalPages - 2) startPage = Math.max(1, totalPages - maxPagesToShow + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center mt-6 space-x-2">
      {/* Previous Button */}
      <button
        className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {/* First Page */}
      {pages[0] > 1 && (
        <>
          <button
            className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-100"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {pages[0] > 2 && <span className="px-2 text-gray-400">...</span>}
        </>
      )}

      {/* Middle Pages */}
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-lg border ${
            page === currentPage
              ? "bg-pink-300 text-white hover:bg-pink-400"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="px-2 text-gray-400">...</span>
          )}
          <button
            className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-100"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
