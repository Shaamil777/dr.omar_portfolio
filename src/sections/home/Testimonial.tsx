'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Triangle, Leaf, TrendingUp, Hexagon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Dr. Omar's coaching changed the way I lead my business and my life. His insights helped me scale with clarity and confidence.",
    name: "FAISAL K.",
    position: "Founder, Techvista Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    quote: "A truly transformative experience. I learned to lead with purpose, build a strong team, and create real impact.",
    name: "SANA M.",
    position: "CEO, Elevate Consultancy",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "The leadership program helped our organization align our values with our vision. The results have been extraordinary.",
    name: "RAMESH P.",
    position: "COO, GreenField Group",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 4,
    quote: "Dr. Omar has a rare ability to unlock potential in people. His guidance was the turning point in my entrepreneurial journey.",
    name: "NIDHA A.",
    position: "Founder, StyleRoute",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 5,
    quote: "An exceptional mentor and strategist. The frameworks I learned are now the foundation of our company's culture.",
    name: "DAVID L.",
    position: "Director, Apex Innovations",
    image: "https://randomuser.me/api/portraits/men/91.jpg"
  },
  {
    id: 6,
    quote: "His strategic transformation methods were exactly what we needed to break through our growth plateau. Highly recommended.",
    name: "ELENA R.",
    position: "VP of Growth, Synergy Tech",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

const logos = [
  { name: "GulfStar", sub: "INDUSTRIES", Icon: Star },
  { name: "Techvista", sub: "SOLUTIONS", Icon: Triangle },
  { name: "GreenField", sub: "GROUP", Icon: Leaf },
  { name: "Elevate", sub: "CONSULTANCY", Icon: TrendingUp },
  { name: "StyleRoute", sub: "FASHION", Icon: Hexagon },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Card width is 290px, gap is 24px (1.5rem)
  const CARD_WIDTH = 290;
  const GAP = 24;
  const SLIDE_AMOUNT = CARD_WIDTH + GAP;
  
  const visibleCardsCount = containerWidth / SLIDE_AMOUNT;
  const maxIndex = Math.max(0, Math.ceil(testimonials.length - visibleCardsCount));

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="w-full bg-[#FAF8F5] py-8 lg:py-16 overflow-hidden text-black" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-[1700px] w-full mx-auto px-6 lg:px-16 relative">
        
        {/* Removed Top Header Section */}

        {/* Slider Section */}
        <div className="relative group">
          {/* Slider Controls */}
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            className={`absolute -left-5 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all z-10 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:shadow-md hover:scale-105'}`}
          >
            <ChevronLeft size={20} strokeWidth={2} className="text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide} 
            disabled={currentIndex === maxIndex}
            className={`absolute -right-5 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all z-10 ${currentIndex === maxIndex ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:shadow-md hover:scale-105'}`}
          >
            <ChevronRight size={20} strokeWidth={2} className="text-gray-600" />
          </button>

          {/* Cards Track */}
          <div className="overflow-hidden py-8 -my-8 px-4 -mx-4" ref={containerRef}>
            <motion.div 
              className="flex gap-6 transition-transform duration-700 ease-[0.32,0.72,0,1]"
              style={{ transform: `translateX(-${currentIndex * SLIDE_AMOUNT}px)` }}
            >
              {testimonials.map((t, i) => (
                <motion.div 
                  key={t.id} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="w-[290px] flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] h-full min-h-[340px] flex flex-col relative group/card border border-transparent hover:border-gray-100 transition-colors"
                  >
                    {/* Big Quote Background */}
                    <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover/card:opacity-100 transition-opacity">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21L16.41 14.592C14.773 14.592 13.447 13.256 13.447 11.605C13.447 9.954 14.773 8.618 16.41 8.618C18.047 8.618 19.373 9.954 19.373 11.605V12.181C19.373 15.65 17.518 18.667 14.654 20.198L14.017 21ZM5.385 21L7.778 14.592C6.141 14.592 4.815 13.256 4.815 11.605C4.815 9.954 6.141 8.618 7.778 8.618C9.415 8.618 10.741 9.954 10.741 11.605V12.181C10.741 15.65 8.886 18.667 6.022 20.198L5.385 21Z" />
                      </svg>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-[2px] mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#E0B53A" className="text-[#E0B53A]" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                      {t.quote}
                    </p>
                    
                    <div className="h-[1px] w-full bg-gray-100 mb-5" />
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold uppercase text-[13px] tracking-wide text-gray-900">{t.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{t.position}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-gray-800 w-4' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}

