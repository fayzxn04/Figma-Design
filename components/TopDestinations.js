import Image from "next/image";

export default function About() {
  return (
    <section className="px-4 md:px-16 lg:px-32 py-10">
      {/* Headings */}
      <h4 className="text-black flex justify-center items-center text-2xl px-6 mt-12 font-poppins-medium">
        Top Selling
      </h4>
      <h1 className="text-black flex justify-center items-center text-4xl font-semibold px-6 mt-3 mb-10 font-volkhov-bold">
        Top Destinations
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 items-center justify-center">
        {/* CARD 1 */}
        <div className="w-[270px] rounded-2xl overflow-hidden relative shadow-xl">
          <div className="relative h-[360px] w-full">
            <Image
              src="/Rome.jpg"
              alt="Rome, Italy"
              fill
              className="object-cover transform transition-transform duration-300 scale-155 origin-top hover:scale-160 "
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-white backdrop-blur-md px-4 py-3  shadow-md z-10">
              <h3 className="text-lg font-semibold text-gray-900 font-poppins-regular">
                Rome, Italy
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1 font-poppins-regular">
                <span>$5.42k</span>
                <span>10 Days Trip</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-[270px] rounded-2xl overflow-hidden relative shadow-xl">
          <div className="relative h-[360px] w-full">
            <Image
              src="/London.jpg"
              alt="London, UK"
              fill
              className="object-cover transform transition-transform duration-300 scale-150 origin-top hover:scale-155 "
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-white backdrop-blur-md px-4 py-3  shadow-md z-10">
              <h3 className="text-lg font-semibold text-gray-900 font-poppins-regular">
                London, UK
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1 font-poppins-regular">
                <span>$4.2k</span>
                <span>12 Days Trip</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="w-[270px] rounded-2xl overflow-hidden relative shadow-xl">
          <div className="relative h-[360px] w-full">
            <Image
              src="/Europe.jpg"
              alt="Full Europe"
              fill
              className="object-cover transform transition-transform duration-300 scale-160 origin-top hover:scale-170 overflow-hidden"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-white backdrop-blur-md px-4 py-3  shadow-md z-10">
              <h3 className="text-lg font-semibold text-gray-900 font-poppins-regular">
                Full Europe
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1 font-poppins-regular">
                <span>$15k</span>
                <span>28 Days Trip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
