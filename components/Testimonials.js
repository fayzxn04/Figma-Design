"use client";
import Image from "next/image";

export default function Testimonials() {
  return (
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

        {/* Right Side - Testimonial Cards */}
        <div className="w-full sm:w-1/2 relative">
          {/* 1st */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative z-10 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/Mike.jpg"
                alt="Mike Taylor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-bold text-gray-800">Mike Taylor</p>
                <p className="text-sm text-gray-500">Lahore, Pakistan</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/ben.jpg"
                alt="Mike Taylor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-bold text-gray-800">Chris Thomas</p>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              Fantastic service and wonderful support team. I am very satisfied.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-6 gap-y-6 mt-12 items-center justify-center md:px-16 lg:px-32">
        <Image src="/Axon.jpg" alt="Axon" width={100} height={40} />
        <Image src="/Jetstars.jpg" alt="Jetstar" width={100} height={40} />
        <Image src="/Expedias.jpg" alt="Expedia" width={100} height={40} />
        <Image src="/Qantas.jpg" alt="Qantas" width={100} height={40} />
        <Image src="/Alitalia.jpg" alt="Alitalia" width={100} height={40} />
      </div>
    </section>
  );
}
