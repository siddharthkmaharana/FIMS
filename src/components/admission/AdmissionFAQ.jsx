import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        q: "When does the admission process start?",
        a: "Admissions for the 2025–26 academic year are currently open. You can apply online through our website or visit our campus for in-person assistance."
    },
    {
        q: "What are the fee structures for different courses?",
        a: "Fee structures vary by program. Please contact our admissions office at +91 9937840919 or email admission@franklingroup.co.in for detailed fee information for your chosen course."
    },
    {
        q: "Is there an entrance exam for admission?",
        a: "Admission is primarily based on qualifying examination marks and merit. Some programs may require an entrance test or interview. Contact admissions for specific course requirements."
    },
    {
        q: "Are hostel facilities available for outstation students?",
        a: "Yes, FIMS provides separate hostel facilities for male and female students with 24/7 security, mess facility, Wi-Fi, and all essential amenities."
    },
    {
        q: "Does FIMS provide placement assistance?",
        a: "Yes, FIMS has a dedicated placement cell that provides career counseling, interview preparation, and placement drives with leading hospitals, hotels, and organisations. We maintain a 90%+ placement rate."
    },
];

export default function AdmissionFAQ() {
    return (
        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                    <AccordionItem
                        key={i}
                        value={`item-${i}`}
                        className="bg-white rounded-2xl border border-gray-border px-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                    >
                        <AccordionTrigger className="text-left font-heading font-semibold text-navy text-[15px] hover:no-underline py-5">
                            {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-text text-[15px] leading-relaxed pb-5">
                            {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}