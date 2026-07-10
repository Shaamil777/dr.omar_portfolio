"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundTypography from './components/BackgroundTypography';
import Scribble from './components/Scribble';
import Navigation from './components/Navigation';
import { Scene } from './scene/Scene';
import { TestimonialsProvider, useTestimonials, TESTIMONIALS } from './hooks/useTestimonials';
import { SystemConfig } from './motion/system.config';

function DebugOverlay() {
  const { activeIndex, getSlotForIndex } = useTestimonials();
  
  if (!SystemConfig.DEBUG_MOTION) return null;

  return (
    <div className="absolute top-4 left-4 z-50 bg-black/80 text-white p-4 font-mono text-xs rounded">
      <div className="font-bold mb-2">DEBUG INFO</div>
      <div>Active Index: {activeIndex}</div>
      <div className="mt-2">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.id}>
            Card {i} ({t.name.split(' ')[0]}): {getSlotForIndex(i)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <TestimonialsProvider>
      <section className="relative w-full h-screen min-h-[750px] max-h-[1080px] overflow-hidden bg-[#8ca0b1] flex flex-col justify-center">
        {/* Background Layer - z-0 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundTypography />
          <Scribble />
        </div>
        
        {/* R3F Layer - z-10 */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas frameloop="always" dpr={[1, 2]}>
            <Scene />
          </Canvas>
        </div>
        
        {/* UI Layer - z-20 */}
        <Navigation />
        
        <DebugOverlay />
      </section>
    </TestimonialsProvider>
  );
}
