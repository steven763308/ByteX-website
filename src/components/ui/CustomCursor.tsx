"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function lerp(start: number, end: number, amt: number) {
  return (1 - amt) * start + amt * end;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);

    const hoverables = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"];
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHover(!!el && hoverables.includes(el.tagName));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);

    let raf = 0;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.22);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.22);

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        const t = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
        dot.style.transform = t;
        ring.style.transform = t;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  // 桌面端才显示
  if (typeof window !== "undefined" && !matchMedia("(any-pointer: fine)").matches) {
    return null;
  }
  if (!mounted) return null;

  const dotSize = isDown ? 10 : isHover ? 8 : 6;
  const ringSize = isDown ? 40 : isHover ? 36 : 28;
  const ringBorder = isDown ? "border-2" : "border";
  const ringOpacity = isHover ? "opacity-90" : "opacity-70";
  const base =
    "pointer-events-none fixed top-0 left-0 will-change-transform transition-opacity duration-200";

  const cursorNodes = (
    <>
      <div
        ref={dotRef}
        className={`${base} ${visible ? "opacity-100" : "opacity-0"} rounded-full mix-blend-difference`}
        style={{
          width: dotSize,
          height: dotSize,
          background: "#fff",
          // 关键：封顶 z-index，强过站内一切层
          zIndex: 2147483647,
        }}
      />
      <div
        ref={ringRef}
        className={`${base} ${visible ? "opacity-100" : "opacity-0"} rounded-full ${ringBorder} ${ringOpacity}`}
        style={{
          width: ringSize,
          height: ringSize,
          borderColor: "rgba(255,255,255,0.9)",
          boxShadow: isHover ? "0 0 16px rgba(255,255,255,0.25)" : "none",
          zIndex: 2147483647,
        }}
      />
    </>
  );

  // 关键：Portal 到 <body>，摆脱任何父级 transform/opacity/clip 的堆叠影响
  return createPortal(cursorNodes, document.body);
}
