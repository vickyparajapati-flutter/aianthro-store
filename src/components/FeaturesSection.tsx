"use client";

import { motion } from "framer-motion";
import {
  Store,
  Package,
  Boxes,
  ShoppingCart,
  Users,
  CreditCard,
  Truck,
  Percent,
  BarChart3,
  Palette,
  CheckCircle2,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Store Builder",
      desc: "Create responsive storefronts with drag-and-drop section editing, custom CSS, and instant live preview.",
      icon: Store,
      badge: "No Code",
    },
    {
      title: "Product Management",
      desc: "Manage matrix variants, SKU inventory, digital products, bundle pricing, and automated SEO tags.",
      icon: Package,
      badge: "Catalog OS",
    },
    {
      title: "Smart Inventory Sync",
      desc: "Multi-warehouse tracking with low-stock SMS alerts, automated reorder triggers, and supplier sync.",
      icon: Boxes,
      badge: "Real-time",
    },
    {
      title: "Order Lifecycle OS",
      desc: "Manage order stages from payment authorization to packing list print, shipping label, and tracking.",
      icon: ShoppingCart,
      badge: "Automated",
    },
    {
      title: "Customer CRM & LTV",
      desc: "Unified buyer profiles, purchase history, custom tags, automated email segmenting, and RFM scoring.",
      icon: Users,
      badge: "Intelligence",
    },
    {
      title: "Unified Payments",
      desc: "Accept 135+ currencies, local wallets (Apple/Google Pay), BNPL, recurring subscriptions, and manual invoicing.",
      icon: CreditCard,
      badge: "PCI-DSS Level 1",
    },
    {
      title: "Carrier Shipping Integrations",
      desc: "Direct integration with FedEx, UPS, DHL, and local couriers for real-time rates and automatic tracking generation.",
      icon: Truck,
      badge: "Global Freight",
    },
    {
      title: "Discounts & Promos",
      desc: "Build custom coupon codes, buy-one-get-one promotions, tiered cart discounts, and VIP membership perks.",
      icon: Percent,
      badge: "Conversion Boost",
    },
    {
      title: "Real-time Executive Analytics",
      desc: "Interactive dashboards detailing gross revenue, profit margins, conversion rate, refund rates, and ad ROI.",
      icon: BarChart3,
      badge: "BI Engine",
    },
    {
      title: "Store Customization & Branding",
      desc: "White-label branding, custom domains, custom typography, dark/light themes, and localized translations.",
      icon: Palette,
      badge: "White Label",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#06080d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Enterprise Feature Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Run <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Commerce at Scale.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Purpose-built tools engineered for conversion, performance, and complete operational clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-colors">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
