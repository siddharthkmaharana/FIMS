import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        q: "What courses does FIMS offer?",
        a: "FIMS offers 9 programs: BPT, MPT, BSc Nursing, MPH, GNM in healthcare; BHM and MHM in hospitality; and BBA and BTTM in management. All programs are affiliated to Utkal University."
    },
    {
        q: "Is FIMS recognised by the government?",
        a: "Yes, FIMS is recognised by the Government of Odisha and affiliated to Utkal University, ensuring all degrees are nationally recognised."
    },
    {
        q: "What is the admission process?",
        a: "The admission process involves choosing your program, submitting the application form online or in-person, document verification, and receiving your offer letter. Visit our Admission page for details."
    },
    {
        q: "Are hostel facilities available?",
        a: "Yes, FIMS provides separate hostel facilities for male and female students with furnished rooms, 24/7 security, mess, Wi-Fi, and essential amenities."
    },
    {
        q: "What is the fee structure?",
        a: "Fee structures vary by program. Please contact our admissions office at +91 9937840919 or email admission@franklingroup.co.in for detailed fee information."
    },
    {
        q: "Does FIMS provide placement assistance?",
        a: "Yes, our dedicated placement cell provides career counseling, resume workshops, interview preparation, and organises placement drives with leading healthcare, hospitality, and corporate organisations."
    },
    {
        q: "What lab and clinical facilities are available?",
        a: "FIMS has a fully functional OPD, Anatomy & Physiology Lab, Computer Lab, and modern classrooms. Students gain hands-on clinical experience through our OPD and affiliated hospital rotations."
    },
    {
        q: "Can I visit the campus before applying?",
        a: "Absolutely! We welcome campus visits. Please call +91 9937840919 to schedule a campus tour. Our team will be happy to show you around."
    },
    {
        q: "Is there a scholarship or financial aid available?",
        a: "FIMS offers scholarships for meritorious students and economically weaker sections. Contact the admissions office for current scholarship opportunities and eligibility criteria."
    },
    {
        q: "Where is the FIMS campus located?",
        a: "FIMS is located in Rasulgarh, Bhubaneswar, Odisha. Our main campus is at Plot No.1371/7379/928, Satya Vihar, Rasulgarh, Bhubaneswar – 751010."
    }
];

export default function ContactFAQ() {
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