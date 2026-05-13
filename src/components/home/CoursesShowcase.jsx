import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { courses, getCoursesByCategory } from "@/lib/courseData";
import CourseCard from "@/components/shared/CourseCard";
import useInView from "@/hooks/useInView";

const tabs = ["All", "Healthcare", "Hospitality", "Management"];

export default function CoursesShowcase() {
    const [active, setActive] = useState("All");
    const [ref, inView] = useInView();
    const filtered = getCoursesByCategory(active);

    return (
        <section ref={ref} className="py-20 md:py-28 bg-gray-bg">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Programs</span>
                    <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[44px] mt-3">
                        Find Your Program
                    </h2>
                </motion.div>

                {/* Filter tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === tab
                                    ? "bg-teal text-white"
                                    : "bg-white text-navy border border-gray-border hover:border-teal"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Course grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {filtered.map((course, i) => (
                            <motion.div
                                key={course.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="h-full"
                            >
                                <CourseCard course={course} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/courses"
                        className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-all"
                    >
                        View All Programs
                    </Link>
                </div>
            </div>
        </section>
    );
}