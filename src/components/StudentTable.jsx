"use client";

import React from "react";
import Image from "next/image";

const StudentTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* Table Head */}
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left">Photo</th>
            <th className="px-4 py-3 text-left">Student ID</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Grade</th>
            <th className="px-4 py-3 text-left">Class</th>
            <th className="px-4 py-3 text-left">Address</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {data.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">
                <Image
                  src={student.photo}
                  alt={student.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </td>
              <td className="px-4 py-3">{student.studentId}</td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {student.name}
              </td>
              <td className="px-4 py-3">{student.email}</td>
              <td className="px-4 py-3">{student.phone}</td>
              <td className="px-4 py-3">{student.grade}</td>
              <td className="px-4 py-3">{student.class}</td>
              <td className="px-4 py-3">{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;