import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../ui/ScrollToTop";
import ScrollRestore from "./ScrollRestore";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollRestore />
            <TopBar />
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}