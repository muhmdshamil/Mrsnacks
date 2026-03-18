"use client";

import { useEffect, useState } from "react";
import { FiX, FiSend, FiUser, FiMail, FiPhone, FiMapPin, FiPackage, FiLayers } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type OrderFormProps = {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
    productFlavor?: string;
    productPrice?: number;
    productBaseWeight?: string | string[];
    priceMapping?: Record<string, number>;
    cartItems?: any[];
};

export default function OrderForm({
    isOpen,
    onClose,
    productName,
    productFlavor,
    productPrice,
    productBaseWeight,
    priceMapping,
    cartItems
}: OrderFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        flavor: productFlavor || productName || "Original",
        weight: (Array.isArray(productBaseWeight) ? productBaseWeight[0] : productBaseWeight) || "100g",
    });

    // Reset flavor when product changes or modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({
                ...prev,
                flavor: productFlavor || productName || "Original",
                weight: (Array.isArray(productBaseWeight) ? productBaseWeight[0] : productBaseWeight) || "100g"
            }));
        }
    }, [isOpen, productName, productFlavor, productBaseWeight]);


    const flavors = ["Peri Peri", "Chilly Garlic"];
    const defaultWeights = ["50g", "100g", "250g", "500g", "1kg"];
    const weights = Array.isArray(productBaseWeight) ? productBaseWeight : defaultWeights;

    const calculateCurrentPrice = () => {
        if (!productPrice) return 0;

        // 1. Check if we have an explicit price mapping for this weight
        if (priceMapping && priceMapping[formData.weight]) {
            return priceMapping[formData.weight];
        }

        // 2. Fallback to ratio-based calculation
        const baseWeightStr = Array.isArray(productBaseWeight) ? productBaseWeight[0] : productBaseWeight;
        if (!baseWeightStr) return productPrice;

        const getGrams = (w: string) => {
            const val = parseInt(w);
            if (w.toLowerCase().includes("kg")) return val * 1000;
            return val;
        };

        const currentGrams = getGrams(formData.weight);
        const baseGrams = getGrams(baseWeightStr);

        return Math.round((currentGrams / baseGrams) * productPrice);
    };

    const currentTotalPrice = calculateCurrentPrice();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let orderDetails = "";
        if (cartItems && cartItems.length > 0) {
            const itemsList = cartItems.map(item => {
                const detail = [
                    item.gram ? `[${item.gram}]` : "",
                    item.flavor ? `[${item.flavor}]` : ""
                ].filter(Boolean).join(" ");

                return `- ${item.name} ${detail}\n   Quantity: ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}`;
            }).join("\n\n");

            const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

            orderDetails = `*Order Summary:*\n${itemsList}\n\n` +
                `*Total Products:* ${cartItems.length}\n` +
                `*Total Quantity:* ${totalItems}\n` +
                `*Subtotal Amount:* ₹${totalAmount}`;
        } else {
            const productLine = productName ? `*Product:* ${productName}\n*Flavor:* ${formData.flavor}` : `*Product:* ${formData.flavor}`;
            orderDetails = `${productLine}\n` +
                `*Weight:* ${formData.weight}\n` +
                `*Price:* ₹${currentTotalPrice}`;
        }

        const message = `*New Order from mrsnackz Website*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Location:* ${formData.location}\n\n` +
            orderDetails;

        const whatsappUrl = `https://wa.me/918590199698?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden"
                    >
                        <div className="bg-[linear-gradient(90deg,#EC6D13_0%,#DF3920_100%)] p-6 sm:p-8 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                            >
                                <FiX className="w-5 h-5" />
                            </button>
                            <h2 className="text-2xl sm:text-3xl font-black mb-2">Order Now</h2>
                            <p className="text-white/80 text-sm">Fill in your details and we'll process your order via WhatsApp.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-5 bg-[#FEF9F2]">
                            {/* Name */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Full Name</label>
                                <div className="relative">
                                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#DF3920] focus:ring-4 focus:ring-[#DF3920]/5 transition-all outline-none"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid sm:grid-cols-1 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Phone Number</label>
                                    <div className="relative">
                                        <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Phone number"
                                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#DF3920] focus:ring-4 focus:ring-[#DF3920]/5 transition-all outline-none"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Location</label>
                                <div className="relative">
                                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your city/delivery address"
                                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#DF3920] focus:ring-4 focus:ring-[#DF3920]/5 transition-all outline-none"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Flavor & Weight - Only show for direct product orders */}
                            {(!cartItems || cartItems.length === 0) && (
                                <div className={productName === "Banana Chips Masala" ? "grid sm:grid-cols-2 gap-4" : "flex flex-col gap-1.5"}>
                                    {productName === "Banana Chips Masala" && (
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Flavor</label>
                                            <div className="relative">
                                                <FiLayers className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                                                <select
                                                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#DF3920] transition-all appearance-none outline-none"
                                                    value={formData.flavor}
                                                    onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                                                >
                                                    {flavors.map(f => <option key={f} value={f}>{f}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Weight</label>
                                        <div className="relative">
                                            <FiPackage className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                                            <select
                                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#DF3920] transition-all appearance-none outline-none"
                                                value={formData.weight}
                                                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                            >
                                                {weights.map(w => <option key={w} value={w}>{w}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full mt-4 flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#EC6D13_0%,#DF3920_100%)] text-white px-6 py-4 rounded-2xl font-black text-lg shadow-xl shadow-[#DF3920]/20 hover:scale-[1.02] active:scale-95 transition-all outline-none"
                            >
                                <FiSend className="w-5 h-5" />
                                {(!cartItems || cartItems.length === 0) && currentTotalPrice > 0
                                    ? `Buy Now - ₹${currentTotalPrice}`
                                    : "Buy Now"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
