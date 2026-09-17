"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  CheckCircle2,
  Store,
  Trash2,
  Grid,
} from "lucide-react";

export default function LiveStorefrontPage() {
  const [activeStore, setActiveStore] = useState<string>("aura"); // "aura" | "nexustech" | "verdeliving"
  const [cart, setCart] = useState<Array<{ id: number; title: string; price: number; quantity: number; image: string }>>([
    {
      id: 1,
      title: "AIAnthro Pro Wireless Headphones",
      price: 349.00,
      quantity: 1,
      image: "/images/headphones_product_1789669539731.jpg",
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const storesData = {
    aura: {
      name: "Aura Luxury Studio",
      slug: "aura-studio.shop.aianthro.com",
      badge: "Luxury Tech & Apparel",
      bgGradient: "from-indigo-950 via-[#0d111a] to-slate-900",
      accent: "#6366f1",
      categories: ["All", "Audio", "Accessories", "Furniture", "Wearables"],
      catalog: [
        {
          id: 1,
          title: "AIAnthro Pro Wireless Headphones",
          category: "Audio",
          price: 349.00,
          rating: 4.9,
          reviews: 320,
          badge: "Best Seller",
          image: "/images/headphones_product_1789669539731.jpg",
        },
        {
          id: 2,
          title: "Tactile Mechanical Keyboard OLED",
          category: "Accessories",
          price: 189.00,
          rating: 4.8,
          reviews: 194,
          badge: "New Drop",
          image: "/images/keyboard_product_1789669548762.jpg",
        },
        {
          id: 3,
          title: "Minimalist Ergonomic Studio Chair",
          category: "Furniture",
          price: 420.00,
          rating: 5.0,
          reviews: 88,
          badge: "Limited",
          image: "/images/chair_product_1789669559853.jpg",
        },
        {
          id: 4,
          title: "Ultra-Light Carbon Fiber Watch",
          category: "Wearables",
          price: 349.00,
          rating: 4.7,
          reviews: 142,
          badge: "Popular",
          image: "/images/watch_product_1789669569521.jpg",
        },
      ],
    },
    nexustech: {
      name: "Nexus Pro Electronics",
      slug: "nexustech.shop.aianthro.com",
      badge: "Professional Gear & Cameras",
      bgGradient: "from-cyan-950 via-[#09111c] to-slate-900",
      accent: "#06b6d4",
      categories: ["All", "Cameras", "Audio", "Accessories"],
      catalog: [
        {
          id: 5,
          title: "4K Cinema Mirrorless Camera 80mm",
          category: "Cameras",
          price: 1890.00,
          rating: 5.0,
          reviews: 412,
          badge: "Pro Choice",
          image: "/images/camera_product_1789669943610.jpg",
        },
        {
          id: 6,
          title: "Acoustic Wooden HiFi Studio Speaker",
          category: "Audio",
          price: 450.00,
          rating: 4.9,
          reviews: 215,
          badge: "Audiophile",
          image: "/images/speaker_product_1789669954934.jpg",
        },
        {
          id: 1,
          title: "AIAnthro Pro Wireless Headphones",
          category: "Audio",
          price: 349.00,
          rating: 4.9,
          reviews: 320,
          badge: "Best Seller",
          image: "/images/headphones_product_1789669539731.jpg",
        },
        {
          id: 2,
          title: "Tactile Mechanical Keyboard OLED",
          category: "Accessories",
          price: 189.00,
          rating: 4.8,
          reviews: 194,
          badge: "New Drop",
          image: "/images/keyboard_product_1789669548762.jpg",
        },
      ],
    },
    verdeliving: {
      name: "Verde Lifestyle & Footwear",
      slug: "verdeliving.shop.aianthro.com",
      badge: "Sustainable Goods & Fashion",
      bgGradient: "from-emerald-950 via-[#0a1412] to-slate-900",
      accent: "#10b981",
      categories: ["All", "Footwear", "Lifestyle"],
      catalog: [
        {
          id: 7,
          title: "Minimalist Italian Leather Sneakers",
          category: "Footwear",
          price: 240.00,
          rating: 4.9,
          reviews: 189,
          badge: "Handcrafted",
          image: "/images/shoes_product_1789669965324.jpg",
        },
        {
          id: 8,
          title: "Urban Water-Resistant Commuter Backpack",
          category: "Lifestyle",
          price: 165.00,
          rating: 4.8,
          reviews: 290,
          badge: "Weatherproof",
          image: "/images/backpack_product_1789669979482.jpg",
        },
        {
          id: 4,
          title: "Ultra-Light Carbon Fiber Watch",
          category: "Lifestyle",
          price: 349.00,
          rating: 4.7,
          reviews: 142,
          badge: "Popular",
          image: "/images/watch_product_1789669569521.jpg",
        },
        {
          id: 3,
          title: "Minimalist Ergonomic Studio Chair",
          category: "Lifestyle",
          price: 420.00,
          rating: 5.0,
          reviews: 88,
          badge: "Limited",
          image: "/images/chair_product_1789669559853.jpg",
        },
      ],
    },
  };

  const currentStore = storesData[activeStore as keyof typeof storesData];

  const addToCart = (item: typeof currentStore.catalog[0]) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { id: item.id, title: item.title, price: item.price, quantity: 1, image: item.image }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredCatalog = currentStore.catalog.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col font-sans relative">
      {/* SaaS Multi-Store Platform Switcher Header */}
      <div className="bg-gradient-to-r from-indigo-950 via-[#0b0f19] to-slate-900 border-b border-white/10 px-4 py-2.5 flex flex-wrap items-center justify-between text-xs gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-slate-300 font-bold uppercase tracking-wider text-[11px]">
            AIAnthro Multi-Tenant SaaS Network
          </span>
        </div>

        {/* Store Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-slate-400 text-[11px] hidden sm:inline">Switch Active Tenant:</span>
          <button
            onClick={() => {
              setActiveStore("aura");
              setSelectedCategory("All");
            }}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
              activeStore === "aura"
                ? "bg-indigo-600 text-white font-bold shadow-md"
                : "bg-white/5 text-slate-400 hover:text-white"
            }`}
          >
            Aura Studio
          </button>
          <button
            onClick={() => {
              setActiveStore("nexustech");
              setSelectedCategory("All");
            }}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
              activeStore === "nexustech"
                ? "bg-cyan-600 text-white font-bold shadow-md"
                : "bg-white/5 text-slate-400 hover:text-white"
            }`}
          >
            Nexus Pro
          </button>
          <button
            onClick={() => {
              setActiveStore("verdeliving");
              setSelectedCategory("All");
            }}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
              activeStore === "verdeliving"
                ? "bg-emerald-600 text-white font-bold shadow-md"
                : "bg-white/5 text-slate-400 hover:text-white"
            }`}
          >
            Verde Lifestyle
          </button>
        </div>
      </div>

      {/* Main Store Header */}
      <header className="bg-[#0b0f19] border-b border-white/10 px-4 sm:px-8 py-4 sticky top-0 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-base shadow-lg transition-colors"
              style={{ backgroundColor: currentStore.accent }}
            >
              {currentStore.name[0]}
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-extrabold text-white">{currentStore.name}</h1>
              <span className="text-[10px] text-indigo-400 font-mono">{currentStore.slug}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
            {currentStore.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "font-bold text-white border-b-2" : "text-slate-400 hover:text-white"}
                style={{ borderColor: selectedCategory === cat ? currentStore.accent : "transparent" }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/admin"
              className="hidden sm:inline-block text-xs text-indigo-400 hover:text-indigo-300 px-3 py-1.5 rounded-lg border border-indigo-500/20 bg-indigo-500/10 font-mono"
            >
              ← Admin Portal
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="px-4 py-2 rounded-xl text-white font-bold text-xs shadow-lg flex items-center gap-2 relative transition-transform hover:scale-105"
              style={{ backgroundColor: currentStore.accent }}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Bag ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Catalog View */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full space-y-8">
        {/* Dynamic Store Hero Banner */}
        <div className={`p-8 sm:p-12 rounded-3xl bg-gradient-to-r ${currentStore.bgGradient} border border-white/10 relative overflow-hidden space-y-4`}>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/10">
            {currentStore.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentStore.name} Catalog
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            Multi-tenant storefront isolated database node serving custom products, pricing, and domain routes.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white">Featured Products</h3>
            <span className="text-xs text-slate-400 font-mono">({filteredCatalog.length} items)</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-full sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCatalog.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0b0f19] border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-all group flex flex-col justify-between"
            >
              <div className="h-52 relative overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 text-white font-mono text-[10px] font-bold backdrop-blur-md border border-white/10">
                  {item.badge}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div className="text-[10px] text-slate-400 uppercase tracking-wide font-mono">
                  {item.category}
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-bold">{item.rating}</span>
                  <span className="text-slate-500 text-[10px]">({item.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-base font-extrabold text-white">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3.5 py-1.5 rounded-xl text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-transform hover:scale-105"
                    style={{ backgroundColor: currentStore.accent }}
                  >
                    <Plus className="w-3.5 h-3.5" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Shopping Cart Drawer Side-panel */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md bg-[#0d111a] border-l border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-base font-bold text-white">Your Shopping Bag</h3>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                    <p className="text-sm text-slate-400">Your bag is currently empty.</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
                        />
                        <div className="space-y-1 flex-1">
                          <div className="text-xs font-bold text-white line-clamp-1">{item.title}</div>
                          <div className="text-[11px] text-indigo-400 font-mono">
                            ${item.price.toFixed(2)} x {item.quantity}
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-rose-400 hover:text-rose-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-white/10 pt-4 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Subtotal Amount:</span>
                    <span className="text-lg font-extrabold text-white font-mono">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert(`Demo Order Placed! Order routed to ${currentStore.name} Admin Portal.`);
                      setCart([]);
                      setIsCartOpen(false);
                    }}
                    className="w-full py-3.5 rounded-xl text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: currentStore.accent }}
                  >
                    <span>Proceed to Express Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
