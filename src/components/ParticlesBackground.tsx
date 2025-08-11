"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },       // 由容器控制大小
  background: { color: "#0f0f0f" },
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.4, width: 1 },
    move: { enable: true, speed: 1, outModes: { default: "bounce" } },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 2 },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } },
    modes: { grab: { distance: 200, links: { opacity: 0.5 } }, push: { quantity: 4 } },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="w-full h-full"           // ⬅️ 关键：让 canvas 填满容器
        style={{ width: "100%", height: "100%" }}  // ⬅️ 再保险一层
      />
    </div>
  );
}
