export default function BackendShowcase() {
	return (
		<section className="bg-black text-[#b7aa98] py-32 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="uppercase tracking-[0.3em] text-2xl mb-12 border-t border-neutral-800 pt-8">
					Backend Systems
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{backendProjects.map((project, index) => (
						<div key={index} className="border border-neutral-800 rounded-lg overflow-hidden">
							<video controls className="w-full h-72 object-cover">
								<source src={project.video} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<div className="p-4 text-sm">{project.title}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

const backendProjects = [
	{ title: "BankApp with React/Next/Node/Tailwind CSS", video: "/showcase/BankApp.mp4" },
	{ title: "Link Manager extension with HTML, CSS & JS", video: "/showcase/SlinkMan_demo.mp4" },
	{ title: "Integrated Teminal built with C", video: "/showcase/integrated_terminal.mp4" },
	{ title: "Islamly Mobile App built with flutter", video: "/showcase/Islamly_Mobile_App.mp4" },
];
