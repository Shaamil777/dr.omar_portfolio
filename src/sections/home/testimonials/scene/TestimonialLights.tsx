"use client";
import React from 'react';

export function TestimonialLights() {
  return (
    <>
      {/* Ambient fill light */}
      <ambientLight intensity={0.4} />
      
      {/* Key light casting shadows */}
      <directionalLight 
        position={[3, 5, 4]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0005}
      />
      
      {/* Rim light for edge highlights */}
      <spotLight 
        position={[-5, 5, -5]} 
        intensity={0.8} 
        penumbra={1} 
        angle={0.5} 
      />
    </>
  );
}
