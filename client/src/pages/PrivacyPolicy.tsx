import { useCanonical } from "@/hooks/useCanonical";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { ChevronRight, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  useCanonical("/privacy-policy");
  const sections = [
    { id: "1-introduction", title: "1. Introduction" },
    { id: "2-information-collected", title: "2. Information We Collect" },
    { id: "3-legal-basis", title: "3. Legal Basis for Processing (PDPA Compliance)" },
    { id: "4-how-we-use", title: "4. How We Use Your Information" },
    { id: "5-data-sharing", title: "5. Data Sharing and Disclosure" },
    { id: "6-data-retention", title: "6. Data Retention" },
    { id: "7-security", title: "7. Security Measures" },
    { id: "8-your-rights", title: "8. Your Rights Under PDPA" },
    { id: "9-cookies", title: "9. Cookies and Tracking Technologies" },
    { id: "13-contact", title: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      
      <div className="pt-32 pb-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

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
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
            </motion.div>
            
            <h1 className="text-hero text-white mb-6 leading-tight-heading font-bold">
              Privacy{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-body-lg text-white/50 max-w-2xl mx-auto leading-relaxed-body">
              Your privacy matters to us. Learn how we protect and handle your data.
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
                <div className="glass-card rounded-2xl p-6 border border-white/10 shadow-xl backdrop-blur-sm hover:border-green-500/30 transition-all duration-300">
                  <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-wider">
                    🔒 On This Page
                  </h3>
                  <nav className="space-y-2.5">
                    {sections.map((section, index) => (
                      <motion.a
                        key={section.id}
                        href={`#${section.id}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="group flex items-center gap-2 text-sm text-white/60 hover:text-green-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-green-500/10"
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
                <section id="1-introduction" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">🔬</span>
                      <span>Introduction</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">
                      Devify ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.devify.sg (the "Website").
                    </p>
                    <p className="text-body text-white/70 leading-relaxed-body">
                      Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our Website.
                    </p>
                  </motion.div>
                </section>

                <section id="2-information-collected" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">📊</span>
                      <span>Information We Collect</span>
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2 leading-tight">Personal Information</h3>
                        <p className="text-body text-white/70 leading-relaxed-body">When you contact us via email or contact form, we collect your name, email address, phone number (if provided), company name, and the content of your inquiry.</p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2 leading-tight">Automatically Collected Information</h3>
                        <p className="text-body text-white/70 leading-relaxed-body">We automatically collect certain information when you visit our Website, including IP address, browser type, operating system, page referrer, pages visited, time stamps, and device identifiers.</p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2 leading-tight">Cookies and Similar Technologies</h3>
                        <p className="text-body text-white/70 leading-relaxed-body">We use cookies and similar tracking technologies to enhance your browsing experience and understand how you interact with our Website.</p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                <section id="3-legal-basis" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">⚖️</span>
                      <span>Legal Basis for Processing (PDPA)</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">
                      Under Singapore's Personal Data Protection Act (PDPA), we process your personal data based on:
                    </p>
                    <ul className="space-y-2 text-body text-white/70 leading-relaxed-body">
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong>Consent:</strong> Your explicit consent for direct marketing and contact purposes</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong>Contract:</strong> Processing necessary to fulfill business services requested</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong>Legal Obligation:</strong> Compliance with Singapore laws and regulations</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong>Legitimate Interests:</strong> Website optimization and fraud prevention</span>
                      </li>
                    </ul>
                  </motion.div>
                </section>

                <section id="4-how-we-use" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">🎯</span>
                      <span>How We Use Your Information</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">We use collected information to:</p>
                    <ul className="space-y-2 text-body text-white/70 leading-relaxed-body">
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Respond to your inquiries and provide customer support</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Deliver requested services and send service-related announcements</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Send promotional materials (with your consent only)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Improve and optimize website functionality</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Monitor and analyze usage trends and patterns</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Detect and prevent fraudulent or unauthorized activities</span>
                      </li>
                    </ul>
                  </motion.div>
                </section>

                <section id="5-data-sharing" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">🔗</span>
                      <span>Data Sharing and Disclosure</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">
                      We do not sell or rent your personal data to third parties. However, we may share information with:
                    </p>
                    <ul className="space-y-3 text-body text-white/70 leading-relaxed-body">
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Service Providers:</strong> Third parties assisting with website operations (servers, analytics, email services)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Legal Requirements:</strong> When required by Singapore law or government authority with proper legal process</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets (with notice to you)</span>
                      </li>
                    </ul>
                    <p className="text-white/70 leading-relaxed mt-4">All third parties are contractually obligated to maintain confidentiality and use data only for specified purposes.</p>
                  </motion.div>
                </section>

                <section id="6-data-retention" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">⏰</span>
                      <span>Data Retention</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">
                      We retain personal data for as long as necessary to fulfill the purposes outlined in this policy:
                    </p>
                    <ul className="space-y-2 text-body text-white/70 leading-relaxed-body">
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Contact Inquiries:</strong> Retained for 3 years or until service completion</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Marketing Consent:</strong> Until you withdraw consent</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Cookies:</strong> Valid for the periods specified in our cookie policy</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Analytics Data:</strong> Anonymized after 26 months</span>
                      </li>
                    </ul>
                  </motion.div>
                </section>

                <section id="7-security" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">🔐</span>
                      <span>Security Measures</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">
                      We implement comprehensive security measures to protect your data:
                    </p>
                    <ul className="space-y-2 text-body text-white/70 leading-relaxed-body">
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong>HTTPS/TLS Encryption:</strong> All data in transit encrypted with TLS 1.2 or higher</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong>Security Headers:</strong> X-Frame-Options, X-Content-Type-Options, CSP policies implemented</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong>Access Controls:</strong> Restricted data access based on role and necessity</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span><strong>Regular Audits:</strong> Periodic security assessments and vulnerability management</span>
                      </li>
                    </ul>
                    <p className="text-body text-white/70 leading-relaxed-body mt-4"><strong>Note:</strong> While we implement strong security measures, no method is 100% secure. We encourage you to practice safe privacy habits online.</p>
                  </motion.div>
                </section>

                <section id="8-user-rights" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">👤</span>
                      <span>Your Rights Under PDPA</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">
                      Under Singapore's PDPA, you have the following rights:
                    </p>
                    <ul className="space-y-3 text-body text-white/70 leading-relaxed-body">
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">1.</span>
                        <span><strong>Right to Access:</strong> Request a copy of all personal data we hold about you</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">2.</span>
                        <span><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">3.</span>
                        <span><strong>Right to Withdraw Consent:</strong> Withdraw consent for data collection and marketing communications</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">4.</span>
                        <span><strong>Right to Erasure:</strong> Request deletion of personal data (where legally permitted)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">5.</span>
                        <span><strong>Do Not Call/Email:</strong> Opt-out of marketing communications through Do Not Call registry or email unsubscribe links</span>
                      </li>
                    </ul>
                    <p className="text-body text-white/70 leading-relaxed-body mt-4">To exercise these rights, please contact us using the information in the Contact section below.</p>
                  </motion.div>
                </section>

                <section id="9-cookies" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">🍪</span>
                      <span>Cookies and Tracking Technologies</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">
                      We use the following types of cookies:
                    </p>
                    <ul className="space-y-3 text-body text-white/70 leading-relaxed-body">
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Essential Cookies:</strong> Required for website functionality (user preferences, session management)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Analytics Cookies:</strong> Help us understand how visitors use the website (Google Analytics, Vercel Analytics)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Performance Cookies:</strong> Improve website speed and functionality</span>
                      </li>
                    </ul>
                    <p className="text-body text-white/70 leading-relaxed-body mt-4">Most browsers allow you to refuse cookies or alert you when cookies are being sent. You can control cookie preferences through your browser settings.</p>
                  </motion.div>
                </section>

                <section id="10-contact" className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h2 className="text-subsection-heading font-bold text-white mb-4 flex items-start gap-3 leading-tight-heading">
                      <span className="text-green-400">📧</span>
                      <span>Contact Us</span>
                    </h2>
                    <p className="text-body text-white/70 leading-relaxed-body mb-6">
                      If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
                      <p className="text-white font-semibold mb-2">Devify Singapore</p>
                      <p className="text-white/70">Email: <a href="mailto:alsonchinn1@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">alsonchinn1@gmail.com</a></p>
                      <p className="text-white/70">Website: <a href="https://www.devify.sg" className="text-green-400 hover:text-green-300 transition-colors">www.devify.sg</a></p>
                    </div>
                    <p className="text-body text-white/70 leading-relaxed-body mb-4">
                      <strong>PDPA Complaint Escalation:</strong>
                    </p>
                    <p className="text-body text-white/70 leading-relaxed-body">
                      If you believe your personal data has been mishandled or your rights violated, you may file a complaint with Singapore's Personal Data Protection Commission (PDPC).
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-4">
                      <p className="text-white/70">
                        <strong>PDPC Contact:</strong><br/>
                        Personal Data Protection Commission<br/>
                        Email: <a href="mailto:info@pdpc.gov.sg" className="text-green-400 hover:text-green-300 transition-colors">info@pdpc.gov.sg</a><br/>
                        Website: <a href="https://www.pdpc.gov.sg" className="text-green-400 hover:text-green-300 transition-colors">www.pdpc.gov.sg</a>
                      </p>
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
