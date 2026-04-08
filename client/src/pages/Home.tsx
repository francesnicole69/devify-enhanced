/* ============================================================
   DEVIFY Home Page — Dark Tech Minimalism
   Hero Section + Built Different (Services)
   ============================================================ */

import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/" && window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
