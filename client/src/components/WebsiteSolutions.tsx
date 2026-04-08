/* ============================================================
   DEVIFY WebsiteSolutions — Dark Tech Minimalism
   Service showcase: 6 types of websites we build
   Replaces the old portfolio "Work" section
   ============================================================ */

import { motion } from "framer-motion";
import { ArrowRight, Globe, ShoppingCart, Image, Calendar, Zap, Rocket } from "lucide-react";
import { useLocation } from "wouter";

const solutions = [
  {
    id: 1,
    title: "Restaurant Websites",
    description: "Elegant dining experiences with menus, reservations, and online ordering. Built for fine dining and casual restaurants.",
    benefit: "Get more reservations",
    icon: Globe,
    image: "/images/restaurant-mockup.png",
    gradient: "from-amber-500 to-orange-500",
    tag: "Premium Design",
  },
  {
    id: 2,
    title: "Fitness Studio Websites",
    description: "High-energy sites with class schedules, trainer profiles, and membership sign-ups. Perfect for gyms and fitness studios.",
    benefit: "Boost memberships",
    icon: ShoppingCart,
    image: "/images/gym-mockup.png",
    gradient: "from-red-500 to-pink-500",
    tag: "High Conversion",
  },
  {
    id: 3,
    title: "Beauty & Salon Websites",
    description: "Luxurious portfolios with service galleries, booking systems, and Instagram integration for salons and beauty studios.",
    benefit: "Book more clients",
    icon: Image,
    image: "/images/hair-studio-mockup.png",
    gradient: "from-rose-500 to-pink-500",
    tag: "Elegant & Modern",
  },
  {
    id: 4,
    title: "E-Commerce Stores",
    description: "Online stores with product catalogs, shopping carts, and payment integration to sell online 24/7.",
    benefit: "Start selling today",
    icon: Calendar,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458144952/b3kTzaCTUqwBSmavZkBJUd/solution-booking-MUgV6mwghZLtsK5ojXDayK.webp",
    gradient: "from-purple-500 to-violet-500",
    tag: "High ROI",
  },
  {
    id: 5,
    title: "Portfolio & Creative Sites",
    description: "Stunning galleries and case studies to showcase your work. Perfect for designers, photographers, and creatives.",
    benefit: "Land premium clients",
    icon: Zap,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458144952/b3kTzaCTUqwBSmavZkBJUd/solution-saas-TdUCTmeCEjXM9z4zREaqmY.webp",
    gradient: "from-indigo-500 to-blue-500",
    tag: "Showcase Work",
  },
  {
    id: 6,
    title: "High-Converting Landing Pages",
    description: "Optimized landing pages designed to capture leads and drive sales for your campaigns and promotions.",
    benefit: "Maximize conversions",
    icon: Rocket,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663458144952/b3kTzaCTUqwBSmavZkBJUd/solution-landing-page-i59igfP6iRwiHv7ubUnhMx.webp",
    gradient: "from-green-500 to-emerald-500",
    tag: "Quick Launch",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function WebsiteSolutions() {
  const [, setLocation] = useLocation();

  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#0C1020] to-[#080B14] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Our Solutions
          </span>
          <h2
            className="text-section-heading text-white mb-5 leading-tight-heading font-extrabold"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
          >
            Conversion-Focused<br />
            <span className="gradient-text">Website Engineering</span>
          </h2>
          <p
            className="text-body-lg text-white/50 max-w-2xl mx-auto leading-relaxed-body"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            We don't just build websites. We engineer digital experiences that drive growth, capture leads, and turn visitors into loyal customers.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-premium glass-card hover:bg-white/[0.08] transition-all duration-300 flex flex-col"
              >
                {/* Background image - Mobile optimized */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/70 to-[#080B14]/40" />
                </div>

                {/* Content */}
                <div className="relative p-5 sm:p-6 h-full flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
                  {/* Top section */}
                  <div>
                    {/* Tag */}
                    {solution.tag && (
                      <div className="inline-block mb-3 sm:mb-4">
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${solution.gradient} text-white shadow-lg`}
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {solution.tag}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg sm:text-xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                    >
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-xs sm:text-sm text-white/60 leading-relaxed mb-3 sm:mb-4"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {solution.description}
                    </p>
                  </div>

                  {/* Bottom section */}
                  <div>
                    {/* Benefit */}
                    <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-t border-white/10">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex-shrink-0" />
                      <span
                        className="text-xs sm:text-sm font-semibold text-white/80"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {solution.benefit}
                      </span>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => setLocation("/contact")}
                      className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 group/btn w-fit"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p
            className="text-white/50 mb-6 text-sm sm:text-base"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Not sure which solution fits your needs?
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="btn-gradient inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-premium text-sm sm:text-base font-bold text-white shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow duration-300 btn-magnetic"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
