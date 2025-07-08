import Image from "next/image";

export default function Footer() {
  return (
    // <footer className="lg:grid lg:grid-cols-3 lg:px-32 py-10">
    <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 px-6 sm:px-10 lg:px-32 py-10 bg-white text-black">
      <div>
        <h3 className="font-semibold text-black text-3xl md:text-4xl">
          Jadoo.
        </h3>
        <p className="max-w-[250px] py-4 text-sm md:text-base">
          Book your trip in minute, get full Control for much longer.{" "}
        </p>
      </div>
      {/* 2nd */}
      {/* <div className=" lg:flex lg:flex-row justify-between px-4"> */}
      <div className="flex justify-between gap-4 sm:col-span-1 lg:col-span-">
        <div>
          <h4 className="font-semibold py-2">Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div>
          <h4 className="font-semibold py-2">Contact</h4>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affilates</p>
        </div>
        <div>
          <h4 className="font-semibold py-2">More</h4>
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>
      </div>
      {/* 3rd */}
      <div className=" flex flex-col items-start sm:items-start lg:items-end ">
        <div className="flex gap-3 ">
          <Image
            src="/Social.jpg"
            alt="Social Logo"
            height="50"
            width="50"
            className="mr-2"
          />
          <Image
            src="/Social (1).jpg"
            alt="Social Logo"
            height="50"
            width="50"
            className="mr-2"
          />
          <Image
            src="/Social (2).jpg"
            alt="Social Logo"
            height="50"
            width="50"
          />
        </div>

        <p className="py-3 text-base">Discover our app</p>
        <div className="flex gap-3 ">
          <Image
            src="/Google Play.jpg"
            alt=" Logo"
            height="50"
            width="130"
            className="mr-2"
          />
          <Image
            src="/Play Store.jpg"
            alt="Logo"
            height="50"
            width="130"
            className="mr-2"
          />
        </div>
      </div>
      <p className="col-span-full text-center pt-8 text-sm text-gray-500">
        All rights reserved@jadoo.co
      </p>
    </footer>
  );
}

// col-span-3 text-center pt-6 text-sm text-gray-500
// px-0 sm:px-10 lg:px-24
