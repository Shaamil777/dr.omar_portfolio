import Hero from "@/sections/home/Hero";
import Navbar from "@/components/layout/Navbar";
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
      <div className="relative z-10 -mt-[100vh]">
        <div className="relative">
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <div id="about"><About /></div>
        </div>
        <div id="entrepreneur"><Entrepreneur /></div>
        <div id="programmes"><Programmes /></div>
        <div id="achievements"><Achievements /></div>
        <div id="testimonials"><Testimonial /></div>
        <div id="blogs"><Blogs /></div>
        <div id="cta"><Cta /></div>
      </div>
    </main>
  );
}
