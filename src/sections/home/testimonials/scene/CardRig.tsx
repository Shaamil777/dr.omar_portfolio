"use client";
import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import TestimonialCard from '../components/TestimonialCard';

// ─── Slot coordinate system ─────────────────────────────────────────────────

interface SlotConfig {
  x: number; y: number; z: number;
  rotateX: number; rotateY: number; rotateZ: number;
  scale: number;
  opacity: number;
}

const SLOTS: Record<number, SlotConfig> = {
  [-2]: { x: -11,  y:  0,   z: -6,   rotateX: 0, rotateY:  0.8,  rotateZ:  0.25,  scale: 0.5,  opacity: 0 },
  [-1]: { x: -6.8, y:  0.1, z: -2.8, rotateX: 0, rotateY:  0.5,  rotateZ:  0.15,  scale: 0.85, opacity: 1 },
  [0]:  { x:  0,   y:  0,   z:  0,   rotateX: 0, rotateY:  0,    rotateZ:  0,     scale: 1.0,  opacity: 1 },
  [1]:  { x:  6.8, y:  0.1, z: -2.8, rotateX: 0, rotateY: -0.5,  rotateZ: -0.15,  scale: 0.85, opacity: 1 },
  [2]:  { x:  11,  y:  0,   z: -6,   rotateX: 0, rotateY: -0.8,  rotateZ: -0.25,  scale: 0.5,  opacity: 0 },
};

const HIDDEN: SlotConfig = { x: 0, y: -8, z: -8, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 0, opacity: 0 };

function getSlotConfig(relativeIndex: number): SlotConfig {
  if (relativeIndex in SLOTS) return SLOTS[relativeIndex];
  return HIDDEN;
}

// ─── Types ───────────────────────────────────────────────────────────────────
interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  country: string;
  avatarUrl: string;
  flagUrl: string;
}

interface CardRigProps {
  testimonial: Testimonial;
  index: number;
  relativeIndex: number; // relative position to activeIndex: -2, -1, 0, 1, 2
}

// ─── CardRig ─────────────────────────────────────────────────────────────────
export function CardRig({ testimonial, index, relativeIndex }: CardRigProps) {
  // Outer group: GSAP animates carousel position/rotation/scale
  const carouselGroupRef = useRef<THREE.Group>(null);
  // Inner group: useFrame animates idle floating
  const floatingGroupRef = useRef<THREE.Group>(null);

  const [opacity, setOpacity] = useState(() => getSlotConfig(relativeIndex).opacity);
  const isHidden = Math.abs(relativeIndex) > 2;

  // Initialize on mount without animation
  useEffect(() => {
    if (!carouselGroupRef.current) return;
    const slot = getSlotConfig(relativeIndex);
    carouselGroupRef.current.position.set(slot.x, slot.y, slot.z);
    carouselGroupRef.current.rotation.set(slot.rotateX, slot.rotateY, slot.rotateZ);
    carouselGroupRef.current.scale.setScalar(slot.scale);
    setOpacity(slot.opacity);
  }, []);

  // GSAP transition whenever relativeIndex changes
  useEffect(() => {
    if (!carouselGroupRef.current) return;
    const slot = getSlotConfig(relativeIndex);

    gsap.to(carouselGroupRef.current.position, {
      x: slot.x,
      y: slot.y,
      z: slot.z,
      duration: 0.8,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });

    gsap.to(carouselGroupRef.current.rotation, {
      x: slot.rotateX,
      y: slot.rotateY,
      z: slot.rotateZ,
      duration: 0.8,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });

    gsap.to(carouselGroupRef.current.scale, {
      x: slot.scale,
      y: slot.scale,
      z: slot.scale,
      duration: 0.8,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });

    // Crossfade opacity via React state
    setOpacity(slot.opacity);
  }, [relativeIndex]);

  // Antigravity idle float on inner group
  useFrame((state) => {
    if (!floatingGroupRef.current || isHidden) return;
    const time = state.clock.getElapsedTime();
    const offset = index * 100;

    floatingGroupRef.current.position.y = Math.sin(time + offset) * 0.15;
    floatingGroupRef.current.rotation.x = Math.sin(time * 0.5 + offset) * 0.02;
    floatingGroupRef.current.rotation.y = Math.cos(time * 0.4 + offset) * 0.02;
  });

  return (
    <group ref={carouselGroupRef}>
      <group ref={floatingGroupRef}>
        <Html
          transform
          center
          scale={0.5}
          zIndexRange={relativeIndex === 0 ? [200, 100] : [100, 0]}
          style={{
            pointerEvents: isHidden ? 'none' : 'auto',
            opacity,
            transition: 'opacity 0.4s ease',
          }}
        >
          <TestimonialCard
            quote={testimonial.quote}
            name={testimonial.name}
            role={testimonial.role}
            country={testimonial.country}
            avatarUrl={testimonial.avatarUrl}
            flagUrl={testimonial.flagUrl}
          />
        </Html>
      </group>
    </group>
  );
}
