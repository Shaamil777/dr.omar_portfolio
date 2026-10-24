"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeTestimonial({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const defaultTestimonials = [
    { name: "John Doe", role: "CEO", quote: "Amazing program.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", rating: 5 },
    { name: "Jane Smith", role: "Founder", quote: "Life changing.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", rating: 5 },
  ];

  const testimonials = company.testimonials || defaultTestimonials;

  // We duplicate the array to ensure the marquee loops seamlessly
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the section
      gsap.fromTo(sectionRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );

      // Horizontal Marquee Animation
      if (trackRef.current) {
        // Calculate the exact width to move (one full set of original items)
        // Since we tripled the array, moving 1/3 of the way creates a seamless loop
        tweenRef.current = gsap.to(trackRef.current, {
          xPercent: -33.33333, 
          duration: 30, // Adjust speed here
          ease: "none",
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Pause/Play marquee on hover
  useEffect(() => {
    if (tweenRef.current) {
      if (isHovered) {
        tweenRef.current.pause();
      } else {
        tweenRef.current.play();
      }
    }
  }, [isHovered]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] text-[#111] py-16 md:py-20 relative z-10 overflow-hidden border-t border-black/10"
    >
      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem] mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block"> 
              {company.testimonialsTagline || "THE ALUMNI"} 
            </span>
            <h2 className="font-helvetica text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1] text-[#111]">
              {company.testimonialsHeading || "Leaders Who Scaled"}
            </h2>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            {/* Star Rating summary */}
            <div className="flex text-[#CD1D1D]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <span className="font-helvetica font-bold text-sm ml-2">
              {company.testimonialsRatingText || "4.9/5 Average Rating"}
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Carousel Track */}
      <div 
        className="w-full overflow-hidden group cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={trackRef} className="flex gap-6 w-max px-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="w-[260px] md:w-[320px] flex-shrink-0 bg-white border border-black/10 p-5 md:p-6 rounded-xl shadow-sm transition-all duration-300 lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-[1.02] lg:hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] lg:hover:border-[#CD1D1D]/30"
            >
              <div className="flex items-center gap-1 mb-6 text-[#CD1D1D]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              
              <p className="font-helvetica text-base md:text-lg font-bold tracking-tight text-[#111] mb-5 md:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-black/10">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-helvetica font-bold text-[#111] text-sm tracking-wider">{testimonial.name}</h4>
                  <p className="font-courier text-xs text-zinc-500 mt-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
