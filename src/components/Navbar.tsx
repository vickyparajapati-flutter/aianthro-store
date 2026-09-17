"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Layers,
  Sparkles,
  CreditCard,
  Building2,
  Globe,
  BarChart3,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { RegistrationModal } from "./RegistrationModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productFeatures = [
    { title: "Store Builder", desc: "Drag & drop theme customization", icon: Store },
    { title: "Multi-Tenant Cloud", desc: "Manage 100+ storefronts easily", icon: Layers },
    { title: "Smart Inventory", desc: "Automated stock & alert system", icon: Zap },
    { title: "Global Payments", desc: "135+ currencies & local gateways", icon: CreditCard },
  ];

  const solutions = [
    { title: "D2C Brands", desc: "Direct to consumer storefronts", icon: ShoppingBag },
    { title: "B2B Commerce", desc: "Wholesale, custom pricing & quotes", icon: Building2 },
    { title: "Global Enterprise", desc: "Multi-region, multi-currency scale", icon: Globe },
    { title: "Omnichannel Retail", desc: "POS & online sync in real time", icon: BarChart3 },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#06080d]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
            : "py-5 bg-[#06080d]/80 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* AIAnthro Store Logo */}
            <a href="#" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
                    AIAnthro <span className="text-indigo-400">Store</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-semibold tracking-wide uppercase px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    SaaS Engine
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("product")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                  Product
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "product" ? "rotate-180 text-indigo-400" : "text-slate-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "product" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 mt-2 p-3 bg-[#0d111a] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl grid grid-cols-1 gap-1"
                    >
                      {productFeatures.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.title}
                            href="#features"
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-slate-400">{item.desc}</div>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#features"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Pricing
              </a>
              <a
                href="/store"
                className="px-4 py-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 rounded-lg hover:bg-emerald-500/10 border border-emerald-500/20 transition-colors flex items-center gap-1"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Customer Storefront</span>
              </a>
              <a
                href="/admin"
                className="px-4 py-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 rounded-lg hover:bg-indigo-500/10 border border-indigo-500/20 transition-colors flex items-center gap-1"
              >
                <span>Merchant Admin Portal</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/admin"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Merchant Sign In
              </a>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Create Store</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-indigo-400" /> : <Menu className="w-6 h-6 text-indigo-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#0d111a] border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl relative z-50 overflow-hidden"
            >
              <div className="space-y-2">
                <a
                  href="/store"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-emerald-400 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Live Customer Storefront</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </a>

                <a
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-indigo-400 bg-indigo-500/10 rounded-xl border border-indigo-500/20"
                >
                  <span className="flex items-center gap-2">
                    <span>Live Merchant Admin Portal</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-indigo-400" />
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsRegisterOpen(true);
                  }}
                  className="w-full py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  <span>Create Storefront Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Registration Onboarding Modal */}
      <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </>
  );
}
