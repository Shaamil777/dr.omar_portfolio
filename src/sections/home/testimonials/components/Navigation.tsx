import React from 'react';
import { useTestimonials } from '../hooks/useTestimonials';

export default function Navigation() {
  const { next, prev } = useTestimonials();

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">

      {/* Bottom Left Text */}
      <div className="absolute bottom-10 left-[40px] md:left-[60px] text-white text-[18px] pointer-events-auto font-medium">
        Our Members Say
      </div>

      {/* Pagination Container */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between w-[420px] z-50 pointer-events-auto">

        <button onClick={prev} className="flex items-center gap-2 text-white text-[14px] hover:opacity-80 transition-opacity">
          <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px]">&larr;</span>
          Prev
        </button>

        <button onClick={next} className="flex items-center gap-2 text-white text-[14px] hover:opacity-80 transition-opacity">
          Next
          <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px]">&rarr;</span>
        </button>

      </div>
    </div>
  );
}
