/* ============================================================
   DEVIFY WorkSection — Dark Tech Minimalism
   Portfolio grid with laptop mockup images and hover overlays
   ============================================================ */

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const WORK_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663458144952/b3kTzaCTUqwBSmavZkBJUd/devify-work-1-NFCQEK5kZrhzwPTzoMxA4i.webp";
const WORK_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663458144952/b3kTzaCTUqwBSmavZkBJUd/devify-work-2-jpqGp57UT6MnfxwnbPFPwX.webp";
const WORK_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663458144952/b3kTzaCTUqwBSmavZkBJUd/devify-work-3-N3b7tH7q7eg9wVeVDswcNT.webp";

const projects = [
  {
    image: WORK_1,
    category: "Restaurant & Cafe",
    title: "UrbanBite Restaurant",
    description:
      "A warm, inviting website for a local restaurant featuring their menu, specials, and reservation system. Delivered in 3 days.",
    tags: ["React", "Responsive", "SEO"],
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/20",
  },
  {
    image: WORK_2,
    category: "Fitness & Gym",
    title: "PowerFit Studio",
    description:
      "High-energy gym website with class schedules, trainer profiles, and membership sign-up. Conversion-optimized design.",
    tags: ["Next.js", "Animations", "Contact Form"],
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/20",
  },
  {
    image: WORK_3,
    category: "Beauty & Salon",
    title: "Bellux Hair Studio",
    description:
      "Luxury beauty salon website with service gallery, booking form, and Instagram feed integration. Elegant and professional.",
    tags: ["React", "Gallery", "WhatsApp"],
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/20",
  },
];

export default function WorkSection() {
  const [, setLocation] = useLocation();

  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080B14] pointer-events-none" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

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
            Case Studies
          </span>
          <h2
            className="text-section-heading text-white mb-5 leading-tight-heading font-extrabold"
          >
            Websites That{" "}
            <span className="gradient-text">Get Results</span>
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Sample projects showcasing the quality and range of websites we build for
            Singapore businesses.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(59, 130, 246, 0.1)" }}
              className={`group rounded-2xl overflow-hidden border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm transition-all duration-500`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute top-3 left-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/50 text-white/80 backdrop-blur-sm border border-white/10"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {project.category}
                  </span>
                </motion.div>
                <motion.div
                  className="absolute top-3 right-3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm text-white/50 leading-relaxed mb-4 group-hover:text-white/70 transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-white/60 border border-white/8 hover:border-white/20 transition-all cursor-default"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/40 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Want a website like these?
          </p>
          <motion.button
            onClick={() => setLocation("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-300"
          >
            <span>Start Your Project Today</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
