import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, TrendingUp } from "lucide-react";
import { useLocation, Link } from "wouter";

const values = [
  {
    icon: Target,
    title: "Conversion-Driven",
    description: "Every element is designed to convert. We don't build vanity projects—we build revenue machines that get you real customers and measurable results.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Modern & Secure",
    description: "Built with React, Next.js, and enterprise-grade hosting. Your site is fast, secure, SEO-optimized, and ready to scale from day one.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Your Success Matters",
    description: "We're invested in your success. We listen, understand your business goals, and build solutions that actually move the needle for you.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Start small, grow big. Our websites scale with your business. Add features, expand functionality, and upgrade as you succeed.",
    gradient: "from-green-500 to-emerald-500",
  },
];

const whyUs = [
  { stat: "3–7", label: "Days to live" },
  { stat: "50+", label: "Happy clients" },
  { stat: "100%", label: "Conversion optimized" },
  { stat: "24h", label: "Response time" },
];

export default function AboutSection() {
  const [, setLocation] = useLocation();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#0C1020] to-[#080B14] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4"
            >
              About Devify
            </span>
            <h2
              className="text-section-heading text-white mb-6 leading-tight-heading font-extrabold"
            >
              We Build Websites That{" "}
              <span className="gradient-text">Generate Revenue</span>
            </h2>
            <p
              className="text-body-lg text-white/60 mb-6 leading-relaxed-body"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Devify was founded to solve a real problem: Singapore businesses are losing customers to competitors with better online presence. Most web agencies build beautiful websites that don't convert. We're different.
            </p>
            <p
              className="text-white/60 text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              We build conversion-focused websites that look amazing AND generate real results. Fast delivery. Transparent pricing. Results that matter. That's the Devify promise.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-4"
                >
                  <div
                    className="text-xl font-extrabold gradient-text mb-1"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
                  >
                    {item.stat}
                  </div>
                  <div
                    className="text-sm text-white/50"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-premium p-6 hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-sm font-bold text-white mb-2"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-xs text-white/50 leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-24 border-t border-white/8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Learn More About Web Standards & Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <a href="https://web.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-sm">Google Web.dev - Web Best Practices</a>
            <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-sm">WCAG Accessibility Guidelines</a>
            <a href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-sm">Moz - SEO Best Practices</a>
            <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-sm">Google Search Central</a>
          </div>
          <div className="text-white/60 text-sm mb-6">
            Ready to build? Check our <Link href="/pricing" className="text-blue-400 hover:text-blue-300 underline">pricing plans</Link> or <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">start your project</Link>.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
