"use client";

import { LuMapPin, LuPlane, LuHotel, LuGlobe } from "react-icons/lu";
import { motion } from "framer-motion";

export default function OurReach() {
    const locations = [
        {
            icon: <LuMapPin className="w-6 h-6 text-white" />,
            title: "Kerala Distribution",
            description: "Across all 14 districts",
        },
        {
            icon: <LuPlane className="w-6 h-6 text-white" />,
            title: "Tamil Nadu Airports",
            description: "Airport retail outlets",
        },
        {
            icon: <LuHotel className="w-6 h-6 text-white" />,
            title: "Resorts & Hospitality",
            description: "Premium resort partners",
        },
        {
            icon: <LuGlobe className="w-6 h-6 text-white" />,
            title: "GCC Export Markets",
            description: "UAE, Saudi & beyond",
        },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
            {/* Background Decoration (Ellipses) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none -z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-orange-100 rounded-[100%]"
                ></motion.div>
                <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-orange-100 rounded-[100%]"
                ></motion.div>
                <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-orange-100 rounded-[100%]"
                ></motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center space-y-6 mb-16 lg:mb-20"
            >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6F9F5] text-[#10B981] text-xs font-bold tracking-wide uppercase">
                    Our Reach
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#2c1e16]">
                    From Kerala to the GCC
                </h2>
                <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                    Mr. Snackz proudly delivers authentic Kerala snacks to customers across Kerala,
                    Tamil Nadu airports, resorts, and GCC countries. Our mission is to bring the taste
                    of Kerala to snack lovers wherever they are.
                </p>
            </motion.div>

            {/* Reach Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
                {locations.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="bg-white p-8 rounded-[40px] flex flex-col items-center text-center space-y-6 shadow-sm border border-orange-50 transition-all duration-300 pointer-events-auto"
                    >
                        <motion.div
                            whileHover={{ rotateY: 180, scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="w-14 h-14 rounded-full bg-[#f5982f] flex items-center justify-center shadow-lg shadow-orange-500/20"
                        >
                            {item.icon}
                        </motion.div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-[#2c1e16] text-lg">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-medium">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
