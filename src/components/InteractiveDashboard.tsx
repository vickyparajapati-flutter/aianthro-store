"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Layers,
  Boxes,
  Users,
  Percent,
  CreditCard,
  Truck,
  LineChart,
  Settings,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  Filter,
  Download,
  Plus,
  Search,
} from "lucide-react";

export function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  const sidebarNav = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Orders", icon: ShoppingCart },
    { label: "Products", icon: Package },
    { label: "Categories", icon: Layers },
    { label: "Inventory", icon: Boxes },
    { label: "Customers", icon: Users },
    { label: "Discounts", icon: Percent },
    { label: "Payments", icon: CreditCard },
    { label: "Shipping", icon: Truck },
    { label: "Analytics", icon: LineChart },
    { label: "Settings", icon: Settings },
  ];

  const topKPIs = [
    {
      title: "Gross Revenue",
      value: "$348,920.00",
      change: "+24.8%",
      isPositive: true,
      subText: "vs $280,100 last month",
    },
    {
      title: "Total Orders",
      value: "4,829",
      change: "+18.2%",
      isPositive: true,
      subText: "Avg order value $72.25",
    },
    {
      title: "Active Customers",
      value: "18,492",
      change: "+12.4%",
      isPositive: true,
      subText: "48% repeat purchase rate",
    },
    {
      title: "Conversion Rate",
      value: "4.92%",
      change: "+1.2%",
      isPositive: true,
      subText: "Mobile checkout +3.4%",
    },
  ];

  const recentOrders = [
    { id: "ORD-9421", client: "Sophia Loren", date: "Just now", items: 3, total: "$284.50", status: "Completed" },
    { id: "ORD-9420", client: "Alexander Wright", date: "2 mins ago", items: 1, total: "$89.00", status: "Processing" },
    { id: "ORD-9419", client: "Camila Torres", date: "12 mins ago", items: 4, total: "$512.00", status: "Completed" },
    { id: "ORD-9418", client: "Jameson Miller", date: "25 mins ago", items: 2, total: "$145.00", status: "Shipped" },
  ];

  const topProducts = [
    { name: "Apex Pro Wireless Headphones", category: "Audio", sales: 1420, revenue: "$213,000" },
    { name: "Minimalist Ergonomics Chair", category: "Furniture", sales: 890, revenue: "$178,000" },
    { name: "Ultra-Light Carbon Watch", category: "Wearables", sales: 740, revenue: "$148,000" },
  ];

  return (
    <section id="demo" className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Control Center
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your Business, <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              At a Single Glance.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience the real-time operational dashboard that handles millions of dollars in commerce volume.
          </p>
        </div>

        {/* Dashboard Shell Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-[#06080d] shadow-2xl overflow-hidden"
        >
          {/* Top Admin Navigation Header */}
          <div className="bg-[#0e131f] px-4 sm:px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-400 font-mono ml-2 border-l border-white/10 pl-3">
                AIAnthro Operating System v3.4.0
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-9 pr-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-full sm:w-64"
                  readOnly
                />
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0">
                <Plus className="w-3.5 h-3.5" />
                <span>New Product</span>
              </button>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-12 min-h-[600px]">
            {/* Horizontal Scrollable Tabs Bar on Mobile / Sidebar on Desktop */}
            <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-[#0b0f19] border-r border-b md:border-b-0 border-white/5 p-3 space-y-1 overflow-x-auto flex md:flex-col gap-2 md:gap-1 scrollbar-none">
              <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-slate-500 font-mono hidden md:block">
                Store Modules
              </div>
              {sidebarNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.label)}
                    className={`shrink-0 flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.label === "Orders" && (
                      <span className="hidden md:inline-block px-1.5 py-0.5 rounded bg-rose-500 text-white text-[9px] font-bold">
                        12 New
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10 p-4 sm:p-6 bg-[#080c14] space-y-6">
              {/* Header Title */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Main Commerce Store Overview</h3>
                  <p className="text-xs text-slate-400">Live store metrics & real-time transactions</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs hover:bg-white/10">
                    <Filter className="w-3.5 h-3.5" />
                    Last 30 Days
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs hover:bg-white/10">
                    <Download className="w-3.5 h-3.5" />
                    Export CSV
                  </button>
                </div>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {topKPIs.map((kpi) => (
                  <div
                    key={kpi.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-all"
                  >
                    <div className="text-xs text-slate-400 font-medium">{kpi.title}</div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white mt-2">{kpi.value}</div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-xs font-bold text-emerald-400 flex items-center">
                        <ArrowUpRight className="w-3.5 h-3.5" /> {kpi.change}
                      </span>
                      <span className="text-[10px] text-slate-500">{kpi.subText}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts & Tables Grid */}
              <div className="grid grid-cols-12 gap-6">
                {/* Main Graph Card */}
                <div className="col-span-12 lg:col-span-8 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-white">Revenue Performance Curve</h4>
                      <p className="text-xs text-slate-400">Comparing current period vs previous year</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-indigo-500" />
                        <span className="text-slate-300">2026</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-slate-600" />
                        <span className="text-slate-400">2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-48 sm:h-56 w-full relative">
                    <svg className="w-full h-full" viewBox="0 0 500 180" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="dashboardGraphGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,150 Q100,20 200,90 T400,30 T500,70 L500,180 L0,180 Z"
                        fill="url(#dashboardGraphGrad)"
                      />
                      <path
                        d="M0,150 Q100,20 200,90 T400,30 T500,70"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="3"
                      />
                      <path
                        d="M0,160 Q100,80 200,120 T400,90 T500,110"
                        fill="none"
                        stroke="#475569"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Best Sellers */}
                <div className="col-span-12 lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <h4 className="text-sm font-bold text-white">Top Selling Products</h4>
                  <div className="space-y-3">
                    {topProducts.map((prod) => (
                      <div
                        key={prod.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-200 line-clamp-1">{prod.name}</div>
                          <div className="text-[10px] text-slate-400">{prod.category} • {prod.sales} sold</div>
                        </div>
                        <div className="text-right font-mono text-xs font-bold text-indigo-400">
                          {prod.revenue}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Orders Table */}
                <div className="col-span-12 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">Recent Customer Orders</h4>
                    <span className="text-xs text-indigo-400 font-semibold cursor-pointer hover:underline">
                      View all 4,829 orders →
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs min-w-[500px]">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400 uppercase font-mono text-[10px]">
                          <th className="py-2.5 px-3">Order ID</th>
                          <th className="py-2.5 px-3">Customer</th>
                          <th className="py-2.5 px-3">Time</th>
                          <th className="py-2.5 px-3">Items</th>
                          <th className="py-2.5 px-3">Total Amount</th>
                          <th className="py-2.5 px-3">Fulfillment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {recentOrders.map((ord) => (
                          <tr key={ord.id} className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 px-3 font-mono font-semibold text-indigo-400">{ord.id}</td>
                            <td className="py-3 px-3 font-medium text-slate-200">{ord.client}</td>
                            <td className="py-3 px-3 text-slate-400">{ord.date}</td>
                            <td className="py-3 px-3 text-slate-400">{ord.items} items</td>
                            <td className="py-3 px-3 font-bold text-white">{ord.total}</td>
                            <td className="py-3 px-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                                  ord.status === "Completed"
                                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                    : ord.status === "Processing"
                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                    : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                                }`}
                              >
                                {ord.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
