import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import WhyFIMS from "@/components/home/WhyFIMS";
import CoursesShowcase from "@/components/home/CoursesShowcase";
import StatsSection from "@/components/home/StatsSection";
import ChairmanMessage from "@/components/home/ChairmanMessage";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import CTABanner from "@/components/shared/CTABanner";

export default function Home() {
    return (
        <>
            <HeroSection />
            <TrustStrip />
            <WhyFIMS />
            <CoursesShowcase />
            <StatsSection />
            <ChairmanMessage />
            <FacilitiesPreview />
            <CTABanner />
        </>
    );
}