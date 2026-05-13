import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, GraduationCap, CheckCircle, Briefcase, FileText } from "lucide-react";
import { getCourseBySlug, courses } from "@/lib/courseData";
import CourseCard from "@/components/shared/CourseCard";
import CTABanner from "@/components/shared/CTABanner";

export default function CourseDetail() {
    const { slug } = useParams();
    const course = getCourseBySlug(slug);

    if (!course) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="font-heading font-bold text-navy text-2xl mb-4">Course Not Found</h2>
                    <Link to="/courses" className="text-teal hover:text-teal-hover font-semibold">
                        View All Courses →
                    </Link>
                </div>
            </div>
        );
    }

    const related = courses.filter(c => c.category === course.category && c.slug !== course.slug).slice(0, 3);

    return (
        <>
            {/* Hero */}
            <section className="relative bg-navy overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal blur-[120px]" />
                </div>
                <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 relative">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-semibold uppercase tracking-wider text-teal bg-teal/20 px-3 py-1 rounded-full mb-4"
                    >
                        {course.category}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-extrabold text-white text-3xl md:text-[48px] leading-tight"
                    >
                        {course.name}
                    </motion.h1>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 md:py-20 border-b border-gray-border">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-wrap gap-6 mb-8">
                        <div className="flex items-center gap-2 text-navy">
                            <Clock className="w-5 h-5 text-teal" />
                            <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-navy">
                            <GraduationCap className="w-5 h-5 text-teal" />
                            <span className="font-medium">{course.degreeType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-navy">
                            <FileText className="w-5 h-5 text-teal" />
                            <span className="font-medium">Affiliated to Utkal University</span>
                        </div>
                    </div>
                    <p className="text-gray-text leading-relaxed max-w-3xl text-lg">
                        {course.fullDescription}
                    </p>
                </div>
            </section>

            {/* Key Subjects */}
            <section className="py-16 md:py-20">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="font-heading font-extrabold text-navy text-2xl md:text-3xl mb-8">Key Subjects</h2>
                    <div className="flex flex-wrap gap-3">
                        {course.subjects.map((s, i) => (
                            <span key={i} className="bg-gray-bg text-navy text-sm font-medium px-4 py-2 rounded-full border border-gray-border">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Opportunities */}
            <section className="py-16 md:py-20 bg-gray-bg">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="font-heading font-extrabold text-navy text-2xl md:text-3xl mb-8">Career Opportunities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {course.careers.map((c, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-border">
                                <Briefcase className="w-5 h-5 text-teal shrink-0" />
                                <span className="text-navy font-medium text-[15px]">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-16 md:py-20">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="font-heading font-extrabold text-navy text-2xl md:text-3xl mb-6">Eligibility Criteria</h2>
                    <div className="flex items-start gap-3 bg-teal-light rounded-2xl p-6 max-w-2xl">
                        <CheckCircle className="w-6 h-6 text-teal shrink-0 mt-0.5" />
                        <p className="text-navy leading-relaxed">{course.eligibility}</p>
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className="py-12 border-t border-gray-border">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-4">
                    <Link
                        to="/admission"
                        className="bg-teal hover:bg-teal-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        to="/contact"
                        className="border-2 border-navy text-navy font-semibold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-all flex items-center gap-2"
                    >
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Related Courses */}
            {related.length > 0 && (
                <section className="py-16 md:py-20 bg-gray-bg">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <h2 className="font-heading font-extrabold text-navy text-2xl md:text-3xl mb-8">Related Programs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {related.map(c => (
                                <CourseCard key={c.slug} course={c} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTABanner />
        </>
    );
}