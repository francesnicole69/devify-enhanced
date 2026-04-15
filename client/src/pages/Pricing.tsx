/* ============================================================
   DEVIFY Pricing Page
   Dedicated page for Pricing content
   ============================================================ */

import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      <h1 className="sr-only">Affordable website pricing for Singapore small businesses</h1>
      <PricingSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
