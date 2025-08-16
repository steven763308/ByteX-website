"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // 避免 SSR/CSR 初次不一致
    return (
      <button
        aria-label="Toggle theme"
        className={`w-10 h-10 grid place-items-center rounded-xl border border-white/10 ${className}`}
      />
    );
  }

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`w-10 h-10 grid place-items-center rounded-xl border transition
        border-black/10 bg-white/80 hover:bg-white dark:border-white/10 dark:bg-black/30 dark:hover:bg-black/40
        backdrop-blur-sm ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
