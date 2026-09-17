"use client";

import { motion } from "framer-motion";
import { Server, Store, Globe, Layers, ArrowDown, Shield, Database } from "lucide-react";

export function MultiTenantSection() {
  const stores = [
    { name: "Aura Luxury Fashion", domain: "aura-fashion.com", catalog: "4,200 SKUs", region: "US East (N. Virginia)" },
    { name: "Nexus Electronics", domain: "nexustech.io", catalog: "18,900 SKUs", region: "EU West (Frankfurt)" },
    { name: "Verde Living Goods", domain: "verdeliving.co", catalog: "1,450 SKUs", region: "AP South (Singapore)" },
    { name: "Artisan Coffee Roasters", domain: "artisancoffee.org", catalog: "850 SKUs", region: "US West (Oregon)" },
  ];

  return (
    <section className="py-24 bg-[#06080d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Server className="w-3.5 h-3.5" />
            Multi-Tenant SaaS Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for One Store. <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Ready for Hundreds.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Manage multiple brand domains, client storefronts, or regional localized stores from a single master SaaS admin platform.
          </p>
        </div>

        {/* Master Infrastructure Diagram */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Master SaaS Engine Node */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-slate-900 border border-indigo-500/40 text-center shadow-2xl space-y-3 relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold">
              <Database className="w-4 h-4 text-indigo-400" />
              MASTER SAAS PLATFORM ARCHITECTURE
            </div>
            <h3 className="text-xl font-bold text-white">Isolated Tenant Data & Shared Edge Network</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Automated database tenant isolation, custom SSL certificate generation, and unified billing engine.
            </p>
          </motion.div>

          {/* Connection Lines */}
          <div className="flex justify-center text-indigo-400">
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </div>

          {/* Tenant Stores Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stores.map((s, idx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-[#0b0f19] border border-white/10 hover:border-purple-500/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <Store className="w-5 h-5 text-purple-400" />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    Tenant {idx + 1}
                  </span>
                </div>
                <div className="font-bold text-white text-sm line-clamp-1">{s.name}</div>
                <div className="text-xs text-indigo-400 font-mono flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  {s.domain}
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{s.catalog}</span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
