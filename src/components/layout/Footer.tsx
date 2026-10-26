"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Footer() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLElement>(null);
  const band1Ref = useRef<HTMLDivElement>(null);
  const band2Ref = useRef<HTMLDivElement>(null);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    if (!band1Ref.current || !band2Ref.current) return;

    // Wait a tick to ensure layout is done so offsetWidth is accurate
    const item1 = band1Ref.current.children[0] as HTMLElement;
    const item2 = band2Ref.current.children[0] as HTMLElement;
    
    // Width = element width + flex gap (32px for gap-8)
    const item1Width = item1.offsetWidth + 32;
    const item2Width = item2.offsetWidth + 32;

    // Start in the middle so we can scroll infinitely in either direction
    // (We will render 8 copies, so index 3 is safely in the middle)
    let xPos1 = -item1Width * 3;
    let xPos2 = -item2Width * 3;

    let currentScroll = 0;
    let prevScroll = 0;
    let scrollDirection = 1;
    let scrollInfluence = 0;

    let itemWidth1 = 0;
    let itemWidth2 = 0;

    const updateWidths = () => {
      if (band1Ref.current && band1Ref.current.children[0]) {
        const childWidth = parseFloat(window.getComputedStyle(band1Ref.current.children[0]).width);
        const gap = parseFloat(window.getComputedStyle(band1Ref.current).columnGap) || 32;
        itemWidth1 = childWidth + gap;
      }
      if (band2Ref.current && band2Ref.current.children[0]) {
        const childWidth = parseFloat(window.getComputedStyle(band2Ref.current.children[0]).width);
        const gap = parseFloat(window.getComputedStyle(band2Ref.current).columnGap) || 32;
        itemWidth2 = childWidth + gap;
      }
    };

    updateWidths();
    
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateWidths());
      if (band1Ref.current?.children[0]) resizeObserver.observe(band1Ref.current.children[0]);
      if (band2Ref.current?.children[0]) resizeObserver.observe(band2Ref.current.children[0]);
    }

    window.addEventListener("resize", updateWidths);

    const handleScroll = () => {
      currentScroll = window.scrollY;
      const delta = currentScroll - prevScroll;
      prevScroll = currentScroll;

      if (delta > 0) scrollDirection = 1;
      else if (delta < 0) scrollDirection = -1;

      scrollInfluence = Math.min(Math.abs(delta) * 0.8, 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      scrollInfluence *= 0.95;

      // Slow, continuous movement — direction flips with scroll
      const speed1 = -(0.4 + scrollInfluence) * scrollDirection;
      const speed2 = (0.4 + scrollInfluence) * scrollDirection;

      xPos1 += speed1;
      xPos2 += speed2;

      if (itemWidth1 > 0) {
        xPos1 = gsap.utils.wrap(-itemWidth1, 0, xPos1);
      }
      if (itemWidth2 > 0) {
        xPos2 = gsap.utils.wrap(-itemWidth2, 0, xPos2);
      }

      if (band1Ref.current) {
        gsap.set(band1Ref.current, { x: xPos1 });
      }
      if (band2Ref.current) {
        gsap.set(band2Ref.current, { x: xPos2 });
      }

      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWidths);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  // Marquee text style matching Helvetica – 900
  const marqueeTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-helvetica)",
    fontWeight: 900,
    fontSize: "clamp(3.5rem, 12vw, 13rem)",
    lineHeight: "0.85",
  };

  const smallTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-helvetica)",
    fontWeight: 900,
    fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)",
    lineHeight: "1.3",
    letterSpacing: "0.05em",
  };

  // Sticker base
  const stickerBase: React.CSSProperties = {
    fontFamily: "var(--font-helvetica)",
    fontWeight: 900,
    fontSize: "clamp(2.5rem, 8vw, 9rem)",
    lineHeight: "0.85",
    display: "inline-block",
    padding: "0.1em 0.25em",
  };

  // Style 1: Outlined text + solid border
  const stickerOutlined: React.CSSProperties = {
    ...stickerBase,
    WebkitTextStroke: "2px #CD1D1D",
    color: "transparent",
    border: "2px solid rgba(205, 29, 29, 0.5)",
  };

  // Style 2: Solid filled — inverted colors
  const stickerFilled: React.CSSProperties = {
    ...stickerBase,
    color: "#ffffff",
    backgroundColor: "#CD1D1D",
    border: "none",
  };

  // Style 3: Thick stroke, dashed border
  const stickerDashed: React.CSSProperties = {
    ...stickerBase,
    WebkitTextStroke: "3px #CD1D1D",
    color: "transparent",
    border: "3px dashed rgba(205, 29, 29, 0.4)",
  };

  const isLightPage = pathname === "/" || pathname === "/about" || pathname === "/programmes" || pathname?.startsWith("/programme");

  return (
    <footer
      ref={containerRef}
      className="relative w-full min-h-[100vh] md:min-h-[85vh] bg-[#111] text-white flex flex-col justify-end overflow-hidden"
    >
      {/* Top transition filler for light pages to eliminate black space above sliding bands */}
      {isLightPage && (
        <div className="absolute top-0 left-0 w-full h-[15%] md:h-[10%] bg-white pointer-events-none" />
      )}

      {/* Marquee bands */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        {/* Upper Band */}
        <div
          className="absolute top-[10%] md:top-[5%] bg-white border-y-2 border-black py-4 md:py-8 z-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          style={{ width: "200%", left: "-50%", transform: "rotate(-1.5deg)" }}
        >
          <div ref={band1Ref} className="flex gap-4 md:gap-8 items-center whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>TRANSFORM</span>
                <span style={stickerFilled} className="uppercase">DEEP IMMERSION</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>ELEVATE</span>
                <div className="text-[#111] uppercase" style={smallTextStyle}>DR. OMAR®<br />GLOBAL LEADERSHIP<br />COACH.</div>
                <span style={stickerOutlined} className="uppercase">EMPOWER</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>LEAD</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>INSPIRE</span>
                <span style={stickerDashed} className="uppercase">EVOLVE</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>IMPACT</span>
                <div className="text-[#111] uppercase" style={smallTextStyle}>DEEP IMMERSION®<br />NLP EXPERT<br />COACHING.</div>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>UNLOCK</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Band */}
        <div
          className="absolute top-[18%] md:top-[18%] bg-white border-y-2 border-black py-4 md:py-8 z-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          style={{ width: "200%", left: "-50%", transform: "rotate(1deg)" }}
        >
          <div ref={band2Ref} className="flex gap-4 md:gap-8 items-center whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>IMPACT</span>
                <span style={stickerDashed} className="uppercase">EVOLVE</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>INSPIRE</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>LEAD</span>
                <span style={stickerFilled} className="uppercase">EMPOWER</span>
                <div className="text-[#111] uppercase" style={smallTextStyle}>DR. OMAR®<br />GLOBAL LEADERSHIP<br />COACH.</div>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>ELEVATE</span>
                <span style={stickerOutlined} className="uppercase">DEEP IMMERSION</span>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>TRANSFORM</span>
                <div className="text-[#111] uppercase" style={smallTextStyle}>DEEP IMMERSION®<br />NLP EXPERT<br />COACHING.</div>
                <span className="text-[#111] uppercase" style={marqueeTextStyle}>UNLOCK</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-30 flex-grow w-full flex flex-col justify-end pt-[45vh] md:pt-[50vh] pb-8 px-6 md:px-12 pointer-events-auto">
        <div className="max-w-[100rem] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-t border-white/10 pt-10 md:pt-16">
          
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-6 lg:col-span-4 pr-0 lg:pr-10">
            <h3 className="font-helvetica font-black text-4xl md:text-5xl uppercase tracking-tighter text-white">DR. OMAR<span className="text-[#CD1D1D]">.</span></h3>
            <p className="font-helvetica text-zinc-400 text-sm md:text-base leading-relaxed">
              Global Leadership Coach, NLP Expert, and Life Transformation Specialist. Empowering individuals and organizations to achieve their highest potential through deep immersion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:col-start-6">
            <h4 className="font-helvetica font-bold text-xs md:text-sm uppercase tracking-widest text-white mb-2">Company</h4>
            <a href="/about" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">About Dr. Omar</a>
            <a href="#entrepreneur" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">The Entrepreneur</a>
            <a href="#achievements" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">Achievements</a>
            <a href="#blogs" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">Insights & Blog</a>
            <a href="#testimonials" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">Success Stories</a>
          </div>

          {/* Programmes */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-helvetica font-bold text-xs md:text-sm uppercase tracking-widest text-white mb-2">Expertise</h4>
            <a href="/programmes" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">Global Leadership</a>
            <a href="/programmes" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">Deep Immersion</a>
            <a href="/programmes" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">NLP Coaching</a>
            <a href="/programmes" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">Executive Mentorship</a>
            <a href="/programmes" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">Masterclasses</a>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="font-helvetica font-bold text-xs md:text-sm uppercase tracking-widest text-white mb-2">Connect</h4>
            <div className="flex flex-col gap-1 mb-4">
              <a href="mailto:info@dromar.com" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">info@dromar.com</a>
              <a href="tel:+971501234567" className="font-helvetica font-medium text-zinc-400 lg:hover:text-white transition-colors text-sm md:text-base w-fit">+971 50 123 4567</a>
              <span className="font-helvetica font-medium text-zinc-500 text-sm md:text-base mt-2">Dubai, United Arab Emirates</span>
            </div>
            
            <h4 className="font-helvetica font-bold text-xs md:text-sm uppercase tracking-widest text-white mb-2 mt-1">Socials</h4>
            <div className="flex flex-row items-center gap-3">
              {/* Instagram */}
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 lg:hover:text-white lg:hover:bg-[#CD1D1D] lg:hover:border-[#CD1D1D] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 lg:hover:text-white lg:hover:bg-[#CD1D1D] lg:hover:border-[#CD1D1D] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="#" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 lg:hover:text-white lg:hover:bg-[#CD1D1D] lg:hover:border-[#CD1D1D] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a 
                href="#" 
                aria-label="X"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 lg:hover:text-white lg:hover:bg-[#CD1D1D] lg:hover:border-[#CD1D1D] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="max-w-[100rem] mx-auto w-full flex flex-col md:flex-row justify-between items-center mt-16 md:mt-24 pt-8 border-t border-white/10 text-zinc-500 text-xs md:text-sm font-helvetica">
          <p className="text-center md:text-left mb-6 md:mb-0">© {new Date().getFullYear()} Dr. Abdussalam Omar. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <a href="#" className="lg:hover:text-white transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="lg:hover:text-white transition-colors font-medium">Terms of Service</a>
            <a href="#" className="lg:hover:text-white transition-colors font-medium">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
