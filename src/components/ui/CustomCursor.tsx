"use client";

import { useEffect, useRef, useState } from "react";

function lerp(start: number, end: number, amt: number) {
  return (1 - amt) * start + amt * end;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // 目标位置（鼠标真实位置）
  const target = useRef({ x: 0, y: 0 });
  // 当前渲染位置（用于平滑跟随）
  const pos = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);
    const handleDown = () => setIsDown(true);
    const handleUp = () => setIsDown(false);

    // 监听链接/按钮 hover，做放大反馈
    const hoverables = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"];
    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHover(!!el && hoverables.includes(el.tagName));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseover", handleOver);

    // 动画循环：用 rAF + lerp 做平滑跟随
    let raf = 0;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.22);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.22);

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        // 让元素中心对齐鼠标位置（translate(-50%, -50%)）
        dot.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
        ring.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  // 桌面端才显示
  const isPointerFine = typeof window !== "undefined" && matchMedia("(pointer: fine)").matches;
  if (!isPointerFine) return null;

  // 状态样式
  const base = "pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform transition-opacity duration-200 cursor-smooth";
  const visibleCls = visible ? "opacity-100" : "opacity-0";

  const dotSize = isDown ? 10 : isHover ? 8 : 6;         // 点击更大，hover 稍大
  const ringSize = isDown ? 40 : isHover ? 36 : 28;      // 外环尺寸
  const ringBorder = isDown ? "border-2" : "border";     // 点击时更粗
  const ringOpacity = isHover ? "opacity-90" : "opacity-70";

  return (
    <>
      {/* 内点：用 mix-blend-difference 让深浅背景都清晰 */}
      <div
        ref={dotRef}
        className={`${base} ${visibleCls} rounded-full mix-blend-difference`}
        style={{
          width: dotSize,
          height: dotSize,
          background: "#fff",
        }}
      />
      {/* 外环：透明边框圆圈 */}
      <div
        ref={ringRef}
        className={`${base} ${visibleCls} rounded-full ${ringBorder} ${ringOpacity}`}
        style={{
          width: ringSize,
          height: ringSize,
          borderColor: "rgba(255,255,255,0.9)",
          boxShadow: isHover ? "0 0 16px rgba(255,255,255,0.25)" : "none",
          backdropFilter: "blur(0px)",
        }}
      />
    </>
  );
}
