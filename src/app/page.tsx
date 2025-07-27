// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSplash from "@/components/LoadingSplash";
import HeroSection from "@/components/section/HeroSection";
import FeaturesSection from "@/components/section/FeaturesSection";
import ServicesSection from "@/components/section/ServicesSection";
import CTASection from "@/components/section/CTASection";
import FloatingButtons from "@/components/ui/FloatingButton";

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
      
      <main className="relative z-10 min-h-screen bg-transparent text-white font-sans overflow-hidden">
        <ParticlesBackground />
        <LoadingSplash isVisible={isVisible} />
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <CTASection />
        <FloatingButtons />
      </main>
  );
}
