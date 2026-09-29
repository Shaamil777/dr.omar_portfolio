"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const ChevronDown = () => (
  <svg width="12" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 opacity-80 mt-0.5">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Track scroll to hide navbar on the hero section and show it when scrolling to about
  useEffect(() => {
    if (pathname !== "/") {
      setShowNavbar(true);
      return;
    }

    const handleScroll = () => {
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        // Show navbar when the About section is close to the top of the viewport
        if (rect.top <= 150) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      } else {
        setShowNavbar(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
  
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

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const links = [
    { name: "About", href: "/about" },
    { name: "Entrepreneur", href: "#entrepreneur" },
    { name: "Programmes", href: "/programmes" },
    { name: "Achievements", href: "#achievements" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blogs" },
  ];

  return (
    <>
      <div 
        className={`w-full flex justify-center p-4 md:p-6 relative z-[60] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="w-full max-w-[1400px] px-6 sm:px-8 xl:px-10 py-3 2xl:py-4 bg-white/85 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-between text-[#111]">
          
          {/* LOGO (Left Aligned) */}
          <div className="flex items-center xl:w-[20%]">
            <Link href="/" onClick={() => setIsOpen(false)} className="font-helvetica font-black text-2xl md:text-[26px] 2xl:text-[30px] tracking-tight leading-none uppercase">
              DR. OMAR
            </Link>
          </div>
          
          {/* DESKTOP LINKS (Centered) */}
          <div className="hidden xl:flex items-center justify-center gap-8 2xl:gap-12 font-helvetica text-[11px] 2xl:text-[13px] font-bold tracking-[0.15em] uppercase text-[#111]/50 xl:w-[60%]">
            <Link href="/about" className="lg:hover:text-[#111] transition-colors duration-300">About</Link>
            <a href="#entrepreneur" onClick={(e) => handleScrollToSection(e, "entrepreneur")} className="lg:hover:text-[#111] transition-colors duration-300 cursor-pointer">Entrepreneur</a>
            <Link href="/programmes" className="group relative flex items-center gap-1.5 lg:hover:text-[#111] transition-colors duration-300">
              Programmes <ChevronDown />
            </Link>
            <a href="#achievements" onClick={(e) => handleScrollToSection(e, "achievements")} className="lg:hover:text-[#111] transition-colors duration-300 cursor-pointer">Achievements</a>
            <a href="#testimonials" onClick={(e) => handleScrollToSection(e, "testimonials")} className="lg:hover:text-[#111] transition-colors duration-300 cursor-pointer">Testimonials</a>
            <a href="#blogs" onClick={(e) => handleScrollToSection(e, "blogs")} className="lg:hover:text-[#111] transition-colors duration-300 cursor-pointer">Blog</a>
          </div>

          {/* CTA & MOBILE MENU (Right Aligned) */}
          <div className="flex items-center justify-end gap-4 sm:gap-5 xl:w-[20%]">
            {/* CTA BUTTON */}
            <Link 
              href="/contact" 
              className="hidden sm:flex bg-[#111] text-white px-7 py-3 2xl:px-8 2xl:py-3.5 rounded-full shadow-md lg:hover:bg-[#CD1D1D] lg:hover:shadow-lg lg:hover:-translate-y-0.5 transition-all duration-300 font-helvetica font-bold uppercase tracking-widest text-[11px] 2xl:text-[12px] leading-none items-center justify-center whitespace-nowrap"
            >
              BESPOKE QUOTE
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button 
              className="xl:hidden flex items-center justify-center p-2.5 rounded-full bg-black/5 lg:hover:bg-black/10 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div 
        className={`fixed inset-0 bg-[#FAF8F5] z-[100] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] xl:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Mobile Menu Header */}
        <div className="w-full px-6 sm:px-10 py-6 flex items-center justify-between text-[#111] border-b border-black/5">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-helvetica font-black text-2xl sm:text-3xl tracking-tight leading-none">
            DR. OMAR
          </Link>
          <button 
            className="flex items-center justify-center p-2.5 rounded-full bg-black/5 lg:hover:bg-black/10 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 font-helvetica font-bold text-3xl sm:text-4xl tracking-tight leading-none px-8 pt-12 overflow-y-auto">
          {links.map((link) => (
            link.href.startsWith("#") ? (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleScrollToSection(e, link.href.slice(1))}
                className="text-[#111] lg:hover:text-[#CD1D1D] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-[#111] lg:hover:text-[#CD1D1D] transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="text-[#111] lg:hover:text-[#CD1D1D] transition-colors pb-4"
          >
            Get in touch
          </Link>
        </div>
        
        <div className="mt-auto px-8 pb-10 pt-6 bg-gradient-to-t from-[#FAF8F5] to-transparent sticky bottom-0">
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#111] text-white py-5 rounded-full shadow-lg font-helvetica font-bold uppercase tracking-widest text-[14px] leading-none flex items-center justify-center lg:hover:bg-[#CD1D1D] transition-colors"
          >
            BESPOKE QUOTE
          </Link>
        </div>
      </div>
    </>
  );
}
