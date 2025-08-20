// hooks/useTheme.ts
"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export type Theme = "light" | "dark";
export type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "themeMode";
const useIsoEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyHtmlClass(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function useTheme() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [theme, setTheme] = useState<Theme>(getSystemTheme());

  // init
  useIsoEffect(() => {
    try {
      const stored = (localStorage.getItem(STORAGE_KEY) as ThemeMode) || "system";
      setThemeMode(stored);
    } catch {}
  }, []);

  // compute + apply
  useEffect(() => {
    let mql: MediaQueryList | null = null;

    const apply = (t: Theme) => {
      setTheme(t);
      applyHtmlClass(t);
    };

    if (themeMode === "system") {
      const sys = getSystemTheme();
      apply(sys);
      mql = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = () => apply(mql!.matches ? "dark" : "light");
      mql.addEventListener("change", onChange);
      return () => mql?.removeEventListener("change", onChange);
    } else {
      apply(themeMode);
    }
  }, [themeMode]);

  // persist + cross-tab sync
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, themeMode);
    } catch {}
  }, [themeMode]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) setThemeMode(e.newValue as ThemeMode);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => setThemeMode((p) => (p === "dark" ? "light" : "dark"));

  return { themeMode, theme, setThemeMode, toggleTheme };
}
