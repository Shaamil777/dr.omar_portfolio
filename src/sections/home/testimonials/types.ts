/**
 * types.ts — Root testimonials type definitions.
 *
 * Two separate types exist in this module:
 *
 * 1. `Testimonial` — The canonical domain type for Dr. Omar's portfolio testimonials.
 *    Used by src/constants/testimonials.ts (the real CMS data).
 *    Contains CMS fields: company, flag, featured, order.
 *
 * 2. `TestimonialCardData` — The presentation type consumed by the 3D card component.
 *    Lives in cards/types.ts. Contains only what the UI card needs to render.
 *
 * Phase 6 will map Testimonial → TestimonialCardData before passing to the scene.
 */

/** Full domain type for a testimonial entry (CMS / data layer). */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  flag: string;
  quote: string;
  featured: boolean;
  order: number;
}

/** Re-export the presentation type for convenience. */
export type { TestimonialCardData } from './cards/types';
