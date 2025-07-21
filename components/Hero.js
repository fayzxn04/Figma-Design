import Image from "next/image";

export default function Hero() {
  return (
    // //
    <section className="flex flex-col lg:flex-row items-center justify-between px-4  md:px-16 lg:px-32 py-10 ">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
        <p className="text-red-600 font-semibold text-sm font-poppins-bold">
          BEST DESTINATIONS AROUND THE WORLD
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight font-volkhov-bold">
          Travel, enjoy <br /> and live a new <br /> and full life
        </h1>
        <p className="text-gray-600 text-sm md:text-base font-poppins-medium">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sports it engrossed listening.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
          {/* Find out more button */}
          <button className="bg-orange-400 text-white px-6 py-3 rounded-md shadow-md font-medium cursor-pointer font-poppins-medium">
            Find out more
          </button>

          {/* Play Demo button */}
          <button className="flex items-center gap-3 text-gray-500 font-medium cursor-pointer font-poppins-medium">
            {/* Circular Play Button */}
            <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            Play Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center px-2">
        <Image
          src="/Traveller.jpg"
          alt="Travel Girl"
          height="500"
          width="500"
          className="w-64 md:w-80 lg:w-full object-contain" // Ours
          // className="w-full max-w-xs sm:max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
}
