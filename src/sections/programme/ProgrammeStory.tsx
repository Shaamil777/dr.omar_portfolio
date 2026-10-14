"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyData, StoryChapter } from "@/constants/companies";

gsap.registerPlugin(ScrollTrigger);

export default function ProgrammeStory({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Default chapters in case a company doesn't have custom story chapters configured yet
  const defaultChapters: StoryChapter[] = [
    {
      title: "",
      description: `The inception of ${company.name} was inspired by a singular realization: rapid business expansion should never come at the expense of personal values, family harmony, or spiritual peace. Witnessing high-performing founders trapped in constant operational fatigue, Dr. Omar architected a foundational methodology uniting corporate excellence with personal mastery.`,
      quote: "A true leader does not merely construct profitable businesses; they build enduring institutions anchored in integrity and purpose.",
      image: "/images/about/brandmount.webp",
    },
    {
      title: "",
      description: `As cohorts expanded across Asia and the Middle East, the ${company.name} program evolved into a year-long immersive incubator. Founders were guided through rigorous valuation restructuring, board-level governance, and autonomous execution frameworks—enabling them to step out of daily operations and step into true visionary leadership.`,
      quote: "When your systems run your business, you unlock the freedom to lead with foresight and strategic clarity.",
      image: "/images/about/SSK04766.webp",
    },
    {
      title: "",
      description: `Today, ${company.name} stands as an elite private business ecosystem in the region. Spanning more than 100 restructured enterprises, international executive retreats, and closed-door mastermind sessions, the collective strength of members fosters cross-border partnerships and institutional funding.`,
      quote: "You are the average of the room you inhabit. When that room is filled with ethical visionaries, the impossible becomes standard.",
      image: "/images/about/SSK04519.webp",
    },
    {
      title: "",
      description: `The ultimate destination of the journey is generational continuity. By aligning capital growth with humanitarian values and family leadership, graduates of the program create enduring family offices, philanthropic trusts, and enterprises built to thrive for decades to come.`,
      quote: "Legacy is not what you leave behind for people; it is what you leave inside people.",
      image: "/images/about/travel.webp",
    },
  ];

  const storyData = company.story;
  const chapters = (storyData?.chapters && storyData.chapters.length > 0)
    ? storyData.chapters
    : defaultChapters;

  const heading = storyData?.heading || `The Story Behind ${company.name}`;
  const description = storyData?.description || "How a vision of ethical leadership evolved into a multi-national ecosystem empowering thousands of entrepreneurs to achieve scale without sacrificing their values.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Individual row animations on scroll
      rowsRef.current.forEach((row) => {
        if (!row) return;

        const contentEl = row.querySelector(".story-content");
        const imageEl = row.querySelector(".story-image-wrap");

        if (contentEl) {
          gsap.fromTo(
            contentEl,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 78%",
              },
            }
          );
        }

        if (imageEl) {
          gsap.fromTo(
            imageEl,
            { opacity: 0, y: 40, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.1,
              ease: "expo.out",
              scrollTrigger: {
                trigger: row,
                start: "top 78%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [chapters]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] text-[#111] py-24 md:py-32 lg:py-40 relative z-20 overflow-hidden"
    >
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #111 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/3 right-0 w-[45vw] h-[45vw] bg-[#CD1D1D]/[0.03] rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-1/3 left-0 w-[40vw] h-[40vw] bg-[#CD1D1D]/[0.03] rounded-full blur-[140px] pointer-events-none translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 2xl:px-24 max-w-[100rem] relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="mb-20 md:mb-28 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-helvetica text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tighter leading-[0.95] text-[#111] uppercase">
                {heading}
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="font-helvetica text-base md:text-lg text-zinc-600 font-light leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Alternating Story Chapters */}
        <div className="flex flex-col gap-24 md:gap-36 lg:gap-40 relative">
          
          {chapters.map((chapter, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                ref={(el) => { rowsRef.current[idx] = el; }}
                className="story-row relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-center">
                  
                  {/* TEXT CONTENT COLUMN: Normal description style without titles or sub-numbers 
                      - If isEven: Desktop Content is on LEFT (lg:order-1), Image on RIGHT (lg:order-2)
                      - If !isEven: Desktop Image is on LEFT (lg:order-1), Content is on RIGHT (lg:order-2)
                      - Mobile: Content is always order-1, Image is order-2 for smooth natural reading flow
                  */}
                  <div 
                    className={`story-content lg:col-span-6 flex flex-col justify-center order-1 relative ${
                      isEven ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
                    }`}
                  >
                    <div className="space-y-6 max-w-xl">
                      {/* Normal Description Paragraph */}
                      <p className="font-helvetica text-base sm:text-lg md:text-xl text-zinc-700 font-light leading-relaxed">
                        {chapter.description}
                      </p>

                      {/* Optional Second Thought / Quote */}
                      {chapter.quote && (
                        <p className="font-helvetica text-base sm:text-lg text-zinc-500 font-light italic leading-relaxed">
                          &ldquo;{chapter.quote}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>

                  {/* IMAGE COLUMN */}
                  <div 
                    className={`story-image-wrap lg:col-span-6 order-2 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative group">
                      {/* Minimalist Gallery Frame */}
                      <div className="p-2 sm:p-3 bg-white rounded-sm border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] group-hover:border-black/20">
                        <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/11] bg-zinc-100 rounded-sm">
                          <Image
                            src={chapter.image}
                            alt="Story imagery"
                            fill
                            className="object-cover grayscale contrast-[1.04] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-1000 ease-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                          />
                          
                          {/* Soft Bottom Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                          
                          {/* Viewfinder crosshairs in corners */}
                          <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-white/40 pointer-events-none" />
                          <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-white/40 pointer-events-none" />
                          <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/40 pointer-events-none" />
                          <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-white/40 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
