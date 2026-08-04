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
  const router = useRouter();
  const pathname = usePathname();
  
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
      <nav className="w-full px-4 sm:px-8 py-3 2xl:py-5 bg-[#FAF8F5] flex items-center justify-between text-[#111] relative z-[60] border-b border-black/5">
        <div className="flex items-center">
          {/* LOGO */}
          <Link href="/" onClick={() => setIsOpen(false)} className="font-helvetica font-black text-2xl md:text-[26px] 2xl:text-[36px] tracking-tight mr-5 sm:mr-8 2xl:mr-12 leading-none">
            DR. OMAR
          </Link>
          
          {/* SEPARATOR */}
          <div className="hidden xl:block w-[1.5px] h-5 2xl:h-8 bg-black/20 mr-6 2xl:mr-10"></div>
          
          {/* DESKTOP LINKS */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-10 font-helvetica text-[15px] 2xl:text-[20px] font-black tracking-tight leading-none text-[#111]">
            <Link href="/about" className="hover:text-[#CD1D1D] transition-colors">About</Link>
            <a href="#entrepreneur" onClick={(e) => handleScrollToSection(e, "entrepreneur")} className="hover:text-[#CD1D1D] transition-colors cursor-pointer">Entrepreneur</a>
            <Link href="/programmes" className="group relative flex items-center hover:text-[#CD1D1D] transition-colors">
              Programmes <ChevronDown />
            </Link>
            <a href="#achievements" onClick={(e) => handleScrollToSection(e, "achievements")} className="hover:text-[#CD1D1D] transition-colors cursor-pointer">Achievements</a>
            <a href="#testimonials" onClick={(e) => handleScrollToSection(e, "testimonials")} className="hover:text-[#CD1D1D] transition-colors cursor-pointer">Testimonials</a>
            <a href="#blogs" onClick={(e) => handleScrollToSection(e, "blogs")} className="hover:text-[#CD1D1D] transition-colors cursor-pointer">Blog</a>
            <Link href="/contact" className="hover:text-[#CD1D1D] transition-colors">Get in touch</Link>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* CTA BUTTON */}
          <Link 
            href="/contact" 
            className="hidden sm:flex bg-[#111] text-white px-5 py-2 md:px-6 md:py-2.5 2xl:px-9 2xl:py-3.5 rounded-xl shadow-sm hover:bg-[#CD1D1D] hover:shadow-md hover:-translate-y-0.5 transition-all font-helvetica font-black uppercase tracking-wider text-xs md:text-[13px] 2xl:text-[16px] leading-none items-center justify-center whitespace-nowrap"
          >
            BESPOKE QUOTE
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="xl:hidden flex items-center justify-center p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div 
        className={`fixed inset-0 bg-[#FAF8F5] z-[100] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] xl:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Mobile Menu Header */}
        <div className="w-full px-4 sm:px-8 py-4 flex items-center justify-between text-[#111] border-b border-black/5">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-helvetica font-black text-2xl sm:text-3xl tracking-tight leading-none">
            DR. OMAR
          </Link>
          <button 
            className="flex items-center justify-center p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 font-helvetica font-black text-2xl sm:text-3xl tracking-tight leading-none px-6 pt-8">
          {links.map((link) => (
            link.href.startsWith("#") ? (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleScrollToSection(e, link.href.slice(1))}
                className="text-[#111] hover:text-[#CD1D1D] transition-colors border-b border-black/10 pb-4 cursor-pointer"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-[#111] hover:text-[#CD1D1D] transition-colors border-b border-black/10 pb-4"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="text-[#111] hover:text-[#CD1D1D] transition-colors pb-4"
          >
            Get in touch
          </Link>
        </div>
        
        <div className="mt-auto px-6 pb-8">
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#111] text-white py-4 rounded-xl shadow-lg font-helvetica font-black uppercase tracking-wider text-lg leading-none flex items-center justify-center hover:bg-[#CD1D1D] transition-colors"
          >
            BESPOKE QUOTE
          </Link>
        </div>
      </div>
    </>
  );
}
