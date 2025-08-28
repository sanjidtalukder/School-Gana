import Announcement from "@/components/Annuncement"
import BigCalendar from "@/components/BigCalendar"
import "react-big-calendar/lib/css/react-big-calendar.css"

const TeacherPage = () => {
  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <div className="flex flex-col xl:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full xl:w-2/3">
          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 h-full flex flex-col">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              Schedule
            </h1>
            <div className="flex-1 overflow-hidden">
              <BigCalendar />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full xl:w-1/3 flex flex-col gap-6">
          {/* Event Calendar */}
          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
              Upcoming Events
            </h2>
            {/* <EventCalendar /> */}
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
              Announcements
            </h2>
            <Announcement />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherPage
