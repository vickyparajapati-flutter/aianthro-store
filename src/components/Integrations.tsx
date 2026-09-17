"use client";

import { motion } from "framer-motion";
import { CreditCard, Truck, BarChart3, Mail, Database, Globe, Share2, Layers } from "lucide-react";

export function Integrations() {
  const categories = [
    { title: "Payment Gateways", icon: CreditCard, count: "135+ Currencies", desc: "Stripe, PayPal, Apple Pay, Klarna" },
    { title: "Global Shipping & Carriers", icon: Truck, count: "Real-Time Rates", desc: "FedEx, UPS, DHL, EasyPost" },
    { title: "Analytics & Telemetry", icon: BarChart3, count: "Bi-Directional", desc: "Google Analytics 4, Mixpanel, PostHog" },
    { title: "Email & SMS Marketing", icon: Mail, count: "Automated Triggers", desc: "Klaviyo, Mailchimp, Twilio SMS" },
    { title: "ERP & Accounting", icon: Database, count: "Ledger Sync", desc: "QuickBooks, Xero, NetSuite" },
    { title: "CRM & Customer Success", icon: Share2, count: "Unified Profiles", desc: "HubSpot, Salesforce, Zendesk" },
  ];

  return (
    <section className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect the Ecosystem <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              You Already Use.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Native integrations with leading tools. Connect payments, shipping, ERPs, and marketing platforms with zero code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-indigo-300 border border-white/10">
                    {cat.count}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{cat.title}</h3>
                  <p className="text-xs text-slate-400">{cat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
