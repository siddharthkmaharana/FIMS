import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Send, UserCheck, Award, CheckCircle, ArrowRight } from "lucide-react";
import { courses } from "@/lib/courseData";
import PageHero from "@/components/shared/PageHero";
import AdmissionForm from "@/components/admission/AdmissionForm";
import AdmissionFAQ from "@/components/admission/AdmissionFAQ";
import useInView from "@/hooks/useInView";

const steps = [
    { icon: FileText, title: "Choose Your Program", desc: "Browse our 9 programs and select the one that fits your career goals." },
    { icon: Send, title: "Submit Application", desc: "Fill out the application form with your details and submit online." },
    { icon: UserCheck, title: "Document Verification", desc: "Our team reviews your documents and qualifications." },
    { icon: Award, title: "Receive Offer Letter", desc: "Get your admission confirmation and start your journey at FIMS." },
];

const eligibility = [
    { course: "BPT", qualification: "10+2 (PCB) with 50% aggregate" },
    { course: "MPT", qualification: "BPT degree with 55% aggregate" },
    { course: "BSc Nursing", qualification: "10+2 (PCB) with 45% aggregate, age 17+" },
    { course: "MPH", qualification: "Bachelor's in health science/related field, 50%" },
    { course: "GNM", qualification: "10+2 with 40% aggregate, age 17–35" },
    { course: "BHM", qualification: "10+2 from any board, 45% aggregate" },
    { course: "MHM", qualification: "Bachelor's in Hotel Management, 50%" },
    { course: "BBA", qualification: "10+2 from any board, 45% aggregate" },
    { course: "BTTM", qualification: "10+2 from any board, 45% aggregate" },
];

const documents = [
    "10th & 12th Marksheets and Certificates",
    "Graduation Marksheets (for PG courses)",
    "Migration & Transfer Certificate",
    "Character Certificate",
    "Aadhaar Card / Identity Proof",
    "Passport-size Photographs (6 copies)",
    "Caste Certificate (if applicable)",
    "Medical Fitness Certificate",
];

export default function Admission() {
    return (
        <>
            <PageHero title="Apply to FIMS — Admissions Open 2025–26" subtitle="Take the first step toward your career in healthcare, hospitality, or management." />

            {/* How to Apply */}
            <HowToApply />

            {/* Documents */}
            <DocumentsSection />

            {/* Eligibility Table */}
            <EligibilitySection />

            {/* Application Form */}
            <section className="py-20 md:py-28" id="application-form">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Apply</span>
                        <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3">
                            Application Form
                        </h2>
                    </div>
                    <AdmissionForm />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 md:py-28 bg-gray-bg">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">FAQ</span>
                        <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <AdmissionFAQ />
                </div>
            </section>
        </>
    );
}

function HowToApply() {
    const [ref, inView] = useInView();
    return (
        <section ref={ref} className="py-20 md:py-28 bg-gray-bg">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-14"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Process</span>
                    <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3">How to Apply</h2>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-border p-7 text-center shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
                        >
                            <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                                {i + 1}
                            </div>
                            <h3 className="font-heading font-bold text-navy text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-text text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DocumentsSection() {
    const [ref, inView] = useInView();
    return (
        <section ref={ref} className="py-20 md:py-28">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="mb-10"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Checklist</span>
                    <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3">Required Documents</h2>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                    {documents.map((doc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-3 bg-gray-bg rounded-xl p-4"
                        >
                            <CheckCircle className="w-5 h-5 text-teal shrink-0" />
                            <span className="text-navy text-[15px]">{doc}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function EligibilitySection() {
    const [ref, inView] = useInView();
    return (
        <section ref={ref} className="py-20 md:py-28 bg-gray-bg">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="mb-10"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Requirements</span>
                    <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] mt-3">Eligibility Summary</h2>
                </motion.div>
                <div className="bg-white rounded-2xl border border-gray-border overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-border bg-gray-bg">
                                    <th className="text-left font-heading font-bold text-navy text-sm px-6 py-4">Course</th>
                                    <th className="text-left font-heading font-bold text-navy text-sm px-6 py-4">Minimum Qualification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eligibility.map((e, i) => (
                                    <tr key={i} className="border-b border-gray-border last:border-0">
                                        <td className="px-6 py-4 font-medium text-navy text-[15px]">{e.course}</td>
                                        <td className="px-6 py-4 text-gray-text text-[15px]">{e.qualification}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}