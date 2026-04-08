import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Lim",
    content:
      "Devify built my flower shop website in just 3 days. It looks absolutely stunning and I've already gotten 5 new orders through the contact form in the first week!",
  },
  {
    name: "Marcus Tan",
    content:
      "I needed a professional portfolio to attract clients. Devify delivered exactly what I envisioned — clean, modern, and it loads super fast. Highly recommend!",
  },
  {
    name: "Priya Nair",
    content:
      "As a small business owner with no tech knowledge, I was worried. But Devify made the whole process so easy. They handled everything and my website looks better than competitors charging 5x more.",
  },
  {
    name: "Jason Koh",
    content:
      "My portfolio website is exactly what I needed to land more clients. The gallery looks incredible and the site is lightning fast. Worth every cent.",
  },
  {
    name: "Mei Lin",
    content:
      "We went from zero online presence to getting 20+ new class bookings per month through our website. Devify understood exactly what we needed.",
  },
  {
    name: "Ahmad Rizal",
    content:
      "Fast, professional, and affordable. Devify built our startup landing page in 2 days. The design quality is on par with agencies charging 10x more.",
  },
];

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#0C1020] to-[#080B14] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4"
          >
            Success Stories
          </span>
          <h2
            className="text-section-heading text-white mb-5 leading-tight-heading font-extrabold"
          >
            Real Results, Real{" "}
            <span className="gradient-text">Businesses</span>
          </h2>
          <p
            className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed-body"
          >
            Real results from real Singapore businesses who trusted Devify with their online presence.
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="testimonial-marquee relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-14 bg-gradient-to-r from-[#080B14] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-14 bg-gradient-to-l from-[#080B14] to-transparent" />

          <div className="testimonial-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="testimonial-group flex w-max items-stretch gap-4 sm:gap-5 pr-4 sm:pr-5">
                {testimonials.map((testimonial, idx) => (
                  <motion.article
                    key={`${copy}-${testimonial.name}-${idx}`}
                    aria-hidden={copy === 1}
                    initial={isMobile ? false : { opacity: 0, y: 40 }}
                    whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                    transition={isMobile ? { duration: 0 } : { delay: idx * 0.06, duration: 0.45 }}
                    viewport={isMobile ? undefined : { once: true, margin: "0px 0px -90px 0px" }}
                    className="glass-card group w-[260px] sm:w-[300px] lg:w-[340px] flex-shrink-0 rounded-2xl p-5 sm:p-6 hover:border-blue-500/30 transition-colors duration-300 cursor-default"
                  >
                    {/* Decorative quote mark */}
                    <div className="text-3xl text-blue-500/20 mb-2 transition-colors duration-300 group-hover:text-blue-500/40">
                      "
                    </div>
                    <p
                      className="text-sm sm:text-base text-white/65 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-white/80"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {testimonial.content}
                    </p>
                    <p
                      className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-blue-300"
                      style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                    >
                      {testimonial.name}
                    </p>
                    {/* Hover accent line - only on desktop */}
                    {!isMobile && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 40 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 origin-left rounded-b-2xl"
                      />
                    )}
                  </motion.article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
