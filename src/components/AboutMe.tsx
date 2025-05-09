
export default function AboutMe() {
	return (
		<section id="about" className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
			<div className="px-10 sm:px-10 md:px-20 lg:px-96 text-left">
				<p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-12">
					About Me
				</p>

				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-[#b7aa98]">
					I’m a{" "}
					<span className="text-red-500">highly focused</span>{" "}
					computer programmer specializing in <span className="text-red-500">clean architecture </span>
					producing high quality &amp;
					<span className="text-red-500"> impactful digital experience.</span>
				</h2>
			</div>
		</section>
	)
}
