/* ============================================================
   DEVIFY Contact Page
   Dedicated page for Contact content
   ============================================================ */

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
