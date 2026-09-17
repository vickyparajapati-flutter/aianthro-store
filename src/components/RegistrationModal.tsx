"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Globe,
  Building2,
  Package,
  Layers,
  X,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State
  const [storeName, setStoreName] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [industry, setIndustry] = useState<string>("Fashion & Apparel");
  const [currency, setCurrency] = useState<string>("USD ($)");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!storeName) return;
      setDomain(storeName.toLowerCase().replace(/[^a-z0-9]/g, "") + ".omnistore.shop");
      setStep(2);
    } else if (step === 2) {
      if (!email) return;
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(3);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
        });
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="w-full max-w-xl rounded-3xl bg-[#0d111a] border border-white/10 shadow-2xl p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
            <Store className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold text-white">Merchant Onboarding Portal</span>
        </div>

        {/* Step Progress Pills */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-indigo-500" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Store Setup */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-white">Name Your Store</h3>
              <p className="text-xs text-slate-400 mt-1">
                Enter your brand or business name to generate your cloud SaaS storefront.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Storefront Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Apparel, CyberTech"
                  value={storeName}
                  onChange={(e) => {
                    setStoreName(e.target.value);
                    setDomain(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "") + ".omnistore.shop");
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              {storeName && (
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 flex items-center gap-2 font-mono">
                  <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Subdomain: {domain}</span>
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Industry Niche
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="Fashion & Apparel">Fashion & Apparel</option>
                  <option value="Electronics & Tech">Electronics & Tech</option>
                  <option value="Beauty & Care">Beauty & Cosmetics</option>
                  <option value="Food & Grocery">Food & Gourmet</option>
                  <option value="B2B Wholesale">B2B Wholesale</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Continue to Account Setup</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Step 2: Account Credentials */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-white">Owner Credentials</h3>
              <p className="text-xs text-slate-400 mt-1">
                Create your administrative login to access your merchant dashboard.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="owner@yourbrand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Store Operating Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="USD ($)">USD ($) - US Dollar</option>
                  <option value="EUR (€)">EUR (€) - Euro</option>
                  <option value="GBP (£)">GBP (£) - British Pound</option>
                  <option value="INR (₹)">INR (₹) - Indian Rupee</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Zap className="w-4 h-4 animate-spin text-white" />
                  <span>Provisioning Cloud Storefront...</span>
                </>
              ) : (
                <>
                  <span>Deploy My Storefront</span>
                  <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 3: Deployment Success */}
        {step === 3 && (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Store Successfully Provisioned!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                <span className="font-bold text-white">{storeName}</span> is now active on our multi-tenant cloud architecture.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-400">Store Domain:</span>
                <span className="text-indigo-400 font-bold">{domain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Industry:</span>
                <span className="text-slate-200">{industry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">SSL Status:</span>
                <span className="text-emerald-400 font-bold">Encrypted & Active</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/admin"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                <span>Launch Merchant Admin Portal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
