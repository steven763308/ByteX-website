"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" }, // ⚠️锚点页面不能判断 active，建议跳转首页后滚动
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#0f0f0f] border-b border-[#1a1a1a] z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">ByteX</div>

        <nav className="space-x-6 hidden md:flex text-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive ? "text-indigo-400 font-semibold" : "text-white hover:text-indigo-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm">
          Connect Wallet
        </Button>
      </div>
    </header>
  );
}
