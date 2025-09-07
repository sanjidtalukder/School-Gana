"use client";

import { assignmentsData } from "@/lib/data";
import React, { useState } from "react";


const ITEMS_PER_PAGE = 7;

const AssignmentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(assignmentsData.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssignments = assignmentsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Assignments</h1>

      <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Subject</th>
            <th className="px-4 py-2 text-left">Class</th>
            <th className="px-4 py-2 text-left">Teacher</th>
            <th className="px-4 py-2 text-left">Due Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentAssignments.map((assignment) => (
            <tr key={assignment.id}>
              <td className="px-4 py-2">{assignment.id}</td>
              <td className="px-4 py-2">{assignment.subject}</td>
              <td className="px-4 py-2">{assignment.class}</td>
              <td className="px-4 py-2">{assignment.teacher}</td>
              <td className="px-4 py-2">{assignment.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssignmentPage;
