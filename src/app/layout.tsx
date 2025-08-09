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
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-white`}>
        {/* 让整页用列布局，Footer 能贴底 */}
        <div className="min-h-dvh flex flex-col">
          {/* 建议 Navbar 自己内部做 sticky：sticky top-0 z-50 + 背景/毛玻璃 */}
          <Navbar />

          {/* 主体占满剩余高度；不要再用 pt-5 硬撑高度 */}
          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
