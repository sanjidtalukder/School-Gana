"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UserRole = "admin" | "teacher" | "student" | "parent";

const currentRole: UserRole = "admin"; 

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/teacher.png", label: "Teachers", href: "/list/teachers", visible: ["admin", "teacher"] },
      { icon: "/student.png", label: "Students", href: "/list/students", visible: ["admin", "teacher"] },
      { icon: "/parent.png", label: "Parents", href: "/list/parents", visible: ["admin", "teacher"] },
      { icon: "/subject.png", label: "Subjects", href: "/list/subjects", visible: ["admin"] },
      { icon: "/class.png", label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
      { icon: "/lesson.png", label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },
      { icon: "/exam.png", label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/assignment.png", label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/result.png", label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/attendance.png", label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/calendar.png", label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/message.png", label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/announcement.png", label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/setting.png", label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/logout.png", label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
];

const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg shadow hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-46  shadow-xl p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          {/* <h2 className="text-xl font-bold text-blue-600">Dashboard</h2> */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Menu Sections */}
        <div className="text-sm text-gray-800 space-y-8 p-1">
          {menuItems.map((section) => (
            <div key={section.title}>
              {/* <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wide">
                {section.title}
              </h3> */}

              <ul className="space-y-1">
                {section.items
                  .filter((item) => item.visible.includes(currentRole))
                  .map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                            ${
                              isActive
                                ? "bg-blue-100 text-blue-700 font-semibold"
                                : "hover:bg-gray-100 text-gray-700"
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <Image
                            src={item.icon}
                            alt={item.label}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Menus;
