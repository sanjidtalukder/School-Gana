"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Event = {
  id: number;
  title: string;
  date: string;
  time?: string;
};

const dummyEvents: Event[] = [
  { id: 1, title: "Workshop on React", date: "2025-08-10", time: "01:00 AM" },
  { id: 2, title: "Interview at Soft Bance Company", date: "2025-08-10", time: "09:00 PM" },
  { id: 3, title: "Tech Talk: AI & ML", date: "2025-08-15", time: "11:00 AM" },
  { id: 4, title: "Community Meetup", date: "2025-08-20", time: "04:00 PM" },
];

// Format date as YYYY-MM-DD
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-CA');
};

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [bookedEvents, setBookedEvents] = useState<Event[]>([]);

  const selectedDate = value instanceof Date ? formatDate(value) : null;
  const eventsToday = dummyEvents.filter(event => event.date === selectedDate);

  const handleBooking = (event: Event) => {
    const alreadyBooked = bookedEvents.some(e => e.id === event.id);
    if (!alreadyBooked) {
      setBookedEvents(prev => [...prev, event]);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          📅 Event Booking Calendar
        </h2>

        <Calendar
          onChange={onChange}
          value={value}
          className="react-calendar border-none shadow-none text-sm text-blue-800"
        />

        {selectedDate && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Events on <span className="text-indigo-600">{selectedDate}</span>:
            </h3>

            {eventsToday.length > 0 ? (
              <ul className="space-y-3">
                {eventsToday.map(event => (
                  <li
                    key={event.id}
                    className="p-4 bg-white border border-gray-200 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition"
                  >
                    <div>
                      <p className="text-base font-medium text-gray-800">{event.title}</p>
                      <p className="text-sm text-gray-500">🕒 {event.time}</p>
                    </div>
                    <button
                      onClick={() => handleBooking(event)}
                      className="px-4 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition"
                    >
                      Book
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600">No events scheduled on this day.</p>
            )}
          </div>
        )}

        {bookedEvents.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Your Booked Events:</h3>
            <ul className="space-y-2">
              {bookedEvents.map(event => (
                <li
                  key={event.id}
                  className="p-3 bg-green-100 border border-green-300 rounded-md shadow-sm"
                >
                  <span className="block text-gray-800 font-medium">{event.title}</span>
                  <span className="text-sm text-gray-700">
                    📅 {event.date} | 🕒 {event.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
