// components/Footer.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Mail, Phone, MapPin, ArrowUp,
  Facebook, Instagram, Linkedin, Youtube, Send
} from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24 bg-[#0f0f0f] text-white">
      {/* 顶部分割线（细渐变） */}
      <div aria-hidden className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CTA 转化区 */}
      <div className="container mx-auto px-6">
        <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-8 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">准备升级你的官网 / 系统？</h3>
              <p className="text-white/60 mt-1">Landing Page · 公司官网 · 定制系统 · Web3 集成</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://wa.me/6xxxxxxxxx" // TODO: 你的 WhatsApp
                className="rounded-xl px-4 py-2 bg-violet-500 hover:bg-violet-600 transition"
              >
                WhatsApp 咨询
              </Link>
              <a
                href="#contact"
                className="rounded-xl px-4 py-2 border border-white/15 hover:border-white/30 transition"
              >
                预约演示
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 主体四栏 */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 py-10">
          {/* 品牌简介 */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">ByteX</div>
            <p className="text-sm text-white/65">
              专注打造 Landing Page、公司官网与定制系统，迈向 Web3 的起点。
            </p>

            <div className="flex gap-3 pt-1 text-white/75">
              <Link href="#" className="hover:text-white"><Facebook className="size-5" /></Link>
              <Link href="#" className="hover:text-white"><Instagram className="size-5" /></Link>
              <Link href="#" className="hover:text-white"><Linkedin className="size-5" /></Link>
              <Link href="#" className="hover:text-white"><Youtube className="size-5" /></Link>
            </div>
          </div>

          {/* 服务导航 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#services" className="hover:text-white">Landing Page 设计</a></li>
              <li><a href="#services" className="hover:text-white">公司官网开发</a></li>
              <li><a href="#services" className="hover:text-white">定制系统（CRM/后台）</a></li>
              <li><a href="#services" className="hover:text-white">Web3 钱包/支付集成</a></li>
            </ul>
          </div>

          {/* 资源/案例 */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/cases" className="hover:text-white">案例展示</Link></li>
              <li><Link href="/pricing" className="hover:text-white">定价方案</Link></li>
              <li><Link href="/blog" className="hover:text-white">博客/洞见</Link></li>
              <li><Link href="/docs" className="hover:text-white">技术文档</Link></li>
            </ul>
          </div>

          {/* 联系 & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-center gap-2"><Phone className="size-4" /> +60 xxx-xxx xxxx {/* TODO */}</li>
              <li className="flex items-center gap-2"><Mail className="size-4" /> hello@bytex.tech {/* TODO */}</li>
              <li className="flex items-center gap-2"><MapPin className="size-4" /> Kuala Lumpur, Malaysia</li>
            </ul>

            {/* 轻量订阅表单（占位，可接 API） */}
            <form
              onSubmit={(e) => { e.preventDefault(); /* TODO: 调用你的订阅 API */ }}
              className="flex items-center gap-2 pt-2"
            >
              <input
                type="email"
                placeholder="订阅产品更新"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:border-white/30"
                required
              />
              <button
                className="rounded-xl px-3 py-2 bg-white/10 hover:bg-white/20 transition"
                aria-label="Subscribe"
              >
                <Send className="size-4" />
              </button>
            </form>
            <p className="text-[11px] text-white/45">订阅即表示同意我们的隐私政策。</p>
          </div>
        </div>

        {/* 版权/法务区 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/60">
          <div>
            © {year} ByteX Technology. All rights reserved.
            {/* TODO: 等 SSM 下来了这里放：SSM: XXXXXXXXX-X */}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">隐私政策</Link>
            <Link href="/terms" className="hover:text-white">使用条款</Link>
            <button onClick={scrollTop} className="inline-flex items-center gap-1 hover:text-white">
              <ArrowUp className="size-4" /> 回到顶部
            </button>
          </div>
        </div>
      </div>

      {/* 背景装饰：顶部柔光 + 遮罩，显得更“贵” */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
                   [mask-image:radial-gradient(55%_45%_at_50%_0%,black,transparent)]"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
      </div>
    </footer>
  );
}
