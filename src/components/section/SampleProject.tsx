// components/section/SampleProject.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Sky Consultancy — 官网页面重构",
    desc: "极简落地页 + 多语言支持，提升转化率与加载速度。",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["Landing Page", "i18n", "Next.js"],
    href: "/cases/sky-consultancy",
  },
  {
    title: "UAS — 产品目录与后台管理",
    desc: "可筛选产品目录、动态分类、后台 CMS 管理。",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop",
    tags: ["CMS", "Dashboard", "CRUD"],
    href: "/cases/uas",
  },
  {
    title: "Alpha Capital — 交易记录系统",
    desc: "可视化策略表现、导入导出、图表分析。",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop",
    tags: ["DataViz", "Charts", "Export"],
    href: "/cases/alpha-capital",
  },
  {
    title: "Swift Apply — 快速申请门户",
    desc: "标准化表单、自动化通知、移动端优先。",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Form", "Automation", "Mobile First"],
    href: "/cases/swift-apply",
  },
  {
    title: "ByteX — 品牌站点/动效",
    desc: "粒子背景、动效组件、渐变美学统一。",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Motion", "UI", "Brand"],
    href: "/cases/bytex",
  },
  // 需要 6~8 个就继续加即可
];

const AUTOPLAY_MS = 4200;

export default function SampleProjectsSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 平滑滚到目标卡
  const scrollToIndex = (i: number) => {
    const el = viewportRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLDivElement>("[data-card]");
    const target = cards[i];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  // 自动播放（悬停暂停、标签隐藏时暂停）
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  // 当 index 变化时滚动
  useEffect(() => {
    scrollToIndex(index);
  }, [index]);

  // 监听用户手动滚动 -> 同步当前 index
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onScroll = () => {
      const cards = el.querySelectorAll<HTMLDivElement>("[data-card]");
      let nearest = 0;
      let minDelta = Number.POSITIVE_INFINITY;
      cards.forEach((c, i) => {
        const delta = Math.abs(c.offsetLeft - el.scrollLeft);
        if (delta < minDelta) {
          minDelta = delta;
          nearest = i;
        }
      });
      setIndex(nearest);
    };

    let frame = 0;
    const handler = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(onScroll);
    };

    el.addEventListener("scroll", handler, { passive: true });
    return () => {
      el.removeEventListener("scroll", handler);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative z-10 w-full min-h-[80vh] snap-start flex flex-col justify-center bg-transparent text-white py-24 px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Sample Projects</h2>
        <p className="text-gray-400 mt-2 text-sm">近期项目案例（持续更新）</p>
      </div>

      {/* 视口 */}
      <div className="relative">
        {/* 左右渐变遮罩，提升质感 */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent" />

        {/* 横向滚动容器（自动吸附） */}
        <div
          ref={viewportRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2"
        >
          {projects.map((p, i) => (
            <article
              key={p.title}
              data-card
              className="snap-start shrink-0 w-[88%] sm:w-[70%] md:w-[46%] lg:w-[38%] xl:w-[32%]"
            >
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur overflow-hidden hover:border-white/20 transition-all">
                {/* 封面图 */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="(min-width: 1280px) 32vw, (min-width: 1024px) 38vw, (min-width: 768px) 46vw, 88vw"
                    priority={i < 2}
                  />
                  {/* 角标标签 */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-black/60 border border-white/15 px-2 py-0.5 text-[11px] text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 文案 & CTA */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">{p.desc}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-1 text-sm rounded-full border border-white/15 px-3 py-1.5 hover:border-white/30 hover:bg-white/[0.06] transition"
                    >
                      查看案例 <ExternalLink className="w-4 h-4" />
                    </Link>
                    {/* 次级标签（可选） */}
                    {p.tags[3] && (
                      <span className="text-[11px] text-white/50">{p.tags[3]}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 控制按钮 */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1">
          <button
            onClick={prev}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 backdrop-blur w-10 h-10 hover:border-white/30 hover:bg-black/70 transition"
            aria-label="Prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 backdrop-blur w-10 h-10 hover:border-white/30 hover:bg-black/70 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 圆点指示器 */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
