"use client";
import React from "react";

const ParentTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* Table Head */}
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Students</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Address</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {data.map((parent) => (
            <tr key={parent.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{parent.id}</td>
              <td className="px-4 py-3">{parent.name}</td>
              <td className="px-4 py-3">
                {parent.students && parent.students.length > 0
                  ? parent.students.join(", ")
                  : "—"}
              </td>
              <td className="px-4 py-3">{parent.email}</td>
              <td className="px-4 py-3">{parent.phone}</td>
              <td className="px-4 py-3">{parent.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParentTable;
