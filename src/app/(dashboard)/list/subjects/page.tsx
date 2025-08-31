"use client";

import React, { useState } from "react";
import { subjectsData } from "@/lib/data";
import SubjectTable from "@/components/SubjectTable";

// Define Subject type
type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const SubjectListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;

  // Pagination logic
  const totalPages = Math.ceil(subjectsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData: Subject[] = subjectsData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        📘 Subjects List
      </h1>

      {/* Subject Table */}
      <SubjectTable data={currentData} />

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition"
        >
          ⬅ Prev
        </button>

        <span className="font-medium text-gray-700">
          Page <span className="font-bold">{currentPage}</span> of{" "}
          <span className="font-bold">{totalPages}</span>
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default SubjectListPage;
