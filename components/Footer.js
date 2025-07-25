"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 px-6 sm:px-10 lg:px-32 py-10 bg-white text-black  ">
      <div>
        <h3
          className="font-poppins-semibold text-black text-3xl md:text-4xl"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Jad<span className="text-orange-400">oo</span>.
        </h3>
        <p className="max-w-[250px] py-4 text-sm md:text-base font-poppins-regular">
          Book your trip in minute, get full Control for much longer.{" "}
        </p>
      </div>
      {/* 2nd */}
      <div className="flex justify-between gap-4 sm:col-span-1 font-poppins-regular lg:col-span-">
        <div>
          <h4 className="font-poppins-medium py-2">Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div>
          <h4 className="font-poppins-medium py-2">Contact</h4>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affilates</p>
        </div>
        <div>
          <h4 className="font-poppins-medium py-2">More</h4>
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>
      </div>
      {/* 3rd */}
      <div className=" flex flex-col items-start sm:items-start lg:items-end ">
        <div className="flex gap-3 ">
          <Image
            src="/Facebook.jpg"
            alt="Social Logo"
            height="80"
            width="80"
            className="mr-2 cursor-pointer"
          />
          <Image
            src="/Instagram.jpg"
            alt="Social Logo"
            height="80"
            width="80"
            className="mr-2 cursor-pointer"
          />
          <Image
            src="/Twitter.jpg"
            alt="Social Logo"
            height="80"
            width="80"
            className="cursor-pointer"
          />
        </div>

        <p className="py-3 text-base font-poppins-regular">Discover our app</p>
        <div className="flex gap-3 ">
          <Image
            src="/GooglePlay.jpg"
            alt=" Logo"
            height="50"
            width="130"
            className="mr-2 cursor-pointer"
          />
          <Image
            src="/PlayStore.jpg"
            alt="Logo"
            height="50"
            width="130"
            className="mr-2 cursor-pointer"
          />
        </div>
      </div>
      <p className="col-span-full text-center pt-8 text-sm text-gray-500 font-poppins-medium">
        All rights reserved@jadoo.co
      </p>
    </footer>
  );
}
