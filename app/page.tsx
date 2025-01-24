import About from "@/components/About";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Classes from "@/components/Classes";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent blur-[120px] rounded-full opacity-20" />
        <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-600 blur-[120px] rounded-full opacity-20" />
      </div>
      <div className="relative z-10">
        <Hero />
        <About />
        <Team />
        <Membership />
        <Testimonials />
        <Blog />
        <Brands />
      </div>
    </main>
  );
}
