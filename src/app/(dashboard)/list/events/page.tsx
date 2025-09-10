"use client";

import React, { useState } from "react";
import { announcementsData } from "@/lib/data";

const ITEMS_PER_PAGE = 7; 

const EventPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(announcementsData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = announcementsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  interface Announcement {
    id: number;
    title: string;
    class: string;
    date: string;
  }

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Announcements</h1>

      {/* Table for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.class}</td>
                <td className="px-4 py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="md:hidden space-y-4">
        {paginatedData.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">Class: {item.class}</p>
            <p className="text-sm text-gray-500">Date: {item.date}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-3 py-1 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EventPage;
