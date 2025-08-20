"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
//import { useTheme } from "@/hooks/useTheme"; // ← 使用你的自定义 Hook

export default function ThemeSwitcher() {
  const { themeMode, theme, setThemeMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 点击外部关闭
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const OPTIONS = [
    { mode: "light" as const, label: "Light", icon: <Sun size={16} /> },
    { mode: "dark" as const, label: "Dark", icon: <Moon size={16} /> },
    { mode: "system" as const, label: "System/Auto", icon: <Monitor size={16} /> },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onDoubleClick={toggleTheme} // 小彩蛋：双击主按钮在 Light/Dark 间切换
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
      >
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
        <span className="hidden sm:inline capitalize">
          {themeMode === "system" ? "System" : theme}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 mt-2 w-48 rounded-md border border-white/10 bg-black/80 backdrop-blur p-1 text-sm shadow-lg"
          >
            {OPTIONS.map((opt) => (
              <li key={opt.mode}>
                <button
                  role="option"
                  aria-selected={themeMode === opt.mode}
                  onClick={() => {
                    setThemeMode(opt.mode);
                    setOpen(false);
                  }}
                  className={`w-full text-left flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/10 ${
                    themeMode === opt.mode ? "bg-white/10" : ""
                  }`}
                >
                  {opt.icon}
                  <span>{opt.label}</span>
                  {opt.mode === "system" && (
                    <span className="ml-auto text-xs text-white/50">
                      Now: {theme}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
