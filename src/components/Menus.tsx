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
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        aria-label="Toggle sidebar"
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg shadow hover:bg-gray-100 bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky md:top-0 top-0 left-0 h-full bg-red-200 shadow-xl p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 w-[70%] sm:w-[50%] md:w-[8%] lg:w-[16%]`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-semibold">School Gana</span>
          <button
            className="md:hidden ml-auto text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          >
            ✖
          </button>
        </div>

        {/* Menu Sections */}
        <div className="text-sm text-gray-800 space-y-4 p-1">
          {menuItems.map((section) => {
            const isExpanded = expandedSections.includes(section.title);
            return (
              <div key={section.title}>
                <button
                  className="w-full flex justify-between items-center px-2 py-1 font-bold text-gray-600 hover:text-gray-800"
                  onClick={() => toggleSection(section.title)}
                >
                  {section.title}
                  <span>{isExpanded ? "▲" : "▼"}</span>
                </button>
                {isExpanded && (
                  <ul className="space-y-1 mt-2">
                    {section.items
                      .filter((item) => item.visible.includes(currentRole))
                      .map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={`group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                                ${
                                  isActive
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-gray-100 text-gray-700"
                                }`}
                              onClick={() => {
                                setIsOpen(false);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              <div className="relative">
                                <Image
                                  src={item.icon}
                                  alt={item.label}
                                  width={20}
                                  height={20}
                                  className="object-contain"
                                />
                                {/* Tooltip on small screens */}
                                <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition md:hidden z-50 whitespace-nowrap">
                                  {item.label}
                                </span>
                              </div>
                              <span className="md:block">{item.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </div>
            );
          })}
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