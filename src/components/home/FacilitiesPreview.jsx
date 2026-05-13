import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Library, Stethoscope, Microscope } from "lucide-react";
import useInView from "@/hooks/useInView";

const featured = [
    { slug: "class-room", name: "Classrooms", icon: BookOpen, desc: "Modern audio-visual teaching environments" },
    { slug: "library", name: "Library", icon: Library, desc: "10,000+ books and digital resources" },
    { slug: "opd", name: "OPD", icon: Stethoscope, desc: "Clinical training with real patients" },
    { slug: "anatomy-physiology-lab", name: "Anatomy Lab", icon: Microscope, desc: "State-of-the-art lab equipment" },
];

export default function FacilitiesPreview() {
    const [ref, inView] = useInView();

    return (
        <section ref={ref} className="py-20 md:py-28 bg-gray-bg">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">Campus</span>
                    <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[44px] mt-3">
                        A Campus Built for Learning
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((f, i) => (
                        <motion.div
                            key={f.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                to={`/facilities/${f.slug}`}
                                className="block bg-white rounded-2xl border border-gray-border p-7 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] shadow-[0_4px_24px_rgba(0,0,0,0.07)] group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5 group-hover:bg-teal transition-colors">
                                    <f.icon className="w-5 h-5 text-teal group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-heading font-bold text-navy text-lg mb-2">{f.name}</h3>
                                <p className="text-gray-text text-sm leading-relaxed">{f.desc}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/facilities"
                        className="text-teal hover:text-teal-hover font-semibold flex items-center gap-1 justify-center transition-colors"
                    >
                        Explore All Facilities <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}