"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-36">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">ByteX Technology</h1>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          专注打造 Landing Page、公司官网与定制系统，迈向 Web3 的起点
        </p>
      </motion.div>
      <motion.div className="mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
        <Button className="relative group bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full text-lg overflow-hidden">
          <span className="relative z-10">开始打造网站</span>
          <span className="absolute inset-0 bg-white opacity-10 group-hover:animate-pulse"></span>
        </Button>
      </motion.div>
    </section>
  );
}
