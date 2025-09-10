"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


  

const Homepage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);
 

  useEffect(() => {
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

const gallery = [
  { src: "https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q=", alt: "School Campus" },
  { src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&auto=format&fit=crop&q=80", alt: "Classroom" },
  { src: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=675%2Cq=85%2Csharpen=1%2Cw=1200/wp-content/uploads/national-school-picture-day-e1722374086322.jpg", alt: "Playground" },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=80", alt: "Library" },
  { src: "https://unitedtrust.org.bd/wp-content/uploads/2022/11/UPSCJ-2.jpg", alt: "Science Lab" },
  { src: "https://ess.edu.bd/wp-content/uploads/2025/08/02-5-scaled-e1755781900764.jpg", alt: "Computer Lab" },
  { src: "https://media.licdn.com/dms/image/v2/D4D12AQFz7n-GsHJ_9w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1656479767937?e=2147483647&v=beta&t=WDzb5b20f9AjdB1ADvwwXPtAvrTcbi1d3PyIaT1geQQ", alt: "Sports Field" },
  { src: "https://assets.reflections.live/1688296250502-ljlbrgmx.png", alt: "Sports Field" },
];


  const activities = [
    { title: "Sports", desc: "Football, cricket, basketball and more", icon: "⚽" },
    { title: "Music", desc: "Choir, band, and individual lessons", icon: "🎵" },
    { title: "Arts", desc: "Painting, sculpture, and crafts", icon: "🎨" },
    { title: "Clubs", desc: "Science, debate, coding, drama", icon: "🤝" },
  ];

  const testimonials = [
    { name: "Ayesha", role: "Student", feedback: "This school gave me confidence and great friends.", img: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Rahim", role: "Parent", feedback: "Teachers are supportive and truly care about the kids.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Karim", role: "Student", feedback: "Amazing playground and activities every week!", img: "https://randomuser.me/api/portraits/men/67.jpg" },
  ];

  const events = [
    { date: "Sep 15, 2025", title: "Annual Sports Day", desc: "Join us for fun and competition on the field." },
    { date: "Oct 1, 2025", title: "Science Fair", desc: "Students showcase their innovative projects." },
    { date: "Nov 20, 2025", title: "Music Festival", desc: "Enjoy performances from talented students." },
  ];

  const faqs = [
    { q: "How do I enroll my child?", a: "You can enroll by visiting the admission office or applying online." },
    { q: "Does the school provide transport?", a: "Yes, safe and reliable bus services are available." },
    { q: "Are extracurriculars mandatory?", a: "Not mandatory, but we encourage every student to join at least one." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  

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

      {/* Hero */}
       <section className="relative py-20 px-6 text-center overflow-hidden bg-gradient-to-r from-blue-100 via-white to-blue-100">
      {/* Animated floating shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
      <div className="absolute top-10 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000 opacity-50"></div>
      <div className="absolute bottom-0 left-20 w-56 h-56 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-6000 opacity-60"></div>

      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">EduPortal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Comprehensive school management system simplifying tasks, enhancing communication, and improving outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/admin">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="px-10 py-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:-translate-y-2 hover:scale-105 flex items-center gap-3 font-semibold"
            >
              Get Started {isHovered ? "🚀" : "✨"}
            </button>
          </Link>
        </div>
      </div>
    </section>

      {/* Gallery */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Campus Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow hover:scale-105 transition">
                <Image src={g.src} alt={g.alt} width={400} height={300} className="object-cover w-full h-40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Student Life</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((a, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex gap-4">
                <div className="text-3xl">{a.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{a.title}</h3>
                  <p className="text-gray-600">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <Image src={t.img} alt={t.name} width={80} height={80} className="rounded-full mx-auto mb-4" />
                <p className="text-gray-600 italic">&quot;{t.feedback}&quot;</p>
                <h3 className="mt-4 font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">News & Events</h2>
          <div className="space-y-6">
            {events.map((e, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <p className="text-sm text-gray-500">{e.date}</p>
                <p className="text-gray-600 mt-2">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-lg shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-4 font-medium flex justify-between items-center"
                >
                  {f.q}
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="p-4 text-gray-600">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-800 text-white text-center">
        <p>© {currentTime.getFullYear()} EduPortal by School Gana. All rights reserved.</p>
        <p className="mt-2 text-gray-400 text-sm">Current time: {currentTime.toLocaleTimeString()}</p>
      </footer>
    </div>
  );
};

export default Homepage;
