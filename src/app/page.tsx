"use client";

import Link from "next/link";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">School Gana</h1>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="/admin">
              <span className="text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer">
                🧭 Go to Dashboard
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Welcome to EduPortal
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Manage students, staff, and attendance all in one place. Click the navigation above to explore the admin dashboard.
        </p>

        {/* CTA Button (Optional) */}
        <div className="mt-6">
          <Link href="/admin">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Open Dashboard
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
