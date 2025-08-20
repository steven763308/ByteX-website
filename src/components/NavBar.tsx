"use client";

import { useEffect, useState, useId } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LangSwitcher from "@/components/ui/langSwitch";
import ThemeSwitcher from "@/components/ui/themeSwitch";

const navItems = [
  { href: "/", label: { en: "Home", zh: "首页" } },
  { href: "/about", label: { en: "About Us", zh: "关于我们" } },
  { href: "/services", label: { en: "Services", zh: "服务" } },
  { href: "/portfolio", label: { en: "Portfolio", zh: "作品" } },
  { href: "/contact", label: { en: "Contact Us", zh: "联系我们" } },
];

// 读取系统 prefers-color-scheme
function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // 语言 zh / en
  const [lang, setLang] = useState<"en" | "zh">("en");
  // 主题 dark / light
  const [theme, setTheme] = useState<"light" | "dark">(getSystemTheme());

  //Right bottom Home Button
  const [showTop, setShowTop] = useState(false);

  // 初始化：从 localStorage 读语言与主题
  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as "en" | "zh") || null;
    const storedTheme = (localStorage.getItem("theme") as "light" | "dark") || null;
    if (storedLang) setLang(storedLang);
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // 应用主题到 <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 语言变化：存储并广播
  useEffect(() => {
    localStorage.setItem("lang", lang);
    window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }, [lang]);

  // 打开菜单时禁止页面滚动 + Esc 关闭
  useEffect(() => {
    const root = document.documentElement;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      root.classList.add("overflow-hidden");
      window.addEventListener("keydown", onKey);
    } else {
      root.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    }
    return () => {
      root.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  //monitor scrolling, if yes display right bottom home button
  useEffect(()=>{
    const onScroll = () => setShowTop(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return() => window.removeEventListener("scroll", onScroll);
  }, []);

  // 切换语言
  const toggleLang = () => setLang((p) => (p === "en" ? "zh" : "en"));
  // 切换主题
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  //Scroll back to top
  const scrollToTop = () => window.scrollTo({top:0, behavior:"smooth"});

  // 顶栏右侧按钮样式
  const topBtn =
    "inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-white/90 hover:text-white hover:bg-white/10 transition";

  return (
    <>
      {/* 顶部导航条：在菜单打开时隐藏 */}
      <AnimatePresence initial={false}>
        {!open && (
          <motion.header
            key="navbar"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed inset-x-0 top-0 z-50 bg-transparent border-none"
          >
            <nav className="flex h-14 w-full items-center justify-between px-6">
              {/* 左：Logo */}
              <Link
                href="/"
                className="text-lg font-semibold tracking-wide text-white hover:opacity-80"
                onClick={() => setOpen(false)}
              >
                ByteX
              </Link>

              {/* 右：语言 & 主题 & 汉堡 */}
              <div className="flex items-center gap-1">
                <LangSwitcher />
                <ThemeSwitcher />

                <button
                  aria-controls={menuId}
                  aria-expanded={open}
                  aria-label={open ? "Close menu" : "Open menu"}
                  onClick={() => setOpen((v) => !v)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-white"
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* 全屏菜单 */}
      <AnimatePresence>
        {open && (
          <motion.aside
            id={menuId}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 210, damping: 26 }}
            className="fixed inset-0 z-40 flex h-screen w-screen flex-col bg-neutral-100/95 backdrop-blur dark:bg-neutral-900/95"
            role="dialog"
            aria-modal="true"
            onMouseDown={(e) => {
              if (e.currentTarget === e.target) setOpen(false);
            }}
          >
            {/* 顶部栏（LOGO + 快捷切换 + 关闭） */}
            <div className="flex h-14 items-center justify-between border-b border-black/10 px-4 dark:border-white/10">
              <span className="glow-text text-base font-semibold tracking-wide text-black/80 dark:text-white [--glow:rgba(99,102,241,.6)] dark:[--glow:rgba(168,85,247,.6)] hover:[--glow:rgba(99,102,241,1)] dark:hover:[--glow:rgba(168,85,247,1)]">
                ByteX
              </span>
              <div className="flex items-center gap-1">
                <LangSwitcher />
                <ThemeSwitcher />

                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* 中间导航列表 */}
            <div className="flex flex-1 items-center justify-center">
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                  show: { transition: { staggerChildren: 0.06 } },
                }}
                className="flex flex-col items-center gap-6"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{ hidden: { y: 8, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-center text-2xl font-medium tracking-wide text-black hover:opacity-90 dark:text-white"
                    >
                      {item.label[lang]}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* 固定右下角 Home 按钮 */}
      <AnimatePresence>
        {showTop && !open && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 rounded-full bg-indigo-600 p-3 text-white shadow-lg hover:bg-indigo-700 focus:outline-none"
          >
            {/* 上箭头动画 */}
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

    </>
  );
}
