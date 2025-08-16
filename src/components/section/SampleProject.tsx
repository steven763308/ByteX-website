"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  image: string;
  href: string;
  tags?: string[];
};

const FOOTER_H = 520; //according Footer height(px)

const projectsData: Project[] = [
  {
    title: "Sky Consultancy — 官网页重构",
    desc: "极简落地页 + 多语言，专注转化。",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    href: "/cases/sky-consultancy",
    tags: ["Next.js", "i18n"],
  },
  {
    title: "UAS — 目录与后台",
    desc: "可筛选目录 + CMS 管理。",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop",
    href: "/cases/uas",
    tags: ["CMS", "Dashboard"],
  },
  {
    title: "Alpha Capital — 交易系统",
    desc: "策略可视化与导出分析。",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop",
    href: "/cases/alpha-capital",
    tags: ["Charts", "DataViz"],
  },
  {
    title: "Swift Apply — 快速申请门户",
    desc: "标准化表单，自动化通知。",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    href: "/cases/swift-apply",
    tags: ["Automation", "Forms"],
  },
  {
    title: "ByteX — 动效品牌站",
    desc: "粒子背景与统一渐变美学。",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    href: "/cases/bytex",
    tags: ["Motion", "UI"],
  },
];

const AUTOPLAY_MS = 4200;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function CoverflowProjectsSection({
  projects = projectsData,
  title = "Selected Projects",
  subtitle = "精选项目案例（持续更新）",
}: {
  projects?: Project[];
  title?: string;
  subtitle?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = projects.length;

  // 自动播放
  useEffect(() => {
    if (paused || len <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % len), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, len]);

  // 拖拽（鼠标/触控）
  const dragRef = useRef<{ startX: number; dragging: boolean }>({ startX: 0, dragging: false });
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragRef.current.dragging = true;
    dragRef.current.startX = e.clientX;
  }, []);
  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current.dragging) return;
      const dx = e.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 40) {
        setIndex((i) => (i + (dx < 0 ? 1 : -1) + len) % len);
        dragRef.current.dragging = false;
      }
    },
    [len]
  );
  const onPointerUp = useCallback(() => {
    dragRef.current.dragging = false;
  }, []);

  // 生成 coverflow 视图：当前项置中，左右各 2 张做预览
  const visible = useMemo(() => {
    const arr = [];
    const radius = Math.min(2, Math.floor((len - 1) / 2)); // 左右最多 2 张
    for (let offset = -radius; offset <= radius; offset++) {
      arr.push(mod(index + offset, len));
    }
    return arr;
  }, [index, len]);

  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  return (
    <section
      id="projects"
      className="relative z-10 w-full min-h-[90vh] snap-start flex flex-col justify-center bg-transparent text-white py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 标题 */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-gray-400 mt-2 text-sm">{subtitle}</p>
      </div>

      {/* 舞台区域 */}
      <div className="relative">
        {/* 左右柔光遮罩 */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0f0f0f] to-transparent" />

        {/* Coverflow 轨道 */}
        <div
          className="relative mx-auto max-w-[1200px] px-6"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div className="relative h-[440px] md:h-[520px]">
            {visible.map((idx) => {
              const p = projects[idx];
              // 计算相对位置（-2,-1,0,1,2）
              const rel = ((idx - index + len) % len);
              const signed =
                rel === 0 ? 0 :
                rel <= len / 2 ? rel : rel - len; // 映射到负数区间，保持左右对称

              // 基于相对距离设置样式
              const distance = Math.abs(signed);
              const isCenter = distance === 0;

              const translateX = signed * 160; // 卡片水平偏移
              const rotateY = signed * -12;    // 轻微透视
              const scale = isCenter ? 1 : 0.86 - distance * 0.06;
              const opacity = isCenter ? 1 : 0.60 - distance * 0.1;
              const z = 50 - distance;         // 层级

              return (
                <article
                  key={`${idx}-${p.title}`}
                  className="absolute top-1/2 left-1/2 will-change-transform"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    zIndex: z,
                    opacity,
                    transition: "transform 600ms cubic-bezier(.22,1,.22,1), opacity 400ms",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className={`group relative w-[78vw] sm:w-[560px] md:w-[640px] lg:w-[720px] rounded-2xl border border-white/12 overflow-hidden backdrop-blur
                                   ${isCenter ? "bg-white/[0.06] shadow-[0_0_40px_rgba(127,90,240,.25)]" : "bg-white/[0.04]"}`}>
                    {/* 封面 */}
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 720px, (min-width: 768px) 640px, (min-width: 640px) 560px, 78vw"
                        priority={isCenter}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      {/* 右上角标签 */}
                      {p.tags && p.tags.length > 0 && (
                        <div className="absolute top-3 right-3 flex gap-2">
                          {p.tags.slice(0, 2).map((t) => (
                            <span key={t} className="rounded-full bg-black/60 border border-white/15 px-2 py-0.5 text-[11px] text-white/80">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 文案 */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm text-white/70 line-clamp-2">{p.desc}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          href={p.href}
                          className={`inline-flex items-center gap-1 text-sm rounded-full px-3 py-1.5 transition
                                      ${isCenter ? "border border-white/20 hover:border-white/30 bg-white/[0.06]" : "border border-white/10 hover:border-white/20"}`}
                        >
                          查看案例 <ExternalLink className="w-4 h-4" />
                        </Link>
                        <div className="text-[11px] text-white/45">#{idx + 1}/{len}</div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 控制按钮 */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
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
      </div>

      {/* 圆点 */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/60"}`}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>

      {/*Footer*/}
      <div style={{height: FOOTER_H}}>
        <Footer />
      </div>

    </section>
  );
}
