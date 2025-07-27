"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✅ 使用 Slim 替代 Full
import type { Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

const particlesOptions: ISourceOptions = {
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
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 200, links: { opacity: 0.5 } },
      push: { quantity: 4 },
    },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // ✅ 使用 loadSlim，不再冲突
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    </div>
  );
}
