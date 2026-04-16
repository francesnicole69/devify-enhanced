import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setLocation(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080B14]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="relative group cursor-pointer flex items-center gap-3"
          >
            {!isMobile && (
              <div className="absolute -inset-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              </div>
            )}
            
            <div className="relative z-10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 group-hover:border-blue-500/50 transition-all duration-300 group-hover:from-blue-500/10 group-hover:to-violet-600/10">
              <img
                src="/images/ChatGPT Image Mar 21, 2026, 06_27_54 PM.png"
                alt="Devify Logo"
                className="h-8 sm:h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              />
            </div>
            
            <div className="relative z-10 flex-col hidden sm:flex">
              <span className="font-extrabold text-base bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                Devify
              </span>
              <span className="text-xs font-medium text-white/30 group-hover:text-white/70 transition-all duration-300 tracking-widest uppercase">
                Studio
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 relative group ${
                    isActive
                      ? "text-blue-400"
                      : "text-white/60 hover:text-white"
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300" />
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300"
            >
              <span>Start Your Website</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors active:scale-95"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-[#0D1120]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="container py-4 sm:py-6 flex flex-col gap-1.5 sm:gap-2">
              {navLinks.map((link, i) => {
                const isActive = location === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-left text-sm sm:text-base font-medium px-4 py-2.5 rounded-lg transition-all duration-300 active:scale-95 ${
                      isActive
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, "/contact")}
                className="btn-gradient mt-3 sm:mt-4 px-5 py-3 rounded-premium text-sm font-semibold text-white text-center"
              >
                <span>Start Your Website</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
