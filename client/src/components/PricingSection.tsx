/* ============================================================
   DEVIFY PricingSection — Dark Tech Minimalism
   Three glass-morphism pricing cards with gradient highlight on popular
   ============================================================ */

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { useLocation, Link } from "wouter";

const plans = [
  {
    name: "Basic",
    price: "$100",
    priceRange: "– $300",
    tagline: "Perfect for getting started",
    description: "Ideal for freelancers and small businesses. Get online fast with a professional, mobile-optimized website.",
    features: [
      "Up to 3 pages (Home, About, Contact)",
      "Mobile-optimized & fast-loading",
      "WhatsApp + Email integration",
      "Basic SEO for visibility",
      "Conversion-focused design",
      "Delivered in 1–3 days",
      "1 round of revisions",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "border-white/8",
    ctaStyle: "border border-white/15 text-white hover:bg-white/5",
  },
  {
    name: "Standard",
    price: "$300",
    priceRange: "– $800",
    tagline: "Most popular for businesses",
    description: "The complete business solution. Get a professional website that generates leads and converts visitors into customers.",
    features: [
      "Up to 6 pages (Home, About, Services, Portfolio, Blog, Contact)",
      "Custom brand-aligned design",
      "Mobile-first + smooth animations",
      "Lead capture forms + WhatsApp CTA",
      "Full SEO optimization",
      "Google Analytics + tracking",
      "Delivered in 3–5 days",
      "3 rounds of revisions",
    ],
    cta: "Get Started",
    popular: true,
    gradient: "from-blue-500/20 to-violet-500/20",
    border: "border-blue-500/30",
    ctaStyle: "btn-gradient text-white",
  },
  {
    name: "Premium",
    price: "$800",
    priceRange: "+",
    tagline: "For ambitious businesses",
    description: "Build your digital powerhouse. E-commerce, custom features, and unlimited potential to scale your business online.",
    features: [
      "Unlimited pages & custom features",
      "E-commerce + payment integration",
      "Advanced animations & interactions",
      "Enterprise-level SEO",
      "CMS for easy content updates",
      "Performance & security optimized",
      "Delivered in 5–7 days",
      "Unlimited revisions",
      "1 month free support & maintenance",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-white/8",
    ctaStyle: "border border-white/15 text-white hover:bg-white/5",
  },
];

const addons = [
  { name: "Monthly Maintenance", price: "From $50/mo" },
  { name: "SEO Optimisation Package", price: "From $150" },
  { name: "Hosting Setup & Domain", price: "From $50" },
  { name: "Logo Design", price: "From $80" },
  { name: "Content Writing", price: "From $100" },
  { name: "WhatsApp Business Setup", price: "From $30" },
];

export default function PricingSection() {
  const [, setLocation] = useLocation();

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#0A0E1A] to-[#080B14] pointer-events-none" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-violet-600/8 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span
            className="inline-block text-xs sm:text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3 sm:mb-4"
          >
            Transparent Pricing
          </span>
          <h2
            className="text-section-heading text-white mb-4 sm:mb-5 leading-tight-heading font-extrabold"
          >
            Plans That Deliver{" "}
            <span className="gradient-text">Real ROI</span>
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed-body"
          >
            From startups to established businesses, we have a plan that fits your budget and goals. Every package includes conversion optimization and fast delivery.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={!plan.popular ? { y: -8 } : {}}
              whileTap={{ scale: 0.98 }}
              className={`group relative rounded-premium border ${plan.border} bg-gradient-to-br ${plan.gradient} backdrop-blur-xl p-6 flex flex-col hover:border-blue-500/50 transition-all duration-500 active:scale-95 ${
                plan.popular ? "shadow-2xl shadow-blue-500/20 scale-[1.02] md:scale-[1.05]" : "hover:shadow-xl hover:shadow-blue-500/10"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="pricing-popular-outline" />
                </>
              )}

              {/* Modern glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:to-violet-500/5 rounded-premium transition-all duration-500 pointer-events-none"/>
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-bold shadow-2xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-4">
                <h3
                  className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-body-sm text-white/50 mb-3"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {plan.tagline}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-3xl font-extrabold gradient-text"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-lg font-semibold text-white/40" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {plan.priceRange}
                  </span>
                </div>
                <p
                  className="text-sm text-white/40 mt-2"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Check className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                    <span
                      className="text-sm text-white/60 group-hover:text-white/80 transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                onClick={() => setLocation("/contact")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${plan.ctaStyle}`}
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                <span>{plan.cta}</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-premium p-6 sm:p-8 md:p-10"
        >
          <h3
            className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
          >
            Optional Add-Ons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {addons.map((addon, idx) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-white/3 border border-white/5 hover:border-blue-500/30 hover:bg-white/6 transition-all duration-300 group cursor-pointer"
              >
                <p
                  className="text-sm font-semibold text-white mb-2 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {addon.name}
                </p>
                <p
                  className="text-xs gradient-text font-bold group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] transition-all"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  {addon.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-20 border-t border-white/8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Still deciding? Let's talk</h3>
          <p className="text-white/60 mb-8">View our <Link href="/work" className="text-blue-400 hover:text-blue-300 underline">portfolio of websites</Link> or <Link href="/services" className="text-blue-400 hover:text-blue-300 underline">explore our services</Link>.</p>
          <button
            onClick={() => setLocation("/contact")}
            className="btn-gradient inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white"
          >
            Get a Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
