import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, User, Award, Heart, Lightbulb, Shield, GraduationCap, Building2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import useInView from "@/hooks/useInView";

const values = [
    { icon: Award, title: "Excellence", desc: "Maintaining the highest standards in education, research, and clinical practice." },
    { icon: Shield, title: "Integrity", desc: "Upholding ethical conduct, transparency, and accountability in all we do." },
    { icon: Lightbulb, title: "Innovation", desc: "Embracing modern teaching methods, technology, and evidence-based practices." },
    { icon: Heart, title: "Compassion", desc: "Fostering empathy, care, and a commitment to community well-being." },
];

function AnimatedSection({ children, className = "" }) {
    const [ref, inView] = useInView();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function About() {
    return (
        <>
            <PageHero title="About Franklin Institute of Medical Science" subtitle="Excellence in healthcare and hospitality education since our founding." />

            {/* Who We Are */}
            <section className="py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto px-6">
                    <AnimatedSection>
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Who We Are</span>
                        <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3 mb-6">
                            A Legacy of Academic Excellence
                        </h2>
                        <div className="max-w-3xl">
                            <p className="text-gray-text leading-relaxed mb-4">
                                Franklin Institute of Medical Science (FIMS) is a premier private institution located in Bhubaneswar, Odisha, dedicated to producing skilled healthcare professionals, hospitality managers, and business leaders. Established with the vision of transforming education in Eastern India, FIMS offers 9 professional programs across healthcare, hospitality, and management disciplines.
                            </p>
                            <p className="text-gray-text leading-relaxed mb-8">
                                Affiliated to Utkal University and recognised by the Government of Odisha, FIMS combines rigorous academic training with practical experience, modern infrastructure, and a strong focus on employability. Our campus in Rasulgarh, Bhubaneswar, provides students with a supportive learning environment equipped with state-of-the-art laboratories, a functional OPD, comprehensive library, and comfortable hostel facilities.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-teal-light text-teal font-semibold text-sm px-5 py-2.5 rounded-full">
                                <GraduationCap className="w-4 h-4" />
                                Recognised by Govt. of Odisha
                            </div>
                            <div className="flex items-center gap-2 bg-teal-light text-teal font-semibold text-sm px-5 py-2.5 rounded-full">
                                <Building2 className="w-4 h-4" />
                                Affiliated to Utkal University
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 md:py-28 bg-gray-bg">
                <div className="max-w-[1200px] mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Our Purpose</span>
                        <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3">
                            Mission & Vision
                        </h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedSection>
                            <div className="bg-white rounded-2xl border border-gray-border p-8 h-full shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                                <div className="w-12 h-12 rounded-xl bg-teal flex items-center justify-center mb-5">
                                    <span className="text-white font-heading font-bold text-lg">M</span>
                                </div>
                                <h3 className="font-heading font-bold text-navy text-2xl mb-4">Our Mission</h3>
                                <p className="text-gray-text leading-relaxed">
                                    To provide accessible, high-quality professional education that equips students with the knowledge, skills, and values necessary to excel in healthcare, hospitality, and management — contributing to the development of Odisha and the nation through competent, compassionate graduates.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="bg-white rounded-2xl border border-gray-border p-8 h-full shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                                    <span className="text-white font-heading font-bold text-lg">V</span>
                                </div>
                                <h3 className="font-heading font-bold text-navy text-2xl mb-4">Our Vision</h3>
                                <p className="text-gray-text leading-relaxed">
                                    To be a nationally recognised centre of excellence in healthcare and hospitality education, producing graduates who are leaders, innovators, and change-makers in their respective fields — setting new benchmarks for professional education in Eastern India.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Our Values</span>
                        <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3">
                            Core Values
                        </h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <AnimatedSection key={i}>
                                <div className="bg-white rounded-2xl border border-gray-border p-7 text-center h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                                    <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mx-auto mb-5">
                                        <v.icon className="w-6 h-6 text-teal" />
                                    </div>
                                    <h3 className="font-heading font-bold text-navy text-lg mb-2">{v.title}</h3>
                                    <p className="text-gray-text text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 md:py-28 bg-gray-bg">
                <div className="max-w-[1200px] mx-auto px-6">
                    <AnimatedSection className="text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Leadership</span>
                        <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3 mb-12">
                            Our Chairman
                        </h2>
                        <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-border p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                            <div className="w-24 h-24 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
                                <User className="w-12 h-12 text-teal" />
                            </div>
                            <h3 className="font-heading font-bold text-navy text-xl">Dr. Alok Kar</h3>
                            <p className="text-gray-text text-sm mt-1 mb-5">Chairman, Franklin Group of Institutions</p>
                            <Link
                                to="/chairman-message"
                                className="text-teal hover:text-teal-hover font-semibold text-sm flex items-center gap-1 justify-center transition-colors"
                            >
                                Read Chairman's Message <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <CTABanner />
        </>
    );
}