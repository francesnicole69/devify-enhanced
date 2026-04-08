/* ============================================================
   DEVIFY HeroSection — Dark Tech Minimalism
   Full-height hero with gradient headline, stats, dual CTAs
   Background: hero-bg image with dark overlay
   ============================================================ */

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663458144952/b3kTzaCTUqwBSmavZkBJUd/devify-hero-bg-JTXXemxAHM8YkkSZ95hN28.webp";

const stats = [
  { value: "3–7", label: "Days to Live", icon: Zap },
  { value: "100%", label: "Conversion Optimized", icon: Shield },
  { value: "24h", label: "Free Consultation", icon: Star },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const shouldAnimate = !isMobile;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToWork = () => {
    setLocation("/work");
  };

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  // Apply scroll transforms only on desktop
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {!isMobile ? (
        <motion.div
          style={{ y: bgY, backgroundImage: `url(${HERO_BG})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
      )}
      {/* Dark overlay */}
      {shouldAnimate ? (
        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-[#080B14]" />
      ) : (
        <div className="absolute inset-0 bg-[#080B14]/85" />
      )}
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080B14]" />

      {/* Floating orbs */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 container pt-40 pb-32">
        <motion.div
          variants={containerVariants}
          initial={shouldAnimate ? "hidden" : false}
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-hero text-white font-extrabold"
          >
            Websites That<br />
            <span className="gradient-text">Convert Visitors Into Customers</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg text-white/70 max-w-3xl mx-auto leading-relaxed-body font-normal"
          >
            Professional websites built in 3–7 days. Mobile-optimized. Conversion-focused. Affordable. We don't just build websites—we build revenue machines for your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              onClick={() => setLocation("/contact")}
              whileHover={isMobile ? {} : { scale: 1.05, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto justify-center group"
            >
              <span>Get Your Website in 3 Days</span>
              <motion.div
                animate={isMobile ? {} : { x: [0, 4, 0] }}
                transition={isMobile ? {} : { repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>
            <motion.button
              onClick={scrollToWork}
              whileHover={isMobile ? {} : { scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white/80 border border-white/20 hover:border-blue-500/50 hover:bg-white/8 transition-all duration-300 w-full sm:w-auto justify-center group"
            >
              <span>See Our Work</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={isMobile ? {} : { scale: 1.08, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25, mass: 1 }}
                className="glass-card rounded-2xl p-4 md:p-6 text-center hover:border-blue-500/50 transition-all duration-300 cursor-default group"
              >
                <motion.div
                  animate={isMobile ? {} : { rotate: [0, 6, -6, 0] }}
                  transition={isMobile ? {} : { repeat: Infinity, duration: 5, ease: "easeInOut", delay: i * 0.3 }}
                >
                  <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors" />
                </motion.div>
                <div
                  className="text-xl sm:text-xl md:text-2xl font-extrabold gradient-text mb-2 leading-tight"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-sm text-white/50 group-hover:text-white/70 transition-colors leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30" style={{ fontFamily: 'Manrope, sans-serif' }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
