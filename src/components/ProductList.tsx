"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FiShoppingCart, FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import OrderForm from "./Order";

const staticProducts = [
    {
        _uid: "static-1",
        title: "Nendran Banana Chips",
        description: "Crispy golden slices of Kerala's finest Nendran bananas, fried in pure coconut oil",
        price: 199,
        image: { filename: "/assets/products/1.png" },
        badge: "Best Seller",
        rating: 4.9,
        gram: "250g",
        flavor: "Classic Salted",
        category: "Chips"
    },
    {
        _uid: "static-2",
        title: "Kerala Spicy Mixture",
        description: "A fiery blend of crispy noodles, peanuts, curry leaves, and aromatic spices",
        price: 149,
        image: { filename: "/assets/products/2.png" },
        badge: "Spicy",
        rating: 4.8,
        gram: "200g",
        flavor: "Hot & Spicy",
        category: "Mixture"
    },
    {
        _uid: "static-3",
        title: "Potato Chips",
        description: "Crunchy cassava chips with a hint of salt, a Kerala household favorite",
        price: 179,
        image: { filename: "/assets/products/3.png" },
        badge: "Traditional",
        rating: 4.7,
        gram: "150g",
        flavor: "Masala",
        category: "Chips"
    }
];

export default function ProductList({ blok }: { blok?: any }) {
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

    // Combine items
    const dynamicItems = (blok?.product || blok?.products || []).map((p: any) => ({
        ...p,
        price: parseInt(p.price) || 0,
        rating: p.rating || 5.0,
        gram: p.gram || p.weight || "",
        flavor: p.flavor || "",
        category: p.category || "General"
    }));

    const allItems = useMemo(() => [...staticProducts, ...dynamicItems], [dynamicItems]);

    // Filtering logic
    const filteredItems = useMemo(() => {
        return allItems.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
            const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [allItems, searchQuery, categoryFilter, priceRange]);

    const categories = ["All", ...Array.from(new Set(allItems.map(item => item.category)))];

    return (
        <section className="pb-12 pt-0 px-6 max-w-7xl mx-auto w-full">
            <OrderForm
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                productName={selectedProduct || undefined}
            />

            {/* Filters & Search Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-white p-6 rounded-[32px] shadow-sm border border-black/5"
            >
                <div className="relative w-full md:max-w-md">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search for snacks..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#F39200] transition-colors"
                    />
                </div>

                <div className="flex flex-row gap-2 sm:gap-4 w-full md:w-auto pt-4 md:pt-0">
                    <div className="relative group flex-1 min-w-0">
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="appearance-none w-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 bg-zinc-50 border border-zinc-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#F39200] cursor-pointer font-medium text-zinc-700 text-xs sm:text-base truncate"
                        >
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                        <FiChevronDown className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 w-4 h-4" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 bg-zinc-50 border border-zinc-200 rounded-xl sm:rounded-2xl flex-1 min-w-0">
                        <span className="text-[10px] sm:text-sm font-bold text-zinc-500 truncate whitespace-nowrap">₹{priceRange[0]} - ₹{priceRange[1]}</span>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            step="50"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                            className="accent-[#F39200] w-full max-w-[80px] sm:w-24 h-1.5 bg-zinc-200 rounded-lg cursor-pointer mx-auto"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Product Grid */}
            {filteredItems.length > 0 ? (
                <motion.div
                    layout
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((product: any, index: number) => (
                            <motion.div
                                layout
                                key={product._uid}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{
                                    duration: 0.4,
                                    delay: index % 4 * 0.1,
                                    ease: [0.23, 1, 0.32, 1]
                                }}
                                className="bg-white rounded-[24px] sm:rounded-[32px] p-3 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] flex flex-col h-full group"
                            >

                                {/* Image Section */}
                                <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-[18px] sm:rounded-[24px] overflow-hidden flex items-center justify-center mb-3 sm:mb-6">
                                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex justify-between items-start z-10">
                                        {product.gram && (
                                            <div className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold bg-white/80 backdrop-blur-md text-zinc-700 shadow-sm border border-black/5">
                                                {product.gram}
                                            </div>
                                        )}
                                        {product.flavor && (
                                            <div className="px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full text-[8px] sm:text-xs font-bold bg-[#FACC15] text-zinc-900 shadow-sm">
                                                {product.flavor}
                                            </div>
                                        )}
                                    </div>

                                    <Image
                                        src={product.image?.filename || "/assets/logo/logo.png"}
                                        alt={product.title}
                                        width={400}
                                        height={400}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-1 sm:gap-2 mb-1.5 sm:mb-3">
                                        <div className="flex text-[#FACC15] text-[8px] sm:text-[10px]">
                                            {"★".repeat(Math.round(product.rating))}
                                            {"☆".repeat(5 - Math.round(product.rating))}
                                        </div>
                                        <span className="text-zinc-500 text-[8px] sm:text-xs font-medium">{product.rating}</span>
                                    </div>

                                    <h3 className="font-bold text-[#27272A] text-xs sm:text-lg leading-tight mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none">
                                        {product.title}
                                    </h3>

                                    <p className="text-[10px] sm:text-sm text-zinc-500 leading-relaxed sm:leading-relaxed mb-2 sm:mb-4 line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* Gram & Flavor Section (Desktop only to save mobile space) */}
                                    {(product.gram || product.flavor) && (
                                        <div className="hidden sm:flex flex-wrap gap-2 mb-6">
                                            {product.gram && (
                                                <span className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-lg text-[10px] font-bold text-zinc-600">
                                                    {product.gram}
                                                </span>
                                            )}
                                            {product.flavor && (
                                                <span className="px-3 py-1 bg-[#FACC15]/10 border border-[#FACC15]/20 rounded-lg text-[10px] font-bold text-[#854D0E]">
                                                    {product.flavor}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex flex-col sm:flex-row items-center justify-between mt-auto pt-2 sm:pt-4 border-t border-zinc-50 gap-2 sm:gap-3">
                                        <span className="font-black text-[#F39200] text-sm sm:text-2xl">₹{product.price}</span>
                                        <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto">
                                            <button
                                                onClick={() => addToCart({
                                                    id: product._uid,
                                                    name: product.title,
                                                    price: product.price,
                                                    image: product.image?.filename
                                                })}
                                                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-[#F39200] hover:text-white hover:border-[#F39200] transition-all"
                                            >
                                                <FiShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </button>
                                            <button
                                                onClick={() => setSelectedProduct(product.title)}
                                                className="flex-grow sm:px-6 h-8 sm:h-10 rounded-full font-extrabold text-white bg-[linear-gradient(90deg,#DF3920_0%,#EAB308_100%)] hover:scale-[1.02] transition-transform text-[10px] sm:text-sm"
                                            >
                                                Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            ) : (
                <div className="text-center py-24 bg-zinc-50 rounded-[40px] border border-dashed border-zinc-200">
                    <p className="text-zinc-400 font-medium">No products found matching your criteria.</p>
                    <button
                        onClick={() => { setSearchQuery(""); setCategoryFilter("All"); setPriceRange([0, 1000]); }}
                        className="mt-4 text-[#F39200] font-bold hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </section>
    );
}
