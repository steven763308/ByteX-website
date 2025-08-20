"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Landing Page 开发",
    slug: "landing-page",
    desc: "打造聚焦转化与信息传达的品牌推广页面，适用于活动、产品或广告营销。",
  },
  {
    title: "公司官网建设",
    slug: "company-website",
    desc: "为企业量身打造形象官网，支持多语言、服务展示、表单与联系方式模块。",
  },
  {
    title: "自动化脚本 / Automation",
    slug: "automation",
    desc: "定制数据采集、批量处理、登录任务等自动化脚本，优化日常重复性工作。",
  },
  {
    title: "未来研发方向",
    slug: "future-labs",
    desc: "我们正在探索系统平台、订阅制产品与 Web3 相关服务，持续拓展更多数字化解决方案。",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 w-full min-h-screen snap-start flex flex-col justify-center bg-transparent text-white py-24 px-6"
    >
      {/* 标题 */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">我们的服务</h2>
        <p className="text-gray-400">
          从网站到自动化，我们帮助企业建立更专业、更高效的数字化门面。
        </p>
      </div>

      {/* 服务卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto w-full">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <ServiceCard title={s.title} desc={s.desc} href={`/services/${s.slug}`} />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link href="/services">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-3 text-sm">
            查看所有服务 →
          </Button>
        </Link>
      </div>
    </section>
  );
}
