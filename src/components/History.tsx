const historyData = [
    { year: "2025", title: "Computer Programmer", company: "42Prague" },
    { year: "2020", title: "Automation & Digital Manager", company: "DontSleepGFX Texas" },
    { year: "2019", title: "Lead, Brand Design", company: "Tolaram Nutri & Beverages Limited", highlight: true },
    { year: "2018", title: "Creative Director", company: "DigitalPool NG" },
]

export default function History() {
    return (
        <section id="history" className="bg-black text-neutral-300 py-16 md:py-32 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <p className="uppercase tracking-[0.3em] text-sm text-[#b7aa98] mb-8 md:mb-16 border-t border-neutral-800 pt-6">
                    HISTORY
                </p>

                {historyData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row border-t border-neutral-800 text-[#b7aa98] py-8 md:py-12 relative"
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-0 sm:w-24">
                            {item.year}
                        </div>

                        <div className="flex flex-col gap-2 text-left sm:px-8 md:px-16">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-red-500 text-lg md:text-xl">{item.company}</p>
                        </div>
                    </div>
                ))}

                <div className="border-t border-neutral-800"></div>
            </div>
        </section>
    )
}