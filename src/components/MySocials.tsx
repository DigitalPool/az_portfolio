export default function MySocials() {
	return (
		<div className="fixed bottom-20 left-20 flex flex-col gap-4 items-center z-50">
			{[
				{ href: "https://web.facebook.com/shobazvision", src: "/icons/facebook.png", alt: "Facebook" },
				{ href: "https://www.linkedin.com/in/abdulazeez-shobajo-304171138/", src: "/icons/linkedin.png", alt: "LinkedIn" },
				{ href: "https://github.com/DigitalPool", src: "/icons/github.png", alt: "GitHub" },
				{ href: "https://dribbble.com/DigitalPool", src: "/icons/dribbble.png", alt: "Dribbble" },
				{ href: "https://medium.com/@digitalpoolng", src: "/icons/medium.png", alt: "Medium" },
			].map((icon) => (
				<a
					key={icon.alt}
					href={icon.href}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition"
				>
					<div className="w-8 h-8 flex items-center justify-center">
						<img
							src={icon.src}
							alt={icon.alt}
							className="object-contain w-6 h-6"
						/>
					</div>
				</a>
			))}
		</div>
	)
}
