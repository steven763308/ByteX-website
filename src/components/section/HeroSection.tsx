"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-center px-6 snap-start">
      {/* 主标题：聚焦“门面与专业度” */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4">
          ByteX Technology
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4">
          为企业打造<span className="text-purple-400">专业的线上门面</span>
        </h2>
      </motion.div>

      {/* 副标题：不提业绩，只讲清“是什么/用途/边界” */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          ByteX Technology 专注于企业官网、着陆页与基础系统的规划与实现。
          我们提供的是统一清晰的信息呈现与稳定可靠的线上形象，
          用于展示资质、服务与联系渠道，从而强化企业的<strong className="text-gray-200">专业度与可信度</strong>。
          <br className="hidden md:block" />
          <span className="text-xs md:text-sm text-gray-500">
            注：成交与销量取决于产品是否真正解决市场痛点；数字资产本身不承诺业绩提升。
          </span>
        </p>
      </motion.div>

      {/* CTA：行动与了解边界 */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <a
          href="https://wa.me/60123456789"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium relative overflow-hidden"
        >
          <span className="relative z-10">咨询网站与系统规划</span>
          <ArrowRight className="w-5 h-5 relative z-10" />
          <span className="absolute inset-0 bg-white opacity-10 group-hover:animate-pulse"></span>
        </a>

        <a
          href="#why-build-it"
          className="text-sm text-gray-300 hover:text-purple-400 transition"
        >
          为什么需要专业的线上门面？
        </a>
      </motion.div>

      {/* 轻量 Trust Strip：不列客户Logo也能表达“专业性” */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 text-xs md:text-sm text-gray-400"
      >
        结构化信息呈现 ｜ 一致的品牌表达 ｜ 清晰的联系方式与资质展示 ｜ 稳定可维护
      </motion.div>
    </section>
  );
}
