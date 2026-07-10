import React from 'react';
import { BACKGROUND } from './config';

export default function Typography() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Desktop SVG Wrapper */}
      <div className={`hidden md:flex ${BACKGROUND.typography.desktop}`}>
        <svg className="w-full h-full text-[#0a0a0a]" viewBox="0 0 1800 400" fill="currentColor" preserveAspectRatio="none">
          <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fontSize="300" 
            fontWeight="900" 
            textLength="1800" 
            lengthAdjust="spacingAndGlyphs" 
            style={{ fontFamily: "var(--font-national2), sans-serif" }}
          >
            TESTIMONIALS
          </text>
        </svg>
      </div>

      {/* Mobile SVG Wrapper */}
      <div className={`flex md:hidden ${BACKGROUND.typography.mobile}`}>
        <svg className="w-full h-full text-[#0a0a0a]" viewBox="0 0 1800 400" fill="currentColor" preserveAspectRatio="none">
          <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fontSize="300" 
            fontWeight="900" 
            textLength="1800" 
            lengthAdjust="spacingAndGlyphs" 
            style={{ fontFamily: "var(--font-national2), sans-serif" }}
          >
            TESTIMONIALS
          </text>
        </svg>
      </div>

    </div>
  );
}
