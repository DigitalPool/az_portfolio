"use client";

import Image from "next/image";

const testimonials = [
  {
    text: "AbdulAzeez nailed my vision perfectly, no revisions needed. Truly talented!",
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
  return (
    <section id="testimonials" className="bg-black text-[#b7aa98] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm mb-12 border-t border-neutral-800 pt-6">
          What They Said
        </p>

        <div className="flex flex-col gap-20">
          {testimonials.map((review, index) => (
            <div key={index} className="cursor-default">
              <div className="flex items-start">
                <span className="text-red-500 text-4xl sm:text-5xl lg:text-7xl leading-none mr-4">
                  “
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {review.text}
                </h2>
              </div>

              {/* Author Info */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold ml-8 lg:ml-10">{review.name}</p>
                  <p className="text-neutral-500 ml-8 lg:ml-10">{review.position}</p>
                  <p className="text-neutral-500 ml-8 lg:ml-10">{review.company}</p>
                </div>
                <Image
                  src={review.image}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-red-500 mr-10 lg:mr-20"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-neutral-800 mt-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
