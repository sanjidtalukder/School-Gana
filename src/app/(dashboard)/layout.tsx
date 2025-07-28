import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Menus from "@/components/Menus";
import Navbar from "@/components/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="h-full flex">

    {/* LEFT */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] bg-red-200 p-4">
     <Link href="/" className="flex items-center justify-center lg:justyfy-start gap-2">
  <Image src="/logo.png" alt="logo" width={32} height={32} />
  <span className="hidden lg:block">School Gana</span>
</Link>
<Menus/>

    </div>

      {/* Right */}
    <div className="w-[86%] md:w-[92%] lg:w-[86%] bg-blue-200 overflow-scroll">
      <Navbar></Navbar>
      {children}
      </div>
    </div>
  );
}
