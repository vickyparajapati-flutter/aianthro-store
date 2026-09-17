"use client";

import { motion } from "framer-motion";
import { Layers, RefreshCw, SlidersHorizontal, BarChart3, AlertCircle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: Layers,
      title: "Too Many Fragmented Tools",
      description:
        "Juggling separate software for storefronts, inventory, order processing, and payment plugins slows down execution and increases SaaS costs.",
    },
    {
      icon: RefreshCw,
      title: "Manual Stock & Inventory Sync",
      description:
        "OutOf-stock overselling and manual spreadsheet updates waste countless hours and result in frustrated customers and refund requests.",
    },
    {
      icon: SlidersHorizontal,
      title: "Clunky Order & Shipping Workflows",
      description:
        "Fulfilling orders across multiple warehouses without automated tracking integration leads to dispatch delays and operational chaos.",
    },
    {
      icon: BarChart3,
      title: "Siloed Business & Sales Insights",
      description:
        "Without a unified data dashboard, predicting customer lifetime value, ad ROI, and bestselling categories requires complex exports.",
    },
  ];

  return (
    <section className="py-24 bg-[#06080d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            The Fragmented Commerce Trap
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Running an online store <br className="hidden sm:inline" />
            <span className="text-slate-400 font-normal">shouldn't feel like wrestling software.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Traditional commerce platforms force merchants to stitch together dozens of costly third-party plugins that break with every update.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={prob.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-rose-500/30 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-300 transition-colors">
                  {prob.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{prob.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
