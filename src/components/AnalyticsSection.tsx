"use client";

import { motion } from "framer-motion";
import {
  LineChart as LineChartIcon,
  TrendingUp,
  DollarSign,
  Users,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  Calendar,
  Globe,
  Smartphone,
  PieChart,
  Target,
} from "lucide-react";

export function AnalyticsSection() {
  const kpiCards = [
    {
      title: "Gross Sales Revenue",
      value: "$484,290.00",
      change: "+24.8%",
      isPositive: true,
      sub: "vs $388,100 last month",
      gradient: "from-indigo-500/20 to-indigo-600/5",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400",
    },
    {
      title: "Processed Orders",
      value: "12,840",
      change: "+18.2%",
      isPositive: true,
      sub: "Avg order value $37.71",
      gradient: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
    },
    {
      title: "Customer Profiles & LTV",
      value: "48,492",
      change: "+12.4%",
      isPositive: true,
      sub: "48% repeat buyer rate",
      gradient: "from-cyan-500/20 to-cyan-600/5",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400",
    },
    {
      title: "Store Conversion Rate",
      value: "4.92%",
      change: "+0.8%",
      isPositive: true,
      sub: "Checkout speed 340ms",
      gradient: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
    },
  ];

  const channelAttribution = [
    { channel: "Paid Meta & Google Ads", revenue: "$218,400", percent: 45, color: "bg-indigo-500" },
    { channel: "Organic Search (SEO)", revenue: "$145,200", percent: 30, color: "bg-cyan-500" },
    { channel: "Email & SMS Automated Flows", revenue: "$84,100", percent: 17, color: "bg-purple-500" },
    { channel: "Social Commerce & Direct", revenue: "$36,590", percent: 8, color: "bg-emerald-500" },
  ];

  const regionalTraffic = [
    { country: "United States (US)", sales: "$248,100", share: "51.2%", flag: "🇺🇸" },
    { country: "European Union (EU)", sales: "$118,400", share: "24.4%", flag: "🇪🇺" },
    { country: "United Kingdom (UK)", sales: "$72,300", share: "14.9%", flag: "🇬🇧" },
    { country: "Asia Pacific (APAC)", sales: "$45,490", share: "9.5%", flag: "🇸🇬" },
  ];

  return (
    <section className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <LineChartIcon className="w-3.5 h-3.5" />
            Executive Growth Analytics & Telemetry
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Know Exactly What Drives <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Your Commerce Performance.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-time multi-channel attribution, cohort retention tracking, global regional breakdown, and live sales forecasting.
          </p>
        </div>

        {/* Top 4 KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((kpi, idx) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${kpi.gradient} bg-[#0b0f19] border ${kpi.borderColor} shadow-xl hover:scale-[1.02] transition-transform space-y-3 relative`}
            >
              <div className="text-xs font-semibold text-slate-400">{kpi.title}</div>
              <div className="text-3xl font-extrabold text-white tracking-tight">{kpi.value}</div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                  <ArrowUpRight className="w-4 h-4" /> {kpi.change}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">{kpi.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Analytics Dashboard Telemetry Card */}
        <div className="rounded-3xl border border-white/10 bg-[#06080d] p-6 sm:p-8 shadow-2xl space-y-8 backdrop-blur-2xl">
          {/* Header Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Live Channel Revenue Stream & Margin Telemetry</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/20">
                  REAL-TIME SYNC
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Comparing current Q3 sales trajectory against previous year performance</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>Jul 1 - Sep 30, 2026</span>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-colors">
                <Download className="w-3.5 h-3.5" />
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Main Visual Dual-Axis Multi-Series Curve */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 shadow-md shadow-indigo-500/50" />
                  <span className="text-white font-bold">2026 Revenue ($484.2K)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400" />
                  <span className="text-slate-300">Order Volume (12.8K)</span>
                </div>
              </div>
              <div className="hidden sm:block">Peak Latency: 42ms</div>
            </div>

            <div className="h-64 sm:h-72 w-full relative rounded-2xl bg-[#0b0f19] border border-white/5 p-4">
              <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="telemetryGradPrimary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="telemetryGradSecondary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Gridlines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="140" x2="600" y2="140" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                {/* Primary Curve Area (Revenue) */}
                <path
                  d="M0,160 Q80,40 160,90 T320,20 T480,70 T600,30 L600,200 L0,200 Z"
                  fill="url(#telemetryGradPrimary)"
                />
                <path
                  d="M0,160 Q80,40 160,90 T320,20 T480,70 T600,30"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3.5"
                />

                {/* Secondary Curve (Orders Volume) */}
                <path
                  d="M0,175 Q80,90 160,120 T320,60 T480,110 T600,80 L600,200 L0,200 Z"
                  fill="url(#telemetryGradSecondary)"
                />
                <path
                  d="M0,175 Q80,90 160,120 T320,60 T480,110 T600,80"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  strokeDasharray="6 3"
                />

                {/* Live Data Beacon Dot */}
                <circle cx="600" cy="30" r="6" fill="#38bdf8" />
                <circle cx="600" cy="30" r="14" fill="#38bdf8" opacity="0.3" className="animate-ping" />
              </svg>
            </div>
          </div>

          {/* Bottom Breakdown Grid: Channel Attribution + Regional Share */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            {/* Channel Attribution Progress Bars */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-indigo-400" />
                  Channel Revenue Attribution
                </h4>
                <span className="text-[11px] text-slate-400 font-mono">100% Tracked</span>
              </div>

              <div className="space-y-3">
                {channelAttribution.map((ch) => (
                  <div key={ch.channel} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">{ch.channel}</span>
                      <span className="font-mono font-bold text-white">{ch.revenue} ({ch.percent}%)</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${ch.color} transition-all duration-500`}
                        style={{ width: `${ch.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Sales Breakdown */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  Global Sales Distribution
                </h4>
                <span className="text-[11px] text-slate-400 font-mono">4 Global Regions</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {regionalTraffic.map((reg) => (
                  <div
                    key={reg.country}
                    className="p-3.5 rounded-2xl bg-[#0b0f19] border border-white/5 space-y-1 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      <span>{reg.flag}</span>
                      <span className="line-clamp-1">{reg.country}</span>
                    </div>
                    <div className="text-base font-extrabold text-white font-mono">{reg.sales}</div>
                    <div className="text-[10px] text-cyan-400 font-mono">{reg.share} volume share</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
