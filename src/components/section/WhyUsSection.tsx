"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Layout, UserCheck } from "lucide-react";

const whyUsItems = [
  {
    title: "更专业的线上门面",
    desc: "我们专注于企业官网、着陆页与系统搭建，确保信息清晰、设计统一，让客户第一眼就能感受到专业度。",
    icon: <Layout className="text-purple-400 w-6 h-6 mb-2" />,
  },
  {
    title: "注重可信与长期稳定",
    desc: "数字资产是企业自有的线上门面，不依赖社交平台，避免账号被封或资料被删除的问题，真正属于企业本身。",
    icon: <ShieldCheck className="text-purple-400 w-6 h-6 mb-2" />,
  },
  {
    title: "理解企业需求",
    desc: "创办人 Steven 曾参与不同类型企业，深知中小企业在展示资质、赢得信任上的痛点，懂得如何把网站做成可信赖的企业形象。",
    icon: <UserCheck className="text-purple-400 w-6 h-6 mb-2" />,
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative z-10 w-full min-h-screen snap-start flex flex-col justify-center bg-transparent text-white py-24 px-6"
    >
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Why Us</h2>
        <p className="text-gray-400 mt-2 text-sm">
          我们在解决中小企业最常见的线上形象与专业度问题
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {whyUsItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:scale-[1.03] hover:shadow-[0_0_30px_#7f5af0] transition-all"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
