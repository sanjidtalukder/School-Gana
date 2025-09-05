"use client";

import React, { useState } from "react";
import { lessonsData } from "@/lib/data"; 

const LessonsShit = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const lessonsPerPage = 7; 

  // Filter logic
  const filteredLessons = lessonsData.filter(
    (lesson) =>
      lesson.subject.toLowerCase().includes(search.toLowerCase()) ||
      lesson.class.toLowerCase().includes(search.toLowerCase()) ||
      lesson.teacher.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredLessons.length / lessonsPerPage);
  const indexOfLastLesson = currentPage * lessonsPerPage;
  const indexOfFirstLesson = indexOfLastLesson - lessonsPerPage;
  const currentLessons = filteredLessons.slice(
    indexOfFirstLesson,
    indexOfLastLesson
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📘 Lessons List
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search by subject, class or teacher..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/2 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {currentLessons.length > 0 ? (
              currentLessons.map((lesson) => (
                <tr
                  key={lesson.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="px-4 py-3">{lesson.id}</td>
                  <td className="px-4 py-3 font-medium">{lesson.subject}</td>
                  <td className="px-4 py-3">{lesson.class}</td>
                  <td className="px-4 py-3">{lesson.teacher}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center text-gray-500 py-4 italic"
                >
                  No lessons found 😢
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {currentLessons.length > 0 ? (
          currentLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {lesson.subject}
              </h2>
              <p className="text-gray-600">📌 Class: {lesson.class}</p>
              <p className="text-gray-600">👩‍🏫 Teacher: {lesson.teacher}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4 italic">
            No lessons found 😢
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonsShit;
