/* ============================================================
   DEVIFY Services Page
   Dedicated page for Services content
   ============================================================ */

import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import WebsiteSolutions from "@/components/WebsiteSolutions";
import ProcessSection from "@/components/ProcessSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      <h1 className="sr-only">Web development services in Singapore for small businesses</h1>
      <ServicesSection showHeader={false} showCards={false} />
      <WebsiteSolutions />
      <ProcessSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
