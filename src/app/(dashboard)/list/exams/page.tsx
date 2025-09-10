"use client";

import React, { useState } from "react";
import { examsData } from "@/lib/data";

const ITEMS_PER_PAGE = 7;

const ExamSite = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(examsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedExams = examsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        📑 Exam Schedule
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
            </tr>
          </thead>
          <tbody>
            {paginatedExams.map((exam) => (
              <tr
                key={exam.id}
                className="border-b hover:bg-blue-50 transition"
              >
                <td className="px-4 py-2">{exam.id}</td>
                <td className="px-4 py-2 font-medium">{exam.subject}</td>
                <td className="px-4 py-2">{exam.class}</td>
                <td className="px-4 py-2">{exam.teacher}</td>
                <td className="px-4 py-2">
                  {new Date(exam.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {paginatedExams.map((exam) => (
          <div
            key={exam.id}
            className="p-4 border rounded-lg shadow bg-white hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">ID: {exam.id}</p>
            <h2 className="text-lg font-semibold text-blue-700">{exam.subject}</h2>
            <p className="text-gray-700">Class: {exam.class}</p>
            <p className="text-gray-700">Teacher: {exam.teacher}</p>
            <p className="text-gray-600">
              Date: {new Date(exam.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-blue-600 text-white disabled:bg-gray-300"
        >
          Prev
        </button>
        <span className="px-3 py-1">
          Page {currentPage} of {totalPages}
        </span>
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

export default ExamSite;
