/* ============================================================
  ARION ProcessSection — Dark Tech Minimalism
   Step-by-step process with connecting lines and gradient numbers
   Background: process-bg image with dark overlay
   ============================================================ */

import { motion } from "framer-motion";
import {
  MessageCircle,
  ClipboardList,
  Paintbrush,
  Code2,
  Eye,
  RotateCcw,
  Rocket,
} from "lucide-react";

const PROCESS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663458144952/b3kTzaCTUqwBSmavZkBJUd/devify-process-bg-jhD4JNdwQkFhJ5X479JrPD.webp";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "You Contact Us",
    description: "Reach out via WhatsApp, Instagram, or email. Tell us about your business and what you need.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "We Gather Requirements",
    description: "We ask the right questions — your brand, goals, target audience, and any content you have.",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "Design & Develop",
    description: "We design and build your website using modern tools. No templates — everything is custom.",
  },
  {
    number: "04",
    icon: Eye,
    title: "Preview & Review",
    description: "We share a live preview link so you can see your website before it goes live.",
  },
  {
    number: "05",
    icon: RotateCcw,
    title: "Revisions",
    description: "Not 100% happy? We make revisions until you love it. Your satisfaction is our priority.",
  },
  {
    number: "06",
    icon: Code2,
    title: "Deploy Online",
    description: "We publish your website to a fast, reliable hosting platform with your custom domain.",
  },
  {
    number: "07",
    icon: Rocket,
    title: "Launch & Deliver",
    description: "Your website is live! We hand over all files, credentials, and guide you on next steps.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${PROCESS_BG})` }}
      />
      <div className="absolute inset-0 bg-[#080B14]/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-transparent to-[#080B14]" />

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
            className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4"
          >
            Our Process
          </span>
          <h2
            className="text-section-heading text-white mb-5 leading-tight-heading font-extrabold"
          >
            From Brief to{" "}
            <span className="gradient-text">Live</span>
          </h2>
          <p
            className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed-body"
          >
            A simple, transparent process designed to get your business online as fast as possible.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {steps.slice(0, 4).map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 relative group hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Step number */}
              <div
                className="text-3xl font-extrabold gradient-text mb-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
              >
                {step.number}
              </div>
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3
                className="text-subsection-heading font-bold text-white mb-3 leading-tight-heading"
              >
                {step.title}
              </h3>
              <p
                className="text-body-sm text-white/50 leading-relaxed-body"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {steps.slice(4).map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 relative group hover:bg-white/[0.06] transition-all duration-300"
            >
              <div
                className="text-3xl font-extrabold gradient-text mb-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
              >
                {step.number}
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3
                className="text-base font-bold text-white mb-2"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm text-white/50 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
