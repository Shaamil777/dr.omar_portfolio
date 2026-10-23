"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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

  const featuredProgrammes = [
    {
      name: "Business Coaching Club",
      short: "BCC",
      desc: "Annual executive mentorship & brand scale",
      href: "/programme/bcc",
    },
    {
      name: "Deep Immersion",
      short: "DI",
      desc: "Flagship life transformation retreat",
      href: "/programme/deep_immersion",
    },
    {
      name: "Human Excellence Academy",
      short: "HEA",
      desc: "Holistic human development & leadership",
      href: "/programme/hea",
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
        <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24 py-4 md:py-4.5 flex items-center justify-between text-[#111]">
          
          {/* BRAND LOGO (Left Aligned) */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 select-none"
            >
              <span className="font-helvetica font-black text-2xl md:text-[26px] tracking-tight leading-none uppercase text-[#111]">
                DR. OMAR<span className="text-[#CD1D1D]">.</span>
              </span>
              <span className="hidden sm:inline-block h-4 w-[1px] bg-black/20" />
              <span className="hidden sm:inline-block font-courier text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
                Executive Advisory
              </span>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION LINKS (Center - Solid, Architectural, Sharp) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 font-helvetica text-xs xl:text-[13px] font-bold tracking-[0.14em] uppercase text-[#111]/75">
            {/* About */}
            <Link
              href="/about"
              className={`hover:text-[#CD1D1D] transition-colors duration-150 relative py-1.5 ${
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
              className={`hover:text-[#CD1D1D] transition-colors duration-150 cursor-pointer relative py-1.5 ${
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
                className={`flex items-center gap-1.5 hover:text-[#CD1D1D] transition-colors duration-150 relative py-1.5 ${
                  isProgrammesActive || isDropdownOpen
                    ? "text-[#111] font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CD1D1D]"
                    : ""
                }`}
              >
                <span>Programmes</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180 text-[#CD1D1D]" : "opacity-60"
                  }`}
                />
              </Link>

              {/* Crisp Architectural Dropdown (Solid, Sharp Rectangular, No Rounded Corners) */}
              <div
                className={`absolute top-full left-0 pt-2.5 w-84 transition-all duration-200 origin-top ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                    : "opacity-0 scale-95 pointer-events-none -translate-y-1"
                }`}
              >
                <div className="bg-[#FAF8F5] border-2 border-[#111] shadow-[0_16px_36px_rgba(0,0,0,0.12)] p-2 flex flex-col gap-1 rounded-none">
                  <div className="px-3 py-2 text-[10px] font-courier font-bold tracking-[0.2em] text-zinc-500 uppercase border-b border-black/10 flex items-center justify-between">
                    <span>Flagship Programs</span>
                    <span className="w-1.5 h-1.5 bg-[#CD1D1D]" />
                  </div>

                  {featuredProgrammes.map((item) => (
                    <Link
                      key={item.short}
                      href={item.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="group/item flex flex-col px-3 py-2.5 rounded-none hover:bg-[#111] hover:text-white transition-all duration-150"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-helvetica font-bold text-xs uppercase tracking-tight text-[#111] group-hover/item:text-white transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-courier font-bold text-[#CD1D1D] group-hover/item:text-[#CD1D1D]">
                          {item.short}
                        </span>
                      </div>
                      <span className="text-[11px] font-normal normal-case text-zinc-600 group-hover/item:text-zinc-300 tracking-normal leading-tight mt-0.5">
                        {item.desc}
                      </span>
                    </Link>
                  ))}

                  <div className="pt-1 mt-1 border-t border-black/10">
                    <Link
                      href="/programmes"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-none bg-black/[0.04] hover:bg-[#CD1D1D] hover:text-white transition-all duration-150 text-xs font-bold uppercase tracking-wider text-[#111] group/all"
                    >
                      <span>Explore All Programmes</span>
                      <ArrowUpRight
                        size={14}
                        className="group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5 transition-transform"
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
              className={`hover:text-[#CD1D1D] transition-colors duration-150 cursor-pointer relative py-1.5 ${
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
              className={`hover:text-[#CD1D1D] transition-colors duration-150 cursor-pointer relative py-1.5 ${
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
              className={`hover:text-[#CD1D1D] transition-colors duration-150 cursor-pointer relative py-1.5 ${
                activeSection === "blogs"
                  ? "text-[#111] font-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CD1D1D]"
                  : ""
              }`}
            >
              Blog
            </a>
          </nav>

          {/* CTA & MOBILE MENU TOGGLE (Right Aligned - Solid Sharp Rectangular Design) */}
          <div className="flex items-center gap-3">
            {/* Solid Sharp Rectangular CTA Button (NO PILL SHAPE) */}
            <Link
              href="/contact"
              className="group hidden sm:inline-flex items-center gap-2.5 bg-[#111] text-white px-5 md:px-6 py-2.5 rounded-none font-helvetica font-bold text-xs uppercase tracking-[0.16em] leading-none border border-[#111] hover:bg-[#CD1D1D] hover:border-[#CD1D1D] transition-all duration-200 shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* Mobile Menu Toggle Button (Sharp Rectangular) */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden flex items-center justify-center p-2.5 rounded-none border border-black/15 bg-black/[0.03] hover:bg-black/10 active:scale-95 transition-all text-[#111]"
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
        <div className="w-full px-6 sm:px-10 py-5 flex items-center justify-between text-[#111] border-b border-black/15">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-helvetica font-black text-2xl tracking-tight leading-none uppercase"
          >
            DR. OMAR<span className="text-[#CD1D1D]">.</span>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center p-2.5 rounded-none border border-black/15 bg-black/[0.03] hover:bg-black/10 active:scale-90 transition-all text-[#111]"
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links List */}
        <div className="flex-1 px-8 py-8 flex flex-col justify-center gap-2 overflow-y-auto">
          {mobileNavLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between py-3 border-b border-black/10 text-2xl sm:text-3xl font-helvetica font-bold uppercase tracking-tight text-[#111] hover:text-[#CD1D1D] transition-colors"
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
                className="group flex items-center justify-between py-3 border-b border-black/10 text-2xl sm:text-3xl font-helvetica font-bold uppercase tracking-tight text-[#111] hover:text-[#CD1D1D] transition-colors cursor-pointer"
              >
                <span>{link.name}</span>
                <span className="font-courier text-xs text-zinc-400 group-hover:text-[#CD1D1D] transition-colors">
                  {link.num}
                </span>
              </a>
            )
          ))}
        </div>

        {/* Mobile Footer & Quick CTA (Sharp Rectangular) */}
        <div className="px-8 pb-10 pt-4 border-t border-black/15 bg-[#FAF8F5]">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#111] text-white py-4 rounded-none font-helvetica font-bold uppercase tracking-[0.16em] text-xs flex items-center justify-center gap-2 hover:bg-[#CD1D1D] transition-colors shadow-md border border-[#111]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={15} />
          </Link>
          <div className="mt-4 text-center">
            <span className="font-courier text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Transforming People • Developing Leaders
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
