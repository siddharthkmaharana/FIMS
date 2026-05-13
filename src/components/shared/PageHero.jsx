import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ title, subtitle }) {
    return (
        <section className="relative bg-navy overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal blur-[100px]" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-extrabold text-white text-3xl md:text-[44px] md:leading-tight"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white/70 text-lg mt-4 max-w-2xl"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
}