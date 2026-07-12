'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const testimonials = [
  {
    id: 1,
    quote: "Dr. Omar's coaching changed the way I lead my business and my life. His insights helped me scale with clarity and confidence.",
    name: "FAISAL K.",
    position: "Founder, Techvista Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    quote: "A truly transformative experience. I learned to lead with purpose, build a strong team, and create real impact.",
    name: "SANA M.",
    position: "CEO, Elevate Consultancy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    quote: "The leadership program helped our organization align our values with our vision. The results have been extraordinary.",
    name: "RAMESH P.",
    position: "COO, GreenField Group",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    quote: "Dr. Omar has a rare ability to unlock potential in people. His guidance was the turning point in my entrepreneurial journey.",
    name: "NIDHA A.",
    position: "Founder, StyleRoute",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    quote: "An exceptional mentor and strategist. The frameworks I learned are now the foundation of our company's culture.",
    name: "DAVID L.",
    position: "Director, Apex Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    quote: "His strategic transformation methods were exactly what we needed to break through our growth plateau. Highly recommended.",
    name: "ELENA R.",
    position: "VP of Growth, Synergy Tech",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Testimonial() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const quotes = gsap.utils.toArray('.quote-block');
      const images = gsap.utils.toArray('.client-image');
      
      quotes.forEach((quote: any, i) => {
        // Initial state for all but the first one
        if (i !== 0) gsap.set(quote, { opacity: 0.15 });
        
        ScrollTrigger.create({
          trigger: quote,
          start: "top 55%", 
          end: "bottom 45%",
          onEnter: () => {
            gsap.to(quote, { opacity: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" });
            gsap.to(images, { opacity: 0, scale: 0.95, duration: 0.6, overwrite: "auto" });
            gsap.to(images[i] as Element, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" });
          },
          onEnterBack: () => {
            gsap.to(quote, { opacity: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" });
            gsap.to(images, { opacity: 0, scale: 0.95, duration: 0.6, overwrite: "auto" });
            gsap.to(images[i] as Element, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" });
          },
          onLeave: () => gsap.to(quote, { opacity: 0.15, duration: 0.5, overwrite: "auto" }),
          onLeaveBack: () => gsap.to(quote, { opacity: 0.15, duration: 0.5, overwrite: "auto" }),
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="testimonials" className="w-full bg-[#FAF8F5] text-[#111] relative pt-24 md:pt-48 pb-32 border-t-2 border-[#111]/5">
      
      {/* Background massive typography watermark */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] z-0 flex justify-center">
        <h1 className="font-national2 font-black text-[20vw] leading-none whitespace-nowrap">
          TESTIMONIALS
        </h1>
      </div>

      <div className="max-w-[1500px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Desktop Left Pinned Area */}
        <div className="hidden lg:block lg:col-span-4 relative h-full">
          <div className="sticky top-[15vh] h-[75vh] flex flex-col justify-between">
            <div>
              <div className="font-helvetica font-bold text-xl mb-4 text-[#CD1D1D]">(4)</div>
              <h2 className="font-national2 font-black text-6xl xl:text-7xl uppercase leading-[0.85] tracking-normal mb-6">
                IMPACT<br/>REALIZED
              </h2>
              <p className="font-helvetica font-medium text-lg text-zinc-500 max-w-sm">
                The transformation our clients experience is the ultimate measure of our success.
              </p>
            </div>
            
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-200 mt-12 shadow-2xl">
               {testimonials.map((t, i) => (
                 <div key={t.id} className={`client-image absolute inset-0 ${i === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}>
                   <Image src={t.image} alt={t.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Right Scrollable Quotes */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Mobile Header */}
          <div className="lg:hidden mb-16 flex flex-col">
             <div className="font-helvetica font-bold text-lg mb-4 text-[#CD1D1D]">(4)</div>
             <h2 className="font-national2 font-black text-5xl md:text-6xl uppercase leading-[0.85] mb-4">
               IMPACT REALIZED
             </h2>
             <p className="font-helvetica font-medium text-zinc-500">
                The transformation our clients experience is the ultimate measure of our success.
              </p>
          </div>
          
          <div className="flex flex-col gap-48 md:gap-[40vh] lg:py-[30vh]">
            {testimonials.map((t, i) => (
              <div key={t.id} className="quote-block flex flex-col transition-all cursor-none">
                <div className="lg:hidden w-20 h-20 relative rounded-full overflow-hidden mb-8 bg-zinc-200 shadow-lg">
                  <Image src={t.image} alt={t.name} fill className="object-cover grayscale" />
                </div>
                
                <h3 className="font-national2 font-black text-3xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-normal mb-12 text-[#111]">
                  &ldquo;{t.quote}&rdquo;
                </h3>
                
                <div className="flex flex-col gap-1 border-l-4 border-[#CD1D1D] pl-6 py-1">
                  <span className="font-courier font-bold text-xl tracking-wider uppercase">{t.name}</span>
                  <span className="font-helvetica font-medium text-zinc-500 uppercase text-sm tracking-wide">{t.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

