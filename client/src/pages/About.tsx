/* ============================================================
  ARION About Page
   Dedicated page for About content
   ============================================================ */

import { useCanonical } from "@/hooks/useCanonical";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function About() {
  useCanonical("/about");
  return (
    <div className="min-h-screen bg-[#080B14]">  
      <Navbar />
      <h1 className="sr-only">About Arion web development agency in Singapore</h1>
      <AboutSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
