import React from "react";
import { User } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { motion } from "framer-motion";

export default function ChairmanMessage() {
    return (
        <>
            <PageHero title="Chairman's Message" subtitle="A vision for the future of education in Odisha." />

            <section className="py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Left: Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-gray-bg rounded-2xl aspect-[3/4] flex items-center justify-center border border-gray-border sticky top-32">
                                <div className="text-center">
                                    <div className="w-28 h-28 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
                                        <User className="w-14 h-14 text-teal" />
                                    </div>
                                    <h3 className="font-heading font-bold text-navy text-xl">Dr. Alok Kar</h3>
                                    <p className="text-gray-text text-sm mt-1">Chairman</p>
                                    <p className="text-gray-text text-sm">Franklin Group of Institutions</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Message */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="lg:col-span-3"
                        >
                            <blockquote className="text-teal text-xl md:text-2xl font-heading font-bold italic leading-snug mb-8 border-l-4 border-teal pl-6">
                                "We are committed to transforming education and empowering students to become leaders in their chosen profession."
                            </blockquote>

                            <div className="prose prose-lg max-w-none text-gray-text leading-relaxed space-y-5">
                                <p>Dear Students, Parents, and Well-Wishers,</p>

                                <p>
                                    It gives me immense pleasure to welcome you to Franklin Institute of Medical Science (FIMS). When we established this institution, our vision was clear — to create a centre of learning that goes beyond textbooks and examinations, one that shapes character, builds competence, and inspires service.
                                </p>

                                <p>
                                    Education, in its truest sense, is about transformation. At FIMS, we strive to transform young minds into skilled professionals who are not only technically proficient but also ethically grounded and socially responsible. Whether in healthcare, hospitality, or management, our programs are designed to prepare students for the real challenges they will face in their careers.
                                </p>

                                <p>
                                    Our experienced faculty, modern infrastructure, and commitment to practical training ensure that every student at FIMS receives an education that is both rigorous and relevant. We have invested significantly in our laboratories, OPD facility, library, and hostel amenities because we believe that the environment in which a student learns is just as important as what they learn.
                                </p>

                                <p>
                                    I am particularly proud of our placement record and the success stories of our alumni who are now serving in hospitals, hotels, and organisations across the country. Their achievements are a testament to the quality of education we provide and the dedication of our team.
                                </p>

                                <blockquote className="text-teal text-lg font-heading font-semibold italic border-l-4 border-teal pl-5 my-8">
                                    "Our goal is not just to produce graduates, but to develop leaders who will shape the future of healthcare and hospitality in India."
                                </blockquote>

                                <p>
                                    As we continue to grow and evolve, we remain steadfast in our commitment to excellence, innovation, and student success. I invite you to explore our programs, visit our campus, and become part of the FIMS family.
                                </p>

                                <p>
                                    Together, let us build a future where every student has the opportunity to realise their full potential and contribute meaningfully to society.
                                </p>

                                <p className="mt-10">
                                    With warm regards,
                                </p>
                                <div className="mt-2">
                                    <p className="font-heading font-bold text-navy text-lg">Dr. Alok Kar</p>
                                    <p className="text-sm text-gray-text">Chairman, Franklin Group of Institutions</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}