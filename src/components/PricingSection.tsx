"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { RegistrationModal } from "./RegistrationModal";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: "Starter",
      badge: "Bootstrap Brands",
      desc: "Perfect for new merchants launching their first digital storefront.",
      monthlyPrice: 29,
      yearlyPrice: 24,
      highlight: false,
      features: [
        "1 Online Storefront",
        "Up to 500 Products",
        "Unified Checkout & Cart",
        "Standard Analytics",
        "100 GB Monthly Bandwidth",
        "Email Support",
      ],
    },
    {
      name: "Growth",
      badge: "Most Popular",
      desc: "For rapidly growing D2C brands requiring multi-channel scale.",
      monthlyPrice: 89,
      yearlyPrice: 71,
      highlight: true,
      features: [
        "Up to 5 Storefronts",
        "Unlimited Products",
        "Multi-Warehouse Inventory",
        "Advanced LTV Analytics",
        "Automated Coupon Rules",
        "Priority 24/7 Support",
        "Custom Domain & White Label",
      ],
    },
    {
      name: "Enterprise",
      badge: "Custom Scale",
      desc: "Dedicated cloud infrastructure with custom API integrations and SLAs.",
      monthlyPrice: 299,
      yearlyPrice: 239,
      highlight: false,
      features: [
        "Unlimited Tenant Stores",
        "Dedicated gRPC / REST APIs",
        "Custom ERP & CRM Connectors",
        "99.99% SLA Uptime Guarantee",
        "Dedicated Success Manager",
        "Custom Theme Engineering",
      ],
    },
  ];

  return (
    <>
      <section id="pricing" className="py-24 bg-[#06080d] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Transparent Pricing
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Simple Plans That Scale <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                With Your Revenue.
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              No hidden transaction fees. Upgrade, downgrade, or cancel anytime with one click.
            </p>

            <div className="flex items-center justify-center gap-4 pt-6">
              <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-white" : "text-slate-400"}`}>
                Monthly Billing
              </span>
              <button
                onClick={() => {
                  const nextCycle = billingCycle === "monthly" ? "yearly" : "monthly";
                  setBillingCycle(nextCycle);
                }}
                className="relative w-14 h-8 rounded-full bg-white/10 p-1 border border-white/10 transition-colors focus:outline-none"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-indigo-500 transition-transform ${
                    billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-white" : "text-slate-400"}`}>
                  Annual Billing
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  Save 20%
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {plans.map((plan, idx) => {
              const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.highlight
                      ? "bg-gradient-to-b from-indigo-950/80 via-[#0d111a] to-[#080c14] border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-105 z-10"
                      : "bg-[#0b0f19] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white font-mono text-[10px] uppercase font-bold tracking-widest shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <div className="text-xl font-bold text-white mb-1">{plan.name}</div>
                      <p className="text-xs text-slate-400">{plan.desc}</p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">${price}</span>
                      <span className="text-xs text-slate-400 font-mono">/ month</span>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        What's Included:
                      </div>
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={triggerConfetti}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                        plan.highlight
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30"
                          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      }`}
                    >
                      <span>Start 14-Day Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
