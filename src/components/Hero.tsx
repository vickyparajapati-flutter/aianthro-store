"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  ShoppingBag,
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  PackageCheck,
} from "lucide-react";
import { RegistrationModal } from "./RegistrationModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner text-xs sm:text-sm font-medium text-indigo-300 mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="font-semibold text-white">AIAnthro Store OS 3.0</span>
              <span className="text-slate-400">| Intelligent Multi-Tenant Engine</span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
            </motion.div>
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Launch Your Online Store. <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Scale Your Global Business.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed"
            >
              Everything you need to build, manage, customize, and grow a high-converting multi-tenant online store — all powered by AIAnthro Store SaaS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/admin"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold backdrop-blur-md hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                <span>Launch Live Admin Portal</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 relative max-w-6xl mx-auto"
          >
            <div className="rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl">
              <div className="bg-[#0b0f19] px-4 py-3 rounded-t-xl border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-400 font-mono w-1/2 sm:w-1/3 justify-center">
                  <span className="text-indigo-400 font-semibold">https://</span>app.aianthrostore.io/admin
                </div>
                <div className="text-xs text-emerald-400 font-semibold">Store Engine Active</div>
              </div>

              <div className="bg-[#080c14] p-4 sm:p-6 rounded-b-xl grid grid-cols-12 gap-4 border border-white/5">
                <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs text-slate-400">Total Sales</div>
                    <div className="text-xl sm:text-2xl font-bold text-white mt-2">$284,920</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs text-slate-400">Total Orders</div>
                    <div className="text-xl sm:text-2xl font-bold text-white mt-2">3,842</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs text-slate-400">Active Customers</div>
                    <div className="text-xl sm:text-2xl font-bold text-white mt-2">14,920</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs text-slate-400">Conversion Rate</div>
                    <div className="text-xl sm:text-2xl font-bold text-white mt-2">4.82%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
