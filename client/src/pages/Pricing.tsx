/* ============================================================
   DEVIFY Pricing Page
   Dedicated page for Pricing content
   ============================================================ */

import { useCanonical } from "@/hooks/useCanonical";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Pricing() {
  useCanonical("/pricing");
  return (
    <div className="min-h-screen bg-[#080B14]">  
      <Navbar />
      <PricingSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
