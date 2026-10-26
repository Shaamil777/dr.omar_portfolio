"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState(false);

  // Track scroll on home page to detect active section & hide navbar in program sliding section
  useEffect(() => {
    if (pathname !== "/") return;

    let rafId: number | null = null;

    const checkVisibilityAndSection = () => {
      // 1. Sliding section detection (Entrepreneur section)
      const entrepreneurEl = document.getElementById("entrepreneur");
      if (entrepreneurEl) {
        const spacer =
          entrepreneurEl.querySelector(".pin-spacer") ||
          entrepreneurEl.closest(".pin-spacer") ||
          entrepreneurEl;
        const rect = spacer.getBoundingClientRect();
        // Start smooth slide-out slightly before pin locks (top <= 75px) until sliding section unpins (bottom >= 75px)
        const inSlidingSection = rect.top <= 75 && rect.bottom >= 75;
        setIsHidden(inSlidingSection);
        if (inSlidingSection) {
          setIsDropdownOpen(false);
          setIsOpen(false);
        }
      }

      // 2. Active section detection
      const sections = ["about", "entrepreneur", "programmes", "achievements", "testimonials", "blogs"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        checkVisibilityAndSection();
        rafId = null;
      });
    };

    const handleCustomToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ hide: boolean }>;
      if (customEvent.detail) {
        setIsHidden(customEvent.detail.hide);
        if (customEvent.detail.hide) {
          setIsDropdownOpen(false);
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("toggle-navbar-hide", handleCustomToggle);

    // Initial check scheduled in next frame
    rafId = requestAnimationFrame(() => {
      checkVisibilityAndSection();
      rafId = null;
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("toggle-navbar-hide", handleCustomToggle);
    };
  }, [pathname]);

  // Prevent scrolling when mobile menu is open & auto-close on desktop resize
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    setIsDropdownOpen(false);

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

  const isProgrammesActive = pathname.startsWith("/programme");
  const isAboutActive = pathname === "/about";

  const [isMobileProgrammesExpanded, setIsMobileProgrammesExpanded] = useState(false);

  const programmes = [
    {
      name: "Business Coaching Club",
      short: "BCC",
      desc: "Annual executive mentorship & valuation scale",
      href: "/programme/bcc",
    },
    {
      name: "Deep Immersion",
      short: "DI",
      desc: "Flagship life transformation & mindset retreat",
      href: "/programme/deep_immersion",
    },
    {
      name: "Human Excellence Academy",
      short: "HEA",
      desc: "Leadership coaching & NLP mastery since 2010",
      href: "/programme/hea",
    },
    {
      name: "Business Immersion",
      short: "BI",
      desc: "Residential intensive for enterprise systems",
      href: "/programme/business_immersion",
    },
    {
      name: "OATHMEN Fellowship",
      short: "OATH",
      desc: "Practical startup fellowship from ideas to IPO",
      href: "/programme/oathmen",
    },
  ];

  const mobileNavLinks = [
    { num: "01", name: "About", href: "/about", isRoute: true },
    { num: "02", name: "Ventures", href: "#entrepreneur", isRoute: false },
    { num: "03", name: "Programmes", href: "/programmes", isRoute: true },
    { num: "04", name: "Impact & Trust", href: "#achievements", isRoute: false },
    { num: "05", name: "Testimonials", href: "#testimonials", isRoute: false },
    { num: "06", name: "Insights & Blog", href: "#blogs", isRoute: false },
  ];

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const isNavbarHidden = pathname === "/" && isHidden;

  return (
    <>
      {/* Normal Matching Solid Edge-to-Edge Navbar Header */}
      <header
        className={`w-full bg-[#FAF8F5] border-b border-black/15 relative z-[60] shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
          isNavbarHidden
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100 pointer-events-auto"
        }`}
        aria-hidden={isNavbarHidden}
      >
        <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-20 py-3 sm:py-3.5 md:py-4 flex items-center justify-between text-[#111]">
          
          {/* BRAND LOGO (Left Aligned) */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-2.5 sm:gap-3 select-none"
            >
              <span className="font-helvetica font-black text-xl sm:text-2xl xl:text-[25px] tracking-tight leading-none uppercase text-[#111]">
                DR. OMAR<span className="text-[#CD1D1D]">.</span>
              </span>
              <span className="hidden xl:inline-block h-3.5 w-[1px] bg-black/20" />
              <span className="hidden xl:inline-block font-courier text-[9.5px] uppercase tracking-[0.22em] text-zinc-500 font-bold whitespace-nowrap">
                Executive Advisory
              </span>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION LINKS (Center - Solid, Architectural, Sharp) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 font-helvetica text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold tracking-[0.06em] xl:tracking-[0.11em] 2xl:tracking-[0.14em] uppercase text-[#111]/75 shrink-0">
            {/* About */}
            <Link
              href="/about"
              className={`hover:text-[#CD1D1D] transition-colors duration-150 relative py-1.5 whitespace-nowrap ${
                isAboutActive || activeSection === "about"
                  ? "text-[#111] font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CD1D1D]"
                  : ""
              }`}
            >
              About
            </Link>

            {/* Entrepreneur */}
            <a
              href="#entrepreneur"
              onClick={(e) => handleScrollToSection(e, "entrepreneur")}
              className={`hover:text-[#CD1D1D] transition-colors duration-150 cursor-pointer relative py-1.5 whitespace-nowrap ${
                activeSection === "entrepreneur"
                  ? "text-[#111] font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CD1D1D]"
                  : ""
              }`}
            >
              Entrepreneur
            </a>

            {/* Programmes Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href="/programmes"
                className={`flex items-center gap-1.5 hover:text-[#CD1D1D] transition-colors duration-150 relative py-1.5 select-none whitespace-nowrap ${
                  isProgrammesActive || isDropdownOpen
                    ? "text-[#111] font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CD1D1D]"
                    : ""
                }`}
              >
                <span>Programmes</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-250 ease-out ${
                    isDropdownOpen ? "rotate-180 text-[#CD1D1D]" : "opacity-60"
                  }`}
                />
              </Link>

              {/* Minimal Clean Dropdown */}
              <div
                className={`absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 pt-2.5 w-[330px] sm:w-[360px] max-w-[calc(100vw-32px)] transition-all duration-200 origin-top z-50 ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                    : "opacity-0 scale-[0.97] pointer-events-none -translate-y-1"
                }`}
              >
                {/* Invisible Top Hover Bridge */}
                <div className="absolute -top-2.5 left-0 right-0 h-3 bg-transparent" />

                <div className="bg-white border border-black/10 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.04)] p-1.5 overflow-hidden">
                  <div className="flex flex-col">
                    {programmes.map((item) => (
                      <Link
                        key={item.short}
                        href={item.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="group flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg hover:bg-black/[0.04] transition-colors"
                      >
                        <div className="flex flex-col min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="font-helvetica font-bold text-[12.5px] sm:text-[13px] text-[#111] group-hover:text-[#CD1D1D] transition-colors truncate leading-tight">
                              {item.name}
                            </span>
                            <span className="font-courier text-[9px] font-semibold tracking-wider text-zinc-400 group-hover:text-zinc-600 transition-colors">
                              {item.short}
                            </span>
                          </div>
                          <span className="text-[11px] sm:text-[11.5px] text-zinc-500 font-normal truncate mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={13}
                          className="text-zinc-300 group-hover:text-[#CD1D1D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 opacity-0 group-hover:opacity-100"
                        />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-1 pt-1 border-t border-black/5">
                    <Link
                      href="/programmes"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center justify-between px-3.5 py-2 rounded-lg hover:bg-black/[0.04] text-xs font-helvetica font-bold text-zinc-700 hover:text-[#CD1D1D] transition-colors group/all"
                    >
                      <span>All Programmes</span>
                      <ArrowRight
                        size={13}
                        className="text-zinc-400 group-hover/all:text-[#CD1D1D] group-hover/all:translate-x-0.5 transition-all"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <a
              href="#achievements"
              onClick={(e) => handleScrollToSection(e, "achievements")}
              className={`hover:text-[#CD1D1D] transition-colors duration-150 cursor-pointer relative py-1.5 whitespace-nowrap ${
                activeSection === "achievements"
                  ? "text-[#111] font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CD1D1D]"
                  : ""
              }`}
            >
              Achievements
            </a>

            {/* Testimonials */}
            <a
              href="#testimonials"
              onClick={(e) => handleScrollToSection(e, "testimonials")}
              className={`hover:text-[#CD1D1D] transition-colors duration-150 cursor-pointer relative py-1.5 whitespace-nowrap ${
                activeSection === "testimonials"
                  ? "text-[#111] font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CD1D1D]"
                  : ""
              }`}
            >
              Testimonials
            </a>

            {/* Blog */}
            <a
              href="#blogs"
              onClick={(e) => handleScrollToSection(e, "blogs")}
              className={`hover:text-[#CD1D1D] transition-colors duration-150 cursor-pointer relative py-1.5 whitespace-nowrap ${
                activeSection === "blogs"
                  ? "text-[#111] font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CD1D1D]"
                  : ""
              }`}
            >
              Blog
            </a>
          </nav>

          {/* CTA & MOBILE MENU TOGGLE (Right Aligned) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Solid Sharp Rectangular CTA Button */}
            <Link
              href="/contact"
              className="group hidden sm:inline-flex items-center gap-2 bg-[#111] text-white px-3.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 rounded-none font-helvetica font-bold text-[11px] xl:text-xs uppercase tracking-[0.1em] xl:tracking-[0.14em] leading-none border border-[#111] hover:bg-[#CD1D1D] hover:border-[#CD1D1D] transition-all duration-200 shadow-sm shrink-0 whitespace-nowrap"
            >
              <span>Get In Touch</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden flex items-center justify-center p-2 sm:p-2.5 rounded-none border border-black/15 bg-black/[0.03] hover:bg-black/10 active:scale-95 transition-all text-[#111]"
              aria-label="Open Navigation Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER MENU - Solid Architectural Design */}
      <div
        className={`fixed inset-0 bg-[#FAF8F5] z-[100] flex flex-col justify-between transition-all duration-300 ease-out lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Mobile Header */}
        <div className="w-full px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between text-[#111] border-b border-black/15 shrink-0">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-helvetica font-black text-xl sm:text-2xl tracking-tight leading-none uppercase"
          >
            DR. OMAR<span className="text-[#CD1D1D]">.</span>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center p-2 sm:p-2.5 rounded-none border border-black/15 bg-black/[0.03] hover:bg-black/10 active:scale-90 transition-all text-[#111]"
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links List - with justify-start so top elements are never clipped on short screens */}
        <div className="flex-1 px-5 sm:px-8 py-4 sm:py-6 flex flex-col justify-start overflow-y-auto overscroll-contain">
          {mobileNavLinks.map((link) => {
            if (link.name === "Programmes") {
              return (
                <div key={link.name} className="border-b border-black/10 py-1">
                  <div className="flex items-center justify-between py-2 sm:py-2.5">
                    <Link
                      href="/programmes"
                      onClick={() => setIsOpen(false)}
                      className="text-lg sm:text-2xl font-helvetica font-bold uppercase tracking-tight text-[#111] hover:text-[#CD1D1D] transition-colors"
                    >
                      <span>Programmes</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsMobileProgrammesExpanded(!isMobileProgrammesExpanded)}
                      className="px-2.5 py-1.5 border border-black/15 bg-black/[0.04] text-[#111] hover:bg-black/10 transition-colors flex items-center gap-1.5 rounded-none"
                      aria-label="Toggle programmes list"
                    >
                      <span className="font-courier text-[10px] uppercase font-bold tracking-wider">
                        {isMobileProgrammesExpanded ? "Close" : "Explore"}
                      </span>
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          isMobileProgrammesExpanded ? "rotate-180 text-[#CD1D1D]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {isMobileProgrammesExpanded && (
                    <div className="mt-1 mb-2 pl-3 border-l-2 border-[#CD1D1D] flex flex-col gap-2 bg-black/[0.02] p-2.5 sm:p-3">
                      <Link
                        href="/programme/bcc"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group/mob py-1 text-xs sm:text-sm font-bold uppercase text-[#111] hover:text-[#CD1D1D] transition-colors"
                      >
                        <span>Business Coaching Club</span>
                        <span className="font-courier text-[10px] text-[#CD1D1D] font-bold">BCC</span>
                      </Link>
                      <Link
                        href="/programme/deep_immersion"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group/mob py-1 text-xs sm:text-sm font-bold uppercase text-[#111] hover:text-[#CD1D1D] transition-colors"
                      >
                        <span>Deep Immersion</span>
                        <span className="font-courier text-[10px] text-[#CD1D1D] font-bold">DI</span>
                      </Link>
                      <Link
                        href="/programme/hea"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group/mob py-1 text-xs sm:text-sm font-bold uppercase text-[#111] hover:text-[#CD1D1D] transition-colors"
                      >
                        <span>Human Excellence Academy</span>
                        <span className="font-courier text-[10px] text-[#CD1D1D] font-bold">HEA</span>
                      </Link>
                      <Link
                        href="/programme/business_immersion"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group/mob py-1 text-xs sm:text-sm font-bold uppercase text-[#111] hover:text-[#CD1D1D] transition-colors"
                      >
                        <span>Business Immersion</span>
                        <span className="font-courier text-[10px] text-[#CD1D1D] font-bold">BI</span>
                      </Link>
                      <Link
                        href="/programme/oathmen"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group/mob py-1 text-xs sm:text-sm font-bold uppercase text-[#111] hover:text-[#CD1D1D] transition-colors"
                      >
                        <span>OATHMEN Fellowship</span>
                        <span className="font-courier text-[10px] text-[#CD1D1D] font-bold">OATH</span>
                      </Link>
                      <div className="pt-2 mt-0.5 border-t border-black/10 flex items-center justify-between">
                        <Link
                          href="/programmes"
                          onClick={() => setIsOpen(false)}
                          className="font-helvetica font-bold text-xs uppercase text-[#CD1D1D] flex items-center gap-1.5 hover:underline"
                        >
                          <span>Explore All Programmes</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return link.isRoute ? (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between py-2.5 sm:py-3 border-b border-black/10 text-lg sm:text-2xl font-helvetica font-bold uppercase tracking-tight text-[#111] hover:text-[#CD1D1D] transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-courier text-xs text-zinc-400 group-hover:text-[#CD1D1D] transition-colors">
                  {link.num}
                </span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href.slice(1))}
                className="group flex items-center justify-between py-2.5 sm:py-3 border-b border-black/10 text-lg sm:text-2xl font-helvetica font-bold uppercase tracking-tight text-[#111] hover:text-[#CD1D1D] transition-colors cursor-pointer"
              >
                <span>{link.name}</span>
                <span className="font-courier text-xs text-zinc-400 group-hover:text-[#CD1D1D] transition-colors">
                  {link.num}
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile Footer & Quick CTA */}
        <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-3.5 border-t border-black/15 bg-[#FAF8F5] shrink-0">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#111] text-white py-3 sm:py-3.5 rounded-none font-helvetica font-bold uppercase tracking-[0.14em] text-xs flex items-center justify-center gap-2 hover:bg-[#CD1D1D] transition-colors shadow-md border border-[#111]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={14} />
          </Link>
          <div className="mt-3 text-center">
            <span className="font-courier text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              Transforming People • Developing Leaders
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
