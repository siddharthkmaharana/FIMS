import React from "react";
import { GraduationCap, Building2, Microscope, Home } from "lucide-react";

const items = [
    { icon: GraduationCap, label: "Recognised by Govt. of Odisha" },
    { icon: Building2, label: "Affiliated to Utkal University" },
    { icon: Microscope, label: "Modern Labs & OPD" },
    { icon: Home, label: "Campus Hostels" },
];

export default function TrustStrip() {
    return (
        <section className="bg-gray-bg border-y border-gray-border">
            <div className="max-w-[1200px] mx-auto px-6 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 justify-center py-2">
                            <item.icon className="w-5 h-5 text-teal shrink-0" />
                            <span className="text-sm font-medium text-navy">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}