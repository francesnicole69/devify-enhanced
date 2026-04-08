/* ============================================================
   DEVIFY ServicesSection — Dark Tech Minimalism
   Grid of service cards with gradient icons and hover effects
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Zap,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Launch in 3–7 Days",
    description:
      "Stop waiting. Your website goes live fast. We deliver conversion-ready sites in under a week—so you start getting customers sooner.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "60% of users browse on mobile. We design for mobile first, ensuring lightning-fast load times and perfect experience on every device.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Search,
    title: "Built to Convert",
    description:
      "We design for results. Every page, button, and form is optimized to turn visitors into leads. Your website is a sales tool, not a brochure.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Transparent Pricing",
    description:
      "No hidden fees. No surprise invoices. Fixed pricing that fits small businesses. You know exactly what you're paying—and what you're getting.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection({ showHeader = true, showCards = true }: { showHeader?: boolean; showCards?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Don't render the section if nothing is shown
  if (!showHeader && !showCards) {
    return null;
  }

  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#0A0E1A] to-[#080B14] pointer-events-none" />

      <div className="container relative z-10">
        {showHeader && (
          <>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span
                className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4"
              >
                Why Choose Devify
              </span>
              <h2
                className="text-section-heading text-white mb-5 leading-tight-heading font-extrabold"
              >
                We Build Websites That{" "}
                <span className="gradient-text">Generate Revenue</span>
              </h2>
              <p
                className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed-body"
              >
                Most agencies build websites that look pretty but don't convert. We build websites that look amazing AND generate real results—more leads, more customers, more revenue.
              </p>
            </motion.div>
          </>
        )}
        {showCards && (
          <>
            {/* Services Grid */}
            <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(59, 130, 246, 0.1)" }}
              className="group relative glass-card rounded-2xl p-8 hover:bg-white/[0.08] hover:border-blue-500/40 transition-all duration-500 cursor-default overflow-hidden border border-white/8 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Animated background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:to-violet-500/5 rounded-2xl pointer-events-none"
                transition={{ duration: 0.5 }}
              />
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 12 }}
                transition={{ type: "spring", stiffness: 300, damping: 25, mass: 1 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500 z-10 relative`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Content */}
              <motion.h3
                className="text-subsection-heading font-bold text-white mb-3 group-hover:text-white transition-colors leading-tight-heading"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-body-sm text-white/50 leading-relaxed-body group-hover:text-white/70 transition-colors duration-300"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {service.description}
              </motion.p>

              {/* Hover accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 origin-left"
              />
            </motion.div>
          ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
