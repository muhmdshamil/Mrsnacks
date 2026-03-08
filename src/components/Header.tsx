"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall, FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
    const { setIsCartOpen, cartItems } = useCart();

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-[32px] shadow-sm border border-black/5 flex items-center justify-between px-5 sm:px-8 py-3"
                    style={{ backgroundImage: "linear-gradient(122.23deg, rgba(240, 180, 40, 0.12) 0%, rgba(223, 57, 32, 0.06) 50%, rgba(49, 129, 83, 0.12) 100%)" }}
                >
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="rounded-lg">
                                <Image
                                    src="/assets/logo/logo.png"
                                    alt="Mr Snackz"
                                    width={80}
                                    height={40}
                                    className="h-10 sm:h-12 w-auto object-contain"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Navigation - Centered (Desktop only) */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
                        <Link href="/" className="text-zinc-600 hover:text-[#DF3920] font-medium transition-colors">Home</Link>
                        <Link href="/products" className="text-zinc-600 hover:text-[#DF3920] font-medium transition-colors">Products</Link>
                        <Link href="/story" className="text-zinc-600 hover:text-[#DF3920] font-medium transition-colors">Our Story</Link>
                        <Link href="/blogs" className="text-zinc-600 hover:text-[#DF3920] font-medium transition-colors">Blogs</Link>
                    </nav>

                    {/* Buttons & Mobile Toggle */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Contact Dropdown - Desktop */}
                        <div className="relative hidden lg:block">
                            <button
                                onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                                className="flex items-center gap-2 bg-[linear-gradient(90deg,#EC6D13_0%,#DF3920_100%)] text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-[#DF3920]/20 hover:scale-105 transition-all"
                            >
                                <FiPhoneCall className="w-5 h-5" />
                                Contact us
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {isContactDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full mt-3 right-0 bg-white shadow-xl border border-black/5 rounded-2xl w-48 p-2 flex flex-col gap-1 z-50"
                                    >
                                        <a href="tel:8590199698" className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#FEF9F2] hover:text-[#DF3920] text-zinc-700 rounded-xl transition-colors font-medium">
                                            <FiPhoneCall className="w-4 h-4" />
                                            85901 99698
                                        </a>
                                        <a href="tel:9539016733" className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#FEF9F2] hover:text-[#DF3920] text-zinc-700 rounded-xl transition-colors font-medium">
                                            <FiPhoneCall className="w-4 h-4" />
                                            95390 16733
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#EC6D13_0%,#DF3920_100%)] text-white px-3.5 py-2.5 sm:px-6 sm:py-2.5 rounded-full font-medium shadow-lg shadow-[#DF3920]/20 hover:scale-105 transition-all"
                        >
                            <FiShoppingCart className="w-5 h-5 sm:w-5 sm:h-5" />
                            <span className="hidden sm:inline">My Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-white text-[#DF3920] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce-slow">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-1.5 text-zinc-700 hover:text-[#DF3920] transition-colors focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <FiMenu className="w-6 h-6 sm:w-7 sm:h-7" />
                        </button>
                    </div>
                </motion.div>
            </header>

            {/* Mobile Sidebar Overlay */}
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-[60] md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-[80%] max-w-sm h-full bg-[#FEF9F2] shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-black/5">
                                <Image
                                    src="/assets/logo/logo.png"
                                    alt="Mr Snackz"
                                    width={80}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-zinc-500 hover:text-red-500 transition-colors bg-white rounded-full shadow-sm outline-none"
                                >
                                    <FiX className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-1 p-6">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "Products", href: "/products" },
                                    { name: "Our Story", href: "/story" },
                                    { name: "Blogs", href: "/blogs" },
                                ].map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="px-4 py-3 text-lg font-bold text-zinc-800 hover:bg-[#F39200]/10 hover:text-[#F39200] rounded-2xl transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto p-6 border-t border-black/5 relative">
                                <AnimatePresence>
                                    {isContactDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute bottom-[calc(100%+10px)] left-6 right-6 bg-white shadow-xl border border-black/5 rounded-2xl p-2 flex flex-col gap-1 z-50"
                                        >
                                            <a href="tel:8590199698" className="flex items-center justify-center gap-3 px-4 py-3 hover:bg-[#FEF9F2] hover:text-[#DF3920] text-zinc-700 rounded-xl transition-colors font-medium">
                                                <FiPhoneCall className="w-5 h-5" />
                                                85901 99698
                                            </a>
                                            <a href="tel:9539016733" className="flex items-center justify-center gap-3 px-4 py-3 hover:bg-[#FEF9F2] hover:text-[#DF3920] text-zinc-700 rounded-xl transition-colors font-medium">
                                                <FiPhoneCall className="w-5 h-5" />
                                                95390 16733
                                            </a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <button
                                    onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                                    className="w-full flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#EC6D13_0%,#DF3920_100%)] text-white px-6 py-4 rounded-full font-bold shadow-lg shadow-[#DF3920]/20 hover:scale-[1.02] transition-all outline-none"
                                >
                                    <FiPhoneCall className="w-5 h-5" />
                                    Contact us
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
