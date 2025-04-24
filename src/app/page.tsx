
import AboutMe from "@/components/AboutMe"
import History from "@/components/History"
import Clients from "@/components/Clients"
import './globals.css'
import Philosophy from "@/components/Philosophy"
import Testimonials from "@/components/Testimonials"
import FrontendShowcase from "@/components/FrontendShowcase"
import BackendShowcase from "@/components/BackendShowcase"
import GraphicsShowcase from "@/components/GraphicsShowcase"
import MotionShowcase from "@/components/MotionShowcase"
import Link from "next/link";

export default function HomePage() {
	return (
		<>
		<main className="min-h-screen flex flex-col items-center justify-center bg-black text-neutral-200 text-[#b7aa98] text-center px-4">

			<p className="mb-4 tracking-widest text-2xl font-bold text-neutral-500 text-[#b7aa98]">ABDULAZEEZ SHOBAJO</p>
			<h1 className="text-9xl font-bold leading-tight space-y-1 uppercase text-[#b7aa98]">
				<div>Dropping</div>
				<div className="text-red-500">Jaws</div>
				<div>Since</div>
				<div>2012</div>
			</h1>

			<Link
				href="/projects"
				className="mt-10 underline text-red-500 hover:text-white text-lg transition-all"
			>
				Explore Projects →
			</Link>
		</main>
		<AboutMe />
		<BackendShowcase />
		<History />
		<FrontendShowcase />
		<Clients />
		<GraphicsShowcase />
		<Testimonials />
		<MotionShowcase />
		<Philosophy />
	</>
	)
}
