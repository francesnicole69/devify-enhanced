import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+65 92716106",
    description: "Fastest response — usually within 1 hour",
    href: "https://wa.me/6592716106?text=Hi%20Arion!%20I'm%20interested%20in%20a%20website%20for%20my%20business.",
    gradient: "from-green-500 to-emerald-500",
    cta: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "alsonchinn1@gmail.com",
    description: "For detailed project briefs and quotes",
    href: "mailto:alsonchinn1@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    cta: "Send an Email",
  },
];

const validateForm = (data: typeof initialFormData) => {
  const errors: Partial<Record<keyof typeof initialFormData, string>> = {};
  
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email address";
  }
  if (!data.message.trim()) errors.message = "Message is required";
  if (!data.pdpaConsent) errors.pdpaConsent = "You must accept the privacy policy";
  if (!data.marketingConsent && false) errors.marketingConsent = "This field is required"; // Optional, don't trigger error
  
  return errors;
};

const initialFormData = {
  name: "",
  email: "",
  business: "",
  budget: "",
  message: "",
  pdpaConsent: false,
  marketingConsent: false,
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<typeof initialFormData>({} as any);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    const inputValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: inputValue }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors as any);
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      // Sends form submissions to your inbox using FormSubmit's AJAX endpoint.
      const response = await fetch("https://formsubmit.co/ajax/alsonchinn1@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business: formData.business,
          budget: formData.budget,
          message: formData.message,
          _subject: "New Arion Quote Request",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialFormData);
        setErrors({} as any);
        // Reset after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Error sending message. Please try again.");
      }
    } catch (error) {
      setError("Error sending message. Please try emailing us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#0A0E1A] to-[#080B14] pointer-events-none" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span
            className="inline-block text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 sm:mb-4"
          >
            Get Started Today
          </span>
          <h2
            className="text-section-heading text-white mb-4 sm:mb-5 leading-tight-heading font-extrabold"
          >
            Ready to Get Your{" "}
            <span className="gradient-text">Website Live?</span>
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Tell us about your business and get a free consultation within 24 hours. No obligation. No pressure. Just honest advice on how we can help you get more customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4 sm:gap-5 md:gap-6"
          >
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card rounded-premium p-4 sm:p-5 md:p-6 flex items-start gap-3 sm:gap-4 hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-white mb-0.5"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                  >
                    {method.title}
                  </h3>
                  <p
                    className="text-sm font-medium text-white/80 mb-1"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {method.value}
                  </p>
                  <p
                    className="text-xs text-white/40"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {method.description}
                  </p>
                </div>
              </a>
            ))}

            <a
              href="https://wa.me/6592716106?text=Hi%20Arion!%20I'm%20interested%20in%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient flex items-center justify-center gap-2 py-4 rounded-premium text-sm font-semibold text-white mt-4"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp Now</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-premium p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-white/50"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    We'll get back to you within 24 hours with a free quote.
                    Check your WhatsApp or email!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-200">{error}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wide"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        Your Name *
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Tan"
                        whileFocus={{ scale: 1.02 }}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-all duration-200 ${
                          errors.name 
                            ? "border-red-500/50 focus:border-red-500/70" 
                            : "border-white/8 focus:border-blue-500/50 focus:bg-white/8"
                        }`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wide"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        Email *
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        whileFocus={{ scale: 1.02 }}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-all duration-200 ${
                          errors.email 
                            ? "border-red-500/50 focus:border-red-500/70" 
                            : "border-white/8 focus:border-blue-500/50 focus:bg-white/8"
                        }`}
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wide"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Business Name
                    </label>
                    <motion.input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="My Awesome Business"
                      whileFocus={{ scale: 1.02 }}
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wide"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Budget Range
                    </label>
                    <motion.select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200 appearance-none cursor-pointer"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      <option value="" className="bg-[#0D1120] text-white">Select your budget</option>
                      <option value="basic" className="bg-[#0D1120] text-white">Basic — $100 to $300</option>
                      <option value="standard" className="bg-[#0D1120] text-white">Standard — $300 to $800</option>
                      <option value="premium" className="bg-[#0D1120] text-white">Premium — $800+</option>
                      <option value="unsure" className="bg-[#0D1120] text-white">Not sure yet</option>
                    </motion.select>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wide"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Tell Us About Your Project *
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What kind of website do you need? What does your business do? Any specific features you want?"
                      whileFocus={{ scale: 1.02 }}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-all duration-200 resize-none ${
                        errors.message 
                          ? "border-red-500/50 focus:border-red-500/70" 
                          : "border-white/8 focus:border-blue-500/50 focus:bg-white/8"
                      }`}
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                    <input
                      type="checkbox"
                      name="pdpaConsent"
                      id="pdpaConsent"
                      checked={formData.pdpaConsent}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 cursor-pointer accent-blue-400"
                    />
                    <label
                      htmlFor="pdpaConsent"
                      className="text-xs text-white/70 leading-relaxed cursor-pointer"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      <span className="font-semibold text-white">I consent to the collection and use of my personal data</span> in accordance with the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a> and <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</a>. This is required to process your inquiry. *
                    </label>
                  </div>
                  {errors.pdpaConsent && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 mt-1 flex items-center gap-1 -mt-2"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.pdpaConsent}
                    </motion.p>
                  )}

                  <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      id="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 cursor-pointer accent-blue-400"
                    />
                    <label
                      htmlFor="marketingConsent"
                      className="text-xs text-white/60 leading-relaxed cursor-pointer"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      <span className="font-semibold text-white">I would like to receive marketing and promotional updates</span> from Arion about new services, updates, and special offers. You can unsubscribe anytime.
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="btn-gradient w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Get Free Quote</span>
                      </>
                    )}
                  </motion.button>

                  <p
                    className="text-xs text-white/30 text-center"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    We respond within 24 hours. No spam, no pressure.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
