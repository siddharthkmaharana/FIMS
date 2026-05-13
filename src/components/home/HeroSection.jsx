import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const words = ["Shape", "Your", "Future", "in", "Healthcare", "&", "Hospitality"];

export default function HeroSection() {
    return (
        <section className="relative min-h-[100vh] flex items-center bg-navy overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-[120px]" />
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px]" />
            </div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
            }} />

            <div className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="font-heading font-extrabold text-white text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight mb-6">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className={`inline-block mr-3 ${word === "Healthcare" || word === "&" || word === "Hospitality" ? "text-teal" : ""}`}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
                    >
                        9 professional programs. Expert faculty. Real-world training. Strong placements. — Bhubaneswar, Odisha.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="/admission"
                            className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-hover text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg text-base"
                        >
                            Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/courses"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 text-base"
                        >
                            Explore Courses
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown className="w-6 h-6 text-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}