"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Founder & CEO, Apex Audio",
      avatarBg: "from-indigo-500 to-purple-600",
      quote:
        "Managing products, orders, and fulfillment across 3 global regions used to take our ops team 15 hours a week. With OmniStore, everything runs automatically in one place.",
      rating: 5,
      metrics: "$1.4M ARR Generated",
    },
    {
      name: "Elena Rostova",
      role: "Head of Digital, Lumina Cosmetics",
      avatarBg: "from-purple-500 to-pink-600",
      quote:
        "The theme customizer and mobile storefront conversion speeds are unrivaled. Our mobile checkout conversion jump by +34% within the first month of switching.",
      rating: 5,
      metrics: "+34% Mobile Conversion",
    },
    {
      name: "David Kim",
      role: "Operations Director, Verde Goods",
      avatarBg: "from-emerald-500 to-teal-600",
      quote:
        "The multi-tenant architecture is a game changer for our business. We manage 4 distinct brand domains with isolated inventory from a single master login.",
      rating: 5,
      metrics: "4 Brands Managed",
    },
  ];

  return (
    <section className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Founder Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by Merchants <br />
            <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              Scaling Around the World.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how commerce operators rely on OmniStore to power millions in annual sales volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10" />
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed font-sans">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${rev.avatarBg} flex items-center justify-center font-bold text-white text-sm shadow-md`}>
                    {rev.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{rev.name}</div>
                    <div className="text-[10px] text-slate-400">{rev.role}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {rev.metrics}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
