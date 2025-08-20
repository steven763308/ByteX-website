// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"            // ✅ 在 <html> 注入 class（需要 tailwind: darkMode: 'class'）
      defaultTheme="system"        // ✅ 默认跟随系统
      enableSystem
      disableTransitionOnChange    // ✅ 切换时不闪烁
    >
      {children}
    </ThemeProvider>
  );
}
