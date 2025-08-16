"use client";

import { useEffect, useState, useId } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

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

return (
  <>
    {/* 顶部导航条（透明、白色、左右两角） */}
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent border-none">
      <nav className="flex h-14 w-full items-center justify-between px-6">
        {/* 左：Logo（白色） */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          BYTE Logo
        </Link>

        {/* 右：汉堡按钮（白色） */}
        <button
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>

    {/* 顶部下落的全屏菜单 */}
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
          {/* 顶部栏（LOGO + 关闭） */}
          <div className="flex h-14 items-center justify-between border-b border-black/10 px-4 dark:border-white/10">
            <span className="text-base font-semibold tracking-wide text-black/70 dark:text-white/80">
              BYTE Logo
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2"
            >
              <X size={22} />
            </button>
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
                    className="text-center text-2xl font-large tracking-wide text-black hover:opacity-90 dark:text-white"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  </>
);
}