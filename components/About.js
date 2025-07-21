import Image from "next/image";

export default function About() {
  return (
    <section>
      <h4 className="text-black uppercase flex justify-center items-center text-2xl px-6 mt-16 font-poppins-semibold">
        Category
      </h4>
      <h1 className="text-black flex justify-center items-center text-4xl font-semibold px-6 mt-3 text-center font-volkhov-bold">
        We Offer Best Services
      </h1>

      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-10 lg:px-32 py-10 ">
        {/* 1st */}
        <div className="flex flex-col justify-center items-center  px-6 py-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 rounded-xl ">
          <Image src="/Antenna.jpg" alt="Antenna" height="50" width="50" />
          <p className="font-semibold px-2 py-4 font-poppins-semibold">
            {" "}
            Calculated Weather{" "}
          </p>
          <p className="text-center font-poppins-regular">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>

        {/* 2nd */}
        <div className=" flex flex-col justify-center items-center px-6 py-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 rounded-xl">
          {/* Card content */}
          <Image src="/Groups.jpg" alt="Plane" height={100} width={100} />
          <p className="font-semibold px-2 py-4 font-poppins-semibold ">
            Best Flights
          </p>
          <p className="text-center font-poppins-regular">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>

        {/* 3rd */}
        <div className="flex flex-col justify-center items-center  px-6 py-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 rounded-xl ">
          <Image src="/Mic.jpg" alt="Mic" height="50" width="50" />
          <p className="font-semibold px-2 py-4 font-poppins-semibold">
            {" "}
            Local events{" "}
          </p>
          <p className="text-center font-poppins-regular">
            Borton vanity itself do in it. Preferd to men it engrossed listening{" "}
          </p>
        </div>

        {/* 4th */}
        <div className="flex flex-col justify-center items-center  px-6 py-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 rounded-xl">
          <Image src="/Settings.jpg" alt="Settings" height="50" width="50" />
          <p className="font-semibold px-2 py-4 font-poppins-semibold">
            {" "}
            Customization{" "}
          </p>
          <p className="text-center font-poppins-regular">
            We deliver outsourced aviation services for military customers{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
