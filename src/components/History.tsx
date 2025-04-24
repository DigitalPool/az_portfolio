const historyData = [
	{ year: "2025", title: "Computer Programmer", company: "42Prague" },
	{ year: "2025", title: "Automation & Digital Manager", company: "DontSleepGFX Texas" },
	{ year: "2024", title: "Creative Director", company: "DigitalPool NG" },
	{ year: "2019", title: "Lead, Brand Design", company: "Tolaram Nutri & Beverages Limited", highlight: true },
]

export default function History() {
	return (
		<section id="history" className="bg-black text-neutral-300 py-32 px-6">
			<div className="max-w-6xl mx-auto">
				<p className="uppercase tracking-[0.3em] text-sm text-[#b7aa98] mb-16">
					HISTORY
				</p>

				{historyData.map((item, index) => (
					<div
                        
						key={index}
						className="flex border-t border-neutral-800 text-[#b7aa98] py-12 relative"
					>
                        
						<div className="text-4xl font-bold w-24">{item.year}</div>

						<div className="flex flex-col gap-2 text-left px-16">
							<h3 className="text-6xl font-semibold">{item.title}</h3>
							<p className="text-red-500">{item.company}</p>
						</div>
					</div>
				))}

				<div className="border-t border-neutral-800"></div>
			</div>
		</section>
	)
}
