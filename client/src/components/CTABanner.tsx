/* ============================================================
   DEVIFY CTABanner — Dark Tech Minimalism
   Full-width gradient CTA banner before the contact section
   ============================================================ */

import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

const guarantees = [
  { icon: Clock, text: "Delivered in 1–7 days" },
  { icon: CheckCircle, text: "Free revisions included" },
  { icon: CheckCircle, text: "Mobile responsive guaranteed" },
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
            className="text-section-heading text-white mb-6 leading-tight-heading font-extrabold"
          >
            Ready to Scale<br />
            Your <span className="gradient-text">Sales?</span>
          </h2>
          <p
            className="text-body-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed-body"
          >
            Join 50+ happy clients. Affordable, fast, and professional. Get a free quote today — no obligation.
          </p>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
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
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow duration-300"
          >
            <span>Get My Free Quote Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
