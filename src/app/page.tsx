
import './globals.css'
import Hero from '@/components/Hero'
import AboutMe from "@/components/AboutMe"
import History from "@/components/History"
import Clients from "@/components/Clients"
import Philosophy from "@/components/Philosophy"
import Testimonials from "@/components/Testimonials"
import FrontendShowcase from "@/components/FrontendShowcase"
import BackendShowcase from "@/components/BackendShowcase"
import GraphicsShowcase from "@/components/GraphicsShowcase"
import MotionShowcase from "@/components/MotionShowcase"

export default function HomePage() {
	return (
	<body className="overflow-x-hidden">
		<Hero />
		<AboutMe />
		<BackendShowcase />
		<History />
		<FrontendShowcase />
		<Clients />
		<GraphicsShowcase />
		<Testimonials />
		<MotionShowcase />
		<Philosophy />
	</body>
	)
}
