"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "A Complete Guide to Traditional Kerala Snack Platters",
        excerpt: "Explore the diverse world of Kerala snacks — from murukku to mixture and everything in between.",
        image: "/assets/blogs/1.jpg",
        category: "Kerala Snacks",
        categoryColor: "bg-[#FEF3C7] text-[#D97706]"
    },
    {
        id: 2,
        title: "The Spice Route: How Kerala's Flavors Traveled the World",
        excerpt: "Kerala's spice trade dates back thousands of years, shaping global cuisine in unexpected ways.",
        image: "/assets/blogs/2.jpg",
        category: "Food Culture",
        categoryColor: "bg-[#FFEDD5] text-[#EA580C]"
    },
    {
        id: 3,
        title: "Homemade Jackfruit Chips: A Step-by-Step Guide",
        excerpt: "Learn the art of making crispy jackfruit chips at home with our traditional Kerala recipe.",
        image: "/assets/blogs/3.jpg",
        category: "Recipes",
        categoryColor: "bg-[#FFF7ED] text-[#F97316]"
    },
    {
        id: 4,
        title: "The History of Nendran Bananas",
        excerpt: "The Nendran banana, also known as the Kerala plantain, has been cultivated in the..",
        image: "/assets/blogs/4.jpg",
        category: "Kerala Snacks",
        categoryColor: "bg-[#FEF3C7] text-[#D97706]"
    },
    {
        id: 5,
        title: "The Secret of Pure Coconut Oil",
        excerpt: "What sets Kerala banana chips apart from any other fried snack is the use of pure coconut oil.",
        image: "/assets/blogs/5.jpg",
        category: "Food Culture",
        categoryColor: "bg-[#FFEDD5] text-[#EA580C]"
    },
    {
        id: 6,
        title: "Traditional Kerala Frying Techniques",
        excerpt: "The art of making perfect banana chips is passed down through generations.",
        image: "/assets/blogs/6.png",
        category: "Recipes",
        categoryColor: "bg-[#FFF7ED] text-[#F97316]"
    }
];

export default function BlogGrid() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2c1e16]">
                    More From Our Kitchen
                </h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {blogPosts.map((post) => (
                    <motion.div
                        key={post.id}
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                    >
                        {/* Image Container */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-8 flex flex-col flex-grow space-y-4">
                            <div>
                                <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${post.categoryColor}`}>
                                    {post.category}
                                </span>
                            </div>

                            <h3 className="text-xl lg:text-2xl font-black text-[#2c1e16] leading-tight line-clamp-2">
                                {post.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="pt-4">
                                <Link
                                    href={`/blogs/${post.id}`}
                                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[#f5982f] text-white font-bold rounded-full hover:bg-[#e0892a] transition-colors shadow-lg shadow-orange-500/20 text-sm"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
