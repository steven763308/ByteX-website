"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Heart } from "lucide-react";

const aboutItems = [
  {
    title: "我们的使命",
    desc: "帮助企业建立属于自己的数字化品牌门面，迈向未来科技时代。",
    icon: <Target className="text-purple-400 w-6 h-6 mb-2" />,
  },
  {
    title: "我们的愿景",
    desc: "成为中小企业信赖的科技伙伴，让每一个企业都能以低门槛体验高质量的数字化解决方案。",
    icon: <Rocket className="text-purple-400 w-6 h-6 mb-2" />,
  },
  {
    title: "我们的价值观",
    desc: "专业、效率、创新 —— 我们用技术驱动成长，用设计提升体验。",
    icon: <Heart className="text-purple-400 w-6 h-6 mb-2" />,
  },
];

export default function AboutSection() {
  return (
    <section className="relative z-10 w-full min-h-screen snap-start flex flex-col justify-center bg-transparent text-white py-24 px-6">
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">About Us</h2>
        <p className="text-gray-400 mt-2 text-sm">
          我们专注于打造企业的数字化品牌门面
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {aboutItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:scale-[1.03] hover:shadow-[0_0_30px_#7f5af0] transition-all"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
