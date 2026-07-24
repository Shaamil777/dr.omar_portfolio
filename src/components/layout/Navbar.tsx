"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const ChevronDown = () => (
  <svg width="12" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 opacity-80 mt-0.5">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { name: "About", href: "#about" },
    { name: "Entrepreneur", href: "#entrepreneur" },
    { name: "Programmes", href: "/programmes" },
    { name: "Achievements", href: "#achievements" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blogs" },
  ];

  return (
    <>
      <nav className="w-full px-4 sm:px-8 py-3 md:py-4 bg-[#FAF8F5] flex items-center justify-between text-[#111] relative z-[60]">
        <div className="flex items-center">
          {/* LOGO */}
          <Link href="/" onClick={() => setIsOpen(false)} className="font-helvetica font-black text-3xl sm:text-5xl md:text-[48px] xl:text-[36px] 2xl:text-[48px] tracking-tighter mr-4 sm:mr-8 xl:mr-6 2xl:mr-8 leading-none" style={{ WebkitTextStroke: '1px currentColor' }}>
            DR. OMAR
          </Link>
          
          {/* SEPARATOR */}
          <div className="hidden xl:block w-[3px] h-8 2xl:h-10 bg-black/20 mr-6 2xl:mr-8"></div>
          
          {/* DESKTOP LINKS */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-8 font-helvetica text-[18px] 2xl:text-[26px] font-black tracking-tight leading-none" style={{ WebkitTextStroke: '0.5px currentColor' }}>
            <Link href="#about" className="hover:text-black/60 transition-colors">About</Link>
            <Link href="#entrepreneur" className="hover:text-black/60 transition-colors">Entrepreneur</Link>
            <Link href="/programmes" className="group relative flex items-center hover:text-black/60 transition-colors">
              Programmes <ChevronDown />
            </Link>
            <Link href="#achievements" className="hover:text-black/60 transition-colors">Achievements</Link>
            <Link href="#testimonials" className="hover:text-black/60 transition-colors">Testimonials</Link>
            <Link href="#blogs" className="hover:text-black/60 transition-colors">Blog</Link>
            <Link href="#cta" className="hover:text-black/60 transition-colors">Get in touch</Link>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* CTA BUTTON */}
          <Link 
            href="#cta" 
            className="hidden sm:flex bg-[#111] text-white px-6 py-2.5 md:px-10 md:py-3.5 xl:px-6 xl:py-2.5 2xl:px-10 2xl:py-3.5 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.3)] hover:bg-black/90 hover:shadow-xl hover:-translate-y-1 transition-all font-national2 font-black uppercase tracking-tight text-[20px] md:text-[28px] xl:text-[20px] 2xl:text-[28px] leading-none items-center justify-center whitespace-nowrap"
            style={{ WebkitTextStroke: '0.5px currentColor' }}
          >
            BESPOKE QUOTE
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="xl:hidden flex items-center justify-center p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div 
        className={`fixed inset-0 bg-[#FAF8F5] z-[55] flex flex-col pt-24 px-6 pb-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] xl:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col gap-5 sm:gap-6 font-helvetica font-black text-3xl sm:text-4xl tracking-tighter leading-none" style={{ WebkitTextStroke: '1px currentColor' }}>
          {links.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-[#111] hover:text-[#CD1D1D] transition-colors border-b border-black/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#cta" 
            onClick={() => setIsOpen(false)}
            className="text-[#111] hover:text-[#CD1D1D] transition-colors pb-4"
          >
            Get in touch
          </Link>
        </div>
        
        <div className="mt-auto">
          <Link 
            href="#cta" 
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#111] text-white py-5 rounded-xl shadow-2xl font-national2 font-black uppercase tracking-tight text-3xl leading-none flex items-center justify-center"
            style={{ WebkitTextStroke: '1px currentColor' }}
          >
            BESPOKE QUOTE
          </Link>
        </div>
      </div>
    </>
  );
}
