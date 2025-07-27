// app/services/page.tsx
"use client";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import PageHeader from "@/components/PageHeader";

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
    title: "UI / UX 定制服务",
    slug: "custom-ui-ux",
    desc: "为你的品牌或平台设计现代化、高转化率的界面体验。",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 pt-32 pb-16">
      <PageHeader title="我们的服务" subtitle="我们提供多种网站与系统开发服务，满足不同企业与项目的需求。" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
        {services.map((s, index) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceCard title={s.title} desc={s.desc} href={`/services/${s.slug}`} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
