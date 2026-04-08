/* ============================================================
   DEVIFY TrustBar — Dark Tech Minimalism
   Tech stack logos and trust signals below hero
   ============================================================ */

import { motion } from "framer-motion";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "TypeScript", icon: "TS" },
  { name: "Vercel", icon: "▲" },
  { name: "GitHub", icon: "⬡" },
];

const trustSignals = [
  "Fast Loading Speed",
  "Mobile Responsive",
  "SEO Optimised",
  "Secure HTTPS",
  "Custom Domain",
  "Free SSL Certificate",
];

export default function TrustBar() {
  return (
    <div className="relative bg-[#080B14] border-y border-white/5 py-8 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/3 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Trust signals marquee */}
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3">
          {trustSignals.map((signal, i) => (
            <motion.div
              key={signal}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
              <span
                className="text-sm text-white/40 font-medium"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {signal}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
