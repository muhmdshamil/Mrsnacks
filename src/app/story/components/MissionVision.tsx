"use client";

import { FiEye, FiTarget, FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

export default function MissionVision() {
    const missionPoints = [
        "Provide a wide range of safe, hygienic, and delicious snack options",
        "Combine traditional recipes with modern techniques for unmatched taste",
        "Ensure customer satisfaction through quality, consistency, and value",
        "Continuously innovate and expand our product line",
        "Promote a culture of health, taste, and togetherness",
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center overflow-hidden">
            {/* Badge and Header */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 mb-12 lg:mb-16"
            >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6F9F5] text-[#10B981] text-xs font-bold tracking-wide uppercase">
                    What Drives Us
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#2c1e16]">
                    Mission & Vision
                </h2>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
                {/* Vision Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white/50 backdrop-blur-sm p-8 sm:p-12 rounded-[40px] shadow-sm border border-orange-50 flex flex-col items-start space-y-6 hover:shadow-md transition-all"
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1, ease: "linear" }}
                        className="w-14 h-14 rounded-full bg-[#f5982f] flex items-center justify-center shadow-lg shadow-orange-500/20"
                    >
                        <FiEye className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-[#2c1e16]">
                            Our Vision
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To be a trusted household name in the world of snacks by delivering uncompromising quality,
                            innovative flavors, and authentic taste that delight people across generations.
                        </p>
                    </div>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white/50 backdrop-blur-sm p-8 sm:p-12 rounded-[40px] shadow-sm border border-green-50 flex flex-col items-start space-y-6 hover:shadow-md transition-all"
                >
                    <motion.div
                        whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                        className="w-14 h-14 rounded-full bg-[#10B981] flex items-center justify-center shadow-lg shadow-green-500/20"
                    >
                        <FiTarget className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="space-y-6 w-full">
                        <h3 className="text-2xl sm:text-3xl font-black text-[#2c1e16]">
                            Our Mission
                        </h3>
                        <ul className="space-y-4">
                            {missionPoints.map((point, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                    className="flex items-start space-x-3"
                                >
                                    <FiCheck className="w-5 h-5 text-[#10B981] mt-1 flex-shrink-0" />
                                    <span className="text-gray-600 leading-snug font-medium">
                                        {point}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
