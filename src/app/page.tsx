// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSplash from "@/components/LoadingSplash";
import HeroSection from "@/components/section/HeroSection";
import AboutusSection from "@/components/section/AboutusSection";
import FeaturesSection from "@/components/section/FeaturesSection";
import ServicesSection from "@/components/section/ServicesSection";
import SampleProject from "@/components/section/PortfolioSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const alreadyLoaded = localStorage.getItem("hasLoaded");
    if (alreadyLoaded) {
      setLoading(false);
      setIsVisible(false);
      return;
    }
    const timeout = setTimeout(() => {
      setLoading(false);
      setIsVisible(false);
      localStorage.setItem("hasLoaded", "true");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    // ❌ 不要给 main：h-screen / overflow-y-scroll
    // ✅ 让 main 交给 layout 的 flex-1 管高度，页面用“视口滚动”
    <main className="flex-1 relative z-10 text-white font-sans">
      {/* 背景层放绝对定位，避免把页面高度撑炸 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <LoadingSplash isVisible={isVisible} />

      {/* Hero 用 min-h，而不是 h-screen */}
      <section className="relative min-h-[calc(100dvh-64px)] flex items-center">
        <HeroSection />
      </section>
      <AboutusSection />
      <FeaturesSection />
      <ServicesSection />
      <SampleProject />
          
    </main>
  );
}
