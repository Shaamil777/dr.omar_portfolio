"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isCompact, setIsCompact] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsAtTop(false);
        setIsCompact(true);
      } else {
        setIsAtTop(true);
        setIsCompact(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "/programmes", isDropdown: true },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  const NavItem = ({ item }: { item: any }) => {
    const isActive = pathname === item.href;
    
    if (item.isDropdown) {
      return (
        <div className="relative group">
          <Link 
            href={item.href} 
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center justify-center ${
              isAtTop 
                ? (isActive ? "text-zinc-900 font-semibold" : "text-zinc-600 hover:text-zinc-900") 
                : (isActive ? "text-white" : "text-zinc-300 hover:text-white")
            }`}
          >
            <span className="relative z-10 flex items-center gap-1">
              {item.name}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive ? "bg-zinc-800/80 scale-100 opacity-100" : "bg-zinc-800/50 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"}`}></div>
          </Link>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800/50 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 transform translate-y-2 group-hover:translate-y-0">
              <Link href="/programmes/program1" className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-xl transition-all duration-200">
                Program 1
              </Link>
              <Link href="/programmes/program2" className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-xl transition-all duration-200">
                Program 2
              </Link>
              <Link href="/programmes/program3" className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-xl transition-all duration-200">
                Program 3
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative group">
        <Link 
          href={item.href} 
          className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center justify-center overflow-hidden ${
            isAtTop 
              ? (isActive ? "text-zinc-900 font-semibold" : "text-zinc-600") 
              : (isActive ? "text-white" : "text-zinc-300")
          }`}
        >
          <span className="relative z-10 flex flex-col items-center justify-center overflow-hidden h-5">
            <span className={`transition-transform duration-300 group-hover:-translate-y-full flex items-center justify-center h-full`}>
              {item.name}
            </span>
            <span className={`absolute transition-transform duration-300 translate-y-full group-hover:translate-y-0 flex items-center justify-center h-full ${isAtTop ? 'text-zinc-900' : 'text-white'}`}>
              {item.name}
            </span>
          </span>
          <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive ? "bg-zinc-800/80 scale-100 opacity-100" : "bg-zinc-800/50 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"}`}></div>
        </Link>
      </div>
    );
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCompact ? "top-4 px-4 md:px-6" : "top-0 px-0"
        }`}
      >
        <div 
          className={`w-full mx-auto flex items-center justify-between border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isCompact
              ? "max-w-4xl h-14 px-6 bg-zinc-950/90 backdrop-blur-xl border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : `max-w-[100%] h-24 px-8 md:px-16 rounded-none shadow-none ${isAtTop ? 'bg-transparent border-transparent backdrop-blur-none' : 'bg-zinc-950/80 border-b border-zinc-800 backdrop-blur-md'}`
          }`}
        >
          <Link 
            href="/" 
            className={`font-bold tracking-tighter uppercase transition-all duration-700 ${
              isCompact ? "text-lg text-white" : `text-2xl ${isAtTop ? 'text-zinc-900' : 'text-white'}`
            }`}
          >
            DR.Abdussalam Omar
          </Link>
          
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </nav>
          
          <button 
            className={`md:hidden transition-colors text-sm font-medium uppercase tracking-wider px-5 py-2 rounded-full border backdrop-blur-sm ${
              isAtTop 
                ? 'text-zinc-600 hover:text-zinc-900 border-zinc-200 bg-black/5' 
                : 'text-zinc-300 hover:text-white border-white/10 bg-white/5'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="w-full p-6 flex justify-end">
          <button 
            className="text-zinc-400 hover:text-white transition-colors p-4 rounded-full bg-white/5 border border-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
          {navLinks.map((item, index) => (
            <div 
              key={item.name}
              className={`transform transition-all duration-500`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${100 + index * 100}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              {item.isDropdown ? (
                <div className="flex flex-col items-center gap-6">
                  <Link 
                    href={item.href} 
                    className="text-3xl font-light text-zinc-400 hover:text-white transition-colors tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="flex flex-col items-center gap-4 border-l border-white/10 pl-6">
                    <Link href="/programmes/program1" className="text-xl font-light text-zinc-500 hover:text-zinc-300" onClick={() => setIsMobileMenuOpen(false)}>Program 1</Link>
                    <Link href="/programmes/program2" className="text-xl font-light text-zinc-500 hover:text-zinc-300" onClick={() => setIsMobileMenuOpen(false)}>Program 2</Link>
                    <Link href="/programmes/program3" className="text-xl font-light text-zinc-500 hover:text-zinc-300" onClick={() => setIsMobileMenuOpen(false)}>Program 3</Link>
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-4xl font-light text-white hover:text-zinc-300 transition-colors tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
