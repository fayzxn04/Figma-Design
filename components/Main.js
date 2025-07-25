import Image from "next/image";

export default function Main() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 lg:px-32 py-10 ">
      <div className="lg:w-1/2">
        <p className="text-gray-400 font-semibold py-2 font-poppins-medium ">
          Easy and Fast
        </p>
        <p className="text-4xl text-black font-volkhov-bold py-3">
          Book Your Next Trip In 3 Easy Steps
        </p>
        <div className="flex mb-6">
          <Image
            src="/Group 7.jpg"
            alt="Logo"
            height="75"
            width="75"
            className="flex mr-3 object-contain"
          />
          <div>
            <h5 className="font-poppins-medium">Choose Destination</h5>
            <p className="font-poppins-regular">
              Browse top travel locations, pick your dream spot, and get set to
              explore. Your perfect trip starts right here.
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex mb-6">
          <Image
            src="/Group 12.jpg"
            alt="Logo"
            height="75"
            width="75"
            className="flex mr-3 object-contain"
          />
          <div>
            <h5 className="font-poppins-medium">Make Payment</h5>
            <p className="font-poppins-regular">
              Secure your booking quickly with hassle-free payments and instant
              confirmations sent to your email.
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex">
          <Image
            src="/Group 11.jpg"
            alt="Logo"
            height="75"
            width="75"
            className="flex mr-3 object-contain"
          />
          <div>
            <h5 className="font-poppins-medium">
              Reach Airport on Selected Date
            </h5>
            <p className="font-poppins-regular">
              Arrive at the airport on time with your bags packed and ticket in
              hand. You are ready to take off!
            </p>
          </div>
        </div>
      </div>

      <div className=" lg:w-1/2 px-5 py-5 rounded-md relative flex justify-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 ">
        <div>
          <Image
            src="/Rectangle 17.jpg"
            alt="Girl Image"
            width="260"
            height="260"
            className="object-contain "
          />
          <p className="font-poppins-medium py-3 text-lg">Trip To Greece </p>
          <p className="text-base text-gray-500 font-poppins-regular">
            14-29 June | by Robbin jok
          </p>
          <div className="flex py-3 space-x-3">
            <Image
              src="/LEAF.jpg"
              alt="Leaf Image"
              width="32"
              height="32"
              className="object-contain"
            />
            <Image
              src="/map icon.jpg"
              alt="Map Image"
              width="32"
              height="32"
              className="object-contain"
            />
            <Image
              src="/send.jpg"
              alt="Send Image"
              width="32"
              height="32"
              className="object-contain"
            />
          </div>
          <div className="py-2 flex ">
            <Image
              src="/building 1.jpg"
              alt="Building"
              width="24"
              height="24"
              className="object-contain mr-3"
            />
            <p className="text-base text-gray-500 font-poppins-regular">
              {" "}
              24 people going{" "}
            </p>
            <Image
              src="/heart (6) 1.jpg"
              alt="Heart"
              width="18"
              height="18"
              className="object-contain flex items-center ml-auto"
            />
          </div>
        </div>
        <div className="absolute bottom-20 flex ml-44 justify-start items-start bg-white px-4 py-2 rounded-md shadow-md">
          <Image
            src="/Mask Group.jpg"
            height="42"
            width="42"
            alt="Mask Photo"
            className="mr-4 justify-start object-contain items-start "
          />
          <div className="min-w-[118px]">
            <p>Ongoing</p>
            <p className=" mb-2 whitespace-nowrap font-poppins-medium">
              Trip to Rome
            </p>
            <p className="mb-1.5 break-words">
              40% <span className="font-poppins-medium">Done</span>
            </p>
            <Image src="/Slider.jpg" height="50" width="75" alt="Range" />
          </div>
        </div>
      </div>
    </main>
  );
}
