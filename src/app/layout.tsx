// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import CustomCursor from "@/components/ui/CustomCursor";
import Providers from "./providers";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteX Technology",
  description: "Futuristic Websites and Systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning  // ✅ 避免主题类名水合警告
    >
      {/* 注意：dark 模式类名由 next-themes 注入到 <html> 上 */}
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-black antialiased dark:bg-black dark:text-white`}>
        <Providers> {/* ✅ 用 Provider 包裹全局 UI */}
          <Navbar />
          <div className="pt-14">{children}</div>
          <CustomCursor />
        </Providers>
      </body>
    </html>
  );
}
