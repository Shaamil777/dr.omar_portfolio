"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundTypography from './components/BackgroundTypography';
import Scribble from './components/Scribble';
import Navigation from './components/Navigation';
import { Scene } from './scene/Scene';
import { TestimonialsProvider } from './hooks/useTestimonials';

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

        {/* UI Overlay - z-50 */}
        <Navigation />

      </section>
    </TestimonialsProvider>
  );
}
