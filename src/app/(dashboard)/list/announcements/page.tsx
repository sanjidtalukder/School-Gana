"use client";

import React from "react";
import { motion } from "framer-motion";

const demoAnnouncements = [
  {
    id: 1,
    title: "Exam Schedule Released",
    description:
      "The final exam schedule for Fall 2025 has been published. Please check the notice board or website.",
    date: "Sep 5, 2025",
  },
  {
    id: 2,
    title: "Holiday Notice",
    description:
      "The campus will remain closed on Sep 10th due to National Holiday.",
    date: "Sep 3, 2025",
  },
  {
    id: 3,
    title: "Library Timing Update",
    description:
      "From this week, the library will be open until 9 PM on weekdays.",
    date: "Sep 1, 2025",
  },
  {
    id: 4,
    title: "Workshop on AI",
    description:
      "A special workshop on Artificial Intelligence will be held on Sep 15th. Register at the department office.",
    date: "Aug 30, 2025",
  },
  {
    id: 5,
    title: "Sports Week Announcement",
    description:
      "Annual Sports Week will be held from Oct 1st - Oct 7th. Students are encouraged to participate.",
    date: "Aug 25, 2025",
  },
  {
    id: 6,
    title: "New Canteen Menu",
    description:
      "The canteen has introduced a new healthy menu for students. Check it out starting this week.",
    date: "Aug 20, 2025",
  },
  {
    id: 7,
    title: "Internship Fair",
    description:
      "An internship fair with top companies will be organized on Sep 20th at the auditorium.",
    date: "Aug 15, 2025",
  },
  {
    id: 8,
    title: "New Course Added",
    description:
      "A new elective course on Blockchain Technology has been introduced for CSE students.",
    date: "Aug 10, 2025",
  },
];

const AnnouncementsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">📢 Announcements</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoAnnouncements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="p-5 bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {announcement.title}
              </h2>
              <p className="text-gray-600 text-sm">{announcement.description}</p>
            </div>
            <div className="mt-4 text-right">
              <span className="text-xs font-medium text-gray-500">
                {announcement.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
