"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Zap, Layers, Sparkles } from "lucide-react";

export function SocialProof() {
  const brands = [
    { name: "AIAnthro AURA", category: "Luxury Apparel" },
    { name: "AIAnthro NEXUS", category: "Electronics & Tech" },
    { name: "AIAnthro LUMINA", category: "Cosmetics & Care" },
    { name: "VELOCITY ATHLETICS", category: "Sportswear" },
    { name: "ARTISAN ROAST", category: "Gourmet Goods" },
    { name: "VERDE LIVING", category: "Sustainable Home" },
  ];

  return (
    <section className="py-14 bg-[#080c14] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-400">
            Trusted by enterprise brands and 10,000+ fast-growing merchants worldwide
          </p>
        </div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex items-center gap-12 sm:gap-20 whitespace-nowrap min-w-full"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-slate-300 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
                  {brand.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-slate-300 group-hover:text-white tracking-wider transition-colors font-mono">
                    {brand.name}
                  </span>
                  <span className="text-[10px] text-slate-400 tracking-wide font-sans">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
