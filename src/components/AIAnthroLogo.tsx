"use client";

import React from "react";

export function AIAnthroLogo({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const dimensions = {
    sm: { box: "w-8 h-8 rounded-lg", icon: "w-5 h-5", text: "text-lg", subtext: "text-[9px]" },
    md: { box: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl", icon: "w-6 h-6", text: "text-lg sm:text-xl", subtext: "text-[10px]" },
    lg: { box: "w-12 h-12 rounded-2xl", icon: "w-7 h-7", text: "text-2xl", subtext: "text-xs" },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Brand Icon Badge */}
      <div className={`relative ${dimensions.box} bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 group-hover:shadow-indigo-500/50 transition-all duration-300 border border-white/20`}>
        <svg viewBox="0 0 120 120" className={`${dimensions.icon} text-white drop-shadow`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Futuristic Metallic A + Shopping Bag Shield */}
          <path d="M60 22 L28 84 C26 88 29 93 34 93 L44 93 C47 93 49 91 51 88 L60 70 L69 88 C71 91 73 93 76 93 L86 93 C91 93 94 88 92 84 Z" fill="#ffffff" fillOpacity="0.95" />
          <path d="M42 56 L60 44 L78 56 L78 78 C78 81 75 84 72 84 L48 84 C45 84 42 81 42 78 Z" fill="#06080d" />
          <path d="M52 46 C52 38 68 38 68 46" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
          <polygon points="60,54 62,60 68,60 63,64 65,70 60,66 55,70 57,64 52,60 58,60" fill="#38bdf8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${dimensions.text} font-extrabold tracking-tight text-white font-sans`}>
            AIAnthro <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400">Store</span>
          </span>
          <span className={`hidden sm:inline-block ${dimensions.subtext} font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30`}>
            PRO
          </span>
        </div>
      </div>
    </div>
  );
}
