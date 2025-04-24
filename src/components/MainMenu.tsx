

// import Link from "next/link"

// export default function MainMenu() {
// 	return (
// 		<>
// 			<div className="fixed top-20 right-20 flex flex-col gap-4 z-50 
// 			text-right text-[#b7aa98] font-bold hover:text-red-500 transition-colors">
// 				<Link href="#about"><h3>ABOUT</h3></Link>
// 				<Link href="/#clients"><h3>CLIENTS</h3></Link>
// 				<Link href="#history"><h3>HISTORY</h3></Link>
// 				<Link href="#philosophy"><h3>PHILOSOPHY</h3></Link>
// 			</div>
// 		</>
// 	)
// }

"use client";

import { useRouter } from "next/navigation";

export default function MainMenu() {
    const router = useRouter();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        
        const headerOffset = 100; // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL without page reload
        window.history.pushState({}, "", `#${id}`);
    };
    
    return (
        <>
            <div className="fixed top-20 right-20 flex flex-col gap-4 z-50 text-right font-bold">
                <a 
                    href="#about" 
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about");
                    }} 
                    className="text-[#b7aa98] hover:text-red-500 transition-colors"
                >
                    <h3>ABOUT</h3>
                </a>
                <a 
                    href="#clients" 
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("clients");
                    }} 
                    className="text-[#b7aa98] hover:text-red-500 transition-colors"
                >
                    <h3>CLIENTS</h3>
                </a>
                <a 
                    href="#history" 
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("history");
                    }} 
                    className="text-[#b7aa98] hover:text-red-500 transition-colors"
                >
                    <h3>HISTORY</h3>
                </a>
                <a 
                    href="#testimonials" 
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("testimonials");
                    }} 
                    className="text-[#b7aa98] hover:text-red-500 transition-colors"
                >
                    <h3>TESTIMONIALS</h3>
                </a>
                <a 
                    href="#philosophy" 
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("philosophy");
                    }} 
                    className="text-[#b7aa98] hover:text-red-500 transition-colors"
                >
                    <h3>PHILOSOPHY</h3>
                </a>
            </div>
        </>
    )
}