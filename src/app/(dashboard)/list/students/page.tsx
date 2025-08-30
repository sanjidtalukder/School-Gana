"use client";
import React, { useState } from "react";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { studentsData } from "@/lib/data";
import StudentTable from "@/components/StudentTable"; 

const StudentListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // ✅ total pages
  const totalPages = Math.ceil(studentsData.length / itemsPerPage);

  // ✅ slice data for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = studentsData.slice(startIndex, endIndex);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex-1 m-2">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800">All Students</h1>

        {/* Search */}
        <TableSearch />
      </div>

      {/* List Section */}
      <div className="mt-6">
        {/* ✅ Pass paginated studentsData */}
        <StudentTable data={currentData} />
      </div>

      {/* Pagination Section */}
      <div className="mt-4 flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default StudentListPage;
