import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCoursesByCategory } from "@/lib/courseData";
import PageHero from "@/components/shared/PageHero";
import CourseCard from "@/components/shared/CourseCard";
import CTABanner from "@/components/shared/CTABanner";

const tabs = ["All", "Healthcare", "Hospitality", "Management"];

export default function Courses() {
    const [active, setActive] = useState("All");
    const filtered = getCoursesByCategory(active);

    return (
        <>
            <PageHero title="Our Programs" subtitle="9 professional programs in healthcare, hospitality, and management." />

            <section className="py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto px-6">
                    {/* Filter tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActive(tab)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === tab
                                        ? "bg-teal text-white"
                                        : "bg-gray-bg text-navy border border-gray-border hover:border-teal"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="wait">
                            {filtered.map((course, i) => (
                                <motion.div
                                    key={course.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                >
                                    <CourseCard course={course} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}