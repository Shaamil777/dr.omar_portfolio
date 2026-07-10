import React from 'react';
import { TestimonialCardData } from './types';
import { Quote } from './components/Quote';
import { Divider } from './components/Divider';
import { Footer } from './components/Footer';

interface TestimonialCardProps {
  testimonial: TestimonialCardData;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[24px] p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col w-full max-w-4xl mx-auto pointer-events-auto">
      <Quote text={testimonial.quote} />
      <Divider />
      <Footer data={testimonial} />
    </div>
  );
}
