import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Menus from "@/components/Menus";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Gana Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex">
      {/* LEFT - Sidebar */}
      <Menus />

      {/* RIGHT - Content */}
      <div className="flex-1 bg-blue-200 overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
