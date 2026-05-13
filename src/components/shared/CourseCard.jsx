import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";

export default function CourseCard({ course }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-border p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
            <span className="inline-block w-fit text-xs font-semibold uppercase tracking-wider text-teal bg-teal-light px-3 py-1 rounded-full mb-4">
                {course.category}
            </span>
            <h3 className="font-heading font-bold text-navy text-xl leading-snug mb-2">
                {course.name.split("—")[1]?.trim() || course.name}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-text mb-3">
                <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                </span>
                <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {course.degreeType}
                </span>
            </div>
            <p className="text-sm text-gray-text leading-relaxed mb-5 flex-1 line-clamp-2">
                {course.description}
            </p>
            <div className="flex items-center gap-5 pt-3 border-t border-gray-border">
                <Link
                    to={`/courses/${course.slug}`}
                    className="text-sm font-semibold text-teal hover:text-teal-hover flex items-center gap-1 transition-colors"
                >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                    to="/admission"
                    className="text-sm font-semibold text-navy hover:text-teal flex items-center gap-1 transition-colors"
                >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>
        </div>
    );
}