import Link from "next/link";

export default function Hero() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-black text-[#b7aa98] text-center px-4">

			<p className="mb-4 tracking-widest text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#b7aa98]">ABDULAZEEZ SHOBAJO</p>
			<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight space-y-1 uppercase text-[#b7aa98]">
				<div className="sm:py-3 md:py-4 lg:py-4">Dropping</div>
				<div className="text-red-500 sm:py-3 md:py-4 lg:py-5">Jaws</div>
				<div className="sm:py-3 md:py-4 lg:py-5">Since</div>
				<div className="sm:py-3 md:py-4 lg:py-5">2012</div>
			</h1>

			<Link
				href="/#testimonials"
				className="mt-5 underline text-red-500 hover:text-white text-lg transition-all"
			>
				What people say →
			</Link>
		</main>
    );
}