"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroImages = ["/assets/Hero/Hero.png", "/assets/Hero/hero2.png"];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [heroImages.length]);
    return (
        <section
            className="relative pt-[120px] lg:pt-[160px] pb-10 px-6 w-full min-h-screen flex items-center overflow-x-clip"
            style={{ background: "linear-gradient(122.23deg, rgba(240, 180, 40, 0.1) 0%, rgba(223, 57, 32, 0.05) 50%, rgba(49, 129, 83, 0.1) 100%)" }}
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

                {/* 1. Image Content (Shows ON TOP on mobile, RIGHT on desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-1 lg:order-2 relative w-full flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-[700px]">
                        <div className="relative rounded-[32px] overflow-visible sm:overflow-hidden lg:overflow-visible group shadow-2xl">
                            <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="absolute inset-0 w-full h-full"
                                    >
                                        <Image
                                            src={heroImages[currentSlide]}
                                            alt="Nendran Chips"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Floating Badge: Hot & Crispy */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute top-4 right-4 sm:top-8 sm:-right-8 bg-white/95 backdrop-blur px-5 py-2.5 rounded-full hidden sm:flex items-center gap-2 border border-black/5 shadow-xl animate-bounce-slow"
                            >
                                <span className="text-xl">🌶️</span>
                                <span className="text-[#DF3920] font-bold text-sm">Hot & Crispy</span>
                            </motion.div>

                            {/* Floating Badge: Nendran Chips */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute bottom-16 -left-4 sm:bottom-12 sm:-left-12 bg-white/95 backdrop-blur p-4 sm:p-5 rounded-3xl shadow-2xl border border-black/5 hidden sm:flex items-center gap-4 max-w-[240px]"
                            >
                                <div className="w-12 h-12 bg-[#F6F1EA] rounded-xl flex items-center justify-center text-2xl shadow-inner shrink-0">🍌</div>
                                <div>
                                    <p className="font-bold text-[#27272A] text-sm sm:text-base leading-tight">Nendran Chips</p>
                                    <div className="flex text-[#F5C029] text-[10px] sm:text-xs mt-1.5 gap-0.5">
                                        {"★".repeat(5)}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Quick Order Button - Overflowing bottom right */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="absolute -bottom-8 right-0 sm:-right-4 z-20"
                        >
                            <a
                                href="https://wa.me/918590199698"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#07C666] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_10px_25px_-5px_rgba(7,198,102,0.4)] flex items-center gap-2 hover:scale-105 transition-all text-sm sm:text-base cursor-pointer"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Quick Order
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                {/* 2. Text Content (Shows BELOW on mobile, LEFT on desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 lg:order-1 flex flex-col gap-6 sm:gap-8 xl:pr-8 items-center text-center lg:items-start lg:text-left mt-4 lg:mt-0"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-[2.75rem] text-4xl md:text-6xl  font-bold text-[#27272A] tracking-tight"
                    >
                        Purely <span className="bg-gradient-to-r from-[#F7AC1A] to-[#DB8300] text-transparent bg-clip-text">Healthy.</span> <br />
                        Perfectly <span className="text-[#B1BB37]">Tasty.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-base sm:text-lg md:text-xl text-[#52525B] max-w-[500px] leading-relaxed"
                    >
                        Wholesome, nutrient rich snacks designed to fuel your day without compromising on taste.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start"
                    >
                        <Link href="/products" className="bg-[#EAB308] text-black px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#d4a207] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#EAB308]/20 w-full sm:w-auto">
                            Explore Snacks
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link href="/story" className="border border-zinc-200 bg-transparent text-zinc-800 px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                            <svg className="w-6 h-6 text-[#22C55E]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.5 2C16.5 2 15.5 2.2 14.5 2.6C12.5 3.3 11 5 10.5 7C10.2 8.3 10.4 9.7 11.2 10.8L3.6 18.4C3.2 18.8 3.2 19.5 3.6 19.9L4.1 20.4C4.5 20.8 5.2 20.8 5.6 20.4L13.2 12.8C14.3 13.6 15.7 13.8 17 13.5C19 13 20.7 11.5 21.4 9.5C21.8 8.5 22 7.5 22 6.5C22 4 20 2 17.5 2ZM17 9.5C16.2 9.5 15.5 8.8 15.5 8C15.5 7.2 16.2 6.5 17 6.5C17.8 6.5 18.5 7.2 18.5 8C18.5 8.8 17.8 9.5 17 9.5Z" />
                            </svg>
                            <span className="text-[#DCA325]">Our Story</span>
                        </Link>
                    </motion.div>

                    {/* Feature Badges - Scrollable on very small screens, exact replica */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-3 sm:gap-4 pt-4 sm:pt-6 w-full justify-center lg:justify-start">
                        {[
                            { emoji: "🥥", value: "100%", label: "Pure Coconut Oil", color: "#DE9B24", bg: "#F6EDDF" },
                            { emoji: "🌱", value: "Zero", label: "Preservatives", color: "#0CA95C", bg: "#E9F4EE" },
                            { emoji: "⭐", value: "10+", label: "Years Legacy", color: "#DF9D2B", bg: "#FDF6E8" }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 + (idx * 0.1), duration: 0.5 }}
                                className="flex items-center gap-3 sm:gap-4 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:flex-shrink-0"
                            >
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl`} style={{ backgroundColor: feature.bg }}>{feature.emoji}</div>
                                <div className="text-left flex flex-col justify-center">
                                    <p className="font-bold leading-tight text-base sm:text-lg" style={{ color: feature.color }}>{feature.value}</p>
                                    <p className="text-[9px] sm:text-[11px] text-[#A1A1AA] font-bold tracking-wide uppercase mt-0.5">{feature.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
