import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { ChevronRight, FileText } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    { id: "1-acceptance", title: "1. Acceptance of Terms" },
    { id: "2-use-license", title: "2. Use License" },
    { id: "3-disclaimer", title: "3. Disclaimer" },
    { id: "7-modifications", title: "7. Modifications" },
    { id: "8-governing-law", title: "8. Governing Law" },
    { id: "10-contact-form", title: "10. Contact Form Submission" },
    { id: "18-consumer-protection", title: "18. Consumer Protection Compliance" },
    { id: "19-anti-spam", title: "19. Anti-Spam Compliance" },
    { id: "22-contact", title: "Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      
      <div className="pt-32 pb-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>
            
            <h1 className="text-hero text-white mb-6 leading-tight-heading font-bold">
              Terms of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-body-lg text-white/50 max-w-2xl mx-auto leading-relaxed-body">
              Please read our terms carefully. By using Devify, you agree to these conditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar TOC */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <div className="glass-card rounded-2xl p-6 border border-white/10 shadow-xl backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-wider">
                    📑 On This Page
                  </h3>
                  <nav className="space-y-2.5">
                    {sections.map((section, index) => (
                      <motion.a
                        key={section.id}
                        href={`#${section.id}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="group flex items-center gap-2 text-sm text-white/60 hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-500/10"
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        <span className="line-clamp-1">{section.title}</span>
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              <article className="space-y-10">
                <section id="1-acceptance" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-blue-400">01</span>
                      <span>Acceptance of Terms</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body">
                      By accessing and using this Website (www.devify.sg) ("Website"), you accept and agree to be bound by the terms and provision of this agreement. Devify ("Company," "we," "us," or "our") provides this Website on an "as-is" basis. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </motion.div>
                </section>

                <section id="2-use-license" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-blue-400">02</span>
                      <span>Use License</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Devify's Website for personal, non-commercial transitory viewing only. Under this license, you may not:</p>
                    <div className="space-y-2 ml-6 bg-white/5 rounded-xl p-6">
                      {["Modify or copy the materials", "Use the materials for any commercial purpose or public display", "Attempt to decompile or reverse engineer any software", "Remove any copyright or other proprietary notations", "Transfer the materials to another person or mirror the materials", "Violate any applicable laws or regulations"].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-body text-white/70 leading-relaxed-body">
                          <span className="text-blue-400 font-bold mt-1 min-w-fit">{i + 1}.</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <section id="3-disclaimer" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-red-500/20 bg-red-500/5 hover:border-red-500/40 transition-all duration-300"
                  >
                    <h2 className="text-section-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-red-400">⚠️</span>
                      <span>Disclaimer</span>
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      The materials on Devify's Website are provided on an "as-is" basis. Devify makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                  </motion.div>
                </section>

                <section id="7-modifications" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <h2 className="text-section-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-blue-400">03</span>
                      <span>Modifications</span>
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      Devify may revise these Terms of Service for its Website at any time without notice. By using this Website, you are agreeing to be bound by the then current version of these Terms of Service. We will notify users of significant changes via email or prominent notice on the Website.
                    </p>
                  </motion.div>
                </section>

                <section id="8-governing-law" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <h2 className="text-section-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-blue-400">⚖️</span>
                      <span>Governing Law</span>
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      These terms and conditions are governed by and construed in accordance with the laws of Singapore, and you irrevocably submit to the exclusive jurisdiction of the courts located in Singapore.
                    </p>
                  </motion.div>
                </section>

                <section id="10-contact-form" className="scroll-mt-32 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <h2 className="text-section-heading font-bold text-white mb-6 flex items-start gap-3 leading-tight-heading">
                      <span className="text-blue-400">04</span>
                      <span>Contact Form Submission</span>
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">10.1 Accurate Information</h3>
                        <p className="text-white/70 leading-relaxed">When submitting the contact form, you agree to provide accurate, complete, and truthful information. Providing false information is prohibited and may result in legal consequences.</p>
                      </div>

                      <div className="border-t border-white/10 pt-5">
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">10.2 Use of Information</h3>
                        <p className="text-white/70 leading-relaxed mb-3">Your contact information will be used solely to:</p>
                        <ul className="space-y-2 ml-6">
                          {["Respond to your inquiry", "Provide service-related communications", "Send marketing information (with opt-out options)", "Comply with legal obligations"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/70">
                              <span className="text-blue-400 text-lg leading-none">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-white/60 text-sm mt-3 italic">See our Privacy Policy for full details on data usage.</p>
                      </div>

                      <div className="border-t border-white/10 pt-5">
                        <h3 className="text-lg font-semibold text-blue-300 mb-2">10.3 Spam and Abuse</h3>
                        <p className="text-white/70 leading-relaxed mb-3">You agree not to use our contact form for:</p>
                        <ul className="space-y-2 ml-6">
                          {["Spam or unsolicited messages", "Harassment or threatening communications", "Phishing or fraudulent activities", "Transmission of malware or harmful code"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/70">
                              <span className="text-red-400 text-lg leading-none">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                <section id="18-consumer-protection" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-green-500/20 bg-green-500/5 hover:border-green-500/40 transition-all duration-300"
                  >
                    <h2 className="text-section-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">✓</span>
                      <span>Consumer Protection Compliance</span>
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-4">Our services comply with Singapore's Consumer Protection (Fair Trading) Act. You have rights regarding:</p>
                    <div className="grid gap-3 ml-6">
                      {[
                        { title: "Accurate Representation", desc: "We provide accurate descriptions of our services" },
                        { title: "Honest Pricing", desc: "All pricing information is clear and not misleading" },
                        { title: "Good Faith", desc: "We conduct business in good faith with fair dealing" },
                        { title: "Consumer Rights", desc: "You have the right to contest unfair terms" }
                      ].map((item, i) => (
                        <div key={i} className="border-l-2 border-green-500/40 pl-4 py-2">
                          <p className="text-green-300 font-semibold">{item.title}</p>
                          <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <section id="19-anti-spam" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <h2 className="text-section-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-blue-400">05</span>
                      <span>Anti-Spam Compliance</span>
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-4">In compliance with Singapore's Spam Control Act:</p>
                    <div className="space-y-3 ml-6">
                      {[
                        "Marketing emails will include clear identification of our business",
                        "You will be provided an easy opt-out mechanism",
                        "We will honor opt-out requests within a reasonable timeframe",
                        "We will not purchase or use invalid email lists"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-white/70">
                          <span className="text-blue-400 font-bold mt-1 min-w-fit">{i + 1}.</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <section id="22-contact" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <h2 className="text-section-heading font-bold text-white mb-6 leading-tight-heading">Contact Information</h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-cyan-300 font-semibold mb-3">📧 Reach Out</p>
                        <div className="space-y-2 text-white/80">
                          <p><span className="text-white/40">Email:</span> <a href="mailto:alsonchinn1@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">alsonchinn1@gmail.com</a></p>
                          <p><span className="text-white/40">WhatsApp:</span> <a href="https://wa.me/6592716106" className="text-cyan-400 hover:text-cyan-300 transition-colors">+65 9271 6106</a></p>
                          <p><span className="text-white/40">Location:</span> Singapore</p>
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <p className="text-white/40 font-semibold mb-3">🛡️ Regulatory Support</p>
                        <p className="text-white/70 text-sm leading-relaxed">For consumer protection concerns, contact the <strong>Consumers Association of Singapore (CASE)</strong>:</p>
                        <div className="mt-2 space-y-1 text-white/60 text-sm">
                          <p>Website: <a href="https://www.case.org.sg" className="text-cyan-400 hover:text-cyan-300">www.case.org.sg</a></p>
                          <p>Phone: 6100 0315</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>
              </article>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
