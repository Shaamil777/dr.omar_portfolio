"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import type { CompanyData } from "@/constants/companies";

const COLS = 14;
const ROWS = 13;

// Determines how likely an edge cell is to be visible (0 = never, 1 = always)
function getEdgeWeight(row: number, col: number): number {
  const distFromTop = row;
  const distFromBottom = ROWS - 1 - row;
  const distFromLeft = col;
  const distFromRight = COLS - 1 - col;
  const minDist = Math.min(distFromTop, distFromBottom, distFromLeft, distFromRight);

  if (minDist >= 2) return 1;     // Core — always visible
  if (minDist === 1) return 0.85; // Inner edge — almost always visible
  return 0.5;                     // Outer edge — scattered
}

function generatePattern(): number[] {
  const pattern: number[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const weight = getEdgeWeight(r, c);
      if (weight >= 1) {
        pattern.push(1);
      } else {
        pattern.push(Math.random() < weight ? 1 : 0);
      }
    }
  }
  return pattern;
}

function PixelScatterGrid({ image }: { image: string }) {
  const [pattern, setPattern] = useState<number[]>(() => generatePattern());

  useEffect(() => {
    const interval = setInterval(() => {
      setPattern(generatePattern());
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Generate SVG mask — each cell is 79px visible + 1px gap = 80px total
  const cellSize = 80;
  const svgWidth = COLS * cellSize;
  const svgHeight = ROWS * cellSize;

  const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">${pattern.map((visible, i) => {
    if (!visible) return "";
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    return `<rect x="${col * cellSize}" y="${row * cellSize}" width="${cellSize - 1}" height="${cellSize - 1}" fill="white"/>`;
  }).join("")}</svg>`;

  const maskUrl = `url("data:image/svg+xml,${encodeURIComponent(maskSvg)}")`;

  return (
    <>
      {/* Masked image */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: maskUrl,
          WebkitMaskImage: maskUrl,
          maskSize: `${svgWidth}px ${svgHeight}px`,
          WebkitMaskSize: `${svgWidth}px ${svgHeight}px`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "0 0",
          WebkitMaskPosition: "0 0",
        }}
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
}

// Hardcoded BCC data — will be replaced by Sanity later
const heroData: Record<string, {
  fullName: string[];
  tagline: string;
  shortDescription: string;
  image: string;
  chips: string[];
}> = {
  bcc: {
    fullName: ["BUSINESS", "COACHING", "CLUB"],
    tagline: "BCC PROGRAMME",
    shortDescription: "An annual mentorship and business networking ecosystem for entrepreneurs building sustainable brands and scalable legacy.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    chips: ["48 WEEKS", "DR. OMAR", "GLOBAL"],
  },
};

export default function ProgrammeHero({ company }: { company: CompanyData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tagRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [leftPos, setLeftPos] = useState(0);

  useEffect(() => {
    const updateGridSnap = () => {
      // Aim for right ~55% of screen, but snap EXACTLY to the 80px grid
      const targetLeft = window.innerWidth * 0.45;
      setLeftPos(Math.floor(targetLeft / 80) * 80);
    };

    updateGridSnap();
    window.addEventListener("resize", updateGridSnap);
    
    return () => {
      window.removeEventListener("resize", updateGridSnap);
    };
  }, []);

  const data = heroData[company.slug] || {
    fullName: [company.name.toUpperCase()],
    tagline: `${company.name} PROGRAMME`,
    shortDescription: company.description,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    chips: ["ONGOING", "DR. OMAR", "GLOBAL"],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Tag fades in
      tl.fromTo(
        tagRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 },
        0.3
      )
      // Title words slam in one by one
      .fromTo(
        titleLineRefs.current.filter(Boolean),
        { opacity: 0, y: 100, rotateX: 40 },
        { opacity: 1, y: 0, rotateX: 0, stagger: 0.15, duration: 1.4 },
        0.4
      )
      // Red line draws across
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power4.out" },
        "-=0.6"
      )
      // Description fades up
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.5"
      )
      // Image reveals with clip-path
      .fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0 0 0)", opacity: 0 },
        { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 1.6, ease: "power4.inOut" },
        0.6
      )
      // Chips pop in
      .fromTo(
        ".hero-chip",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6 },
        "-=0.5"
      );

      // Logo marquee — infinite scroll
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-transparent text-[#111] relative flex items-center"
    >
      {/* Accent: Vertical red line on the left edge */}
      <div className="absolute left-6 lg:left-24 top-0 bottom-0 w-[2px] bg-[#CD1D1D]/20 z-0" />

      {/* Accent: Horizontal red line across center */}
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#CD1D1D]/10 z-0" />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem] relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* Left Column — 7 cols */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Tag */}
            <div
              ref={tagRef}
              className="flex items-center gap-3 mb-6 lg:mb-10 font-courier text-[10px] md:text-[12px] text-zinc-400 tracking-[0.25em] uppercase font-bold opacity-0"
            >
              <div className="w-2 h-2 bg-[#CD1D1D] rounded-full" />
              <span>{data.tagline}</span>
              <div className="flex-1 h-[1px] bg-black/10 ml-4" />
            </div>

            {/* Title */}
            <h1 className="font-national2 font-black uppercase tracking-tight leading-[0.85] mb-0 perspective-[800px]">
              {data.fullName.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => { titleLineRefs.current[i] = el; }}
                  className="block text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[6.5vw] xl:text-[5.8vw] text-[#111] opacity-0 will-change-transform"
                  style={{ transformOrigin: "left center" }}
                >
                  {word}
                  {i === 0 && (
                    <span className="text-[#CD1D1D]">.</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Red Accent Line */}
            <div
              ref={lineRef}
              className="w-16 h-[3px] bg-[#CD1D1D] mt-6 lg:mt-8 mb-5 lg:mb-6 origin-left"
              style={{ transform: "scaleX(0)" }}
            />

            {/* Description */}
            <p
              ref={descRef}
              className="font-helvetica font-medium text-zinc-500 text-sm md:text-base lg:text-lg leading-relaxed max-w-md opacity-0"
            >
              {data.shortDescription}
            </p>

            {/* Chips */}
            <div ref={chipsRef} className="flex flex-wrap gap-3 mt-6 lg:mt-10">
              {data.chips.map((chip) => (
                <span
                  key={chip}
                  className="hero-chip px-4 py-1.5 border border-[#111]/20 rounded-full font-courier text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-[#111]/70 hover:border-[#CD1D1D] hover:text-[#CD1D1D] transition-all duration-300 cursor-default opacity-0"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Image with Pixel Scatter — fills right side, perfectly aligned to grid */}
      <div
        ref={imageRef}
        className="absolute opacity-0 z-10 hidden lg:block"
        style={{
          top: "0",
          bottom: "0",
          left: leftPos ? `${leftPos}px` : "45%",
          right: "0",
        }}
      >
        {/* Animated Pixel Scatter Grid */}
        <PixelScatterGrid image={data.image} />

        {/* Corner accent */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#CD1D1D]/60 z-20" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#CD1D1D]/60 z-20" />
      </div>

      {/* Bottom-right grid coordinates (decorative) */}
      <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-24 font-courier text-[9px] tracking-[0.3em] text-zinc-300 uppercase z-10">
        {company.slug.toUpperCase()} — 001
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-courier text-[8px] tracking-[0.3em] text-zinc-400 uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-[#CD1D1D]/40 animate-pulse" />
      </div>

      {/* Logo Marquee Banner */}
      <div className="absolute bottom-0 left-0 w-full z-30 border-y-2 border-black/10 bg-white/90 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.12)]">
        <div ref={marqueeRef} className="flex items-center gap-24 whitespace-nowrap py-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex items-center gap-24 flex-shrink-0">
              <Image
                src={`/logos/${company.slug.toUpperCase()}/BCC_dark.png`}
                alt={company.name}
                width={120}
                height={120}
                className={`object-contain transition-all duration-300 ${
                  i % 2 === 0 ? "opacity-40 grayscale" : "opacity-90"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
