"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Store,
  Package,
  ShoppingCart,
  Users,
  CreditCard,
  Boxes,
  Truck,
  LineChart,
  Sparkles,
  Zap,
} from "lucide-react";

export function SolutionSection() {
  const [activeModule, setActiveModule] = useState<string>("Core Engine");

  const modules = [
    {
      id: "store",
      title: "Storefront Engine",
      icon: Store,
      desc: "Blazing fast headless storefronts with custom domains & SEO",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "products",
      title: "Products & Catalog",
      icon: Package,
      desc: "Manage variants, digital goods, matrix pricing & tags",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "orders",
      title: "Order Fulfillment",
      icon: ShoppingCart,
      desc: "Automated routing, partial shipping & returns portal",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "customers",
      title: "Customer CRM",
      icon: Users,
      desc: "Unified profiles, LTV tracking, segmenting & loyalty",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: "payments",
      title: "Global Payments",
      icon: CreditCard,
      desc: "135+ currencies, Apple Pay, Stripe, PayPal & local wallets",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "inventory",
      title: "Smart Inventory",
      icon: Boxes,
      desc: "Real-time stock reservation across multiple warehouses",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: "shipping",
      title: "Shipping & Carriers",
      icon: Truck,
      desc: "Live rate calculation, shipping labels & tracking links",
      color: "from-rose-500 to-rose-600",
    },
    {
      id: "analytics",
      title: "Executive Analytics",
      icon: LineChart,
      desc: "Cohort retention, sales forecasting & channel attribution",
      color: "from-violet-500 to-violet-600",
    },
  ];

  return (
    <section className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Unified AIAnthro Solution
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One Platform. <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Your Entire Commerce Operation.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Replace 10+ disjointed SaaS subscriptions with an all-in-one architecture designed for speed, scale, and simplicity.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-12 px-4 flex items-center justify-center">
          <div className="z-20 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-900 p-1 shadow-2xl shadow-indigo-500/30 flex items-center justify-center relative cursor-pointer"
              onClick={() => setActiveModule("Core Engine")}
            >
              <div className="w-full h-full rounded-full bg-[#0b0f19] flex flex-col items-center justify-center p-4 border border-indigo-400/30">
                <Zap className="w-8 h-8 text-indigo-400 animate-pulse mb-2" />
                <span className="text-[10px] text-indigo-300 uppercase tracking-widest font-mono font-bold">
                  AIAnthro
                </span>
                <span className="text-sm font-extrabold text-white text-center">
                  Store Core
                </span>
              </div>
            </motion.div>
          </div>

          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-none">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              const isSelected = activeModule === mod.title;
              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="pointer-events-auto flex flex-col justify-center items-center"
                >
                  <div
                    onMouseEnter={() => setActiveModule(mod.title)}
                    className={`p-4 rounded-2xl bg-[#0d111a] border transition-all duration-300 cursor-pointer text-center w-full max-w-[200px] ${
                      isSelected
                        ? "border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/20 scale-105"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1">{mod.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{mod.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
