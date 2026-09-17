"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Star,
  Plus,
  Heart,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

export function StorefrontPreview() {
  const catalog = [
    {
      id: 1,
      title: "Omni Pro Noise-Cancelling Headphones",
      category: "Audio Equipment",
      price: "$349.00",
      rating: 4.9,
      reviews: 320,
      badge: "Best Seller",
      imageBg: "from-indigo-600/30 to-purple-600/30",
    },
    {
      id: 2,
      title: "Tactile Mechanical Keyboard OLED",
      category: "Workstation Accessories",
      price: "$189.00",
      rating: 4.8,
      reviews: 194,
      badge: "New Release",
      imageBg: "from-cyan-600/30 to-blue-600/30",
    },
    {
      id: 3,
      title: "Ultra-Thin Studio Monitor Stand",
      category: "Desk Setup",
      price: "$129.00",
      rating: 5.0,
      reviews: 88,
      badge: "Limited Stock",
      imageBg: "from-purple-600/30 to-pink-600/30",
    },
    {
      id: 4,
      title: "Precision Ergonomic Trackball Mouse",
      category: "Workstation Accessories",
      price: "$99.00",
      rating: 4.7,
      reviews: 142,
      badge: "Popular",
      imageBg: "from-emerald-600/30 to-teal-600/30",
    },
  ];

  return (
    <section className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5" />
            Merchant Storefront Demo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Converting Storefronts <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Engineered for Speed & Retention.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sub-500ms page loads, instant cart checkouts, and mobile-optimized user flows built in.
          </p>
        </div>

        {/* Mock Store Container */}
        <div className="rounded-2xl border border-white/10 bg-[#06080d] overflow-hidden shadow-2xl">
          {/* Store Navbar */}
          <div className="px-6 py-4 bg-[#0d111a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                A
              </div>
              <span className="text-base font-bold text-white tracking-wide">Aura Studio</span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
              <span className="text-indigo-400 font-semibold">Home</span>
              <span className="hover:text-white cursor-pointer">Shop All</span>
              <span className="hover:text-white cursor-pointer">New Arrivals</span>
              <span className="hover:text-white cursor-pointer">Best Sellers</span>
              <span className="hover:text-white cursor-pointer">Journal</span>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white">
                <Search className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-2">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Bag (3)</span>
              </button>
            </div>
          </div>

          {/* Banner */}
          <div className="p-8 sm:p-12 bg-gradient-to-r from-indigo-950 via-[#0d111a] to-slate-900 border-b border-white/10 relative overflow-hidden flex items-center justify-between">
            <div className="max-w-xl space-y-3 z-10">
              <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                FEATURED DROP
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                The Next Evolution of Studio Acoustics.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Precision tuned audio drivers wrapped in aircraft-grade aluminum. Free global express delivery.
              </p>
              <button className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-colors inline-flex items-center gap-2">
                <span>Shop Featured Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">Trending Collection</h4>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter by: Popularity</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {catalog.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-[#0b0f19] border border-white/10 overflow-hidden hover:border-indigo-500/30 transition-all group flex flex-col justify-between"
                >
                  <div className={`h-48 bg-gradient-to-br ${item.imageBg} relative flex items-center justify-center p-4`}>
                    <ShoppingBag className="w-12 h-12 text-white/30 group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-white font-mono text-[10px] backdrop-blur-md">
                      {item.badge}
                    </span>
                    <button className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white/80 hover:text-white backdrop-blur-md">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide font-mono">
                      {item.category}
                    </div>
                    <h5 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                      {item.title}
                    </h5>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold">{item.rating}</span>
                      <span className="text-slate-500 text-[10px]">({item.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-base font-extrabold text-white">{item.price}</span>
                      <button className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1 transition-colors">
                        <Plus className="w-3.5 h-3.5" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
