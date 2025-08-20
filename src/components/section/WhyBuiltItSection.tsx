// components/section/WhyBuildIt.tsx
"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, FileCheck2, Settings } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "企业的线上门面",
    desc: "像实体办公室一样被看见与被了解：简介、服务、案例与联系方式清晰呈现，形成统一而专业的第一印象。",
  },
  {
    icon: ShieldCheck,
    title: "真正属于自己的资产",
    desc: "不依赖第三方社交平台规则与风控，避免账号被封或资料被删除的风险；域名与网站归属企业，长期可控、可维护。",
  },
  {
    icon: FileCheck2,
    title: "可信与合规的信息表达",
    desc: "团队与资质、服务流程、常见问题、隐私与条款等结构化展示，减少误解，提升企业的可信度与专业形象。",
  },
  {
    icon: Settings,
    title: "基础自动化与稳定维护",
    desc: "表单与信息收集规范化、内容更新与备份机制、监控与修复流程，让日常管理更稳更省心。",
  },
];

export default function WhyBuildIt() {
  return (
    <section
      id="why-build-it"
      className="relative z-10 w-full min-h-screen snap-start flex flex-col justify-center bg-transparent text-white py-24 px-6"
    >
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">为什么要打造企业的数字资产？</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          数字资产是企业的线上门面：统一的信息表达、可靠的归属与长期的可维护性。
          它用于呈现专业与诚信本身，而非承诺销售结果。
        </p>
      </div>

      {/* 理由卡片 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:scale-[1.02] hover:shadow-[0_0_28px_#7f5af0] transition-all"
          >
            <item.icon className="w-7 h-7 mb-3 text-purple-400" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 轻量说明条：边界与定位 */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <p className="text-xs md:text-sm text-gray-500">
          重要：成交与销量取决于产品是否解决市场痛点。数字资产的职责是呈现专业与可信，
          并保障信息长期、稳定、可维护。
        </p>
      </div>
    </section>
  );
}
