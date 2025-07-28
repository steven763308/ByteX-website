"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative z-10 w-full min-h-screen snap-start flex flex-col justify-center bg-transparent text-white py-24 px-6">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-8 py-12 max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-4">
          让我们帮你打造属于你的科技网站
        </h2>
        <p className="text-gray-400 mb-6">
          无论是品牌曝光还是系统整合，我们都有解决方案
        </p>
        <Link href="/contact">
          <Button className="border border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-3">
            联系我们
          </Button>
        </Link>
      </div>
    </section>
  );
}
