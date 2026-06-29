import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Entrepreneur from "@/components/home/Entrepreneur";
import Programmes from "@/components/home/Programmes";
import Achievements from "@/components/home/Achievements";
import Testimonial from "@/components/home/Testimonial";
import Blogs from "@/components/home/Blogs";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
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
