import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-16 py-8 ">
      <h1 className="text-3xl font-bold text-black">
        Jad<span className=" text-orange-400">oo</span>
      </h1>
      <nav className="space-x-8 text-gray-600 text-sm font-medium">
        <Link href="#" className="hover:text-orange-400">
          Destinations
        </Link>
        <Link href="#" className="hover:text-orange-400">
          Hotels
        </Link>
        <Link href="#" className="hover:text-orange-400">
          Flights
        </Link>
        <Link href="#" className="hover:text-orange-400">
          Bookings
        </Link>
        <Link href="#" className="hover:text-orange-400">
          Login
        </Link>
        {/* <Link href="#"> Signup </Link> */}
        <button className="border px-4 py-1 rounded-md"> Signup</button>
        <select className="text-sm">
          <option> EN </option>
        </select>
      </nav>
    </header>
  );
}
