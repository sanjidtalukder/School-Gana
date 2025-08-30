"use client";
import React, { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/TeacherTable";
import TableSearch from "@/components/TableSearch";
import { teachersData } from "@/lib/data"; 

const TeacherListPage = () => {
 const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 7;
 
   // ✅ total pages
   const totalPages = Math.ceil(teachersData.length / itemsPerPage);
 
   // ✅ slice data for current page
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentData = teachersData.slice(startIndex, endIndex);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex-1 m-2">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800">All Teachers</h1>

        {/* Search */}
        <TableSearch />
      </div>

      {/* List Section */}
      <div className="mt-6">
        <Table data={currentData} /> {/* pass sliced data */}
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

export default TeacherListPage;
