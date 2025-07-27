"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" }, // ⚠️ anchor link not active-detectable
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-white">ByteX</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-white">
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

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm">
            Connect Wallet
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f]/90 text-white px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 border-b border-[#1a1a1a]"
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm">
            Connect Wallet
          </Button>
        </div>
      )}
    </header>
  );
}
