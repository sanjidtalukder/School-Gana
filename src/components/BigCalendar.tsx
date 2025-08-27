"use client"
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";

const localizer = momentLocalizer(moment);

type CalendarView = "work_week" | "day" | "month" | "week" | "agenda";

const BigCalendar = () => {
  const [view, setView] = useState<CalendarView>("work_week");

  const handleViewChange = (selectedView: CalendarView) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleViewChange}
      style={{ height: 500 }}
      min= {new Date(2025, 7, 1, 8, 0)} // 8:00 AM
      max= {new Date(2025, 7, 1, 18, 0)} // 6:00 PM
    />
  );
};

export default BigCalendar;