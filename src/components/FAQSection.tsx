"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is OmniStore Platform?",
      a: "OmniStore is an enterprise-grade all-in-one e-commerce SaaS platform designed to let businesses launch, manage, customize, and scale online storefronts, inventory, order processing, and customer relations from a single unified cloud system.",
    },
    {
      q: "Can I customize my store branding and theme?",
      a: "Yes! OmniStore features an interactive theme customizer supporting custom CSS, brand color palettes, fonts, custom domain linking, and custom section layouts with zero coding required.",
    },
    {
      q: "Can I use my own custom domain?",
      a: "Absolutely. All paid plans allow you to link custom domains (e.g. www.yourbrand.com) with automatic SSL certificate provisioning included.",
    },
    {
      q: "Can I manage multiple stores from one account?",
      a: "Yes. Our multi-tenant architecture enables you to run multiple separate storefronts, regional stores, or different brand domains with isolated databases under one master dashboard.",
    },
    {
      q: "Is OmniStore optimized for mobile shoppers?",
      a: "Every storefront built with OmniStore is 100% mobile-responsive, equipped with touch gesture sliders, quick-add carts, and 1-tap Apple Pay / Google Pay checkout options.",
    },
    {
      q: "Which payment gateways are supported?",
      a: "OmniStore integrates natively with Stripe, PayPal, Apple Pay, Google Pay, Klarna, local bank transfers, and supports over 135 international currencies.",
    },
    {
      q: "Can I migrate an existing store from Shopify or WooCommerce?",
      a: "Yes! We provide automated CSV and API import tools for products, SKUs, historical order logs, and customer profiles.",
    },
    {
      q: "Can you build custom enterprise features or integrations?",
      a: "Our Enterprise plan includes dedicated gRPC/GraphQL APIs and custom engineering support to integrate with your existing ERPs, CRMs, or warehouse systems.",
    },
    {
      q: "Is an admin dashboard included with my plan?",
      a: "Yes, all users gain access to our real-time control center featuring gross revenue graphs, order management, inventory alerts, and customer CRM tools.",
    },
    {
      q: "Can I upgrade or downgrade my plan later?",
      a: "You can change your subscription tier anytime directly inside your billing settings. Upgrades take effect immediately with prorated billing.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              We Have Answers.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about the OmniStore SaaS platform.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#0b0f19] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base hover:text-indigo-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
