"use client";

import { teachersData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-md">
        {/* Table Head */}
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Photo</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold hidden md:table-cell">
              Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Subjects</th>
            <th className="px-4 py-3 text-left text-sm font-semibold hidden md:table-cell">
              Classes
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold hidden lg:table-cell">
              Phone
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold hidden lg:table-cell">
              Address
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {teachersData.map((teacher, index) => (
            <tr
              key={teacher.id}
              className={`transition duration-200 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50`}
            >
              {/* Photo */}
              <td className="px-4 py-3">
                <Image
                  src={teachersData.photo}
                  alt={teacher.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400 shadow-sm"
                />
              </td>

              {/* Name */}
              <td className="px-4 py-3 text-sm font-medium text-gray-900">
                {teacher.name}
              </td>

              {/* Email */}
              <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">
                {teacher.email}
              </td>

              {/* Subjects */}
              <td className="px-4 py-3 text-sm text-indigo-600 font-medium">
                {teacher.subjects.join(", ")}
              </td>

              {/* Classes */}
              <td className="px-4 py-3 text-sm text-gray-700 hidden md:table-cell">
                {teacher.classes.join(", ")}
              </td>

              {/* Phone */}
              <td className="px-4 py-3 text-sm text-gray-700 hidden lg:table-cell">
                {teacher.phone}
              </td>

              {/* Address */}
              <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">
                {teacher.address}
              </td>

              {/* Actions */}
              <td className="px-4 py-3 text-center space-x-2">
                <button className="px-3 py-1 text-sm rounded-lg bg-green-500 text-white hover:bg-green-600 transition shadow">
                  View
                </button>
                <button className="px-3 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition shadow">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
