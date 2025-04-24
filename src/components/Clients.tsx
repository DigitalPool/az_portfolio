
const clients = [
	{
		name: "Client 1",
		logo: "/images/clients/client1.png",
	},
	{
		name: "Client 2",
		logo: "/images/clients/client2.png",
	},
	{
		name: "Client 3",
		logo: "/images/clients/client3.png",
	},
	{
		name: "Client 4",
		logo: "/images/clients/client4.png",
	},
	{
		name: "Client 5",
		logo: "/images/clients/client5.png",
	},
	{
		name: "Client 6",
		logo: "/images/clients/client6.png",
	},
	{
		name: "Client 7",
		logo: "/images/clients/client7.png",
	},
	{
		name: "Client 8",
		logo: "/images/clients/client8.png",
	},
	{
		name: "Client 9",
		logo: "/images/clients/client9.png",
	},
]


export default function Clients() {
    return (
        <section id="clients" className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
            <div className="max-w-7xl text-left w-full">
                <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-12">
                    Clients
                </p>

                <h2 className="text-7xl font-extrabold leading-tight text-[#b7aa98]">
                    I've partnered with{" "}
                    <span className="text-red-500">forward-thinking</span>{" "}
                    brands and industry leaders to craft impactful digital solutions that amplify their vision{" "}
                    <span className="text-red-500"> and elevate their portfolio.</span>
                </h2>

                <div className="mt-16 w-full">
                    {/* Scrollable container */}
                    <div className="overflow-x-auto pb-6 -mx-4 px-4">
                        <div className="flex space-x-12 min-w-max">
                            {clients.map((client, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Optional scroll indicator */}
                    <div className="mt-4 text-sm text-neutral-500 flex items-center justify-end">
                        <span className="mr-2">Scroll</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}