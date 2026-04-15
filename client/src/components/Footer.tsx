import { Code2, Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Business Websites", href: "#services" },
      { label: "Landing Pages", href: "#services" },
      { label: "E-Commerce", href: "#services" },
      { label: "SEO Optimisation", href: "#services" },
      { label: "Maintenance", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Work", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free Website Audit", href: "#contact" },
      { label: "Get a Quote", href: "#contact" },
      { label: "WhatsApp Us", href: "https://wa.me/6592716106" },
    ],
  },
  {
    title: "External Links",
    links: [
      { label: "Google Web Best Practices", href: "https://web.dev/" },
      { label: "SEO Guide", href: "https://moz.com/beginners-guide-to-seo" },
      { label: "Accessibility (WCAG)", href: "https://www.w3.org/WAI/WCAG21/quickref/" },
      { label: "Google Search Central", href: "https://developers.google.com/search" },
    ],
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060810] border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span
                className="font-extrabold text-xl text-white"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
              >
                Devify
              </span>
            </div>
            <p
              className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Modern web development for small businesses and individuals in Singapore.
              Get online in 1–7 days with a website that actually works.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6592716106"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/devify.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@devify.sg"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200 text-left"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/25"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            © {new Date().getFullYear()} Devify. All rights reserved. Built in Singapore 🇸🇬
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/40 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-white/40 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
