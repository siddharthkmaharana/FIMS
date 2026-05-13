import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BookOpen, Library, Stethoscope, Microscope, UtensilsCrossed, Monitor, Building, Home } from "lucide-react";
import { getFacilityBySlug } from "@/lib/facilityData";
import CTABanner from "@/components/shared/CTABanner";

const iconMap = { BookOpen, Library, Stethoscope, Microscope, UtensilsCrossed, Monitor, Building, Home };

export default function FacilityDetail() {
    const { slug } = useParams();
    const facility = getFacilityBySlug(slug);

    if (!facility) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="font-heading font-bold text-navy text-2xl mb-4">Facility Not Found</h2>
                    <Link to="/facilities" className="text-teal hover:text-teal-hover font-semibold">
                        View All Facilities →
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = iconMap[facility.icon] || BookOpen;

    return (
        <>
            {/* Hero */}
            <section className="relative bg-navy overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal blur-[120px]" />
                </div>
                <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading font-extrabold text-white text-3xl md:text-[44px]"
                    >
                        {facility.name}
                    </motion.h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Photo placeholder */}
                        <div className="bg-gray-bg rounded-2xl aspect-[4/3] flex items-center justify-center border border-gray-border">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-xl bg-teal-light flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-10 h-10 text-teal" />
                                </div>
                                <p className="text-gray-text text-sm">{facility.name}</p>
                            </div>
                        </div>

                        {/* Description & Features */}
                        <div>
                            <p className="text-gray-text leading-relaxed text-lg mb-8">
                                {facility.fullDescription}
                            </p>

                            <h3 className="font-heading font-bold text-navy text-xl mb-5">Features & Amenities</h3>
                            <div className="space-y-3">
                                {facility.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-teal shrink-0" />
                                        <span className="text-navy">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link
                                    to="/admission"
                                    className="bg-teal hover:bg-teal-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                                >
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}