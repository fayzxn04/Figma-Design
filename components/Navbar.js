"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 md:px-16 py-6 relative">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-black z-50">
        Jad<span className="text-orange-400">oo</span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-gray-600 text-sm font-medium items-center">
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
        <button className="border px-4 py-1 rounded-md">Signup</button>
        <select className="text-sm">
          <option>EN</option>
        </select>
      </nav>

      {/* Hamburger Icon - mobile only */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="flex flex-col justify-center items-center p-6 space-y-6 text-gray-700 text-base font-medium">
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-400"
          >
            Destinations
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-400"
          >
            Hotels
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-400"
          >
            Flights
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-400"
          >
            Bookings
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-400"
          >
            Login
          </Link>
          <button className="border px-4 py-2 rounded-md">Signup</button>
          <select className="text-sm border rounded-md p-1">
            <option>EN</option>
          </select>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
