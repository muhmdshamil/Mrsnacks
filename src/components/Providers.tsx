"use client";

import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/cart";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <CartProvider>
            {children}
            <Cart />
        </CartProvider>
    );
}
