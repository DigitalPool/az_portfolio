"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MainMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        window.history.pushState({}, "", `#${id}`);
        setIsMenuOpen(false);  // Close menu after click
    };

    const menuItems = [
        { id: "about", label: "ABOUT" },
        { id: "clients", label: "CLIENTS" },
        { id: "history", label: "HISTORY" },
        { id: "testimonials", label: "TESTIMONIALS" },
        { id: "philosophy", label: "PHILOSOPHY" },
    ];

    return (
        <>
            {/* Hamburger Icon */}
            <div className="md:hidden fixed top-20 right-20 z-50">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}  // Toggle instead of just opening
                    aria-label="Toggle menu"
                >
                    <svg className="w-10 h-10 text-[#b7aa98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobile && isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
                    {/* Close Button */}
                    {/* <button 
                        className="absolute top-6 right-6 text-red-500 hover:text-white transition"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> */}

                    <div className="flex flex-col items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                                className="text-[#b7aa98] text-2xl font-bold hover:text-red-500 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Menu */}
            <div className="hidden md:flex fixed top-20 right-20 flex-col gap-4 z-50 text-right font-bold">
                {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                        }}
                        className="text-[#b7aa98] hover:text-red-500 transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </>
    );
}