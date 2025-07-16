// import Image from "next/image";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";
import TopDestinations from "@/components/TopDestinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TopDestinations />
      <Main />
      <SubscribeSection />
      <Footer />
    </>
  );
}
