"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Layout,
  Type,
  Globe,
  Sparkles,
  ShoppingBag,
  Heart,
  Star,
  Check,
  Eye,
  RotateCcw,
} from "lucide-react";

export function StoreBuilder() {
  const [accentColor, setAccentColor] = useState<string>("#6366f1");
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const [fontFamily, setFontFamily] = useState<string>("Modern Sans");
  const [storeName, setStoreName] = useState<string>("Lumina Studio");

  const colors = [
    { name: "Indigo Velvet", value: "#6366f1" },
    { name: "Emerald Luxe", value: "#10b981" },
    { name: "Cyber Cyan", value: "#06b6d4" },
    { name: "Rose Noir", value: "#f43f5e" },
    { name: "Amber Glow", value: "#f59e0b" },
  ];

  return (
    <section id="builder" className="py-24 bg-[#06080d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5" />
            Live Customizer Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Create a Store That Looks <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Exactly Like Your Brand.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Test the live interactive theme builder below. Toggle colors and parameters to see the storefront preview update instantly.
          </p>
        </div>

        {/* Builder Studio Grid */}
        <div className="grid grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Customization Controls Panel */}
          <div className="col-span-12 lg:col-span-5 p-6 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 font-bold text-white text-base">
                <Palette className="w-5 h-5 text-indigo-400" />
                Theme Customizer
              </div>
              <button
                onClick={() => {
                  setAccentColor("#6366f1");
                  setThemeMode("dark");
                  setStoreName("Lumina Studio");
                }}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Store Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Storefront Name
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 font-medium"
              />
            </div>

            {/* Color Palette Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Brand Accent Palette
              </label>
              <div className="flex items-center gap-3 pt-1">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setAccentColor(c.value)}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: c.value }}
                    title={c.name}
                  >
                    {accentColor === c.value && <Check className="w-4 h-4 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Mode Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Store Theme Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setThemeMode("dark")}
                  className={`py-2 px-4 rounded-xl text-xs font-semibold border transition-all ${
                    themeMode === "dark"
                      ? "bg-indigo-600 border-indigo-500 text-white"
                      : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  Dark Obsidian
                </button>
                <button
                  onClick={() => setThemeMode("light")}
                  className={`py-2 px-4 rounded-xl text-xs font-semibold border transition-all ${
                    themeMode === "light"
                      ? "bg-slate-200 border-white text-slate-900"
                      : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  Clean Light
                </button>
              </div>
            </div>

            {/* Typography Preset */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Typography System
              </label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 font-medium"
              >
                <option value="Modern Sans" className="bg-[#0d111a] text-white">Plus Jakarta Sans (Modern)</option>
                <option value="Serif Editorial" className="bg-[#0d111a] text-white">Playfair Display (Editorial)</option>
                <option value="Tech Mono" className="bg-[#0d111a] text-white">JetBrains Mono (Minimalist)</option>
              </select>
            </div>

            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0 text-indigo-400" />
              <span>Changes reflect in real time without refreshing or rebuilding code.</span>
            </div>
          </div>

          {/* Right Live Preview Storefront Mockup */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative rounded-2xl border border-white/10 bg-[#0e131f] shadow-2xl p-2">
              {/* Top Live Badge */}
              <div className="px-4 py-2 bg-[#080c14] rounded-t-xl border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-emerald-400 font-semibold">LIVE STOREFRONT PREVIEW</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[11px]">
                  <Globe className="w-3.5 h-3.5 text-indigo-400" />
                  {storeName.toLowerCase().replace(/\s+/g, "")}.omnistore.shop
                </div>
              </div>

              {/* Dynamic Theme Store Mockup Shell */}
              <div
                className={`p-6 rounded-b-xl transition-all duration-300 min-h-[460px] flex flex-col justify-between ${
                  themeMode === "dark"
                    ? "bg-[#0a0e17] text-white"
                    : "bg-slate-50 text-slate-900"
                }`}
              >
                {/* Store Header */}
                <div className="flex items-center justify-between border-b pb-4 border-current/10">
                  <div className="text-xl font-extrabold tracking-tight">{storeName}</div>
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <span>New Arrivals</span>
                    <span>Collections</span>
                    <span>About</span>
                    <button
                      className="px-3.5 py-1.5 rounded-lg font-bold text-white transition-colors"
                      style={{ backgroundColor: accentColor }}
                    >
                      Cart (2)
                    </button>
                  </div>
                </div>

                {/* Hero Mini Banner */}
                <div className="my-6 p-6 rounded-2xl relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">
                    Summer Collection 2026
                  </span>
                  <h3 className="text-2xl font-bold mt-1 mb-2">Designed for Elegance.</h3>
                  <button
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: accentColor }}
                  >
                    Explore Shop →
                  </button>
                </div>

                {/* Product Card Example */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl border border-current/10 bg-white/5 space-y-2">
                    <div className="h-28 rounded-lg bg-indigo-500/10 flex items-center justify-center relative">
                      <ShoppingBag className="w-8 h-8 opacity-40" />
                      <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/10">
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-[10px]">
                      <Star className="w-3 h-3 fill-amber-400" /> 4.9 (128 reviews)
                    </div>
                    <div className="text-xs font-bold">Minimalist Soundbar</div>
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm" style={{ color: accentColor }}>
                        $299.00
                      </span>
                      <button
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold text-white"
                        style={{ backgroundColor: accentColor }}
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl border border-current/10 bg-white/5 space-y-2">
                    <div className="h-28 rounded-lg bg-purple-500/10 flex items-center justify-center relative">
                      <ShoppingBag className="w-8 h-8 opacity-40" />
                      <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/10">
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-[10px]">
                      <Star className="w-3 h-3 fill-amber-400" /> 5.0 (89 reviews)
                    </div>
                    <div className="text-xs font-bold">Acoustic ANC Earbuds</div>
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm" style={{ color: accentColor }}>
                        $149.00
                      </span>
                      <button
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold text-white"
                        style={{ backgroundColor: accentColor }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
