"use client";

import Image from "next/image";
import type { CompanyData } from "@/constants/companies";

export default function CompanyOwnsSection({ company }: { company: CompanyData }) {
  // We can use default placeholder logos for the companies owned by Dr Omar
  // Using some abstract Unsplash images to represent corporate logos
  const ownedCompanies = [
    { name: "BCC", logo: "/logos/BCC/BCC_dark.png" },
    { name: "BI", logo: "/logos/BI/bi_dark.png" },
    { name: "DI", logo: "/logos/DI/di_dark.png" },
    { name: "EI", logo: "/logos/EI/EI_dark.png" },
    { name: "HEA", logo: "/logos/HEA/hea.png" },
    { name: "MDI", logo: "/logos/MDI/mdi_dark.png" },
    { name: "OATHMEN", logo: "/logos/OATHMEN/oathmen_dark.png" },
    { name: "TI", logo: "/logos/TI/ti_dark.png" },
    { name: "YI", logo: "/logos/YI/yi_dark.png" },
  ];

  // We duplicate the array multiple times to ensure a seamless infinite loop across wide screens
  const marqueeItems = [...ownedCompanies, ...ownedCompanies, ...ownedCompanies];

  return (
    <section className="w-full py-24 md:py-32 bg-transparent text-[#111] overflow-hidden relative z-10">
      
      {/* CSS for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem] mb-20 text-center">
        <span className="font-courier text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#CD1D1D] font-bold mb-4 block">
          [ DR. OMAR'S ECOSYSTEM ]
        </span>
        <h2 className="font-national2 text-4xl md:text-5xl lg:text-[5rem] font-black uppercase tracking-normal leading-[1] text-[#111] flex flex-wrap justify-center gap-x-4 lg:gap-x-6">
          <span>COMPANIES DR OMAR</span>
          <span className="text-[#CD1D1D]">OWNS</span>
          <span>AND</span>
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>LEADS</span>
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-x-hidden group">
        
        {/* Gradient Fades for edges to blend with the #FAF8F5 background */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Track */}
        <div className="flex animate-marquee whitespace-nowrap min-w-max py-4">
          {marqueeItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center mx-12 md:mx-16 group/item cursor-pointer"
            >
              {/* Logo Box */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-[2rem] border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white overflow-hidden relative flex items-center justify-center mb-8 group-hover/item:shadow-[0_20px_50px_rgba(205,29,29,0.15)] group-hover/item:-translate-y-3 group-hover/item:border-[#CD1D1D]/30 transition-all duration-500">
                <Image 
                  src={item.logo} 
                  alt={item.name} 
                  fill 
                  className="object-contain p-6 md:p-10 grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-700 ease-out"
                />
              </div>
              
              {/* Company Name & Text */}
              <h4 className="font-national2 text-xl md:text-2xl font-black uppercase tracking-normal text-[#111] group-hover/item:text-[#CD1D1D] transition-colors duration-300 mb-1">
                {item.name}
              </h4>
              <p className="font-helvetica text-sm md:text-base text-zinc-500 font-medium">
                Portfolio Company
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
