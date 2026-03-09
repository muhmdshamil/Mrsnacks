"use client";

import Image from "next/image";
import { FiPlay, FiCheckCircle } from "react-icons/fi";
import { LuChefHat, LuLeaf, LuFlame } from "react-icons/lu";
import { motion } from "framer-motion";

export default function HowWeMake() {
    const steps = [
        {
            icon: <LuChefHat className="w-6 h-6 text-[#10B981]" />,
            label: "Traditional Preparation",
        },
        {
            icon: <LuLeaf className="w-6 h-6 text-[#10B981]" />,
            label: "Fresh Ingredients",
        },
        {
            icon: <LuFlame className="w-6 h-6 text-[#10B981]" />,
            label: "Small Batch Cooking",
        },
        {
            icon: <FiCheckCircle className="w-6 h-6 text-[#10B981]" />,
            label: "Quality Checked",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-14 flex flex-col items-center overflow-hidden">
            {/* Badge and Header */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 mb-12"
            >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6F9F5] text-[#10B981] text-xs font-bold tracking-wide uppercase">
                    Our Process
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#2c1e16]">
                    How We Make Our Snacks
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Experience the authentic cooking process behind every crispy bite.
                </p>
            </motion.div>

            {/* Video Thumbnail */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full aspect-[16/9] max-h-[600px] rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl mb-12 group cursor-pointer group"
            >
                <Image
                    src="/assets/story/video.jpg"
                    alt="How we make our snacks"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 blur-xl animate-pulse"
                        ></motion.div>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center transition-transform duration-300"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f5982f] flex items-center justify-center pl-1.5">
                                <FiPlay className="w-8 h-8 sm:w-10 sm:h-10 text-[#f5982f] fill-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                        className="bg-white/80 p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] flex flex-col items-center text-center space-y-5 shadow-sm border border-[#E6F9F5] hover:shadow-lg hover:bg-white transition-all group"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#E6F9F5] flex items-center justify-center transition-colors group-hover:bg-[#10B981]">
                            <div className="group-hover:text-white transition-colors">
                                {step.icon}
                            </div>
                        </div>
                        <span className="font-bold text-[#2c1e16] text-sm sm:text-base leading-tight">
                            {step.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
