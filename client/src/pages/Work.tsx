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
      <h1 className="sr-only">Devify website design and development portfolio</h1>
      <WorkSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
