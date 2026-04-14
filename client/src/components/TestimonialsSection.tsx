import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Lim",
    content:
      "Devify built my flower shop website in just 3 days. It looks stunning and I've already gotten 8 new orders in the first week! Best investment for my business.",
  },
  {
    name: "Marcus Tan",
    content:
      "I needed a professional portfolio to attract high-ticket clients. Devify delivered a site that looks like it cost $5,000, but for a fraction of the price. My conversion rate doubled.",
  },
  {
    name: "Priya Nair",
    content:
      "The process was seamless. They handled everything from design to SEO. My yoga studio now gets 15+ inquiries per month directly through the website. Highly recommend!",
  },
  {
    name: "Jason Koh",
    content:
      "Lightning fast delivery and incredible design. My photography portfolio finally looks professional. I landed two major projects within two weeks of launching.",
  },
  {
    name: "Mei Lin",
    content:
      "We went from zero online presence to a fully automated booking system. Devify saved us hours of manual work every week. Our revenue is up 30% since launch.",
  },
  {
    name: "Ahmad Rizal",
    content:
      "Professional, responsive, and results-driven. Our startup landing page was live in 48 hours and helped us secure our first 100 beta users. Exceptional value.",
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
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#0C1020] to-[#080B14] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span
            className="inline-block text-xs sm:text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3 sm:mb-4"
          >
            Real Results
          </span>
          <h2
            className="text-section-heading text-white mb-4 sm:mb-5 leading-tight-heading font-extrabold"
          >
            Businesses Getting{" "}
            <span className="gradient-text">Real Revenue</span>
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed-body"
          >
            See how real Singapore businesses are getting more customers, more bookings, and more revenue with their Devify websites.
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
                    className="glass-card group w-[260px] sm:w-[300px] md:w-[340px] flex-shrink-0 rounded-premium p-4 sm:p-5 md:p-6 hover:border-blue-500/30 transition-colors duration-300 cursor-default active:scale-95"
                  >
                    {/* Decorative quote mark */}
                    <div className="text-2xl sm:text-3xl text-blue-500/20 mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-blue-500/40">
                      "
                    </div>
                    <p
                      className="text-xs sm:text-sm md:text-base text-white/65 leading-relaxed mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-white/80"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {testimonial.content}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-semibold text-white transition-colors duration-300 group-hover:text-blue-300"
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
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 origin-left rounded-b-premium"
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
