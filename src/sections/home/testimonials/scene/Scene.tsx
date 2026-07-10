"use client";
import React from 'react';
import { CameraRig } from './CameraRig';
import { CardRig } from './CardRig';
import { TestimonialLights } from './TestimonialLights';
import { useTestimonials, TESTIMONIALS } from '../hooks/useTestimonials';

export function Scene() {
  const { activeIndex } = useTestimonials();
  const total = TESTIMONIALS.length;

  return (
    <>
      <TestimonialLights />
      <CameraRig />

      {TESTIMONIALS.map((testimonial, i) => {
        // Calculate relative index using circular logic
        let rel = (i - activeIndex + total) % total;
        if (rel > Math.floor(total / 2)) rel -= total;

        return (
          <CardRig
            key={testimonial.id}
            index={i}
            testimonial={testimonial}
            relativeIndex={rel}
          />
        );
      })}
    </>
  );
}
