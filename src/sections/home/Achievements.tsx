"use client";

import { Users, Building, Award, Globe, Presentation } from "lucide-react";

export default function Achievements() {
  return (
    <section className="w-full bg-[#FAF8F5] py-8 lg:py-20 overflow-hidden">
      <div className="max-w-[1700px] w-full mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-14 lg:gap-0">
        
        {/* Left Side: Title & Description */}
        <div className="w-full lg:w-[35%] xl:w-[30%] flex flex-col lg:pr-12 lg:border-r border-neutral-200 shrink-0">
          <span className="text-sm lg:text-[15px] font-semibold text-slate-500 tracking-[0.15em] uppercase mb-4 lg:mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl lg:text-[44px] font-black text-[#18181b] tracking-tighter leading-[1] uppercase mb-5">
            Two Decades Of<br />
            Impact And Trust
          </h2>
          <p className="text-[15px] lg:text-base text-neutral-600 font-medium leading-relaxed max-w-sm">
            Numbers that reflect our commitment to<br className="hidden lg:block" />
            transforming lives, leaders, and organizations.
          </p>
        </div>

        {/* Right Side: 5 Stats */}
        <div className="w-full lg:w-[65%] xl:w-[70%] flex-1 pb-6 lg:pb-0 mt-8 lg:mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:items-start lg:w-full lg:justify-between h-full gap-y-12 gap-x-4 lg:gap-y-0 lg:gap-x-0">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/5 px-2 lg:px-6 lg:border-r border-neutral-200 h-full">
              <div className="w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full bg-black/5 flex items-center justify-center mb-4 lg:mb-4">
                <Users className="w-6 h-6 lg:w-7 lg:h-7 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-3xl lg:text-4xl xl:text-[42px] font-black text-[#18181b] tracking-tighter mb-2 lg:mb-2">10,000+</span>
              <span className="text-sm lg:text-[15px] text-neutral-600 font-medium text-center leading-tight">Entrepreneurs<br />Mentored</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/5 px-2 lg:px-6 lg:border-r border-neutral-200 h-full">
              <div className="w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full bg-black/5 flex items-center justify-center mb-4 lg:mb-4">
                <Building className="w-6 h-6 lg:w-7 lg:h-7 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-3xl lg:text-4xl xl:text-[42px] font-black text-[#18181b] tracking-tighter mb-2 lg:mb-2">1,000+</span>
              <span className="text-sm lg:text-[15px] text-neutral-600 font-medium text-center leading-tight">Organizations<br />Coached</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/5 px-2 lg:px-6 lg:border-r border-neutral-200 h-full">
              <div className="w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full bg-black/5 flex items-center justify-center mb-4 lg:mb-4">
                <Award className="w-6 h-6 lg:w-7 lg:h-7 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-3xl lg:text-4xl xl:text-[42px] font-black text-[#18181b] tracking-tighter mb-2 lg:mb-2">20+</span>
              <span className="text-sm lg:text-[15px] text-neutral-600 font-medium text-center leading-tight">Years of<br />Experience</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/5 px-2 lg:px-6 lg:border-r border-neutral-200 h-full">
              <div className="w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full bg-black/5 flex items-center justify-center mb-4 lg:mb-4">
                <Globe className="w-6 h-6 lg:w-7 lg:h-7 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-3xl lg:text-4xl xl:text-[42px] font-black text-[#18181b] tracking-tighter mb-2 lg:mb-2">200+</span>
              <span className="text-sm lg:text-[15px] text-neutral-600 font-medium text-center leading-tight">Global Brands<br />Supported</span>
            </div>

            {/* Stat 5 */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/5 px-2 lg:px-6 h-full col-span-2 md:col-span-1">
              <div className="w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full bg-black/5 flex items-center justify-center mb-4 lg:mb-4">
                <Presentation className="w-6 h-6 lg:w-7 lg:h-7 text-neutral-800" strokeWidth={1.5} />
              </div>
              <span className="text-3xl lg:text-4xl xl:text-[42px] font-black text-[#18181b] tracking-tighter mb-2 lg:mb-2">1,500+</span>
              <span className="text-sm lg:text-[15px] text-neutral-600 font-medium text-center leading-tight">Leadership Programs<br />Delivered</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
