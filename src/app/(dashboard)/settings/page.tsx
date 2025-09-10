"use client";

import React, { useState } from "react";

const SettingPage = () => {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">Settings</h1>

      {/* Profile Settings */}
      <section className="mb-8 bg-white shadow rounded-lg p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Profile Settings</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-gray-600">Show Profile Publicly</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={profileVisibility}
              onChange={() => setProfileVisibility(!profileVisibility)}
            />
            <div className={`w-10 h-6 bg-gray-300 rounded-full p-1 transition ${profileVisibility ? "bg-green-400" : ""}`}>
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  profileVisibility ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="mb-8 bg-white shadow rounded-lg p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Notifications</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-gray-600">Email Notifications</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
            <div className={`w-10 h-6 bg-gray-300 rounded-full p-1 transition ${emailNotifications ? "bg-green-400" : ""}`}>
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  emailNotifications ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>
        </div>
      </section>

      {/* Language Settings */}
      <section className="mb-8 bg-white shadow rounded-lg p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Language</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
          <option value="Spanish">Spanish</option>
          <option value="Arabic">Arabic</option>
        </select>
      </section>

      {/* Save Button */}
      <div className="text-right">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => alert("Settings saved (demo)!")}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingPage;