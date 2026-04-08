/* ============================================================
   DEVIFY Work Page
   Dedicated page for Work/Portfolio content
   ============================================================ */

import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Work() {
  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      <WorkSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
