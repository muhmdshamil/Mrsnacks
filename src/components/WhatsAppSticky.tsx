"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppSticky = () => {
    return (
        <motion.a
            href="https://wa.me/918590199698"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-shadow duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-10 transition-all duration-300" />
            <FaWhatsapp size={35} className="relative z-10" />

            {/* Pulsing effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        </motion.a>
    );
};

export default WhatsAppSticky;
