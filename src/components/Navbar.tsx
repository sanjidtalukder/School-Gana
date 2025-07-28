// components/Navbar.tsx

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
      {/* SEARCH */}
      <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-40"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        {/* Message Icon */}
        <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <Image src="/message.png" alt="messages" width={18} height={18} />
        </div>

        {/* Announcement Icon with Notification Dot */}
        <div className="relative">
          <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
            <Image src="/announcement.png" alt="announcements" width={18} height={18} />
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-white"></div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="block text-sm font-medium text-gray-800 leading-none">
              Sanjid Talukder
            </span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <Image
            src="/avatar.png"
            alt="User avatar"
            width={36}
            height={36}
            className="rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
