import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import useInView from "@/hooks/useInView";

export default function ChairmanMessage() {
    const [ref, inView] = useInView();

    return (
        <section ref={ref} className="py-20 md:py-28">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Photo placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gray-bg rounded-2xl aspect-[4/5] max-w-[380px] mx-auto lg:mx-0 flex items-center justify-center border border-gray-border">
                            <div className="text-center">
                                <div className="w-24 h-24 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-4">
                                    <User className="w-12 h-12 text-teal" />
                                </div>
                                <h4 className="font-heading font-bold text-navy text-lg">Dr. Alok Kar</h4>
                                <p className="text-gray-text text-sm mt-1">Chairman, Franklin Group of Institutions</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Message */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Leadership</span>
                        <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3 mb-6 leading-tight">
                            A Message from Our Chairman
                        </h2>
                        <blockquote className="text-teal text-xl md:text-2xl font-heading font-bold italic leading-snug mb-6 border-l-4 border-teal pl-5">
                            "We are committed to transforming education and empowering students to become leaders in their chosen profession."
                        </blockquote>
                        <p className="text-gray-text leading-relaxed mb-8">
                            At Franklin Institute of Medical Science, we believe in nurturing not just academic excellence but also the values of compassion, integrity, and innovation. Our goal is to prepare students who are ready to make a meaningful difference in healthcare and hospitality — both in Odisha and beyond.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/chairman-message"
                                className="text-teal hover:text-teal-hover font-semibold flex items-center gap-1 transition-colors"
                            >
                                Read Full Message <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/admission"
                                className="bg-teal hover:bg-teal-hover text-white font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center gap-2"
                            >
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}