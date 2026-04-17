/* ============================================================
  ARION FloatingWhatsApp — Dark Tech Minimalism
   Fixed floating WhatsApp button for quick contact
   ============================================================ */

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => setIsOpen(true), 3000);
    const pulseTimer = setTimeout(() => setShowPulse(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-[#0D1120] border border-white/10 rounded-2xl p-4 shadow-2xl max-w-xs"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white/30 hover:text-white/60 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p
              className="text-sm font-semibold text-white mb-1"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
            >
              👋 Need a website?
            </p>
            <p
              className="text-xs text-white/50 mb-3"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Chat with us on WhatsApp and get a free quote within 1 hour!
            </p>
            <a
              href="https://wa.me/6592716106?text=Hi%20Arion!%20I'm%20interested%20in%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-white"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/30"
      >
        {showPulse && (
          <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" />
        )}
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>
    </div>
  );
}
