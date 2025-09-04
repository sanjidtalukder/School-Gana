"use client";

import { classesData } from "@/lib/data";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 5;

const ClassPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(classesData.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = classesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📚 Classes List
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="border px-4 py-3 text-sm font-semibold text-gray-700">ID</th>
              <th className="border px-4 py-3 text-sm font-semibold text-gray-700">Class Name</th>
              <th className="border px-4 py-3 text-sm font-semibold text-gray-700">Grade</th>
              <th className="border px-4 py-3 text-sm font-semibold text-gray-700">Capacity</th>
              <th className="border px-4 py-3 text-sm font-semibold text-gray-700">Supervisor</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((cls, index) => (
              <tr
                key={cls.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition`}
              >
                <td className="border px-4 py-3 text-center">{cls.id}</td>
                <td className="border px-4 py-3 text-center font-medium text-gray-800">
                  {cls.name}
                </td>
                <td className="border px-4 py-3 text-center">{cls.grade}</td>
                <td className="border px-4 py-3 text-center">{cls.capacity}</td>
                <td className="border px-4 py-3">{cls.supervisor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {currentData.map((cls) => (
          <div
            key={cls.id}
            className="border border-gray-300 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {cls.name} (Grade {cls.grade})
            </h2>
            <p className="text-sm text-gray-600">🆔 ID: {cls.id}</p>
            <p className="text-sm text-gray-600">👥 Capacity: {cls.capacity}</p>
            <p className="text-sm text-gray-600">👨‍🏫 Supervisor: {cls.supervisor}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          ⬅ Prev
        </button>
        <span className="text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default ClassPage;
