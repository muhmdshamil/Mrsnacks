"use client";

import Image from "next/image";
import { LuDroplets, LuLeaf, LuFactory, LuMapPin } from "react-icons/lu";
import { motion } from "framer-motion";

export default function OurStoryContent() {
    const features = [
        {
            icon: <LuDroplets className="w-6 h-6 text-[#f5982f]" />,
            title: "100% Pure Coconut Oil",
        },
        {
            icon: <LuLeaf className="w-6 h-6 text-[#f5982f]" />,
            title: "Handpicked Ingredients",
        },
        {
            icon: <LuFactory className="w-6 h-6 text-[#f5982f]" />,
            title: "Hygienic Production",
        },
        {
            icon: <LuMapPin className="w-6 h-6 text-[#f5982f]" />,
            title: "Authentic Kerala Taste",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Content - Appears first on mobile and left on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[4/3] lg:h-[500px] lg:aspect-square rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl order-1 lg:order-1"
                >
                    <Image
                        src="/assets/story/left.jpg"
                        alt="Coconut, Bananas and Spices"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Text Content - Appears second on mobile and right on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col space-y-8 lg:pl-8 order-2 lg:order-2"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-black text-[#2c1e16]">
                            Our Story
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1.5 bg-[#f5982f] rounded-full"
                        ></motion.div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            At Mr. Snackz, we believe every bite should be an experience of taste, quality,
                            and happiness. With a wide variety of snacks crafted from the finest
                            ingredients, we bring you flavors that connect tradition with modern taste.
                            From crunchy savories to delightful munchies, our products are prepared with
                            care, ensuring freshness, hygiene, and satisfaction in every pack.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            We don&apos;t just make snacks—we create moments of joy to share with your
                            family and friends.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                className="flex items-center space-x-4 p-5 rounded-3xl bg-white border border-orange-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="p-3 bg-orange-50 rounded-2xl flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <span className="font-bold text-[#2c1e16] text-sm sm:text-base">
                                    {feature.title}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
