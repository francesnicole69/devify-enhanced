/* ============================================================
  ARION Work Page
   Dedicated page for Work/Portfolio content
   ============================================================ */

import { useCanonical } from "@/hooks/useCanonical";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Work() {
  useCanonical("/work");
  return (
    <div className="min-h-screen bg-[#080B14]">  
      <Navbar />
      <h1 className="sr-only">Arion website design and development portfolio</h1>
      <WorkSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
