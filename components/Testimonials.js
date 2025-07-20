// "use client";
// import Image from "next/image";

// const logos = [
//   "/Axon.jpg",
//   "/Jetstars.jpg",
//   "/Expedias.jpg",
//   "/Qantas.jpg",
//   "/Alitalia.jpg",
// ];

// export default function Testimonials() {
//   const looped = [...logos, ...logos]; // Doubled for seamless scroll
//   return (
//     <>
//       <section className="w-full px-4 md:px-16 lg:px-32 py-12">
//         <div className="flex flex-col sm:flex-row gap-8 items-center justify-between">
//           {/* Left Side - Text */}
//           <div className="w-full sm:w-1/2 text-center sm:text-left">
//             <h4 className="text-sm text-gray-500 font-semibold uppercase mb-2">
//               Testimonials
//             </h4>
//             <h2 className="text-3xl font-bold text-gray-900">
//               What People Say <br /> About Us.
//             </h2>
//           </div>

//           {/* Right Side - Testimonial Cards */}
//           <div className="w-full sm:w-1/2 relative">
//             {/* 1st */}
//             <div className="bg-white rounded-xl shadow-lg p-6 relative z-10 mb-4">
//               <div className="flex items-center gap-4 mb-4">
//                 <Image
//                   src="/Mike.jpg"
//                   alt="Mike Taylor"
//                   width={50}
//                   height={50}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm font-bold text-gray-800">Mike Taylor</p>
//                   <p className="text-sm text-gray-500">Lahore, Pakistan</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm italic">
//                 “On the Windows talking painted pasture yet its express parties
//                 use. Sure last upon he same as knew next. Of believed or
//                 diverted no.”
//               </p>
//             </div>
//             {/* 2nd */}
//             <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
//               <div className="flex items-center gap-4 mb-4">
//                 <Image
//                   src="/ben.jpg"
//                   alt="Ben Smith"
//                   width={50}
//                   height={50}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm font-bold text-gray-800">Ben Smith</p>
//                   <p className="text-sm text-gray-500">New York, USA</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm italic">
//                 Fantastic service and wonderful support team. I am very
//                 satisfied.
//               </p>
//             </div>
//             {/* 3rd */}
//             <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
//               <div className="flex items-center gap-4 mb-4">
//                 <Image
//                   src="/dave.jpg"
//                   alt="Dave Thomas"
//                   width={50}
//                   height={50}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm font-bold text-gray-800">Dave Thomas</p>
//                   <p className="text-sm text-gray-500">London, UK</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm italic">
//                 Highly professional and prompt service. I was very satisfied
//                 with the communication and final outcome.
//               </p>
//             </div>
//             {/* 4th */}
//             <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
//               <div className="flex items-center gap-4 mb-4">
//                 <Image
//                   src="/steve.jpg"
//                   alt="Steve Taylor"
//                   width={50}
//                   height={50}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm font-bold text-gray-800">
//                     Steve Taylor
//                   </p>
//                   <p className="text-sm text-gray-500">Texas, USA</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm italic">
//                   I loved the attention to detail and how responsive the team was throughout. Everything was delivered exactly as promised. Highly recommend!
//               </p>
//             </div>
//           </div>
//         </div>
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const logos = [
  "/Axon.jpg",
  "/Jetstars.jpg",
  "/Expedias.jpg",
  "/Qantas.jpg",
  "/Alitalia.jpg",
];

const testimonials = [
  {
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    image: "/Mike.jpg",
    review:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    name: "Ben Smith",
    location: "New York, USA",
    image: "/ben.jpg",
    review:
      "Fantastic service and wonderful support team. I am very satisfied.",
  },
  {
    name: "Dave Thomas",
    location: "London, UK",
    image: "/dave.jpg",
    review:
      "Highly professional and prompt service. I was very satisfied with the communication and final outcome.",
  },
  {
    name: "Steve Taylor",
    location: "Texas, USA",
    image: "/steve.jpg",
    review:
      "I loved the attention to detail and how responsive the team was throughout. Everything was delivered exactly as promised. Highly recommend!",
  },
];

export default function Testimonials() {
  const looped = [...logos, ...logos]; // Doubled for seamless scroll
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <>
      <section className="w-full px-4 md:px-16 lg:px-32 py-12">
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-between">
          {/* Left Side - Text */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h4 className="text-sm text-gray-500 font-semibold uppercase mb-2">
              Testimonials
            </h4>
            <h2 className="text-3xl font-bold text-gray-900">
              What People Say <br /> About Us.
            </h2>
          </div>

          {/* Right Side - Dynamic Testimonial Cards */}
          <div className="w-full sm:w-1/2 relative flex flex-col gap-4">
            {visibleTestimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 relative z-10 transition-opacity duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover transform transition-transform"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">“{t.review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full overflow-hidden bg-white py-6">
        <div className="w-max flex animate-scroll gap-4 sm:gap-6 md:gap-8">
          {looped.map((logo, i) => (
            <div
              key={i}
              className="w-[100px] sm:w-[120px] md:w-[150px] px-2 sm:px-4 md:px-6 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`logo-${i}`}
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="w-full overflow-hidden bg-white py-6">
        <div className="w-max flex animate-scroll gap-8">
          {looped.map((logo, i) => (
            <div
              key={i}
              className=" w-[150px] px-6 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`logo-${i}`}
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

{
  /* <div className="grid lg:grid-cols-5 sm:grid-cols-6 gap-y-6 mt-12 items-center justify-center md:px-16 lg:px-32">
        <Image src="/Axon.jpg" alt="Axon" width={100} height={40} />
        <Image src="/Jetstars.jpg" alt="Jetstar" width={100} height={40} />
        <Image src="/Expedias.jpg" alt="Expedia" width={100} height={40} />
        <Image src="/Qantas.jpg" alt="Qantas" width={100} height={40} />
        <Image src="/Alitalia.jpg" alt="Alitalia" width={100} height={40} />
      </div> */
}
// </section>

//     </>
//   );
// }
