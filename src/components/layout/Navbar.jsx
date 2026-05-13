import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Cross } from "lucide-react";
import { courses } from "@/lib/courseData";
import { facilities } from "@/lib/facilityData";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses", hasDropdown: true },
    { label: "Facilities", path: "/facilities", hasDropdown: true },
    { label: "Admission", path: "/admission" },
    { label: "Contact", path: "/contact" },
];

const courseGroups = [
    { title: "Healthcare", items: courses.filter(c => c.category === "Healthcare") },
    { title: "Hospitality", items: courses.filter(c => c.category === "Hospitality") },
    { title: "Management", items: courses.filter(c => c.category === "Management") },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-sm h-[70px]"
                    : "bg-white h-[80px] lg:h-[100px]"
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center">
                        <Cross className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-heading font-extrabold text-navy text-xl tracking-tight">
                        FIMS
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative">
                            {link.hasDropdown ? (
                                <button
                                    onClick={() => toggleDropdown(link.label)}
                                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${location.pathname.startsWith(link.path)
                                            ? "text-teal"
                                            : "text-navy hover:text-teal"
                                        }`}
                                >
                                    {link.label}
                                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${location.pathname === link.path
                                            ? "text-teal"
                                            : "text-navy hover:text-teal"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )}

                            {/* Courses Dropdown */}
                            {link.label === "Courses" && activeDropdown === "Courses" && (
                                <div className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-2xl shadow-xl border border-gray-border p-6 grid grid-cols-2 gap-6">
                                    {courseGroups.map(group => (
                                        <div key={group.title}>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-text mb-3">{group.title}</p>
                                            <div className="space-y-1">
                                                {group.items.map(course => (
                                                    <Link
                                                        key={course.slug}
                                                        to={`/courses/${course.slug}`}
                                                        className="block px-3 py-2 rounded-lg text-sm text-navy hover:bg-teal-light hover:text-teal transition-colors"
                                                    >
                                                        {course.shortName} — {course.name.split("—")[1]?.trim() || course.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Facilities Dropdown */}
                            {link.label === "Facilities" && activeDropdown === "Facilities" && (
                                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-2xl shadow-xl border border-gray-border p-4">
                                    <div className="space-y-1">
                                        {facilities.map(f => (
                                            <Link
                                                key={f.slug}
                                                to={`/facilities/${f.slug}`}
                                                className="block px-3 py-2 rounded-lg text-sm text-navy hover:bg-teal-light hover:text-teal transition-colors"
                                            >
                                                {f.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Apply Now CTA */}
                <Link
                    to="/admission"
                    className="hidden lg:block bg-teal hover:bg-teal-hover text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
                >
                    Apply Now
                </Link>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-navy p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto">
                    <div className="px-6 py-6 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(link.label)}
                                            className="w-full flex items-center justify-between py-3 text-navy font-medium text-lg"
                                        >
                                            {link.label}
                                            <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                                        </button>
                                        {activeDropdown === link.label && link.label === "Courses" && (
                                            <div className="pl-4 pb-2 space-y-1">
                                                {courseGroups.map(group => (
                                                    <div key={group.title} className="mb-3">
                                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-text mb-2">{group.title}</p>
                                                        {group.items.map(course => (
                                                            <Link
                                                                key={course.slug}
                                                                to={`/courses/${course.slug}`}
                                                                className="block py-2 text-sm text-navy hover:text-teal"
                                                            >
                                                                {course.shortName}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {activeDropdown === link.label && link.label === "Facilities" && (
                                            <div className="pl-4 pb-2 space-y-1">
                                                {facilities.map(f => (
                                                    <Link
                                                        key={f.slug}
                                                        to={`/facilities/${f.slug}`}
                                                        className="block py-2 text-sm text-navy hover:text-teal"
                                                    >
                                                        {f.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link to={link.path} className="block py-3 text-navy font-medium text-lg">
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            to="/admission"
                            className="block w-full text-center bg-teal hover:bg-teal-hover text-white font-semibold py-3 rounded-full mt-4"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}