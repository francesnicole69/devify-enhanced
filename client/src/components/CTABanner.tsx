/* ============================================================
  ARION CTABanner — Dark Tech Minimalism
   Full-width gradient CTA banner before the contact section
   ============================================================ */

import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "wouter";

const guarantees = [
  { icon: Clock, text: "Live in 3–7 days" },
  { icon: CheckCircle, text: "Conversion-optimized" },
  { icon: CheckCircle, text: "100% satisfaction guaranteed" },
];

export default function CTABanner() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-blue-600/15" />
      <div className="absolute inset-0 border-y border-blue-500/10" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-section-heading text-white mb-8 leading-tight-heading font-extrabold"
          >
            Stop Losing Customers<br />
            to Your <span className="gradient-text">Competition</span>
          </h2>
          <p
            className="text-body-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed-body"
          >
            Your competitors already have websites. Get yours built in days, not months. Join 50+ businesses getting real results with Arion. Check our <Link href="/work" className="text-blue-400 hover:text-blue-300 underline">portfolio</Link> to see what we've built.
          </p>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            {guarantees.map((g) => (
              <div key={g.text} className="flex items-center gap-2">
                <g.icon className="w-4 h-4 text-blue-400" />
                <span
                  className="text-sm text-white/60"
                >
                  {g.text}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setLocation("/contact")}
            className="btn-gradient inline-flex items-center gap-2 px-10 py-4 rounded-premium text-base font-bold text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300 btn-magnetic"
          >
            <span>Get My Free Quote Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="mt-6 text-sm text-white/50">
            View our <Link href="/pricing" className="text-blue-400 hover:text-blue-300 underline">pricing plans</Link> or <Link href="/about" className="text-blue-400 hover:text-blue-300 underline">learn about us</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
