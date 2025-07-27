// components/CTASection.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative z-10 py-24 bg-gradient-to-r from-purple-800 to-indigo-800 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">让我们帮你打造属于你的科技网站</h2>
      <p className="text-gray-300 mb-6">无论是品牌曝光还是系统整合，我们都有解决方案</p>
      <Link href="/contact">
        <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3">
          联系我们
        </Button>
      </Link>
    </section>
  );
}