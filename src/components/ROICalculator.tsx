"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";

export function ROICalculator() {
  const [monthlyOrders, setMonthlyOrders] = useState<number>(1500);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(85);

  const grossMonthlyVolume = monthlyOrders * avgOrderValue;
  const legacyCost = grossMonthlyVolume * 0.029 + monthlyOrders * 0.3 + 280; // 2.9% + $0.30 + $280 plugins
  const omniStoreCost = 89; // Fixed Growth plan
  const monthlySavings = Math.max(0, Math.round(legacyCost - omniStoreCost));
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-20 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0d111a] via-[#090d16] to-[#06080d] border border-indigo-500/30 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              SaaS ROI & Savings Estimator
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              See How Much You Save <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                By Switching to OmniStore.
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Drag the sliders below to calculate your estimated annual fee savings compared to legacy platforms with plugin bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            {/* Controls */}
            <div className="space-y-6 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              {/* Slider 1: Orders per month */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-300">Monthly Order Volume</span>
                  <span className="text-indigo-400 font-mono font-bold text-sm">
                    {monthlyOrders.toLocaleString()} Orders/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              {/* Slider 2: Average Order Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-300">Average Order Value (AOV)</span>
                  <span className="text-cyan-400 font-mono font-bold text-sm">
                    ${avgOrderValue}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center justify-between border-t border-white/5">
                <span>Calculated Gross Volume:</span>
                <span className="font-mono font-bold text-white">${grossMonthlyVolume.toLocaleString()}/mo</span>
              </div>
            </div>

            {/* Savings Display Tile */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/70 to-slate-900 border border-emerald-500/40 text-center space-y-4 shadow-xl relative overflow-hidden">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                ESTIMATED ANNUAL SAVINGS
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                +${yearlySavings.toLocaleString()}
                <span className="text-xs text-emerald-400 font-normal">/yr</span>
              </div>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                No 2.9% transaction markups, zero mandatory third-party plugin fees.
              </p>
              <div className="pt-2 flex justify-center">
                <a
                  href="#pricing"
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Claim These Savings Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
