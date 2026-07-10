import type { Testimonial } from "@/sections/home/testimonials/types";

const testimonials: Testimonial[] = [
  {
    id: "t-001",
    name: "Khalid Al-Mansouri",
    role: "CEO",
    company: "Nesto Group",
    country: "UAE",
    flag: "🇦🇪",
    quote:
      "Dr. Omar's Business Coaching Club reshaped how we approach leadership at every level. Within one year we restructured three departments and saw measurable growth in both revenue and team morale.",
    featured: true,
    order: 1,
  },
  {
    id: "t-002",
    name: "Priya Nambiar",
    role: "Founder & Managing Director",
    company: "Greenleaf Ventures",
    country: "India",
    flag: "🇮🇳",
    quote:
      "Deep Immersion was the turning point I did not know I needed. Dr. Omar's blend of NLP and spiritual coaching gave me the clarity to finally build the business I had only dreamed about.",
    featured: true,
    order: 2,
  },
  {
    id: "t-003",
    name: "Tariq Al-Rashidi",
    role: "General Manager",
    company: "Saudi German Hospital",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    quote:
      "We brought Dr. Omar in for an executive leadership program and the impact was immediate. Our team now operates with a shared language around purpose, accountability, and legacy.",
    featured: false,
    order: 3,
  },
  {
    id: "t-004",
    name: "Meera Krishnan",
    role: "Co-founder",
    company: "Zephyr Technologies",
    country: "India",
    flag: "🇮🇳",
    quote:
      "OATHMEN transformed how I think about building a company. The structured fellowship, combined with Dr. Omar's mentorship, helped us raise our first round of funding within eight months.",
    featured: false,
    order: 4,
  },
  {
    id: "t-005",
    name: "Hassan Al-Farsi",
    role: "Chairman",
    company: "Al Madina Group",
    country: "Oman",
    flag: "🇴🇲",
    quote:
      "I have worked with coaches across three continents, but Dr. Omar stands apart. His ability to integrate business strategy with personal values is rare and genuinely transformative.",
    featured: true,
    order: 5,
  },
  {
    id: "t-006",
    name: "Farah Yusuf",
    role: "Director of People & Culture",
    company: "Geepas Electronics",
    country: "UAE",
    flag: "🇦🇪",
    quote:
      "The Emotional Intelligence program Dr. Omar delivered for our leadership team changed the way we handle conflict, feedback, and collaboration. The results were visible within weeks.",
    featured: false,
    order: 6,
  },
];

export default testimonials;
