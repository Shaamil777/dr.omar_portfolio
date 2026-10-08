"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeFAQ({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);
  const faqRowsRef = useRef<(HTMLDivElement | null)[]>([]);

  const faqs = company.faqs || [
    { question: "Who is this program for?", answer: "This program is designed for visionary leaders." },
    { question: "How long does the program last?", answer: "The mentorship lasts for a full year." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" }
      });

      // Sticky title reveal
      tl.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1 }
      )
      // FAQ rows stagger in
      .fromTo(
        faqRowsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-transparent text-[#111] relative z-10 flex flex-col justify-center py-16 md:py-20"
    >
      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column (4 cols) — Sticky Title */}
          <div className="lg:col-span-4" ref={leftColRef}>
            <div className="sticky top-32">
              <span className="font-courier text-xs md:text-sm uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-6 block"> FAQ </span>
              
              <h2 className="font-helvetica text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1] text-[#111] mb-6">
                Frequently<br/>
                Asked<br/>
                Questions
              </h2>

              <div className="font-courier text-[9px] tracking-[0.2em] text-[#111]/30 hidden lg:block">
                SEC_05 // DATA
                <br/>
                COORD: 25.2048° N, 55.2708° E
              </div>
            </div>
          </div>

          {/* Right Column (8 cols) — Accordion */}
          <div className="lg:col-span-8" ref={faqListRef}>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const num = (index + 1).toString().padStart(2, '0');
                
                return (
                  <div 
                    key={index} 
                    ref={(el) => { faqRowsRef.current[index] = el; }}
                    className={`bg-white/60 backdrop-blur-md rounded-2xl border transition-all duration-500 overflow-hidden group ${
                      isOpen 
                        ? "border-[#CD1D1D]/30 shadow-[0_10px_40px_rgba(205,29,29,0.08)] bg-white/90" 
                        : "border-black/10 lg:hover:border-[#CD1D1D]/20 lg:hover:bg-white/80 lg:hover:shadow-lg"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-5 md:p-6 flex items-start md:items-center justify-between text-left"
                    >
                      <div className="flex items-start md:items-center gap-4 pr-6">
                        <span className={`font-courier text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? "text-[#CD1D1D]" : "text-zinc-300 lg:group-hover:text-[#CD1D1D]/50"}`}>
                          {num}
                        </span>
                        <h3 className={`font-helvetica text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-[#CD1D1D]" : "text-[#111] lg:group-hover:text-[#CD1D1D]"}`}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isOpen 
                          ? "border-[#CD1D1D] bg-[#CD1D1D] shadow-[0_0_15px_rgba(205,29,29,0.3)]" 
                          : "border-black/10 lg:group-hover:border-[#CD1D1D] bg-transparent"
                      }`}>
                        <div className="relative w-3 h-3 md:w-4 md:h-4">
                          {/* Horizontal line */}
                          <div className={`absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 transition-all duration-300 ${isOpen ? "bg-white" : "bg-[#111] lg:group-hover:bg-[#CD1D1D]"}`} />
                          {/* Vertical line (rotates flat when open) */}
                          <div className={`absolute top-0 left-1/2 w-[2px] h-full -translate-x-1/2 transition-all duration-300 ${isOpen ? "rotate-90 bg-white opacity-0" : "bg-[#111] lg:group-hover:bg-[#CD1D1D]"}`} />
                        </div>
                      </div>
                    </button>
                    
                    {/* Animated Answer Body */}
                    <div 
                      className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pl-[3.5rem] md:pl-[4.5rem] font-helvetica text-sm md:text-base text-zinc-600 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
