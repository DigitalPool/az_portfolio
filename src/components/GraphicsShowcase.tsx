'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

const graphicsProjects = [
	{ title: "Brand Identity Design", image: "/showcase/graphics1.png" },
	{ title: "Brand Identity Design", image: "/showcase/graphics2.jpg" },
	{ title: "Social Media Poster", image: "/showcase/graphics3.png" },
	{ title: "Event Flyer", image: "/showcase/graphics4.png" },
	{ title: "Product Mockup", image: "/showcase/graphics5.png" },
	{ title: "Brand Identity Design", image: "/showcase/graphics6.png" },
	{ title: "Social Media Poster", image: "/showcase/graphics7.png" },
	{ title: "Event Flyer", image: "/showcase/graphics8.png" },
]

export default function GraphicsShowcase() {
	const [modalImage, setModalImage] = useState<string | null>(null)

	return (
		<section className="bg-black text-[#b7aa98] py-32 px-6 relative">
			<div className="max-w-6xl mx-auto">
				<h2 className="uppercase tracking-[0.3em] text-2xl mb-16 border-t border-neutral-800 pt-8">
					Graphics Design
				</h2>

				<Swiper
					effect="coverflow"
					grabCursor={true}
					centeredSlides={true}
					slidesPerView="auto"
					navigation
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 200,
						modifier: 2.5,
						slideShadows: false,
					}}
					modules={[EffectCoverflow, Navigation]}
					className="w-full"
				>
					{graphicsProjects.map((project, index) => (
						<SwiperSlide
							key={index}
							className="w-[250px] md:w-[350px] lg:w-[400px] transition-all duration-300 cursor-pointer"
							onClick={() => setModalImage(project.image)}
						>
							<div className="overflow-hidden rounded-lg border border-neutral-800 shadow-xl">
								<Image
									src={project.image}
									alt={project.title}
									width={400}
									height={500}
									className="w-full h-[500px] object-cover"
								/>
							</div>
							<p className="text-center text-sm mt-4 text-[#b7aa98]">
								{project.title}
							</p>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Modal */}
			{modalImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
					onClick={() => setModalImage(null)}
				>
					<Image
						src={modalImage}
						alt="Expanded Graphic"
						width={1920}
						height={1080}
						className="max-w-5xl max-h-[90vh] object-contain"
					/>
				</div>
			)}
		</section>
	)
}
