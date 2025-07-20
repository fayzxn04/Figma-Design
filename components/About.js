import Image from "next/image";

export default function About() {
  return (
    <section>
      <h4 className="text-black uppercase flex justify-center items-center text-2xl px-6 mt-16">
        Category
      </h4>
      <h1 className="text-black flex justify-center items-center text-4xl font-semibold px-6 mt-3 text-center">
        We Offer Best Services
      </h1>

      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-10 lg:px-32 py-10 ">
        {/* 1st */}
        <div className="flex flex-col justify-center items-center  px-6 py-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 rounded-xl ">
          <Image src="/Antenna.jpg" alt="Antenna" height="50" width="50" />
          <p className="font-semibold px-2 py-4"> Calculated Weather </p>
          <p className="text-center">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>

        {/* 2nd */}
        <div className=" flex flex-col justify-center items-center px-6 py-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 rounded-xl">
          {/* Card content */}
          <Image src="/Groups.jpg" alt="Plane" height={100} width={100} />
          <p className="font-semibold px-2 py-4 ">Best Flights</p>
          <p className="text-center ">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>

        {/* 3rd */}
        <div className="flex flex-col justify-center items-center  px-6 py-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 rounded-xl ">
          <Image src="/Mic.jpg" alt="Mic" height="50" width="50" />
          <p className="font-semibold px-2 py-4"> Local events </p>
          <p className="text-center">
            Borton vanity itself do in it. Preferd to men it engrossed listening{" "}
          </p>
        </div>

        {/* 4th */}
        <div className="flex flex-col justify-center items-center  px-6 py-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 rounded-xl">
          <Image src="/Settings.jpg" alt="Settings" height="50" width="50" />
          <p className="font-semibold px-2 py-4"> Customization </p>
          <p className="text-center">
            We deliver outsourced aviation services for military customers{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
