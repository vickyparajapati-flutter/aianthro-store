import { Store, Globe, MessageSquare, Share2, Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04060a] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                <Store className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white font-sans">AIAnthro Store SaaS</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The next-generation enterprise all-in-one e-commerce SaaS platform. Launch, scale, and manage global online stores from one unified operating system.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="Community">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="Social Hub">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="Security Telemetry">
                <Shield className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-[11px] font-mono">Product</div>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Store Builder</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Order Management</a></li>
              <li><a href="/admin" className="hover:text-white transition-colors">Admin Dashboard</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-[11px] font-mono">Solutions</div>
            <ul className="space-y-2">
              <li><a href="#use-cases" className="hover:text-white transition-colors">D2C E-Commerce</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">B2B Wholesale</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Retail & Local Stores</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Multi-Store SaaS</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-[11px] font-mono">Company & Legal</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© {currentYear} AIAnthro Store SaaS Inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">System Status: 100% Operational</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Privacy Preference</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
