"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Smartphone,
  ShieldCheck,
  FileCheck2,
  DatabaseBackup,
  Cog,
} from "lucide-react";

const baseline = [
  {
    icon: Layout,
    title: "清晰的信息架构",
    desc: "首页、服务、案例、联系方式等结构化呈现，便于客户快速理解与寻找所需信息。",
  },
  {
    icon: Smartphone,
    title: "多端一致与可读性",
    desc: "手机 / 平板 / 桌面一致的排版与字号节律，强调可读与易用而非花哨效果。",
  },
  {
    icon: ShieldCheck,
    title: "自有与可控",
    desc: "域名与网站归企业所有，避免第三方平台规则与风控带来的不可控风险。",
  },
  {
    icon: FileCheck2,
    title: "可信的内容表达",
    desc: "团队与资质、服务流程、常见问题、隐私与条款等规范化展示，强化专业度与诚信度。",
  },
  {
    icon: DatabaseBackup,
    title: "基础维护与备份",
    desc: "内容更新、版本备份与基本监控流程，确保线上门面稳定、可维护。",
  },
  {
    icon: Cog,
    title: "可扩展的对接点",
    desc: "表单、WhatsApp 按钮、统计脚本预留接口，便于后续接入自动化或数据统计（不承诺业绩）。",
  },
];

export default function WhatYouGetSection() {
  return (
    <section
      id="what-you-get"
      className="relative z-10 w-full min-h-screen snap-start flex flex-col justify-center bg-transparent text-white py-24 px-6"
    >
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">我们为每个网站提供的基线标准</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          这些是我们默认交付的“专业线上门面”要素，强调可读、可信、可维护与长期可控。
        </p>
      </div>

      {/* 卡片 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {baseline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:scale-[1.02] hover:shadow-[0_0_28px_#7f5af0] transition-all flex flex-col"
          >
            <item.icon className="w-6 h-6 mb-3 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400 mt-2">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 轻量说明条：边界 */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <p className="text-xs md:text-sm text-gray-500">
          注：网站用于呈现企业专业度与可信度；成交与销量取决于产品是否解决市场痛点。
        </p>
      </div>
    </section>
  );
}
