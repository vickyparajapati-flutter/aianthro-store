"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, Tablet, ArrowUpRight, Star } from "lucide-react";

export function MobileCommerce() {
  return (
    <section className="py-24 bg-[#06080d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            Responsive Omnichannel Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Commerce That Performs <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Flawlessly on Every Screen.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Mobile-first responsive UX with native gesture support, Apple Pay / Google Pay one-tap checkout, and PWA capabilities.
          </p>
        </div>

        {/* Device Mockups Layout */}
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-8">
          {/* Desktop Frame Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3 rounded-2xl border border-white/10 bg-[#0d111a] p-3 shadow-2xl space-y-2"
          >
            <div className="flex items-center justify-between px-3 py-1.5 bg-black/40 rounded-lg text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-indigo-400" />
                <span className="font-mono text-[11px]">Desktop Storefront (4K Retina)</span>
              </div>
              <span className="text-[10px] text-emerald-400">60 FPS Smooth Scroll</span>
            </div>
            <div className="h-64 rounded-xl bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-900 border border-white/5 p-4 flex flex-col justify-between">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Desktop Viewport</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm space-y-2">
                <div className="text-sm font-extrabold text-white">Full Screen Interactive Checkout</div>
                <div className="text-xs text-slate-300">Multi-column layout with real-time stock indicator.</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Mobile Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-64 rounded-[36px] border-4 border-slate-700 bg-[#000000] p-2 shadow-2xl shrink-0"
          >
            {/* Phone Speaker Notch */}
            <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2" />

            <div className="rounded-[28px] bg-[#0b0f19] p-4 text-white space-y-4 border border-white/10 min-h-[380px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>9:41</span>
                <span>5G 100%</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-xs">
                  <div className="font-bold text-indigo-300">Apple Pay Express</div>
                  <div className="text-[10px] text-slate-300">1-Tap biometric purchase</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Mobile Conversion</div>
                  <div className="text-base font-extrabold text-white">+32% Mobile Sales</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-xs">
                <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                <span className="font-bold text-emerald-300">4.9★ Mobile UX Score</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
