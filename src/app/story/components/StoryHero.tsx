"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function StoryHero() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Content - Appears first on mobile, second on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl order-1 lg:order-2"
                >
                    <Image
                        src="/assets/story/right.jpg"
                        alt="Authentic Kerala Snacks frying in pure coconut oil"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Text Content - Appears second on mobile, first on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-6 lg:pr-8 order-2 lg:order-1"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#2c1e16] tracking-tight leading-tight">
                        From Kerala&apos;s Kitchens <br className="hidden sm:block" />
                        <span className="text-[#f5982f]">to Every Crunch</span>
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                        mrsnackz is a snack brand founded in 2024 in Perinthalmanna,
                        Malappuram, Kerala, bringing authentic Kerala snack flavors crafted
                        with care and tradition. Every product is prepared using 100% pure
                        coconut oil and carefully selected ingredients to deliver freshness,
                        quality, and unforgettable taste.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-[#f5982f] rounded-[24px] hover:bg-[#e0892a] transition-colors shadow-lg shadow-orange-500/30"
                        >
                            Explore Snacks
                            <FiArrowRight className="ml-2 w-5 h-5" />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-[#f5982f] bg-transparent border-2 border-[#f5982f] rounded-[24px] hover:bg-orange-50 transition-colors"
                        >
                            <FiPhone className="mr-2 w-5 h-5" />
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
