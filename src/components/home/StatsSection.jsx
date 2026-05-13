import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";

const stats = [
    { value: 500, suffix: "+", label: "Students" },
    { value: 90, suffix: "%+", label: "Placement Rate" },
    { value: 9, suffix: "", label: "Programs" },
    { value: 10, suffix: "+", label: "Faculty" },
];

const pills = ["Expert Faculty", "Clinical Exposure", "Modern Labs", "Career Mentorship"];

function CountUp({ target, suffix, inView }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span className="font-heading font-extrabold text-white text-4xl md:text-5xl">
            {count}{suffix}
        </span>
    );
}

export default function StatsSection() {
    const [ref, inView] = useInView(0.3);

    return (
        <section ref={ref} className="bg-navy py-20 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-teal blur-[150px]" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-extrabold text-white text-3xl md:text-[44px] text-center mb-14"
                >
                    Trusted by Students Across Odisha
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                            <p className="text-white/60 text-sm mt-2 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    {pills.map((pill, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                            className="px-5 py-2 rounded-full border border-white/30 text-white/80 text-sm font-medium"
                        >
                            {pill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}