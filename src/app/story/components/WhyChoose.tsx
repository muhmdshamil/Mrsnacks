"use client";

import Link from "next/link";
import { FiArrowRight, FiShoppingCart } from "react-icons/fi";
import {
    LuDroplets,
    LuBookOpen,
    LuShieldCheck,
    LuGem,
    LuAward,
    LuPackage
} from "react-icons/lu";
import { motion } from "framer-motion";

export default function WhyChoose() {
    const reasons = [
        {
            icon: <LuDroplets className="w-6 h-6 text-[#10B981]" />,
            title: "100% Pure Coconut Oil",
            description: "Every snack fried in premium Kerala coconut oil",
        },
        {
            icon: <LuBookOpen className="w-6 h-6 text-[#10B981]" />,
            title: "Authentic Kerala Recipes",
            description: "Traditional recipes passed through generations",
        },
        {
            icon: <LuShieldCheck className="w-6 h-6 text-[#10B981]" />,
            title: "Hygienic Preparation",
            description: "Strict quality and hygiene standards",
        },
        {
            icon: <LuGem className="w-6 h-6 text-[#10B981]" />,
            title: "Premium Ingredients",
            description: "Only the finest handpicked ingredients",
        },
        {
            icon: <LuAward className="w-6 h-6 text-[#10B981]" />,
            title: "Export Quality Standards",
            description: "Meeting international quality benchmarks",
        },
        {
            icon: <LuPackage className="w-6 h-6 text-[#10B981]" />,
            title: "Freshly Packed",
            description: "Sealed for maximum freshness and taste",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 mb-16"
            >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6F9F5] text-[#10B981] text-xs font-bold tracking-wide uppercase">
                    Why Us
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#2c1e16]">
                    Why Choose Mr. Snackz
                </h2>
            </motion.div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -12, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
                        className="bg-white p-8 rounded-[40px] flex flex-col items-center text-center space-y-6 shadow-sm border border-gray-50 transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#E6F9F5] flex items-center justify-center">
                            {reason.icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-[#2c1e16] text-xl">
                                {reason.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                                {reason.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Banner Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full rounded-[40px] sm:rounded-[48px] overflow-hidden bg-gradient-to-r from-[#f58e2f] to-[#f9a03f] p-10 sm:p-20 text-center text-white shadow-2xl"
            >
                {/* Visual Decorative Circles */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"
                ></motion.div>
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none"
                ></motion.div>

                <div className="relative z-10 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                    >
                        Taste the Authentic Crunch of Kerala
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-white/90 text-lg sm:text-xl font-medium max-w-2xl mx-auto"
                    >
                        Experience premium Kerala snacks made with tradition and love.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link
                            href="/products"
                            className="w-full sm:w-auto px-10 py-4 bg-white text-[#f5982f] font-bold rounded-full hover:bg-orange-50 transition-colors flex items-center justify-center"
                        >
                            Explore Products
                            <FiArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            href="/order"
                            className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                            <FiShoppingCart className="mr-2 w-5 h-5" />
                            Quick Order
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
