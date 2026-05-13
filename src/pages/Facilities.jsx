import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Library, Stethoscope, Microscope, UtensilsCrossed, Monitor, Building, Home } from "lucide-react";
import { facilities } from "@/lib/facilityData";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import useInView from "@/hooks/useInView";

const iconMap = {
    BookOpen, Library, Stethoscope, Microscope, UtensilsCrossed, Monitor, Building, Home
};

function FacilityCard({ facility, index }) {
    const [ref, inView] = useInView();
    const Icon = iconMap[facility.icon] || BookOpen;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            <Link
                to={`/facilities/${facility.slug}`}
                className="block bg-white rounded-2xl border border-gray-border p-7 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] shadow-[0_4px_24px_rgba(0,0,0,0.07)] group"
            >
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5 group-hover:bg-teal transition-colors">
                    <Icon className="w-5 h-5 text-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-navy text-xl mb-2">{facility.name}</h3>
                <p className="text-gray-text text-[15px] leading-relaxed mb-4">{facility.shortDescription}</p>
                <span className="text-teal font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
            </Link>
        </motion.div>
    );
}

export default function Facilities() {
    return (
        <>
            <PageHero title="World-Class Facilities" subtitle="Infrastructure designed to support excellence in learning and living." />

            <section className="py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((f, i) => (
                            <FacilityCard key={f.slug} facility={f} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}