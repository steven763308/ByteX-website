"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import type { ISourceOptions } from "tsparticles-engine";
import { Button } from "@/components/ui/button";
import { Sparkles, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const alreadyLoaded = localStorage.getItem("hasLoaded");
    if (alreadyLoaded) {
      setLoading(false);
      setIsVisible(false);
      return;
    }

    const timeout = setTimeout(() => {
      setLoading(false);
      setIsVisible(false);
      localStorage.setItem("hasLoaded", "true");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const particlesOptions: ISourceOptions = {
    background: { color: "#0f0f0f" },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 2 },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        outModes: { default: "bounce" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.5 } },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white font-sans relative overflow-hidden">
      {/* ✅ 粒子背景 */}
      <Particles options={particlesOptions} className="absolute inset-0 z-0 pointer-events-none" />

      {/* ✅ Loading 动画（首次） */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f0f]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 0.8], opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white text-3xl font-bold tracking-widest"
            >
              <span className="text-purple-400">ByteX</span> Technology
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">
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

      {/* ✅ Features */}
      <motion.section id="features" className="py-24 px-6 bg-[#121212]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "现代前端技术", desc: "基于 Next.js、Tailwind 构建极速响应体验。" },
            { title: "响应式布局", desc: "适配手机、平板与电脑，提升客户浏览体验。" },
            { title: "后端集成", desc: "支持 Laravel、API、CMS、Dashboard 等基础系统开发。" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative rounded-xl border border-[#1e1e1e] bg-[#181818] p-6 hover:scale-[1.03] hover:shadow-[0_0_30px_#7f5af0] transition-all"
            >
              <Sparkles className="text-purple-400 w-6 h-6 mb-2 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ Services Preview */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">我们的服务</h2>
          <p className="text-gray-400">从品牌曝光到业务系统，我们为你量身打造。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          {[
            { title: "Landing Page", desc: "适合产品发布、广告营销、活动报名页面。" },
            { title: "公司官网", desc: "提升企业形象，展示服务内容与客户案例。" },
            { title: "系统开发", desc: "管理后台 / Dashboard / 客户面板等基础系统。" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-[#2e2e2e] bg-[#181818] rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-3 text-sm">
              查看所有服务 →
            </Button>
          </Link>
        </div>
      </section>

      {/* ✅ CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-800 to-indigo-800 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">让我们帮你打造属于你的科技网站</h2>
        <p className="text-gray-300 mb-6">无论是品牌曝光还是系统整合，我们都有解决方案</p>
        <Link href="/contact">
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3">
            联系我们
          </Button>
        </Link>
      </section>

      {/* ✅ Floating 按钮 */}
      <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Wallet
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2e2e2e]/80 text-white text-sm font-medium backdrop-blur-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          <Globe className="w-4 h-4 text-cyan-400" />
          EN / 中
        </button>
      </div>
    </main>
  );
}
