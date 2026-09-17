"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, CheckCircle2, ShieldCheck, Sparkles, X } from "lucide-react";

export function LiveToastNotifications() {
  const [currentToast, setCurrentToast] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const notifications = [
    {
      title: "New Merchant Onboarded",
      desc: "Aura Apparel launched store on aura-apparel.omnistore.shop",
      time: "Just now",
      icon: Sparkles,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    },
    {
      title: "High Volume Order Processed",
      desc: "Order #ORD-9842 ($1,250.00) fulfilled via automated FedEx route",
      time: "2 mins ago",
      icon: ShoppingBag,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      title: "SSL Domain Provisioned",
      desc: "Custom domain nexustech.io linked & encrypted in 1.4s",
      time: "4 mins ago",
      icon: ShieldCheck,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      title: "Multi-Store Sync Completed",
      desc: "Inventory updated across 4 regional warehouse nodes",
      time: "6 mins ago",
      icon: CheckCircle2,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentToast((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  const toast = notifications[currentToast];
  const Icon = toast.icon;

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none hidden sm:block max-w-sm">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto p-4 rounded-2xl bg-[#0d111a]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex items-start gap-3 relative group"
          >
            <div className={`p-2 rounded-xl border ${toast.color}`}>
              <Icon className="w-5 h-5" />
            </div>

            <div className="flex-1 pr-4 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{toast.title}</span>
                <span className="text-[10px] font-mono text-slate-400">{toast.time}</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">{toast.desc}</p>
            </div>

            <button
              onClick={() => setVisible(false)}
              className="text-slate-500 hover:text-slate-300 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
