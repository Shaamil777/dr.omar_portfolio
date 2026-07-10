import React from 'react';
import { Html } from '@react-three/drei';
import TestimonialCard from '../components/TestimonialCard';

interface Card3DProps {
  testimonial: {
    quote: string;
    name: string;
    role: string;
    country: string;
    avatarUrl: string;
    flagUrl: string;
  };
  dofConfig?: {
    brightness: number;
    contrast: number;
    saturate: number;
  };
}

export function Card3D({ testimonial, dofConfig }: Card3DProps) {
  const filterStyle = dofConfig 
    ? `brightness(${dofConfig.brightness}) contrast(${dofConfig.contrast}) saturate(${dofConfig.saturate})` 
    : 'none';

  return (
    <Html
      transform
      center
      scale={0.5}
      zIndexRange={[100, 0]}
      style={{
        pointerEvents: 'none',
        filter: filterStyle,
        transition: 'filter 0.5s ease-in-out',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>
        <TestimonialCard {...testimonial} className="relative !absolute !left-auto !top-auto transform-none" />
      </div>
    </Html>
  );
}
