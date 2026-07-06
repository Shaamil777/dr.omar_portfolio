"use client";

import { Users, Building, Award, Globe, Presentation } from "lucide-react";

export default function Achievements() {
  return (
    <section className="w-full bg-[#FAF8F5] border-y border-neutral-200 py-10 lg:py-16 overflow-hidden">
      <div className="max-w-[1700px] w-full mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        
        {/* Left Side: Title & Description */}
        <div className="w-full lg:w-[35%] xl:w-[30%] flex flex-col lg:pr-12 lg:border-r border-neutral-200 shrink-0">
          <span className="text-xs lg:text-sm font-semibold text-slate-500 tracking-[0.15em] uppercase mb-3 lg:mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl lg:text-[40px] font-black text-[#18181b] tracking-tighter leading-[1] uppercase mb-4">
            Two Decades Of<br />
            Impact And Trust
          </h2>
          <p className="text-sm lg:text-base text-neutral-600 font-medium leading-relaxed max-w-sm">
            Numbers that reflect our commitment to<br className="hidden lg:block" />
            transforming lives, leaders, and organizations.
          </p>
        </div>

        {/* Right Side: 5 Stats */}
        <div className="w-full lg:w-[65%] xl:w-[70%] flex-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
          <div className="flex flex-row items-start min-w-max lg:min-w-0 lg:w-full lg:justify-between h-full">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center w-[160px] lg:w-1/5 px-2 lg:px-4 lg:border-r border-neutral-200 h-full">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/5 flex items-center justify-center mb-3 lg:mb-4">
                <Users className="w-5 h-5 lg:w-6 lg:h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-[#18181b] tracking-tighter mb-1 lg:mb-2">10,000+</span>
              <span className="text-xs lg:text-sm text-neutral-600 font-medium text-center leading-tight">Entrepreneurs<br />Mentored</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center w-[160px] lg:w-1/5 px-2 lg:px-4 lg:border-r border-neutral-200 h-full">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/5 flex items-center justify-center mb-3 lg:mb-4">
                <Building className="w-5 h-5 lg:w-6 lg:h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-[#18181b] tracking-tighter mb-1 lg:mb-2">1,000+</span>
              <span className="text-xs lg:text-sm text-neutral-600 font-medium text-center leading-tight">Organizations<br />Coached</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center w-[160px] lg:w-1/5 px-2 lg:px-4 lg:border-r border-neutral-200 h-full">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/5 flex items-center justify-center mb-3 lg:mb-4">
                <Award className="w-5 h-5 lg:w-6 lg:h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-[#18181b] tracking-tighter mb-1 lg:mb-2">20+</span>
              <span className="text-xs lg:text-sm text-neutral-600 font-medium text-center leading-tight">Years of<br />Experience</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center w-[160px] lg:w-1/5 px-2 lg:px-4 lg:border-r border-neutral-200 h-full">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/5 flex items-center justify-center mb-3 lg:mb-4">
                <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-[#18181b] tracking-tighter mb-1 lg:mb-2">200+</span>
              <span className="text-xs lg:text-sm text-neutral-600 font-medium text-center leading-tight">Global Brands<br />Supported</span>
            </div>

            {/* Stat 5 */}
            <div className="flex flex-col items-center justify-center w-[160px] lg:w-1/5 px-2 lg:px-4 h-full">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/5 flex items-center justify-center mb-3 lg:mb-4">
                <Presentation className="w-5 h-5 lg:w-6 lg:h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-[#18181b] tracking-tighter mb-1 lg:mb-2">1,500+</span>
              <span className="text-xs lg:text-sm text-neutral-600 font-medium text-center leading-tight">Leadership Programs<br />Delivered</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
