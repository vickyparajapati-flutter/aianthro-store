"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, Store, LayoutDashboard, ShoppingCart, Settings, ArrowRight, X } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    { label: "Launch Store Customizer", desc: "Change theme colors & fonts", href: "#builder", icon: Store },
    { label: "View Live Dashboard Demo", desc: "Inspect real-time order streams", href: "#demo", icon: LayoutDashboard },
    { label: "Calculate ROI Savings", desc: "Interactive pricing estimator", href: "#pricing", icon: ShoppingCart },
    { label: "Platform Features", desc: "10 enterprise commerce modules", href: "#features", icon: Settings },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Small floating button trigger for non-keyboard users */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xl shadow-indigo-600/50 flex items-center gap-2 text-xs font-semibold backdrop-blur-xl transition-all hover:scale-105"
        title="Quick Command Bar (Cmd + K)"
      >
        <Command className="w-4 h-4" />
        <span className="hidden sm:inline">Cmd + K</span>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl rounded-2xl bg-[#0d111a] border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Search Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/10">
                <Search className="w-5 h-5 text-indigo-400 mr-3" />
                <input
                  type="text"
                  placeholder="Type a command or search feature..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-slate-500 font-sans"
                  autoFocus
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results */}
              <div className="p-2 space-y-1 max-h-80 overflow-y-auto">
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-slate-500 font-mono">
                  SaaS Quick Actions
                </div>
                {filtered.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <a
                      key={cmd.label}
                      href={cmd.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-indigo-300">
                            {cmd.label}
                          </div>
                          <div className="text-xs text-slate-400">{cmd.desc}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>

              <div className="px-4 py-2 bg-[#080c14] border-t border-white/5 text-[10px] text-slate-400 flex items-center justify-between font-mono">
                <span>Press ESC to close</span>
                <span>OmniStore Navigation</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
