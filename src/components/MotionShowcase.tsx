// export default function MotionShowcase() {
// 	return (
// 		<section className="bg-black text-[#b7aa98] py-32 px-6">
// 			<div className="max-w-6xl mx-auto">
// 				<h2 className="uppercase tracking-[0.3em] text-2xl mb-12 border-t border-neutral-800 pt-8">
// 					Motion Graphics
// 				</h2>

// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// 					{backendProjects.map((project, index) => (
// 						<div key={index} className="border border-neutral-800 rounded-lg overflow-hidden">
// 							<video controls className="w-full h-72 object-cover">
// 								<source src={project.video} type="video/mp4" />
// 								Your browser does not support the video tag.
// 							</video>
// 							<div className="p-4 text-sm">{project.title}</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

export default function MotionShowcase() {
    return (
        <section className="bg-black text-[#b7aa98] py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="uppercase tracking-[0.3em] text-2xl mb-12 border-t border-neutral-800 pt-8">
                    Motion Graphics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {backendProjects.map((project, index) => (
                        <div key={index} className="border border-neutral-800 rounded-lg overflow-hidden">
                            <iframe 
                                src={project.video}
                                className="w-full h-72"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                            <div className="p-4 text-sm">{project.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const backendProjects = [
	{ title: "Anurika Motion", video: "https://drive.google.com/file/d/1PHX5hxnTzxRukm_3EQ6YxLg9kkkZ97bT/preview" },
	{ title: "Pipa Concerto", video: "https://drive.google.com/file/d/1H1JfHUC-7ibhU7ux0-x6AwaEjiSf0TVR/preview" },
	{ title: "Mike Smiff", video: "https://drive.google.com/file/d/1VgdtThuZA_TFKKkC5-MZoVK_SRGJnqAj/preview" },
	{ title: "Poet Boy Problems", video: "https://drive.google.com/file/d/1R3YrQ89gjVIDTkrwxNDClTxLO-xsHTD-/preview" },
];
