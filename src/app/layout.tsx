// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteX Technology",
  description: "Futuristic Web3 Builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-white
                    min-h-[100dvh] overflow-x-hidden`}
      >
        {/* 整页列布局，确保 Footer 贴底且全页只出现一个滚动条 */}
        <div className="min-h-[100dvh] flex flex-col">
          {/* Navbar 固定在顶部（或在组件里 sticky） */}
          <Navbar />

          {/* 如果 Navbar 是固定高度 ~64px，就给 main 让位 */}
          <main className="flex-1 pt-16 relative">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
