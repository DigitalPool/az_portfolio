"use client";

import { useState } from "react";

const testimonials = [
	{
		text: "AbdulAzeez nailed my vision perfectly—no revisions needed. Truly talented!",
		name: "Ibby Vk",
		position: "Creative Lead",
		company: "ibbyvk.com",
		image: "/avatars/ibbyvk.png",
	},
	{
		text: "He gave us more than branding, what we got elevated our confidence and presence in the industry",
		name: "Balogun Uthman",
		position: "MD/CEO",
		company: "DJGL",
		image: "/avatars/uthman.png",
	},
	{
		text: "35+ projects together—always delivers with great communication and top quality!",
		name: "Richard",
		position: "Product Manager",
		company: "RCHARD 88",
		image: "/avatars/rchard88.png",
	},
];

export default function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section id="testimonials" className="bg-black text-[#b7aa98] py-32 px-6">
			<div className="max-w-6xl mx-auto">
				<p className="uppercase tracking-[0.3em] text-sm text-[#b7aa98] mb-16 border-t border-neutral-800 pt-8">
					What They Said
				</p>

				<div className="flex">
					{/* Testimonials List */}
					<div className="flex flex-col gap-32 w-3/4">
						{testimonials.map((review, index) => (
							<div
								key={index}
								onMouseEnter={() => setActiveIndex(index)}
								className="cursor-pointer"
							>
								<div className="flex items-start">
									<span className="text-red-500 text-7xl leading-none mr-4">“</span>
									<h2 className="text-5xl font-bold leading-tight max-w-3xl">
										{review.text}
									</h2>
								</div>
								<div className="mt-8">
									<p className="font-semibold">{review.name}</p>
									<p className="text-neutral-500">{review.position}</p>
									<p className="text-neutral-500">{review.company}</p>
								</div>
								{/* Divider */}
								<div className="border-t border-neutral-800 mt-16"></div>
							</div>
						))}
					</div>

					{/* Sticky Avatars on Right */}
					<div className="sticky top-32 h-fit flex flex-col gap-6 ml-12">
						{testimonials.map((person, idx) => (
							<img
								key={idx}
								src={person.image}
								alt={person.name}
								className={`w-16 h-16 rounded-full border-2 transition-all ${
									activeIndex === idx
										? "border-red-500 opacity-100"
										: "border-neutral-700 opacity-40"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
