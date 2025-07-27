"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const features = [
  { title: "现代前端技术", desc: "基于 Next.js、Tailwind 构建极速响应体验。" },
  { title: "响应式布局", desc: "适配手机、平板与电脑，提升客户浏览体验。" },
  { title: "后端集成", desc: "支持 Laravel、API、CMS、Dashboard 等基础系统开发。" },
];

export default function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="relative z-10 py-24 px-6 bg-[#121212]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* 中心标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Features</h2>
        <p className="text-gray-400 mt-2 text-sm">我们为网站打造的三大核心优势</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:scale-[1.03] hover:shadow-[0_0_30px_#7f5af0] transition-all"
>
            <Sparkles className="text-purple-400 w-6 h-6 mb-2 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
