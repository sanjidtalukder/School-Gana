"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Students", value: "2,500+", icon: "👨‍🎓" },
    { label: "Teachers", value: "150+", icon: "👩‍🏫" },
    { label: "Classes", value: "80+", icon: "🏫" },
    { label: "Satisfaction", value: "98%", icon: "⭐" },
  ];

  const features = [
    { title: "Student Management", desc: "Track and manage student records efficiently", icon: "📊" },
    { title: "Attendance System", desc: "Automated attendance with real-time tracking", icon: "✅" },
    { title: "Gradebook", desc: "Comprehensive grading system with analytics", icon: "📝" },
    { title: "Communication", desc: "Seamless communication between staff and parents", icon: "💬" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          <span className="text-blue-600">🏫</span> School Gana
        </h1>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="/admin">
              <span className="text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer flex items-center gap-1">
                <span className="text-lg">🧭</span> Go to Dashboard
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 mb-4 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            🎓 Transforming Education Management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">EduPortal</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The comprehensive school management system that simplifies administrative tasks, 
            enhances communication, and improves educational outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/admin">
              <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                Get Started {isHovered ? '🚀' : '✨'}
              </button>
            </Link>
            <button className="px-8 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Why Schools Love Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to manage your educational institution efficiently
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition flex items-start gap-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your School Management?</h2>
          <p className="mb-8 opacity-90">
            Join thousands of schools already using EduPortal to streamline their operations.
          </p>
          <Link href="/admin">
            <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition">
              Start Your Journey Today
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-800 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <p>© {currentTime.getFullYear()} EduPortal by School Gana. All rights reserved.</p>
          <p className="mt-2 text-gray-400 text-sm">
            Current time: {currentTime.toLocaleTimeString()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
