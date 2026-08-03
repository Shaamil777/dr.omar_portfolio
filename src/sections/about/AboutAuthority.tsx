"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutAuthority() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".auth-element",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-zinc-100 text-[#111] py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[90rem]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="auth-element font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
              [ THE TRUSTED AUTHORITY ]
            </span>
            <h2 className="auth-element font-national2 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-[#111] mb-8">
              ACCREDITED & <span className="text-transparent" style={{ WebkitTextStroke: '1px #111' }}>RECOGNIZED</span>
            </h2>
            <ul className="space-y-6 font-helvetica font-bold text-lg md:text-xl text-zinc-600">
              <li className="auth-element flex items-start gap-4">
                <svg className="w-6 h-6 text-[#CD1D1D] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span>Top 10 NLP Consultants — CEO Insights 2020</span>
              </li>
              <li className="auth-element flex items-start gap-4">
                <svg className="w-6 h-6 text-[#CD1D1D] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span>Accredited by the American Board of NLP</span>
              </li>
              <li className="auth-element flex items-start gap-4">
                <svg className="w-6 h-6 text-[#CD1D1D] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span>ICF-Accredited Coach</span>
              </li>
              <li className="auth-element flex items-start gap-4">
                <svg className="w-6 h-6 text-[#CD1D1D] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span>Faculty Member, King Saud University</span>
              </li>
            </ul>
          </div>
          <div className="auth-element relative aspect-square md:aspect-video rounded-[32px] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
              alt="Authority"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
