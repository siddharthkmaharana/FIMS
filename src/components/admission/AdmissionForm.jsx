import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { courses } from "@/lib/courseData";

export default function AdmissionForm() {
    const [formData, setFormData] = useState({
        fullName: "", email: "", phone: "", course: "", dob: "", gender: "", stateCity: "", message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!formData.fullName.trim()) errs.fullName = "Full name is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email is required";
        if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = "Valid phone number is required";
        if (!formData.course) errs.course = "Please select a course";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setSubmitted(true);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    if (submitted) {
        return (
            <div className="max-w-lg mx-auto bg-teal-light rounded-2xl p-10 text-center">
                <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
                <h3 className="font-heading font-bold text-navy text-2xl mb-2">Application Submitted!</h3>
                <p className="text-gray-text">Thank you for applying to FIMS. Our admissions team will contact you shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-border p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField label="Full Name" required value={formData.fullName} onChange={v => handleChange("fullName", v)} error={errors.fullName} />
                <InputField label="Email" type="email" required value={formData.email} onChange={v => handleChange("email", v)} error={errors.email} />
                <InputField label="Phone" type="tel" required value={formData.phone} onChange={v => handleChange("phone", v)} error={errors.phone} />
                <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                        Course of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                        value={formData.course}
                        onChange={e => handleChange("course", e.target.value)}
                        className={`w-full px-4 py-3 rounded-[10px] border ${errors.course ? "border-red-400" : "border-gray-border"} text-navy bg-white focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors text-[15px]`}
                    >
                        <option value="">Select a program</option>
                        {courses.map(c => (
                            <option key={c.slug} value={c.shortName}>{c.shortName} — {c.name.split("—")[1]?.trim()}</option>
                        ))}
                    </select>
                    {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                </div>
                <InputField label="Date of Birth" type="date" value={formData.dob} onChange={v => handleChange("dob", v)} />
                <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Gender</label>
                    <select
                        value={formData.gender}
                        onChange={e => handleChange("gender", e.target.value)}
                        className="w-full px-4 py-3 rounded-[10px] border border-gray-border text-navy bg-white focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors text-[15px]"
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <InputField label="State / City" value={formData.stateCity} onChange={v => handleChange("stateCity", v)} className="md:col-span-2" />
            </div>
            <div className="mt-5">
                <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
                <textarea
                    value={formData.message}
                    onChange={e => handleChange("message", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-border text-navy focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors text-[15px] resize-none"
                    placeholder="Any additional information..."
                />
            </div>
            <button
                type="submit"
                className="mt-6 w-full bg-teal hover:bg-teal-hover text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
                <Send className="w-4 h-4" /> Submit Application
            </button>
        </form>
    );
}

function InputField({ label, type = "text", required, value, onChange, error, className = "" }) {
    return (
        <div className={className}>
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