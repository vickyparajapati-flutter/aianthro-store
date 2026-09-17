"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, KeyRound, Server, HardDrive, RefreshCw } from "lucide-react";

export function SecurityTrust() {
  const pillars = [
    { icon: Lock, title: "PCI-DSS Level 1 Encryption", desc: "Tokenized payment card security directly through verified payment processors." },
    { icon: KeyRound, title: "Role-Based Access Control", desc: "Restrict staff permissions by store location, financial data, or fulfillment." },
    { icon: ShieldCheck, title: "Automated Fraud Shield", desc: "AI anomaly detection flags suspicious high-risk order velocity." },
    { icon: Server, title: "Isolated Tenant Architecture", desc: "Strict database partitioning ensures data sovereignty for every store." },
    { icon: HardDrive, title: "Daily Automated Backups", desc: "Point-in-time state restoration for products, order logs, and customer records." },
    { icon: RefreshCw, title: "99.99% Uptime Guarantee", desc: "Edge CDN routing with automatic failover across multi-region clusters." },
  ];

  return (
    <section className="py-24 bg-[#06080d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Enterprise Security & Reliability
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bank-Grade Infrastructure <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Engineered for Zero Downtime.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We handle infrastructure security, server maintenance, and compliance so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
