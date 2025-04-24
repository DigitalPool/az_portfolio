export default function ProjectsPage() {
	const projects = [
		{ title: "Gas Analyzer", slug: "gas-analyzer" },
		{ title: "Biogas PG Experiment", slug: "biogas-pg" },
	]

	return (
		<div className="min-h-screen p-10">
			<h1 className="text-4xl font-bold mb-8">Projects</h1>
			<div className="grid md:grid-cols-2 gap-6">
				{projects.map((project) => (
					<div
						key={project.slug}
						className="border p-6 rounded-xl hover:bg-gray-900 transition"
					>
						<h2 className="text-xl">{project.title}</h2>
					</div>
				))}
			</div>
		</div>
	)
}
