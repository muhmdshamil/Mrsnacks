"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
    {
        title: "The Golden Standard of Kerala Snacks",
        subtitle: "Hand-picked Nendran bananas, sliced thin and fried to perfection.",
        image: "/assets/hero/hero_banana_chips.png",
    },
    {
        title: "Traditional Spice Blends",
        subtitle: "Recipes passed down through generations, now delivered to your door.",
        image: "/assets/hero/hero_spicy_mixture.png",
    },
    {
        title: "Premium Quality, Pure Taste",
        subtitle: "No preservatives, no artificial colors. Just pure Kerala goodness.",
        image: "/assets/hero/hero_tapioca_chips.png",
    }
];

export default function ProductHero() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[250px] sm:h-[400px] w-full overflow-hidden sm:mb-12 rounded-3xl sm:rounded-[40px] shadow-2xl bg-zinc-900 mt-4 sm:mt-0">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    {/* Dark overlay for readability and to prevent white flash */}
                    <div className="absolute inset-0 bg-black/40 z-[5]" />

                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white z-10">
                        <h1 className="text-2xl sm:text-5xl font-black mb-2 sm:mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-3xl leading-tight drop-shadow-lg">
                            {slide.title}
                        </h1>
                        <p className="text-xs sm:text-lg font-medium opacity-90 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
                            {slide.subtitle}
                        </p>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20">
                <button onClick={prev} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all">
                    <FiChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={next} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all">
                    <FiChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-white" : "w-2 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
