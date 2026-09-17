"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Laptop, Coffee, Utensils, Sparkles, Building2, Store, Truck } from "lucide-react";

export function UseCases() {
  const verticals = [
    { title: "Fashion & Apparel", icon: ShoppingBag, desc: "Variant matrix size/color grid & lookbook shop." },
    { title: "Electronics & Gadgets", icon: Laptop, desc: "Serial tracking, warranty extensions & spec sheets." },
    { title: "Beauty & Cosmetics", icon: Sparkles, desc: "Subscription replenishment & shade finder." },
    { title: "Gourmet & Grocery", icon: Coffee, desc: "Perishable stock tracking & batch expiration." },
    { title: "Restaurants & Dining", icon: Utensils, desc: "Live order dispatch & delivery radius rules." },
    { title: "D2C Digital Brands", icon: Store, desc: "High-volume flash sales & social commerce." },
    { title: "Local Retailers", icon: Building2, desc: "In-store POS synchronization & local pickup." },
    { title: "B2B Wholesale", icon: Truck, desc: "Tiered volume pricing, net-30 terms & PO checkout." },
  ];

  return (
    <section id="use-cases" className="py-24 bg-[#06080d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tailored Workflows for Every <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Commerce Business Model.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you sell apparel, electronics, subscriptions, or B2B wholesale, OmniStore adapts to your catalog structure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {verticals.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-xl bg-[#0b0f19] border border-white/10 hover:border-indigo-500/40 transition-all space-y-2 group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
