"use client";

import Link from "next/link";

const ChevronDown = () => (
  <svg width="12" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 opacity-80 mt-0.5">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-3 md:py-4 bg-[#FAF8F5] flex items-center justify-between text-[#111]">
      <div className="flex items-center">
        {/* LOGO */}
        <Link href="/" className="font-helvetica font-black text-5xl md:text-[48px] tracking-tighter mr-6 sm:mr-8 leading-none" style={{ WebkitTextStroke: '1px currentColor' }}>
          DR. OMAR
        </Link>
        
        {/* SEPARATOR */}
        <div className="hidden xl:block w-[3px] h-10 bg-black/20 mr-8"></div>
        
        {/* LINKS */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-8 font-helvetica text-[26px] md:text-[28px] font-black tracking-tight leading-none" style={{ WebkitTextStroke: '0.5px currentColor' }}>
          <Link href="#about" className="hover:text-black/60 transition-colors">About</Link>
          <Link href="#entrepreneur" className="hover:text-black/60 transition-colors">Entrepreneur</Link>
          <div className="group relative flex items-center cursor-pointer hover:text-black/60 transition-colors">
            Programmes <ChevronDown />
          </div>
          <Link href="#achievements" className="hover:text-black/60 transition-colors">Achievements</Link>
          <Link href="#testimonials" className="hover:text-black/60 transition-colors">Testimonials</Link>
          <Link href="#blogs" className="hover:text-black/60 transition-colors">Blog</Link>
          <Link href="#cta" className="hover:text-black/60 transition-colors">Get in touch</Link>
        </div>
      </div>

      {/* CTA BUTTON */}
      <Link 
        href="#cta" 
        className="bg-[#111] text-white px-8 py-2.5 md:px-10 md:py-3.5 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.3)] hover:bg-black/90 hover:shadow-xl hover:-translate-y-1 transition-all font-national2 font-black uppercase tracking-tight text-[24px] md:text-[28px] leading-none flex items-center justify-center whitespace-nowrap"
        style={{ WebkitTextStroke: '0.5px currentColor' }}
      >
        BESPOKE QUOTE
      </Link>
    </nav>
  );
}
