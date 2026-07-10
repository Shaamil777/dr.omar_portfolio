# Testimonial Card

A perfectly isolated, statically-rendered, reusable presentation component for testimonials.

## Usage

```tsx
import { TestimonialCard } from './cards';

<TestimonialCard 
  testimonial={{
    id: "1",
    quote: "FOLLOW.ART is purposeful and keeps artists at the heart...",
    name: "Britsiccc Art",
    role: "Artist",
    country: "United Kingdom",
    avatarUrl: "/images/testimonials/avatars/britsiccc.jpg",
    flagUrl: "/images/testimonials/flags/uk.png"
  }}
/>
```

## Architecture Constraints
- Must remain strictly presentational.
- No hooks, no state, no animations.
- All dynamic data is passed via props.
