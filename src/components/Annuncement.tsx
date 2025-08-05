import React from 'react';

type AnnouncementItem = {
  id: number;
  title: string;
  description?: string;
  date?: string;
};

const announcements: AnnouncementItem[] = [
  {
    id: 1,
    title: "🎉 New feature launched!",
    description: "Check the calendar to book events with time.",
    date: "Aug 5, 2025",
  },
  {
    id: 2,
    title: "📅 Community Meetup",
    description: "Join us on August 20th at 4:00 PM.",
    date: "Aug 4, 2025",
  },
  {
    id: 3,
    title: "📢 Important Update",
    description: "System maintenance on Aug 7 from 1:00 AM to 3:00 AM.",
    date: "Aug 3, 2025",
  },
];

const Announcement = () => {
  return (
    <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-sm font-semibold text-gray-800 flex items-center gap-1">
          📢 Announcements
        </h1>
        <button className="text-xs text-blue-500 hover:underline">
          View All
        </button>
      </div>

      {/* Announcement list */}
      <ul className="space-y-3">
        {announcements.map((item) => (
          <li
            key={item.id}
            className="bg-gray-50 p-3 rounded-md border border-gray-100 hover:shadow-sm transition"
          >
            <p className="text-sm font-medium text-gray-800">{item.title}</p>
            {item.description && (
              <p className="text-xs text-gray-600 mt-1">{item.description}</p>
            )}
            {item.date && (
              <p className="text-[11px] text-gray-400 mt-1">{item.date}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcement;
