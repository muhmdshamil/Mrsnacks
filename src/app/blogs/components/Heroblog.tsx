"use client";

import Image from "next/image";
import { FiUser, FiCalendar, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Heroblog() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 md:mt-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Image Content - Appears first on mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl order-1 lg:order-2 self-center"
                >
                    <Image
                        src="/assets/blogs/hero.jpg"
                        alt="Authentic Kerala Nendran Banana Chips"
                        fill
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                        priority
                    />
                </motion.div>

                {/* Text Content - Appears second on mobile */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-6 lg:pr-8 order-2 lg:order-1"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2c1e16] tracking-tight leading-[1.1]"
                    >
                        Why Nendran Banana <br className="hidden sm:block" />
                        Chips Are Kerala&apos;s Most <br className="hidden sm:block" />
                        Loved Snack
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-500 text-lg leading-relaxed max-w-xl font-medium"
                    >
                        Discover the story behind the golden, crispy chips that have
                        been a part of Kerala&apos;s culinary heritage for centuries — from
                        farm to table.
                    </motion.p>

                    {/* Meta Data */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center gap-6 pt-4"
                    >
                        <div className="flex items-center space-x-2">
                            <motion.div
                                whileHover={{ rotate: 15 }}
                                className="w-10 h-10 rounded-full bg-[#f5982f] flex items-center justify-center text-white"
                            >
                                <FiUser className="w-5 h-5" />
                            </motion.div>
                            <span className="font-bold text-[#2c1e16] text-sm">Anitha Krishnan</span>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-500">
                            <FiCalendar className="w-5 h-5" />
                            <span className="text-sm font-semibold">March 5, 2026</span>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-500">
                            <FiClock className="w-5 h-5" />
                            <span className="text-sm font-semibold">6 min read</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
