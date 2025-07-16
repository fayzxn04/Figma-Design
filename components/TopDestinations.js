import Image from "next/image";

export default function About() {
  return (
    <section className="px-4 md:px-16 lg:px-32 py-10">
      {/* Headings */}
      <h4 className="text-black flex justify-center items-center text-2xl px-6 mt-12">
        Top Selling
      </h4>
      <h1 className="text-black flex justify-center items-center text-4xl font-semibold px-6 mt-3 mb-10">
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
              className="object-cover transform transition-transform duration-300 hover:scale-110"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md px-4 py-3 rounded-t-xl shadow-md z-10">
              <h3 className="text-lg font-semibold text-gray-900">
                Rome, Italy
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
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
              className="object-cover transform transition-transform duration-300 hover:scale-110"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md px-4 py-3 rounded-t-xl shadow-md z-10">
              <h3 className="text-lg font-semibold text-gray-900">
                London, UK
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
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
              className="object-cover transform transition-transform duration-300 hover:scale-110"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md px-4 py-3 rounded-t-xl shadow-md z-10">
              <h3 className="text-lg font-semibold text-gray-900">
                Full Europe
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
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
