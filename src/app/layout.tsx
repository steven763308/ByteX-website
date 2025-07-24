// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar"; // ✅ 导航栏
import Footer from "@/components/Footer"; // ✅ Footer（可选）

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteX Technology",
  description: "Futuristic Web3 Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-white`}
      >
        <Navbar /> {/* ✅ 全站通用导航栏 */}
        <div className="pt-20">{children}</div> {/* 留出导航栏高度 */}
        <Footer /> {/* ✅ 可选底部（需要你先建好 Footer.tsx） */}
      </body>
    </html>
  );
}
