"use client";
import React, { createContext, useContext, useState, useMemo } from "react";
import type { SlotName } from "../motion/poses";

export const TESTIMONIALS = [
  {
    id: "1",
    quote: "FOLLOW.ART is purposeful and keeps artists at the heart rather than trying to be everything at once. The focus stays right where it should be: on my work and where to find me.",
    name: "Britsiccc Art",
    role: "Artist",
    country: "United Kingdom",
    avatarUrl: "/images/testimonials/avatars/britsiccc.jpg",
    flagUrl: "/flags/gb.svg",
  },
  {
    id: "2",
    quote: "I often go to art exhibitions, and while I buy art occasionally, I never thought I could financially support artists and curators whose work I really like. Micro-patronage is a great way to show appreciation.",
    name: "Josh",
    role: "Exhibition visitor",
    country: "United Kingdom",
    avatarUrl: "https://i.pravatar.cc/150?u=josh",
    flagUrl: "/flags/gb.svg",
  },
  {
    id: "3",
    quote: "The Card's micro-patronage feature fits naturally into the visitor experience, offering a way to support artistic and curatorial practices that feels accessible and unobtrusive.",
    name: "Georgina Koutifari",
    role: "Curator",
    country: "Germany",
    avatarUrl: "/images/testimonials/avatars/georgina.jpg",
    flagUrl: "https://flagcdn.com/de.svg",
  },
  {
    id: "4",
    quote: "Being part of a platform that prioritizes genuine connection and financial sustainability empowers artists to focus more on their craft. It takes the pressure off.",
    name: "Elena Rossi",
    role: "Contemporary Painter",
    country: "Italy",
    avatarUrl: "https://i.pravatar.cc/150?u=elena",
    flagUrl: "https://flagcdn.com/it.svg",
  },
  {
    id: "5",
    quote: "As a gallery manager, finding a tool that seamlessly integrates with our exhibitions while offering tangible benefits to the artists is rare. FOLLOW.ART does exactly this.",
    name: "Marcus Thorne",
    role: "Gallery Director",
    country: "United States",
    avatarUrl: "https://i.pravatar.cc/150?u=marcus",
    flagUrl: "https://flagcdn.com/us.svg",
  },
];

interface TestimonialsContextValue {
  activeIndex: number;
  next: () => void;
  prev: () => void;
  getSlotForIndex: (index: number) => SlotName | 'HIDDEN';
}

const TestimonialsContext = createContext<TestimonialsContextValue | null>(null);

export function TestimonialsProvider({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(2); // Center starts at 2 (0-4)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Calculates the slot for any given index relative to the activeIndex.
  const getSlotForIndex = (index: number): SlotName | 'HIDDEN' => {
    const diff = index - activeIndex;
    const len = TESTIMONIALS.length;
    // Normalize diff to -2, -1, 0, 1, 2
    let normalized = diff;
    if (normalized > 2) normalized -= len;
    if (normalized < -2) normalized += len;

    switch (normalized) {
      case -2: return 'FAR_LEFT';
      case -1: return 'LEFT';
      case 0: return 'CENTER';
      case 1: return 'RIGHT';
      case 2: return 'FAR_RIGHT';
      default: return 'HIDDEN';
    }
  };

  const value = useMemo(() => ({ activeIndex, next, prev, getSlotForIndex }), [activeIndex]);

  return (
    <TestimonialsContext.Provider value={value}>
      {children}
    </TestimonialsContext.Provider>
  );
}

export function useTestimonials() {
  const context = useContext(TestimonialsContext);
  if (!context) {
    throw new Error("useTestimonials must be used within TestimonialsProvider");
  }
  return context;
}
