import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InteractiveDashboard } from "@/components/InteractiveDashboard";
import { StoreBuilder } from "@/components/StoreBuilder";
import { StorefrontPreview } from "@/components/StorefrontPreview";
import { MobileCommerce } from "@/components/MobileCommerce";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { MultiTenantSection } from "@/components/MultiTenantSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ROICalculator } from "@/components/ROICalculator";
import { PricingSection } from "@/components/PricingSection";
import { Testimonials } from "@/components/Testimonials";
import { UseCases } from "@/components/UseCases";
import { Integrations } from "@/components/Integrations";
import { SecurityTrust } from "@/components/SecurityTrust";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { LiveToastNotifications } from "@/components/LiveToastNotifications";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <InteractiveDashboard />
      <StoreBuilder />
      <StorefrontPreview />
      <MobileCommerce />
      <AnalyticsSection />
      <MultiTenantSection />
      <WhyUsSection />
      <ROICalculator />
      <PricingSection />
      <Testimonials />
      <UseCases />
      <Integrations />
      <SecurityTrust />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <LiveToastNotifications />
      <CommandMenu />
    </main>
  );
}
