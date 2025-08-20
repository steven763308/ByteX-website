"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative z-10 w-full min-h-[60vh] snap-start flex flex-col items-center justify-center bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white py-24 px-6 text-center"
    >
      {/* 标题 */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        迈出第一步，建立你的企业线上门面
      </motion.h2>

      {/* 副标题 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 max-w-2xl mx-auto mb-10"
      >
        我们提供清晰、专业、可维护的网站与自动化方案，
        用于展示企业的可信度与专业度。
        <br />
        注：成交与销量取决于产品是否解决市场痛点，数字资产本身不承诺业绩。
      </motion.p>

      {/* CTA 按钮 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        {/* WhatsApp 主按钮 */}
        <a
          href="https://wa.me/60123456789"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 text-lg font-medium relative overflow-hidden"
        >
          <span className="relative z-10">立即咨询</span>
          <ArrowRight className="w-5 h-5 relative z-10" />
          <span className="absolute inset-0 bg-white opacity-10 group-hover:animate-pulse"></span>
        </a>

        {/* 次按钮：邮箱或联系页 */}
        <a
          href="mailto:hello@bytex.com"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-gray-200 hover:bg-white/10 transition"
        >
          <Mail className="w-4 h-4" />
          通过邮箱联系我们
        </a>
      </motion.div>

      {/* 信任/低门槛提示 */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-xs text-gray-500 mt-8"
      >
        免费提供初步诊断与方向建议，帮助你确认第一步如何开始。
      </motion.p>

      {/* Footer 放在 CTA 的后半部分，不要写固定高度 */}
      <div className="w-full mt-16 border-t border-white/10">
        <Footer />
      </div>
    </section>
  );
}
