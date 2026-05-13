import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { courses } from "@/lib/courseData";
import PageHero from "@/components/shared/PageHero";
import ContactFAQ from "@/components/contact/ContactFAQ";
import useScrollToHash from "@/hooks/useScrollToHash";

export default function Contact() {
    useScrollToHash();

    return (
        <>
            <PageHero title="Get in Touch" subtitle="We'd love to hear from you. Reach out with any questions about admissions or programs." />

            <section className="py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left: Contact Details */}
                        <div>
                            <h2 className="font-heading font-extrabold text-navy text-2xl md:text-3xl mb-8">Contact Details</h2>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-teal" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-navy text-sm mb-1">Campus 1</p>
                                        <p className="text-gray-text text-[15px] leading-relaxed">
                                            Plot No.1371/7379/928, Satya Vihar, Rasulgarh, Bhubaneswar – 751010
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-teal" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-navy text-sm mb-1">Campus 2</p>
                                        <p className="text-gray-text text-[15px] leading-relaxed">
                                            Plot No.1371/1723, Satya Vihar, Rasulgarh, Bhubaneswar – 751010
                                        </p>
                                    </div>
                                </div>

                                <a href="tel:+919937840919" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-teal" />
                                    </div>
                                    <span className="text-navy font-medium group-hover:text-teal transition-colors">+91 9937840919</span>
                                </a>

                                <a href="mailto:admission@franklingroup.co.in" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-teal" />
                                    </div>
                                    <span className="text-navy font-medium group-hover:text-teal transition-colors">admission@franklingroup.co.in</span>
                                </a>

                                <a
                                    href="https://wa.me/919937840919"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-teal hover:bg-teal-hover text-white font-semibold px-6 py-3 rounded-full transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    Chat on WhatsApp
                                </a>
                            </div>

                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden border border-gray-border h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.098!2d85.863!3d20.297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ5LjIiTiA4NcKwNTEnNDYuOCJF!5e0!3m2!1sen!2sin!4v1"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="FIMS Location - Rasulgarh, Bhubaneswar"
                                />
                            </div>
                        </div>

                        {/* Right: Inquiry Form */}
                        <div id="inquiry-form">
                            <h2 className="font-heading font-extrabold text-navy text-2xl md:text-3xl mb-8">Send Us a Message</h2>
                            <InquiryForm />
                        </div>
                    </div>
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
                    <ContactFAQ />
                </div>
            </section>
        </>
    );
}

function InquiryForm() {
    const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", course: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!formData.fullName.trim()) errs.fullName = "Required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email required";
        if (!formData.phone.trim()) errs.phone = "Required";
        if (!formData.message.trim()) errs.message = "Required";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setSubmitted(true);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    if (submitted) {
        return (
            <div className="bg-teal-light rounded-2xl p-10 text-center">
                <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
                <h3 className="font-heading font-bold text-navy text-2xl mb-2">Message Sent!</h3>
                <p className="text-gray-text">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-border p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] space-y-5">
            <Field label="Full Name" required value={formData.fullName} onChange={v => handleChange("fullName", v)} error={errors.fullName} />
            <Field label="Email" type="email" required value={formData.email} onChange={v => handleChange("email", v)} error={errors.email} />
            <Field label="Phone" type="tel" required value={formData.phone} onChange={v => handleChange("phone", v)} error={errors.phone} />
            <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Course of Interest</label>
                <select
                    value={formData.course}
                    onChange={e => handleChange("course", e.target.value)}
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-border text-navy bg-white focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors text-[15px]"
                >
                    <option value="">Select a program (optional)</option>
                    {courses.map(c => (
                        <option key={c.slug} value={c.shortName}>{c.shortName}</option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    value={formData.message}
                    onChange={e => handleChange("message", e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-[10px] border ${errors.message ? "border-red-400" : "border-gray-border"} text-navy focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors text-[15px] resize-none`}
                    placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-teal hover:bg-teal-hover text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors">
                <Send className="w-4 h-4" /> Send Message
            </button>
        </form>
    );
}

function Field({ label, type = "text", required, value, onChange, error }) {
    return (
        <div>
            <label className="block text-sm font-medium text-navy mb-1.5">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={e => onChange(e.target.value)}
                className={`w-full px-4 py-3 rounded-[10px] border ${error ? "border-red-400" : "border-gray-border"} text-navy focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors text-[15px]`}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}