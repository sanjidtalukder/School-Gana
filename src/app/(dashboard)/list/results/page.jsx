"use client";

import { resultsData } from "@/lib/data";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 7;

const ResultSite = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(resultsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResult = resultsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        📑 Show The Result
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto shadow-lg rounded-2xl">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">Teacher</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {paginatedResult.map((result) => (
              <tr
                key={result.id}
                className="border-b hover:bg-blue-50 transition"
              >
                <td className="px-4 py-2">{result.id}</td>
                <td className="px-4 py-2 font-medium">{result.subject}</td>
                <td className="px-4 py-2">{result.class}</td>
                <td className="px-4 py-2">{result.teacher}</td>
                <td className="px-4 py-2">{new Date(result.date).toLocaleDateString()}</td>
                <td className="px-4 py-2">{result.type}</td>
                <td className="px-4 py-2">{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {paginatedResult.map((result) => (
          <div
            key={result.id}
            className="p-4 border rounded-lg shadow bg-white hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">ID: {result.id}</p>
            <h2 className="text-lg font-semibold text-blue-700">{result.subject}</h2>
            <p className="text-gray-700">Class: {result.class}</p>
            <p className="text-gray-700">Teacher: {result.teacher}</p>
            <p className="text-gray-600">
              Date: {new Date(result.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">Type: {result.type}</p>
            <p className="text-gray-700">Score: {result.score}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-blue-600 text-white disabled:bg-gray-300"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage ? "bg-blue-700 text-white" : "bg-blue-200 text-blue-700"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-blue-600 text-white disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ResultSite;
