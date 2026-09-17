import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AIAnthro Store | Enterprise All-in-One E-Commerce SaaS",
  description:
    "Launch, customize, scale, and automate your global online stores. Complete multi-tenant commerce operating system with real-time analytics, inventory management, and store builder.",
  keywords: [
    "AIAnthro Store",
    "Ecommerce SaaS",
    "Multi-tenant Commerce",
    "Store Builder",
    "Inventory Management",
    "Order Fulfillment",
    "Omnichannel Commerce",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AIAnthro Store | Next-Gen E-Commerce SaaS",
    description:
      "Everything you need to build, manage, and scale high-converting online stores globally.",
    type: "website",
    url: "https://aianthrostore.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIAnthro Store | Enterprise All-in-One E-Commerce SaaS",
    description: "Launch & grow your online store with full customization.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} dark scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#06080d] text-slate-100 min-h-screen font-sans antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
