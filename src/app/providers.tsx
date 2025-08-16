"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"          // ✅ 在 <html> 上加 class
      defaultTheme="system"      // ✅ 默认跟随系统
      enableSystem
      disableTransitionOnChange  // ✅ 切换时不抖动
    >
      {children}
    </ThemeProvider>
  );
}
