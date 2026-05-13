import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";

export default function CTABanner() {
    const [ref, inView] = useInView();

    return (
        <section ref={ref} className="relative bg-teal overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-navy blur-[80px]" />
            </div>
            <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 text-center relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-extrabold text-white text-3xl md:text-[44px] md:leading-tight"
                >
                    Admissions Open for 2025–26
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white/90 text-lg mt-4 mb-8"
                >
                    Start your journey in healthcare or hospitality today.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/admission"
                        className="bg-white text-teal font-semibold px-8 py-3.5 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                        Apply Now
                    </Link>
                    <Link
                        to="/contact#inquiry-form"
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all"
                    >
                        Inquire Now
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}