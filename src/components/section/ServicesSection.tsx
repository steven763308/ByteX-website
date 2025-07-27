"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Landing Page 开发",
    slug: "landing-page",
    desc: "打造极具视觉冲击的品牌推广页面，适用于活动、产品或广告营销。",
  },
  {
    title: "公司官网建设",
    slug: "company-website",
    desc: "为企业量身打造形象官网，支持多语言、产品展示、表单等功能。",
  },
  {
    title: "系统开发 / Dashboard",
    slug: "web-system",
    desc: "根据你的业务需求定制后台系统、仪表板或前后端一体化应用。",
  },
  {
    title: "自动化脚本 / Automation Script",
    slug: "automation-script",
    desc: "为你定制批量处理、数据抓取、登录任务等自动化脚本，提升效率。",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative z-10 py-24 bg-transparent text-white">
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">我们的服务</h2>
        <p className="text-gray-400">从品牌曝光到业务系统，我们为你量身打造。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceCard title={s.title} desc={s.desc} href={`/services/${s.slug}`} />
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
  );
}
