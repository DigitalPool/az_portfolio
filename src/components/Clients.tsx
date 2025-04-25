import Image from "next/image";

const clients = [
	{ name: "Client 1", logo: "/images/clients/client1.png" },
	{ name: "Client 2", logo: "/images/clients/client2.png" },
	{ name: "Client 3", logo: "/images/clients/client3.png" },
	{ name: "Client 4", logo: "/images/clients/client4.png" },
	{ name: "Client 5", logo: "/images/clients/client5.png" },
	{ name: "Client 6", logo: "/images/clients/client6.png" },
	{ name: "Client 7", logo: "/images/clients/client7.png" },
	{ name: "Client 8", logo: "/images/clients/client8.png" },
	{ name: "Client 9", logo: "/images/clients/client9.png" },
];


export default function Clients() {
	return (
		<section id="clients" className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 px-4">
			<div className="px-10 sm:px-10 md:px-20 lg:px-96 text-left">
				<p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-8">
					CLIENTS
				</p>

				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-[#b7aa98]">
				I&apos;ve partnered with
 					<span className="text-red-500"> forward-thinking </span>
 					brands and industry leaders to craft meaningful digital experiences
 					<span className="text-red-500"> that amplify their vision.</span>
				</h2>
			</div>

				 <div className="mt-16 relative">
				 	<div className="overflow-x-auto">
				 		<div className="flex space-x-10">
				 			{clients.map((client, index) => (
				 				<div key={index} className="flex items-center justify-center flex-shrink-0">
				 					<Image
				 						src={client.logo}
				 						alt={client.name}
				 						width={60}
				 						height={60}
				 						className="object-contain grayscale hover:grayscale-0 transition duration-300"
				 					/>
				 				</div>
				 			))}
				 		</div>
				 	</div> 
 					{/* <div className="mt-6 text-sm text-neutral-600 flex items-center justify-end pr-2">
 						<span className="mr-2">Scroll</span>
 						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
 							<path d="M5 12h14"></path>
 							<path d="m12 5 7 7-7 7"></path>
 						</svg>
 					</div> */}
 				</div>		
            </section>
	)
}



// export default function Clients() {
// 	return (
// 		<section id="clients" className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
// 			<div className="px-10 sm:px-10 md:px-20 lg:px-64 text-left">
// 				<p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-8">
// 					Clients
// 				</p>

// 				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-[#b7aa98]">
// 					I&apos;ve partnered with{" "}
// 					<span className="text-red-500">forward-thinking</span>{" "}
// 					brands and industry leaders to craft meaningful digital experiences{" "}
// 					<span className="text-red-500"> that amplify their vision.</span>
// 				</h2>

				// {/* Scrollable logos */}
				// <div className="mt-16 w-full relative">
				// 	<div className="overflow-x-auto scrollbar-hide">
				// 		<div className="flex space-x-10 min-w-max">
				// 			{clients.map((client, index) => (
				// 				<div key={index} className="flex items-center justify-center flex-shrink-0">
				// 					<Image
				// 						src={client.logo}
				// 						alt={client.name}
				// 						width={120}
				// 						height={60}
				// 						className="object-contain grayscale hover:grayscale-0 transition duration-300"
				// 					/>
				// 				</div>
				// 			))}
				// 		</div>
				// 	</div>

// 					{/* Scroll indicator */}
// 					<div className="mt-6 text-sm text-neutral-600 flex items-center justify-end pr-2">
// 						<span className="mr-2">Scroll</span>
// 						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
// 							<path d="M5 12h14"></path>
// 							<path d="m12 5 7 7-7 7"></path>
// 						</svg>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
