// hooks/useLang.ts
"use client";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";

export type Lang = "en" | "zh" | "ms";

const STORAGE_KEY = "lang";
const FALLBACK: Lang = "en";

const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function useLang() {
  const [lang, setLang] = useState<Lang>(FALLBACK);

  // 初始化：从本地读取（无则默认 en）
  useIsomorphicEffect(() => {
    try {
      const stored = (localStorage.getItem(STORAGE_KEY) as Lang) || FALLBACK;
      setLang(stored);
    } catch {}
  }, []);

  // 持久化 + 事件广播
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    // 广播给全局（如需要其他地方监听）
    window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }, [lang]);

  // 跨标签页同步
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setLang(e.newValue as Lang);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // 轮换语言（可用于一个按钮快速切换）
  const cycleLang = () => {
    setLang((prev) => (prev === "en" ? "zh" : prev === "zh" ? "ms" : "en"));
  };

  /**
   * 简易翻译函数：
   * - 支持传对象：{ en: "...", zh: "...", ms: "..." }
   * - 或传字典：{ key: { en: "...", zh: "...", ms: "..." } }
   * 用法：
   *   t({ en: "Home", zh: "首页", ms: "Laman Utama" })
   *   t(dict, "home")
   */
  function t<T extends Record<Lang, string>>(obj: T): string;
  function t<T extends Record<string, Record<Lang, string>>>(dict: T, key: keyof T): string;
  function t(a: any, b?: any) {
    if (b === undefined) {
      // t({ en: "...", zh: "...", ms: "..." })
      const obj = a as Record<Lang, string>;
      return obj[lang] ?? obj[FALLBACK] ?? "";
    }
    // t(dict, "key")
    const dict = a as Record<string, Record<Lang, string>>;
    const key = String(b);
    const entry = dict[key];
    if (!entry) return "";
    return entry[lang] ?? entry[FALLBACK] ?? "";
  }

  // 国旗 emoji（可选）
  const flag = useMemo(() => {
    if (lang === "zh") return "🇨🇳"; // 也可换 🇲🇾 按你的偏好
    if (lang === "ms") return "🇲🇾";
    return "🇺🇸";
  }, [lang]);

  return { lang, setLang, cycleLang, t, flag };
}
