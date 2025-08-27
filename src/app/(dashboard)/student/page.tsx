/*  src/pages/StudentPage.tsx  */

import Announcement from "@/components/Annuncement";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalender";
import "react-big-calendar/lib/css/react-big-calendar.css";

const StudentPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      {/* ------------------------------------------------------------------ */}
      {/*   Layout container – column on <md, row on >=md                     */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {/* ------------------------------------------------------------------ */}
        {/*   Left side – main schedule (2/3 on larger screens)                */}
        {/* ------------------------------------------------------------------ */}
        <section
          className="w-full md:w-2/3 bg-white rounded-lg shadow-sm p-6"
          role="region"
          aria-label="Student schedule"
        >
          <h1 className="text-2xl font-semibold mb-4">Schedule (4A)</h1>

          {/* The big calendar takes the full height of its parent */}
          <div className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)]">
            <BigCalendar />
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/*   Right side – auxiliary widgets (1/3 on larger screens)          */}
        {/* ------------------------------------------------------------------ */}
        <aside className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Event Calendar */}
          <section
            className="bg-white rounded-lg shadow-sm p-4"
            role="region"
            aria-label="Upcoming events"
          >
            <h2 className="text-xl font-medium mb-3">Upcoming Events</h2>
            <EventCalendar />
          </section>

          {/* Announcements */}
          <section
            className="bg-white rounded-lg shadow-sm p-4"
            role="region"
            aria-label="Announcements"
          >
            <h2 className="text-xl font-medium mb-3">Announcements</h2>
            <Announcement />
          </section>
        </aside>
      </div>
    </main>
  );
};

export default StudentPage;
