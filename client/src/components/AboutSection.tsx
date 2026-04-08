/* ============================================================
   DEVIFY AboutSection — Dark Tech Minimalism
   Mission statement, values, and why choose Devify
   ============================================================ */

import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description: "We don't just build pretty websites. Every design decision is made to help you get more customers and grow your business.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Modern Technology",
    description: "We use the latest web technologies — React, Next.js, and modern hosting platforms — so your site is fast, secure, and future-proof.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "We listen before we build. Your goals, your brand, your customers — everything is considered before a single line of code is written.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Built to Grow",
    description: "Your website grows with your business. Start with a basic site and upgrade as you scale — we'll be here every step of the way.",
    gradient: "from-green-500 to-emerald-500",
  },
];

const whyUs = [
  { stat: "1–7", label: "Days delivery time" },
  { stat: "SGD", label: "Local Singapore pricing" },
  { stat: "SEO", label: "Built-in from day one" },
  { stat: "24/7", label: "WhatsApp support" },
];

export default function AboutSection() {
  const [, setLocation] = useLocation();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#0C1020] to-[#080B14] pointer-events-none" />

      <div className="container relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4"
            >
              The Devify Story
            </span>
            <h2
              className="text-section-heading text-white mb-6 leading-tight-heading font-extrabold"
            >
              When Your Website{" "}
              <span className="gradient-text">Works for You</span>
            </h2>
            <p
              className="text-body-lg text-white/60 mb-6 leading-relaxed-body"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Devify was born from a simple observation: too many great local businesses in Singapore
              are losing customers because they don't have a professional online presence — or their
              website looks like it was built in 2010.
            </p>
            <p
              className="text-white/60 text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              We fix that. We build modern, fast, and beautiful websites that make your business
              look credible, rank on Google, and turn visitors into paying customers — all at a
              price that actually makes sense for small businesses.
            </p>

            {/* Quick stats */}
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-300 group"
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


      </div>
    </section>
  );
}
