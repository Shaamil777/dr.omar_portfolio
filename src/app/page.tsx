import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";
import Entrepreneur from "@/sections/home/Entrepreneur";
import Programmes from "@/sections/home/Programmes";
import Achievements from "@/sections/home/Achievements";
import Testimonial from "@/sections/home/Testimonial";
import Blogs from "@/sections/home/Blogs";
import Cta from "@/sections/home/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Entrepreneur />
      <Programmes />
      <Achievements />
      <Testimonial />
      <Blogs />
      <Cta />
    </main>
  );
}
