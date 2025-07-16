"use client";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with:", email);
    setEmail(""); // Clear the input field
  };
  return (
    <section className="relative bg-[#e0e7ff] rounded-2xl px-6 sm:px-10 lg:px-32 py-16 mt-20 max-w-7xl mx-auto">
      {/* Paper plane */}
      <div className=" hidden md:block absolute -top-[10px] -right-[18px] bg-[#4f46e5] p-3 rounded-full shadow-lg z-10 ">
        <Send className="text-white w-5 h-5 " />
      </div>

      {/* Main */}
      <div className="flex flex-col items-center text-center ">
        <h2 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold max-w-2xl leading-relaxed">
          Subscribe to get information, latest news and other{" "}
          <br className="hidden sm:block" />
          interesting offers about{" "}
          <span className="text-indigo-600">Jadoo</span>
        </h2>

        {/* Input Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
          <div className="flex items-center w-full bg-white px-4 py-3 rounded-md shadow-md">
            <Mail className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
          <button
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition duration-200"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
