

// "use client";
// import Link from "next/link";
// // import { useRouter } from "next/navigation";

// export default function MainMenu() {
//     // const router = useRouter();

//     const scrollToSection = (id: string) => {
//         const element = document.getElementById(id);
//         if (!element) return;
        
//         const headerOffset = 100; // Adjust based on your header height
//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: "smooth"
//         });
        
//         // Update URL without page reload
//         window.history.pushState({}, "", `#${id}`);
//     };
    
//     return (
//         <>
//             <div className="fixed top-20 right-20 flex flex-col gap-4 z-50 text-right font-bold">
//                 <Link 
//                     href="#about" 
//                     onClick={(e) => {
//                         e.preventDefault();
//                         scrollToSection("about");
//                     }} 
//                     className="text-[#b7aa98] hover:text-red-500 transition-colors"
//                 >
//                     <h3>ABOUT</h3>
//                 </Link>
//                 <Link 
//                     href="#clients" 
//                     onClick={(e) => {
//                         e.preventDefault();
//                         scrollToSection("clients");
//                     }} 
//                     className="text-[#b7aa98] hover:text-red-500 transition-colors"
//                 >
//                     <h3>CLIENTS</h3>
//                 </Link>
//                 <Link 
//                     href="#history" 
//                     onClick={(e) => {
//                         e.preventDefault();
//                         scrollToSection("history");
//                     }} 
//                     className="text-[#b7aa98] hover:text-red-500 transition-colors"
//                 >
//                     <h3>HISTORY</h3>
//                 </Link>
//                 <Link 
//                     href="#testimonials" 
//                     onClick={(e) => {
//                         e.preventDefault();
//                         scrollToSection("testimonials");
//                     }} 
//                     className="text-[#b7aa98] hover:text-red-500 transition-colors"
//                 >
//                     <h3>TESTIMONIALS</h3>
//                 </Link>
//                 <Link 
//                     href="#philosophy" 
//                     onClick={(e) => {
//                         e.preventDefault();
//                         scrollToSection("philosophy");
//                     }} 
//                     className="text-[#b7aa98] hover:text-red-500 transition-colors"
//                 >
//                     <h3>PHILOSOPHY</h3>
//                 </Link>  </div>
//         </>
//     )
// }



"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MainMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if we're on mobile
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
        
        // Close menu if on mobile
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };
    
    // Menu items
    const menuItems = [
        { id: "about", label: "ABOUT" },
        { id: "clients", label: "CLIENTS" },
        { id: "history", label: "HISTORY" },
        { id: "testimonials", label: "TESTIMONIALS" },
        { id: "philosophy", label: "PHILOSOPHY" },
    ];
    
    return (
        <>
            {/* Hamburger icon for mobile */}
            <div className="md:hidden fixed top-20 right-20 z-50">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 focus:outline-none"
                >
                    {!isMenuOpen ? (
                        <svg className="w-10 h-10 text-[#b7aa98]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 text-red-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    )}
                </button>
            </div>
            
            {/* Mobile dropdown menu */}
            {isMobile && isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
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
                                <h3>{item.label}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Desktop menu - visible on md and up */}
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
                        <h3>{item.label}</h3>
                    </Link>
                ))}
            </div>
        </>
    );
}