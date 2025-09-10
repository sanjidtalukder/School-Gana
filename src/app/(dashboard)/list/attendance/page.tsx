"use client";

import { eventsData } from "@/lib/data";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 5;

const AttendancePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(eventsData.length / ITEMS_PER_PAGE);

  interface EventItem {
    id: number | string;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
  }

  const handlePageChange = (page: number): void => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = eventsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Events Attendance</h1>

      {/* Table Card */}
      <div className="bg-white shadow-lg rounded-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left font-medium">ID</th>
              <th className="py-3 px-6 text-left font-medium">Title</th>
              <th className="py-3 px-6 text-left font-medium">Class</th>
              <th className="py-3 px-6 text-left font-medium">Date</th>
              <th className="py-3 px-6 text-left font-medium">Start Time</th>
              <th className="py-3 px-6 text-left font-medium">End Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((event) => (
              <tr
                key={event.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-3 px-6">{event.id}</td>
                <td className="py-3 px-6 font-medium text-gray-700">{event.title}</td>
                <td className="py-3 px-6">{event.class}</td>
                <td className="py-3 px-6">{event.date}</td>
                <td className="py-3 px-6">{event.startTime}</td>
                <td className="py-3 px-6">{event.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 flex-wrap gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full border font-medium ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed text-gray-500"
              : "bg-white hover:bg-blue-500 hover:text-white transition"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => handlePageChange(idx + 1)}
            className={`px-4 py-2 rounded-full border font-medium ${
              currentPage === idx + 1
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-blue-500 hover:text-white transition"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full border font-medium ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed text-gray-500"
              : "bg-white hover:bg-blue-500 hover:text-white transition"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AttendancePage;
