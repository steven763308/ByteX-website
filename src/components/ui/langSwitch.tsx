"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Lang = "en" | "zh" | "ms";

const LANG_OPTIONS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ms", label: "Bahasa Melayu", flag: "🇲🇾" },
];

export default function LangSwitcher() {
  const [lang, setLang] = useState<Lang>("en");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // init
  useEffect(() => {
    const stored = (localStorage.getItem("lang") as Lang) || null;
    if (stored) setLang(stored);
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
    window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }, [lang]);

  // 点击外部关闭
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
      >
        <Globe size={16} />
        <span className="uppercase">{lang}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 mt-2 w-44 rounded-md border border-white/10 bg-black/80 backdrop-blur p-1 text-sm shadow-lg"
          >
            {LANG_OPTIONS.map((opt) => (
              <li key={opt.code}>
                <button
                  role="option"
                  aria-selected={lang === opt.code}
                  onClick={() => {
                    setLang(opt.code);
                    setOpen(false);
                  }}
                  className={`w-full text-left flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/10 ${
                    lang === opt.code ? "bg-white/10" : ""
                  }`}
                >
                  <span className="text-base">{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
