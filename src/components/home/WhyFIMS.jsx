import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Briefcase } from "lucide-react";
import useInView from "@/hooks/useInView";

const cards = [
    {
        icon: BookOpen,
        title: "Quality Education",
        description: "Comprehensive curriculum with experienced faculty and modern teaching methods.",
    },
    {
        icon: FlaskConical,
        title: "Practical Training",
        description: "Hands-on labs, clinical rotations, and industry internships for real-world experience.",
    },
    {
        icon: Briefcase,
        title: "Career Support",
        description: "Strong placement assistance and career mentorship from day one.",
    },
];

export default function WhyFIMS() {
    const [ref, inView] = useInView();

    return (
        <section ref={ref} className="py-20 md:py-28">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Why FIMS</span>
                    <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[44px] mt-3">
                        Built for Careers That Matter
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-white rounded-2xl border border-gray-border p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
                        >
                            <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mx-auto mb-5">
                                <card.icon className="w-6 h-6 text-teal" />
                            </div>
                            <h3 className="font-heading font-bold text-navy text-xl mb-3">{card.title}</h3>
                            <p className="text-gray-text text-[15px] leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}