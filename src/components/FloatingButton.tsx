// components/FloatingButtons.tsx
"use client";

import { Globe } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
        Wallet
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2e2e2e]/80 text-white text-sm font-medium backdrop-blur-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
        <Globe className="w-4 h-4 text-cyan-400" />
        EN / 中
      </button>
    </div>
  );
}
