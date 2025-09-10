"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit,
  Save,
  Sun,
  Moon,
} from "lucide-react";

const Profile = () => {
  // Demo user data
  const [user, setUser] = useState({
    name: "Sanjid Talukder",
    email: "sanjid@example.com",
    phone: "+880 1234 567890",
    location: "Dhaka, Bangladesh",
    bio: "Junior Web Developer | Tech Enthusiast | Learner 🚀",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  const [editMode, setEditMode] = useState(false);
  const [theme, setTheme] = useState("light");

  // Theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  // Form handle
const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name as keyof typeof user]: e.target.value });
};

  return (
    <div
      className={`min-h-screen p-6 flex items-center justify-center ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 transition-all">
        {/* Theme Toggle */}
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {user.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-300">{user.bio}</p>
          </div>
        </div>

        {/* Editable Form */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <User className="text-blue-500" />
            {editMode ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
              />
            ) : (
              <span className="text-gray-700 dark:text-gray-200">
                {user.name}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-blue-500" />
            {editMode ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
              />
            ) : (
              <span className="text-gray-700 dark:text-gray-200">
                {user.email}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-blue-500" />
            {editMode ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
              />
            ) : (
              <span className="text-gray-700 dark:text-gray-200">
                {user.phone}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-blue-500" />
            {editMode ? (
              <input
                type="text"
                name="location"
                value={user.location}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
              />
            ) : (
              <span className="text-gray-700 dark:text-gray-200">
                {user.location}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          {editMode ? (
            <button
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
            >
              <Save size={18} /> Save
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
            >
              <Edit size={18} /> Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
