// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import CustomCursor from "@/components/ui/CustomCursor";
import Providers from "./providers";
//import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteX Technology",
  description: "Futuristic Websites and Systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        <Navbar />
        {/* 留出导航高度 */}
        <div className="pt-14">{children}</div>
        <CustomCursor />
      </body>
    </html>
  );
}
