"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";

export default function VideoComponent() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(err => console.error("Video play error:", err));
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-10 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[400px] rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl group"
            >
                <video
                    ref={videoRef}
                    onClick={togglePlay}
                    className={`w-full h-full object-cover transition-transform duration-1000 ${!isPlaying ? "group-hover:scale-105" : ""
                        }`}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    playsInline
                    preload="metadata"
                    loop
                    controls={isPlaying}
                >
                    <source src="/assets/story/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                    <div
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20 cursor-pointer"
                    >
                        <div className="relative flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 blur-xl animate-pulse"
                            ></motion.div>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center transition-transform duration-300"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#f5982f] flex items-center justify-center pl-1.5">
                                    <FiPlay className="w-8 h-8 sm:w-10 sm:h-10 text-[#f5982f] fill-[#f5982f]" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </motion.div>
        </section>
    );
}
