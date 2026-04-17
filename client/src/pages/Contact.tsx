/* ============================================================
  ARION Contact Page
   Dedicated page for Contact content
   ============================================================ */

import { useCanonical } from "@/hooks/useCanonical";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Contact() {
  useCanonical("/contact");
  return (
    <div className="min-h-screen bg-[#080B14]">  
      <Navbar />
      <h1 className="sr-only">Contact Arion for website development in Singapore</h1>
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
