import Image from "next/image";

export default function About() {
  return (
    <section>
      <h4 className="text-black uppercase flex justify-center items-center text-2xl px-6 mt-16">
        Category
      </h4>
      <h1 className="text-black flex justify-center items-center text-4xl font-semibold px-6 mt-3">
        We Offer Best Services
      </h1>

      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 sm:px-10 lg:px-32 py-10">
        <div className="flex flex-col justify-center items-center ">
          <Image src="/Antenna.jpg" alt="Antenna" height="50" width="50" />
          <p className="font-semibold px-2 py-4"> Calculated Weather </p>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>

        {/* <div className="flex flex-col justify-center items-center ">
          <Image src="/Groups.jpg" alt="Plane" height="100" width="100" />
          <p className="font-semibold px-2 py-4"> Best Flights </p>
          <p>Engrossed listening Park gate sell they west hard for the.</p>
        </div> */}

        <div className="relative flex flex-col justify-center items-center bg-white rounded-xl shadow-xl -mt-6 px-6 py-8 overflow-hidden">
          {/* Background shape image */}
          <Image
            src="/Box.jpg"
            alt="Decorative shape"
            width={40}
            height={40}
            className="absolute bottom-0 left-0 z-0"
          />

          {/* Card content */}
          <Image
            src="/Groups.jpg"
            alt="Plane"
            height={100}
            width={100}
            className="relative z-10"
          />
          <p className="font-semibold px-2 py-4 relative z-10">Best Flights</p>
          <p className="text-center relative z-10">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src="/Mic.jpg" alt="Mic" height="50" width="50" />
          <p className="font-semibold px-2 py-4"> Local events </p>
          <p>
            Borton vanity itself do in it. Preferd to men it engrossed listening{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src="/Settings.jpg" alt="Settings" height="50" width="50" />
          <p className="font-semibold px-2 py-4"> Customization </p>
          <p>We deliver outsourced aviation services for military customers </p>
        </div>
      </div>
    </section>
  );
}
