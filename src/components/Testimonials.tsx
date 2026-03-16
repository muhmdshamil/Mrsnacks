"use client";

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Priya Menon",
        image: "/assets/testimonials/priya.png",
        rating: 5,
        text: "The best banana chips I've ever had! The coconut oil flavour is so authentic — it takes me straight back to my grandmother's kitchen in Thrissur.",
    },
    {
        id: 2,
        name: "Rahul Krishnan",
        image: "/assets/testimonials/rahul.png",
        rating: 5,
        text: "Perfectly crispy and not overly salty. You can taste the quality of the ingredients. These are nothing like the store-bought ones. Truly premium!",
    },
    {
        id: 3,
        name: "Anshid p",
        image: "/assets/testimonials/anshid.png",
        rating: 4,
        text: "I ordered these as a gift and my family loved them. Great packaging, fresh taste, and fast delivery. Will definitely order again.",
    },
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1 text-[#F5A623]">
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < rating ? "fill-current" : "text-gray-300"} />
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="py-20 px-4 bg-[#F8E9D6]">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#F5A623] font-semibold tracking-widest text-sm uppercase"
                >
                    Customer Love
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-4 mb-6"
                >
                    What Our Customers Say
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center gap-4 text-[#2D2D2D]"
                >
                    <div className="flex gap-1 text-[#F5A623] text-xl">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p className="text-lg">
                        <span className="font-bold">4.9</span>{" "}
                        <span className="text-gray-600">average from 124 reviews</span>
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="mb-6">
                                <StarRating rating={testimonial.rating} />
                            </div>
                            <p className="text-[#4A4A4A] text-lg leading-relaxed italic mb-8">
                                &quot;{testimonial.text}&quot;
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F8E9D6]">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#2D2D2D]">{testimonial.name}</h4>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
