"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    const features = [
        "100% Pure Coconut Oil",
        "No Preservatives or Additives",
        "Traditional Family Recipe",
        "Farm-Fresh Ingredients",
        "Hand-Selected Nendran Bananas",
        "Small Batch Production",
    ];

    return (
        <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto w-full relative overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Side: Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full flex justify-center lg:justify-start"
                >
                    {/* Background glow behind the image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F7AC1A]/20 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative w-full max-w-[550px]">
                        <Image
                            src="/assets/about/ab-left.jpg"
                            alt="Fresh ingredients and bananas"
                            width={600}
                            height={750}
                            className="w-full h-auto object-cover rounded-[40px] shadow-2xl"
                        />

                        {/* Floating Stats Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-8 right-0 sm:bottom-12 sm:-right-12 bg-white/90 backdrop-blur-md px-8 py-5 rounded-[28px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-8"
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-[2.5rem] leading-none font-black text-[#F39200]">3</span>
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">Generations</span>
                            </div>
                            <div className="w-[1.5px] h-10 bg-zinc-200"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-[2.5rem] leading-none font-black text-[#75A43D]">10+</span>
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">Years</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side: Text & Features */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-8 w-full"
                >
                    {/* Header */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-black text-[#27272A] leading-[1.1] tracking-tight mb-6">
                            From <span className="text-[#F39200]">Kerala's Heart</span> <br />
                            to Your Home
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
                            Three generations ago, in a small village in Kerala, our grandmother started
                            making banana chips for her family using a secret recipe. Today, we
                            continue that legacy, bringing you the same authentic taste with the same
                            love and care.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-2">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-2xl border border-black/[0.03] shadow-sm"
                            >
                                <div className="w-6 h-6 rounded-full bg-[#EBF4EE] flex items-center justify-center shrink-0">
                                    <svg className="w-3.5 h-3.5 text-[#51A06B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[13px] sm:text-sm font-bold text-zinc-800">{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testimonial / Quote */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="relative mt-6 pl-6 sm:pl-8 py-2"
                    >
                        {/* Gradient Border Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 rounded-full bg-gradient-to-b from-[#F39200] to-[#51A06B]"></div>

                        {/* Quote Icon */}
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FCEAC7] mb-2 sm:mb-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <p className="text-zinc-500 italic text-base sm:text-lg leading-relaxed mb-4">
                            "Every chip we make carries the warmth of Kerala's sun and the
                            richness of our heritage."
                        </p>
                        <p className="font-bold text-[#27272A]">— The Snackz Family</p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
