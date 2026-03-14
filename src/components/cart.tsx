"use client";

import { useState } from "react";
import Image from "next/image";
import { FiX, FiTrash2, FiMinus, FiPlus, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import OrderForm from "./Order";

export default function Cart() {
    const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    <OrderForm
                        isOpen={isOrderModalOpen}
                        onClose={() => setIsOrderModalOpen(false)}
                        cartItems={cartItems}
                    />
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsCartOpen(false)}
                    />

                    {/* Cart Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col pt-4 sm:pt-6"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 pb-4 border-b border-zinc-100">
                            <h2 className="text-2xl font-black text-zinc-800">Your Cart</h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 text-zinc-400 hover:text-[#DF3920] bg-zinc-50 hover:bg-red-50 rounded-full transition-colors outline-none"
                            >
                                <FiX className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500">
                                    <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-4xl">🛍️</span>
                                    </div>
                                    <p className="text-lg font-medium text-zinc-800">Your cart is empty</p>
                                    <p className="text-sm mt-1">Looks like you haven't added anything yet.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="mt-6 text-[#DF3920] font-bold hover:underline"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-6">
                                    <AnimatePresence mode="popLayout">
                                        {cartItems.map((item) => (
                                            <motion.div
                                                layout
                                                key={item.id}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                className="flex gap-4 p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm"
                                            >
                                                {/* Product Image */}
                                                <div className="w-20 h-20 bg-zinc-50 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        width={80}
                                                        height={80}
                                                        className="w-full h-full object-contain mix-blend-multiply"
                                                    />
                                                </div>

                                                {/* Details */}
                                                <div className="flex flex-col flex-1 justify-between">
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="font-bold text-zinc-800 leading-tight text-sm sm:text-base pr-4">
                                                            {item.name}
                                                        </h3>
                                                        {(item.gram || item.flavor) && (
                                                            <div className="flex flex-wrap gap-2 mt-1">
                                                                {item.gram && <span className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-md font-bold">{item.gram}</span>}
                                                                {item.flavor && <span className="text-[10px] bg-[#FACC15]/20 text-[#854D0E] px-2 py-0.5 rounded-md font-bold">{item.flavor}</span>}
                                                            </div>
                                                        )}
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-zinc-400 hover:text-red-500 transition-colors shrink-0"
                                                        >
                                                            <FiTrash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-2">
                                                        <span className="font-black text-[#F39200]">₹{item.price * item.quantity}</span>

                                                        {/* Quantity Control */}
                                                        <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-full px-2 py-1">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-zinc-800 focus:outline-none"
                                                            >
                                                                <FiMinus className="w-3 h-3" />
                                                            </button>
                                                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-zinc-800 focus:outline-none"
                                                            >
                                                                <FiPlus className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Footer / Summary */}
                        {cartItems.length > 0 && (
                            <div className="border-t border-zinc-100 p-6 bg-white shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-zinc-500 font-medium">Subtotal</span>
                                    <span className="text-2xl font-black text-zinc-800">₹{cartTotal}</span>
                                </div>
                                <button
                                    onClick={() => setIsOrderModalOpen(true)}
                                    className="w-full flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#EC6D13_0%,#DF3920_100%)] text-white px-6 py-4 rounded-full font-bold shadow-lg shadow-[#DF3920]/20 hover:scale-[1.02] transition-transform outline-none group"
                                >
                                    Order Now
                                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-center text-xs text-zinc-400 mt-4">Taxes and shipping calculated at checkout</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
