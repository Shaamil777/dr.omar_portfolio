export type CompanyData = {
  slug: string;
  name: string;
  description: string;
  aboutParagraphs?: string[];
  missionVisionHeading?: string[];
  missionVisionDesc?: string;
  stats?: { value: string; label: string }[];
  mission?: string;
  vision?: string;
  missionVisionImages?: string[];
  faqs?: { question: string; answer: string }[];
  gallery?: { url: string; alt: string; caption: string }[];
  highlights?: { stat: string; label: string }[];
  pillars?: { title: string; focus: string; concept: string; icon: string }[];
  features?: { icon?: string; image?: string; title: string; description: string }[];
  testimonials?: { name: string; role: string; quote: string; image: string; rating: number }[];
  blogs?: { title: string; category?: string; image: string; date?: string; description?: string }[];
  components: ("Hero" | "About" | "Testimonial" | "UpcomingEvents")[];
};

export const companiesData: CompanyData[] = [
  {
    slug: "bcc",
    name: "BCC",
    description: "Business Consulting Company - Leading the market.",
    aboutParagraphs: [
      "Business Coaching Club (BCC) is a year-long mentorship and business networking ecosystem designed to help entrepreneurs grow their businesses in a structured, sustainable, and ethical way.",
      "It focuses on transforming business owners into purpose-driven leaders who can scale their companies while maintaining balance in life values and spirituality."
    ],
    missionVisionHeading: ["Grow with clarity", "Lead with confidence", "Build a lasting legacy"],
    missionVisionDesc: "To empower business owners to grow with clarity, lead with confidence, and build enduring legacies through a year-long ecosystem of structured mentorship, ethical leadership, and collaborative learning, BCC transforms entrepreneurs into purpose driven leaders who create sustainable wealth, meaningful impact, and balanced lives.",
    stats: [
      { value: "8,000+", label: "Entrepreneurs & families mentored across Asia & the Middle East." },
      { value: "100+", label: "Companies guided to restructure for growth, valuation & funding." }
    ],
    mission: "To provide an immersive, year-long mentorship platform that integrates business systems, leadership intelligence, and personal mastery enabling entrepreneurs to scale sustainably with integrity and impact.",
    vision: "To build a global community of ethical and visionary entrepreneurs who create businesses that serve humanity, sustain growth across generations, and embody the principles of purpose, peace, and prosperity",
    missionVisionImages: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
    ],
    faqs: [
      {
        question: "Who is the Business Coaching Club (BCC) for?",
        answer: "BCC is designed for established entrepreneurs, founders, and business owners who are looking to scale their operations, restructure for valuation, and build a lasting legacy with purpose."
      },
      {
        question: "How long does the mentorship program last?",
        answer: "The ecosystem is designed as a year-long immersive journey, divided into structured modules covering business systems, leadership intelligence, and personal mastery."
      },
      {
        question: "Is this program conducted online or in-person?",
        answer: "BCC uses a hybrid model. We host high-impact virtual masterclasses combined with exclusive, in-person networking retreats across Asia and the Middle East."
      },
      {
        question: "How do I apply for the program?",
        answer: "You can apply by clicking the 'Join The Program' button. Our admissions team will review your business profile to ensure you are a good fit for the current cohort."
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
        alt: "Mentorship Session",
        caption: "01 // ONE-ON-ONE MENTORSHIP"
      },
      {
        url: "https://images.unsplash.com/photo-1542744094-24638ea0bc40?auto=format&fit=crop&q=80&w=800",
        alt: "Masterclass",
        caption: "02 // GLOBAL MASTERCLASS"
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
        alt: "Networking",
        caption: "03 // EXECUTIVE RETREAT"
      },
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        alt: "Strategy",
        caption: "04 // STRATEGY PLANNING"
      }
    ],
    highlights: [
      { stat: "$1B+", label: "Generated in Client Revenue" },
      { stat: "50+", label: "Countries Represented" },
      { stat: "8,000+", label: "Founders Mentored" },
      { stat: "100%", label: "Commitment to Excellence" }
    ],
    pillars: [
      {
        title: "Ethical Leadership & Purpose-Driven Growth",
        focus: "Integrity, Values, and Visionary Governance",
        concept: "Building a business that stands on truth, moral strength, and transparency. Moving beyond pure profit to create real societal value, uplift people, and lead with purpose.",
        icon: "shield"
      },
      {
        title: "Scalable Systems, Automation & Business Structuring",
        focus: "Operational Excellence, Systemization, and PE/IPO Readiness",
        concept: "Transitioning from a founder-led business to a system-driven enterprise. Setting up SOPs, dashboards, and scalable architectures that make companies ready for growth, funding, and long-term valuation.",
        icon: "layers"
      },
      {
        title: "Personal Mastery & Balanced Life",
        focus: "Harmony across Family, Health, Business, and Spirituality",
        concept: "Sustainable success without burnouts or sacrificing personal well-being. Aligning professional performance with personal health, family values, and spiritual peace.",
        icon: "heart"
      },
      {
        title: "Legacy Building & Ecosystem Collaboration",
        focus: "Generational Continuity, Mentorship, and Global Networks",
        concept: "Designing institutions that outlast their founders. Leveraging a trusted, collaborative ecosystem of entrepreneurs and mentors to unlock global expansion and collective growth.",
        icon: "globe"
      }
    ],
    features: [
      { icon: "users", title: "Global Mastermind", description: "Join an elite network of visionary founders and industry leaders from across the globe." },
      { icon: "target", title: "Strategic Mentorship", description: "1-on-1 guidance from veterans who have scaled multi-million dollar enterprises." },
      { icon: "trending-up", title: "Valuation Restructuring", description: "Optimize your business model to attract high-tier investors and maximize exit multiples." },
      { icon: "shield", title: "Ethical Leadership", description: "Build a lasting legacy rooted in purpose, balance, and unwavering integrity." },
      { icon: "zap", title: "Rapid Execution", description: "Implement proven frameworks to accelerate growth and bypass years of trial and error." },
      { icon: "globe", title: "International Retreats", description: "Exclusive invites to closed-door networking events in premium global locations." }
    ],
    testimonials: [
      { name: "Sarah Jenkins", role: "CEO, TechFlow", quote: "BCC completely rewired how I approach scaling. We 10x'd our valuation in under 14 months.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200", rating: 5 },
      { name: "Ahmed Al-Fayed", role: "Founder, Zenith Capital", quote: "The network alone is worth a million dollars. The mentorship is simply priceless.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", rating: 5 },
      { name: "Elena Rostova", role: "Director, InnovateX", quote: "I finally have clarity. I'm no longer working in my business, I'm working on my legacy.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", rating: 5 },
      { name: "Marcus Thorne", role: "Partner, V-Ventures", quote: "The ethical leadership framework taught here is the missing link in modern entrepreneurship.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", rating: 5 }
    ],
    blogs: [
      { title: "The 5 Pillars of Scaling Without Losing Your Soul", category: "LEADERSHIP", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", date: "OCT 12, 2026" },
      { title: "How to Restructure Your Cap Table for Series A", category: "FINANCE", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", date: "SEP 28, 2026" },
      { title: "Building a Board of Directors That Actually Helps", category: "STRATEGY", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600", date: "SEP 05, 2026" }
    ],
    components: ["Hero", "About", "Testimonial", "UpcomingEvents"],
  },
  {
    slug: "yi",
    name: "YI",
    description: "Innovative solutions for tomorrow.",
    aboutParagraphs: ["Detailed information about YI will be placed here."],
    mission: "To innovate for tomorrow.",
    vision: "A future driven by sustainable innovation.",
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "di",
    name: "Di",
    description: "Empowering the next generation.",
    aboutParagraphs: ["Detailed information about Di will be placed here."],
    mission: "To empower the next generation.",
    vision: "A world where every youth has the tools to succeed.",
    components: ["Hero", "About"],
  },
  {
    slug: "bi",
    name: "BI",
    description: "Bridging financial gaps.",
    aboutParagraphs: ["Detailed information about BI will be placed here."],
    mission: "To bridge financial gaps globally.",
    vision: "Financial inclusion for everyone.",
    components: ["Hero", "About", "UpcomingEvents"],
  },
  {
    slug: "hea",
    name: "HEA",
    description: "Sustainable architecture and construction.",
    aboutParagraphs: ["Detailed information about HEA will be placed here."],
    mission: "To build sustainably for the future.",
    vision: "Architectural excellence integrated with nature.",
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "mdi",
    name: "MDI",
    description: "Elite training and coaching.",
    aboutParagraphs: ["Detailed information about MDI will be placed here."],
    mission: "To deliver elite training and coaching.",
    vision: "Unlocking human potential worldwide.",
    components: ["Hero", "About", "UpcomingEvents", "Testimonial"],
  },
  {
    slug: "ti",
    name: "TI",
    description: "Global supply chain solutions.",
    aboutParagraphs: ["Detailed information about TI will be placed here."],
    mission: "To optimize global supply chains.",
    vision: "Seamless trade across all borders.",
    components: ["Hero", "About"],
  },
];
