'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FrontendShowcase() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<section className="bg-black text-[#b7aa98] py-32 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="uppercase tracking-[0.3em] text-2xl mb-12 border-t border-neutral-800 pt-8">
					Frontend Development
				</h2>

				{/* Gallery */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{frontendProjects.map((project, index) => (
						<div 
							key={index} 
							className="group relative overflow-hidden border border-neutral-800 rounded-lg hover:shadow-[0_0_20px_#dd524c55] transition cursor-pointer"
							onClick={() => setSelectedImage(project.image)}
						>
							<Image 
								src={project.image} 
								alt={project.title} 
								width={500} 
								height={240} 
								className="w-full h-60 object-cover group-hover:scale-105 transition-transform" 
							/>
							<div className="absolute bottom-0 bg-black bg-opacity-70 w-full p-4 text-sm opacity-0 group-hover:opacity-100 transition">
								{project.title}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Modal */}
			{selectedImage && (
				<div 
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={() => setSelectedImage(null)}
				>
					<Image 
						src={selectedImage || ''} 
						alt="Expanded View" 
						width={1920} 
						height={1080} 
						className="max-w-4xl max-h-[90vh] object-contain border border-neutral-700 rounded-lg" 
					/>
					<span className="absolute top-10 right-10 text-white text-3xl cursor-pointer">&times;</span>
				</div>
			)}
		</section>
	)
}

const frontendProjects = [
	{ title: "Futuristic Store", image: "/showcase/frontend1.png" },
	// { title: "E-commerce UI", image: "/showcase/frontend2.png" },
	{ title: "Dashboard UI", image: "/showcase/frontend4.png" },
	{ title: "Addidas Show", image: "/showcase/frontend3.png" },
];
