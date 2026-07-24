"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeBlog({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const defaultBlogs: NonNullable<CompanyData['blogs']> = [
    { title: "HOW TO BRIEF TALENT WITHOUT WASTING TIME ON SET", description: "An experienced producer’s guide to briefing talent in a way that improves performance and keeps shoots on schedule.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" },
    { title: "FILMING PERMITS IN AUSTRALIA", description: "Permits, permissions and public space use are the most common causes of shoot delays in Australia. This post explains when you need a permit, how much it costs, and how we handle it for clients.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" },
  ];

  const blogs = company.blogs || defaultBlogs;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for blog cards
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-transparent text-[#111] py-24 md:py-32 relative z-10"
    >
      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
              [ INSIGHTS ]
            </span>
            <h2 className="font-national2 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1] text-[#111]">
              LATEST CASE<br/>STUDIES
            </h2>
          </div>
          
          <button className="flex items-center gap-2 font-national2 font-bold uppercase tracking-widest text-sm text-[#CD1D1D] hover:text-[#111] transition-colors duration-300 group pb-2">
            View All Articles
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        {/* Dense 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom */}
              <div className="relative w-full aspect-[2/1] rounded-[24px] overflow-hidden border border-black/10 shadow-sm">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow mt-6">
                <h3 className="font-national2 text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-black leading-[0.9] text-[#111] uppercase tracking-tighter group-hover:text-[#CD1D1D] transition-colors duration-300">
                  {blog.title}
                </h3>
                {/* Optional Description (fallback for custom data) */}
                {(blog.description || blog.date) && (
                  <p className="font-helvetica font-bold text-sm md:text-base lg:text-lg text-zinc-500 mt-3 leading-snug tracking-tight">
                    {blog.description || blog.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
