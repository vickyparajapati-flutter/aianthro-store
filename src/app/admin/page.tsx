"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Layers,
  Boxes,
  Users,
  Percent,
  CreditCard,
  Truck,
  LineChart,
  Settings,
  Plus,
  Search,
  Filter,
  ArrowUpRight,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Eye,
  Store,
  Palette,
  Globe,
  RotateCcw,
  Check,
  Tag,
  ShieldCheck,
  Sliders,
  Menu,
  X,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");
  const [mobileAdminNavOpen, setMobileAdminNavOpen] = useState(false);

  // Dynamic Store Branding State
  const [storeName, setStoreName] = useState<string>("Lumina Apparel");
  const [brandColor, setBrandColor] = useState<string>("#6366f1");
  const [storeCurrency, setStoreCurrency] = useState<string>("USD ($)");
  const [taxRate, setTaxRate] = useState<string>("8.5%");

  // Add Product Modal State & Initial Data
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [products, setProducts] = useState([
    { id: "SKU-901", name: "Apex Pro Wireless Headphones", category: "Audio", price: 299.00, stock: 142, status: "In Stock" },
    { id: "SKU-902", name: "Tactile Mechanical Keyboard OLED", category: "Accessories", price: 189.00, stock: 88, status: "In Stock" },
    { id: "SKU-903", name: "Minimalist Ergonomic Chair", category: "Furniture", price: 420.00, stock: 12, status: "Low Stock" },
    { id: "SKU-904", name: "Ultra-Light Carbon Watch", category: "Wearables", price: 349.00, stock: 65, status: "In Stock" },
  ]);

  const [newProdName, setNewProdName] = useState("");
  const [newProdCategory, setNewProdCategory] = useState("Audio");
  const [newProdPrice, setNewProdPrice] = useState("");
  const [newProdStock, setNewProdStock] = useState("");

  // Categories Tab State
  const [categories, setCategories] = useState([
    { id: "CAT-1", name: "Audio Equipment", count: 48, status: "Active" },
    { id: "CAT-2", name: "Accessories", count: 124, status: "Active" },
    { id: "CAT-3", name: "Furniture & Workspace", count: 32, status: "Active" },
    { id: "CAT-4", name: "Wearable Tech", count: 19, status: "Active" },
  ]);
  const [newCatName, setNewCatName] = useState("");

  // Inventory Tab State
  const [inventoryNodes, setInventoryNodes] = useState([
    { location: "US East (Virginia Warehouse)", capacity: "84%", items: 4890, status: "Optimal" },
    { location: "EU West (Frankfurt Depot)", capacity: "62%", items: 2150, status: "Optimal" },
    { location: "AP South (Singapore Center)", capacity: "91%", items: 5800, status: "High Demand" },
  ]);

  // Customers Tab State
  const [customers, setCustomers] = useState([
    { name: "Sophia Loren", email: "sophia@example.com", orders: 12, totalSpent: "$2,840.00", segment: "VIP Member" },
    { name: "Alexander Wright", email: "alex@example.com", orders: 4, totalSpent: "$490.00", segment: "Repeat" },
    { name: "Camila Torres", email: "camila@example.com", orders: 8, totalSpent: "$1,520.00", segment: "VIP Member" },
    { name: "Jameson Miller", email: "james@example.com", orders: 2, totalSpent: "$145.00", segment: "New Buyer" },
  ]);

  // Discounts Tab State
  const [coupons, setCoupons] = useState([
    { code: "SUMMER20", discount: "20% OFF", usage: "482 redeemed", status: "Active" },
    { code: "FREESHIP", discount: "Free Global Express", usage: "1,290 redeemed", status: "Active" },
    { code: "VIPPLUS", discount: "$50 Flat Discount", usage: "88 redeemed", status: "Active" },
  ]);
  const [newCouponCode, setNewCouponCode] = useState("");
  const [newCouponDiscount, setNewCouponDiscount] = useState("");

  // Shipping Carriers State
  const [shippingCarriers, setShippingCarriers] = useState([
    { carrier: "FedEx Express International", rate: "$14.99", est: "1-2 Days", enabled: true },
    { carrier: "UPS Ground Track", rate: "$8.50", est: "3-5 Days", enabled: true },
    { carrier: "DHL Worldwide Air", rate: "$24.00", est: "24 Hours", enabled: true },
  ]);

  // Orders State
  const [orders, setOrders] = useState([
    { id: "ORD-9421", client: "Sophia Loren", email: "sophia@example.com", date: "Just now", items: 3, total: "$284.50", status: "Completed" },
    { id: "ORD-9420", client: "Alexander Wright", email: "alex@example.com", date: "15 mins ago", items: 1, total: "$89.00", status: "Processing" },
    { id: "ORD-9419", client: "Camila Torres", email: "camila@example.com", date: "45 mins ago", items: 4, total: "$512.00", status: "Completed" },
    { id: "ORD-9418", client: "Jameson Miller", email: "james@example.com", date: "2 hrs ago", items: 2, total: "$145.00", status: "Shipped" },
  ]);

  // Actions
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName || !newProdPrice) return;
    const priceNum = parseFloat(newProdPrice);
    const stockNum = parseInt(newProdStock) || 50;
    const newEntry = {
      id: `SKU-${Math.floor(100 + Math.random() * 900)}`,
      name: newProdName,
      category: newProdCategory,
      price: priceNum,
      stock: stockNum,
      status: stockNum < 20 ? "Low Stock" : "In Stock",
    };
    setProducts([newEntry, ...products]);
    setNewProdName("");
    setNewProdPrice("");
    setNewProdStock("");
    setIsAddProductOpen(false);
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName) return;
    setCategories([
      ...categories,
      { id: `CAT-${categories.length + 1}`, name: newCatName, count: 0, status: "Active" },
    ]);
    setNewCatName("");
  };

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouponCode) return;
    setCoupons([
      ...coupons,
      { code: newCouponCode.toUpperCase(), discount: newCouponDiscount || "15% OFF", usage: "0 redeemed", status: "Active" },
    ]);
    setNewCouponCode("");
    setNewCouponDiscount("");
  };

  const handleOrderStatusChange = (orderId: string, newStatus: string) => {
    setOrders(orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)));
  };

  const sidebarNav = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Orders", icon: ShoppingCart },
    { label: "Products", icon: Package },
    { label: "Categories", icon: Layers },
    { label: "Inventory", icon: Boxes },
    { label: "Customers", icon: Users },
    { label: "Discounts & Coupons", icon: Percent },
    { label: "Payments & Gateways", icon: CreditCard },
    { label: "Shipping & Carriers", icon: Truck },
    { label: "Analytics & Telemetry", icon: LineChart },
    { label: "Store Customizer", icon: Palette },
    { label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col font-sans">
      {/* Top Navbar Header */}
      <header className="bg-[#0b0f19] border-b border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileAdminNavOpen(!mobileAdminNavOpen)}
            className="md:hidden p-1.5 rounded-lg bg-white/5 text-slate-300"
          >
            {mobileAdminNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-colors"
              style={{ backgroundColor: brandColor }}
            >
              <Store className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base font-bold text-white tracking-wide">
              {storeName} <span className="text-xs text-indigo-400 font-mono hidden sm:inline">(AIAnthro SaaS)</span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="/"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 transition-colors"
          >
            ← Back
          </a>
        </div>
      </header>

      {/* Main Admin Shell */}
      <div className="flex-1 grid grid-cols-12 relative">
        {/* Mobile Navigation Drawer Overlay */}
        {mobileAdminNavOpen && (
          <div
            onClick={() => setMobileAdminNavOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`col-span-12 md:col-span-3 lg:col-span-2 bg-[#0b0f19] border-r border-white/5 p-4 space-y-1 z-40 ${
            mobileAdminNavOpen
              ? "fixed top-[57px] bottom-0 left-0 w-64 shadow-2xl block"
              : "hidden md:block"
          }`}
        >
          <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-slate-500 font-mono">
            Admin Management
          </div>
          {sidebarNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.label;
            return (
              <button
                key={item.label}
                onClick={() => {
                  setActiveTab(item.label);
                  setMobileAdminNavOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
                style={{ backgroundColor: isActive ? brandColor : undefined }}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span className="line-clamp-1">{item.label}</span>
                </div>
                {item.label === "Orders" && (
                  <span className="px-1.5 py-0.5 rounded bg-rose-500 text-white text-[9px] font-bold">
                    {orders.filter((o) => o.status === "Processing").length} New
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Content Area */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10 p-4 sm:p-8 space-y-6 bg-[#080c14] overflow-x-hidden">
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === "Dashboard" && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white">{storeName} Control Center</h1>
                  <p className="text-xs text-slate-400">Real-time sales velocity & multi-tenant store operations</p>
                </div>
                <button
                  onClick={() => setIsAddProductOpen(true)}
                  className="px-4 py-2 rounded-xl text-white text-xs font-bold shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
                  style={{ backgroundColor: brandColor }}
                >
                  <Plus className="w-4 h-4" /> Add Product SKU
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#0b0f19] border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Gross Sales Volume</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white mt-2">$284,920.00</div>
                  <div className="text-xs text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5" /> +24.8% vs last month
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0f19] border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Total Orders Handled</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white mt-2">{orders.length + 3838} Orders</div>
                  <div className="text-xs text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5" /> +18.2% conversion
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0f19] border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Active Store Products</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white mt-2">{products.length} SKUs</div>
                  <div className="text-xs text-indigo-400 mt-1 font-semibold">
                    Synced across warehouses
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0f19] border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Store Tax Rate</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white mt-2">{taxRate}</div>
                  <div className="text-xs text-cyan-400 mt-1 font-semibold">Automated Calculation</div>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-[#0b0f19] border border-white/10">
                <h3 className="text-sm font-bold text-white mb-4">Revenue Stream Graph</h3>
                <div className="h-44 sm:h-48 w-full">
                  <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0,120 Q100,20 200,80 T400,30 T500,60 L500,150 L0,150 Z" fill={brandColor} opacity="0.2" />
                    <path d="M0,120 Q100,20 200,80 T400,30 T500,60" fill="none" stroke={brandColor} strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ORDERS */}
          {activeTab === "Orders" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">Order Dispatch Lifecycle</h1>
                <p className="text-xs text-slate-400">Update fulfillment statuses live</p>
              </div>

              <div className="rounded-2xl bg-[#0b0f19] border border-white/10 overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 uppercase font-mono text-[10px] bg-black/40">
                      <th className="py-3.5 px-4">Order ID</th>
                      <th className="py-3.5 px-4">Customer Email</th>
                      <th className="py-3.5 px-4">Total</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Quick Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {orders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 font-mono font-bold text-indigo-400">{ord.id}</td>
                        <td className="py-3.5 px-4 font-medium text-slate-200">
                          <div>{ord.client}</div>
                          <div className="text-[10px] text-slate-400">{ord.email}</div>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-white">{ord.total}</td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              ord.status === "Completed"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                : ord.status === "Processing"
                                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex justify-end gap-1">
                            <button
                              onClick={() => handleOrderStatusChange(ord.id, "Shipped")}
                              className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500 hover:text-white text-[10px] font-bold"
                            >
                              Mark Shipped
                            </button>
                            <button
                              onClick={() => handleOrderStatusChange(ord.id, "Completed")}
                              className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-white text-[10px] font-bold"
                            >
                              Complete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: PRODUCTS */}
          {activeTab === "Products" && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white">Product Catalog & SKUs</h1>
                  <p className="text-xs text-slate-400">Manage catalog variants and matrix pricing</p>
                </div>
                <button
                  onClick={() => setIsAddProductOpen(true)}
                  className="px-4 py-2 rounded-xl text-white text-xs font-bold flex items-center gap-2"
                  style={{ backgroundColor: brandColor }}
                >
                  <Plus className="w-4 h-4" /> Add Product
                </button>
              </div>

              <div className="rounded-2xl bg-[#0b0f19] border border-white/10 overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 uppercase font-mono text-[10px] bg-black/40">
                      <th className="py-3.5 px-4">SKU Code</th>
                      <th className="py-3.5 px-4">Product Name</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Price</th>
                      <th className="py-3.5 px-4">Available Stock</th>
                      <th className="py-3.5 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 font-mono font-semibold text-indigo-400">{p.id}</td>
                        <td className="py-3.5 px-4 font-bold text-white">{p.name}</td>
                        <td className="py-3.5 px-4 text-slate-400">{p.category}</td>
                        <td className="py-3.5 px-4 font-bold text-white">${p.price.toFixed(2)}</td>
                        <td className="py-3.5 px-4 text-slate-300 font-mono">{p.stock} units</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: CATEGORIES */}
          {activeTab === "Categories" && (
            <div className="space-y-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Store Categories</h1>
              <form onSubmit={handleAddCategory} className="flex gap-2 max-w-md">
                <input
                  type="text"
                  placeholder="New Category Name (e.g. Footwear)"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-white font-bold text-xs shrink-0"
                  style={{ backgroundColor: brandColor }}
                >
                  Add Category
                </button>
              </form>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((c) => (
                  <div key={c.id} className="p-4 rounded-xl bg-[#0b0f19] border border-white/10 space-y-1">
                    <div className="text-xs font-bold text-white">{c.name}</div>
                    <div className="text-[10px] text-slate-400">{c.count} Linked Products</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INVENTORY */}
          {activeTab === "Inventory" && (
            <div className="space-y-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Multi-Warehouse Inventory Nodes</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {inventoryNodes.map((node) => (
                  <div key={node.location} className="p-5 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-2">
                    <div className="text-xs font-bold text-white">{node.location}</div>
                    <div className="text-2xl font-extrabold text-indigo-400">{node.items.toLocaleString()} SKUs</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Stock Level: {node.capacity}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CUSTOMERS */}
          {activeTab === "Customers" && (
            <div className="space-y-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Customer Profiles & LTV</h1>
              <div className="rounded-2xl bg-[#0b0f19] border border-white/10 overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[550px]">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 uppercase font-mono text-[10px] bg-black/40">
                      <th className="py-3.5 px-4">Customer Name</th>
                      <th className="py-3.5 px-4">Email</th>
                      <th className="py-3.5 px-4">Total Orders</th>
                      <th className="py-3.5 px-4">Lifetime Value</th>
                      <th className="py-3.5 px-4">Segment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {customers.map((cust) => (
                      <tr key={cust.email} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 font-bold text-white">{cust.name}</td>
                        <td className="py-3.5 px-4 text-slate-400">{cust.email}</td>
                        <td className="py-3.5 px-4 font-mono">{cust.orders}</td>
                        <td className="py-3.5 px-4 font-bold text-emerald-400">{cust.totalSpent}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {cust.segment}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 7: DISCOUNTS */}
          {activeTab === "Discounts & Coupons" && (
            <div className="space-y-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Promotions & Coupons</h1>
              <form onSubmit={handleAddCoupon} className="flex flex-wrap sm:flex-nowrap gap-2 max-w-lg">
                <input
                  type="text"
                  placeholder="Coupon Code (e.g. FLASH30)"
                  value={newCouponCode}
                  onChange={(e) => setNewCouponCode(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none font-mono min-w-[140px]"
                />
                <input
                  type="text"
                  placeholder="Discount (e.g. 30% OFF)"
                  value={newCouponDiscount}
                  onChange={(e) => setNewCouponDiscount(e.target.value)}
                  className="w-full sm:w-36 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-white font-bold text-xs shrink-0"
                  style={{ backgroundColor: brandColor }}
                >
                  Create Promo
                </button>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {coupons.map((cp) => (
                  <div key={cp.code} className="p-5 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-2">
                    <div className="text-sm font-bold text-indigo-400 font-mono">{cp.code}</div>
                    <div className="text-lg font-extrabold text-white">{cp.discount}</div>
                    <div className="text-[10px] text-slate-400">{cp.usage}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: PAYMENTS */}
          {activeTab === "Payments & Gateways" && (
            <div className="space-y-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Payment Gateway Connectors</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-[#0b0f19] border border-emerald-500/30 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>Stripe Express</span>
                    <span className="text-emerald-400">Connected</span>
                  </div>
                  <p className="text-xs text-slate-400">135+ Currencies, Apple Pay, Google Pay</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>PayPal Commerce</span>
                    <span className="text-indigo-400">Active</span>
                  </div>
                  <p className="text-xs text-slate-400">Express Checkout & Venmo</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>Klarna BNPL</span>
                    <span className="text-indigo-400">Active</span>
                  </div>
                  <p className="text-xs text-slate-400">Buy now pay later installment plans</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: SHIPPING */}
          {activeTab === "Shipping & Carriers" && (
            <div className="space-y-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Carriers & Delivery Rates</h1>
              <div className="space-y-3">
                {shippingCarriers.map((c) => (
                  <div key={c.carrier} className="p-4 rounded-xl bg-[#0b0f19] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{c.carrier}</div>
                      <div className="text-[10px] text-slate-400">Est. Time: {c.est}</div>
                    </div>
                    <div className="font-mono font-bold text-sm text-indigo-400">{c.rate}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: ANALYTICS */}
          {activeTab === "Analytics & Telemetry" && (
            <div className="space-y-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Analytics Telemetry</h1>
              <div className="p-6 rounded-2xl bg-[#0b0f19] border border-white/10">
                <div className="h-56 w-full">
                  <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0,130 Q100,40 200,90 T400,10 T500,50 L500,150 L0,150 Z" fill="rgba(6, 182, 212, 0.2)" />
                    <path d="M0,130 Q100,40 200,90 T400,10 T500,50" fill="none" stroke="#06b6d4" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: DYNAMIC STORE CUSTOMIZER */}
          {activeTab === "Store Customizer" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">Live Dynamic Theme Customizer</h1>
                <p className="text-xs text-slate-400">Change parameters below to see the admin theme & header update instantly in real time!</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-4 sm:p-6 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Store Brand Title
                    </label>
                    <input
                      type="text"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Brand Primary Accent
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {["#6366f1", "#10b981", "#06b6d4", "#f43f5e", "#f59e0b"].map((c) => (
                        <button
                          key={c}
                          onClick={() => setBrandColor(c)}
                          className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                          style={{ backgroundColor: c }}
                        >
                          {brandColor === c && <Check className="w-4 h-4 text-white" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Operating Currency
                    </label>
                    <select
                      value={storeCurrency}
                      onChange={(e) => setStoreCurrency(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-sm text-white focus:outline-none"
                    >
                      <option value="USD ($)">USD ($) - US Dollar</option>
                      <option value="EUR (€)">EUR (€) - Euro</option>
                      <option value="GBP (£)">GBP (£) - British Pound</option>
                      <option value="INR (₹)">INR (₹) - Indian Rupee</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-[#090d16] border border-white/10 space-y-4">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    REAL-TIME STORE PREVIEW
                  </div>

                  <div className="p-4 sm:p-6 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="text-base sm:text-lg font-bold text-white">{storeName}</div>
                      <button
                        className="px-3 py-1 rounded-lg text-xs font-bold text-white"
                        style={{ backgroundColor: brandColor }}
                      >
                        Bag (0)
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 space-y-2">
                      <div className="text-xs text-slate-400">Featured Sample SKU</div>
                      <div className="text-sm font-bold text-white">Apex Pro Headphones</div>
                      <div className="text-base font-extrabold" style={{ color: brandColor }}>
                        $299.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 12: SETTINGS */}
          {activeTab === "Settings" && (
            <div className="space-y-6 max-w-xl">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Store Settings</h1>
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0b0f19] border border-white/10 space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Tax Rate (%)</label>
                  <input
                    type="text"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
                  />
                </div>
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono break-all">
                  Multi-tenant Cloud Engine API Key: live_sk_948190281028
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ADD PRODUCT MODAL */}
      {isAddProductOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl bg-[#0d111a] border border-white/10 p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white">Add Product to Store Catalog</h3>
            <form onSubmit={handleAddProduct} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wireless Ergonomic Earbuds"
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Price ($)</label>
                  <input
                    type="number"
                    required
                    placeholder="149.00"
                    value={newProdPrice}
                    onChange={(e) => setNewProdPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Initial Stock</label>
                  <input
                    type="number"
                    placeholder="100"
                    value={newProdStock}
                    onChange={(e) => setNewProdStock(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Category</label>
                <select
                  value={newProdCategory}
                  onChange={(e) => setNewProdCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#090d16] border border-white/10 text-white focus:outline-none"
                >
                  <option value="Audio">Audio</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Wearables">Wearables</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddProductOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-white font-bold"
                  style={{ backgroundColor: brandColor }}
                >
                  Publish SKU
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
