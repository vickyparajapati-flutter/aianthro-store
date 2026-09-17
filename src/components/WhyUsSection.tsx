"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Smartphone, LineChart, Palette, Layers } from "lucide-react";

export function WhyUsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "5-Minute Lightning Setup",
      desc: "Launch your storefront without developer assistance using pre-configured industry templates.",
    },
    {
      icon: Layers,
      title: "Scalable Microservices",
      desc: "Handles flash sales and Black Friday traffic spikes without dropping speed or uptime.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First UX Engine",
      desc: "Designed specifically for thumb navigation, sub-second page transitions, and quick payment sheets.",
    },
    {
      icon: LineChart,
      title: "Actionable BI Telemetry",
      desc: "Stop guessing. Get granular insight into sales velocity, cart abandonment, and customer cohorts.",
    },
    {
      icon: Palette,
      title: "Full White-Label Branding",
      desc: "Custom CSS, custom domains, localized translations, and full branding control.",
    },
    {
      icon: ShieldCheck,
      title: "Centralized Management",
      desc: "Control products, orders, returns, and inventory across all your digital channels in one tab.",
    },
  ];

  return (
    <section className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why High-Growth Brands <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Choose OmniStore SaaS.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Built from the ground up for modern digital commerce operators who demand reliability and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-indigo-500/40 transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
