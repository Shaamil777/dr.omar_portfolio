export type StoryChapter = {
  chapter?: string;
  tag?: string;
  title: string;
  description: string;
  quote?: string;
  image: string;
  caption?: string;
};

export type CompanyStory = {
  tagline?: string;
  heading?: string;
  description?: string;
  chapters: StoryChapter[];
};

export type CompanyData = {
  slug: string;
  name: string;
  description: string;
  aboutTitle?: string;
  aboutImage?: string;
  aboutParagraphs?: string[];
  missionVisionTagline?: string;
  missionVisionHeading?: string[];
  missionVisionDesc?: string;
  stats?: { value: string; label: string }[];
  mission?: string;
  vision?: string;
  missionVisionImages?: string[];
  pillarsTagline?: string;
  pillarsSubtitle?: string;
  pillars?: { title: string; focus: string; concept: string; icon: string; image?: string }[];
  ecosystemTagline?: string;
  ecosystemTitle?: string;
  ecosystemMediaImage?: string;
  features?: { icon?: string; image?: string; title: string; description: string }[];
  ownedCompaniesTagline?: string;
  ownedCompaniesHeading?: string;
  ownedCompanies?: { name: string; logo: string }[];
  story?: CompanyStory;
  galleryTagline?: string;
  galleryTitle?: string;
  galleryDescription?: string;
  galleryStats?: { value: string; label: string }[];
  gallery?: { url: string; alt: string; caption: string }[];
  highlights?: { stat: string; label: string }[];
  testimonialsTagline?: string;
  testimonialsHeading?: string;
  testimonialsRatingText?: string;
  testimonials?: { name: string; role: string; quote: string; image: string; rating: number }[];
  faqTagline?: string;
  faqHeading?: string;
  faqs?: { question: string; answer: string }[];
  blogsTagline?: string;
  blogsHeading?: string;
  blogs?: { title: string; category?: string; image: string; date?: string; description?: string; slug?: string }[];
  closing?: {
    tagline?: string;
    heading: string;
    description: string;
    cta: string;
  };
  components?: ("Hero" | "About" | "Testimonial" | "UpcomingEvents")[];
};

import initialPrograms from "@/data/programs.json";

export const companiesData: CompanyData[] = initialPrograms as CompanyData[];

export const allCatalogCompanies: CompanyData[] = [
  {
    slug: "bcc",
    name: "Business Coaching Club",
    description: "An annual mentorship and business networking ecosystem designed to help entrepreneurs structure scalable growth, build sustainable brands, and protect their long-term legacy.",
    aboutImage: "/images/programmes/bcc-about-bg.webp",
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
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
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
        icon: "shield",
        image: "/images/programmes/highlite1.webp"
      },
      {
        title: "Scalable Systems, Automation & Business Structuring",
        focus: "Operational Excellence, Systemization, and PE/IPO Readiness",
        concept: "Transitioning from a founder-led business to a system-driven enterprise. Setting up SOPs, dashboards, and scalable architectures that make companies ready for growth, funding, and long-term valuation.",
        icon: "layers",
        image: "/images/programmes/highlite2.webp"
      },
      {
        title: "Personal Mastery & Balanced Life",
        focus: "Harmony across Family, Health, Business, and Spirituality",
        concept: "Sustainable success without burnouts or sacrificing personal well-being. Aligning professional performance with personal health, family values, and spiritual peace.",
        icon: "heart",
        image: "/images/programmes/highlite3.webp"
      },
      {
        title: "Legacy Building & Ecosystem Collaboration",
        focus: "Generational Continuity, Mentorship, and Global Networks",
        concept: "Designing institutions that outlast their founders. Leveraging a trusted, collaborative ecosystem of entrepreneurs and mentors to unlock global expansion and collective growth.",
        icon: "globe",
        image: "/images/programmes/highlite4.webp"
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
    story: {
      tagline: "OUR STORY // THE JOURNEY",
      heading: "A Legacy Forged Through Purpose & Transformation",
      description: "How a vision of ethical leadership evolved into a multi-national ecosystem empowering thousands of entrepreneurs to achieve scale without sacrificing their values.",
      chapters: [
        {
          chapter: "01",
          tag: "THE GENESIS",
          title: "The Spark That Redefined Entrepreneurship",
          description: "Business Coaching Club was born from a pivotal realization: rapid enterprise expansion should never come at the expense of personal values, family harmony, or spiritual peace. Witnessing high-performing founders trapped in constant operational fatigue and burnout, Dr. Omar architected a foundational methodology uniting corporate excellence with personal mastery.",
          quote: "A true leader does not merely construct profitable businesses; they build enduring institutions anchored in integrity and purpose.",
          image: "/images/about/brandmount.webp",
          caption: "DR. OMAR DELIVERING THE INAUGURAL ADDRESS"
        },
        {
          chapter: "02",
          tag: "THE TRANSFORMATION",
          title: "Transitioning From Founder-Led to System-Driven",
          description: "As cohorts expanded across Asia and the Middle East, the program evolved into a year-long immersive incubator. Founders were guided through rigorous valuation restructuring, board-level governance, and autonomous execution frameworks—enabling them to step out of daily operations and step into true visionary leadership.",
          quote: "When your systems run your business, you unlock the freedom to lead with foresight and strategic clarity.",
          image: "/images/about/SSK04766.webp",
          caption: "ANNUAL BUSINESS LEADERS CONCLAVE"
        },
        {
          chapter: "03",
          tag: "THE GLOBAL ECOSYSTEM",
          title: "A Mastermind of Over 8,000 Visionaries",
          description: "Today, BCC has grown into one of the most respected private business ecosystems in the region. Spanning more than 100 restructured enterprises, international executive retreats, and closed-door mastermind sessions, the collective strength of BCC members fosters cross-border partnerships and institutional funding.",
          quote: "You are the average of the room you inhabit. When that room is filled with ethical visionaries, the impossible becomes standard.",
          image: "/images/about/SSK04519.webp",
          caption: "OVER 8,000 FOUNDERS EMPOWERED ACROSS ASIA & MIDDLE EAST"
        },
        {
          chapter: "04",
          tag: "THE LASTING LEGACY",
          title: "Building Institutions That Outlast Generations",
          description: "The ultimate destination of the BCC journey is generational continuity. By aligning capital growth with humanitarian values and family leadership, graduates of the program create enduring family offices, philanthropic trusts, and enterprises built to thrive for decades to come.",
          quote: "Legacy is not what you leave behind for people; it is what you leave inside people.",
          image: "/images/about/travel.webp",
          caption: "EXCELLENCE HONORED AT GLOBAL RETREAT"
        }
      ]
    },
    components: ["Hero", "About", "Testimonial", "UpcomingEvents"],
  },
  {
    slug: "deep_immersion",
    name: "Deep Immersion",
    description: "The award-winning 360-degree flagship life transformation program integrating innovative coaching, spiritual healing, and NLP techniques.",
    aboutImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    aboutParagraphs: [
      "Deep Immersion is Dr. Abdussalam Omar's premier life transformation retreat, recognized by CEO Insights as the 'Most Innovative and Sustainable 360-degree Life Transformation Program in India'.",
      "Tailored for high-achieving entrepreneurs and executives, this immersive experience unlocks emotional peace, restores balance in life and family, and aligns personal mastery with outer success."
    ],
    missionVisionHeading: ["Heal from within", "Master emotional agility", "Live with purposeful peace"],
    missionVisionDesc: "To guide individuals toward profound self-discovery, emotional equilibrium, and purposeful living through experiential retreats, holistic healing science, and neuro-linguistic breakthroughs.",
    stats: [
      { value: "10,000+", label: "Lives transformed across India, Middle East, and Asia." },
      { value: "98%", label: "Long-term sustained lifestyle & emotional breakthrough rate." }
    ],
    mission: "To liberate high-performers from chronic burnout and internal conflict, empowering them to live in harmony with family, health, and their deeper spiritual calling.",
    vision: "To cultivate a global movement of self-aware, emotionally grounded leaders who foster peace, love, and integrity in their families and societies.",
    missionVisionImages: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
    ],
    faqs: [
      {
        question: "What makes Deep Immersion different from standard retreats?",
        answer: "Deep Immersion combines modern psychology, NLP coaching, and deep spiritual mindfulness into an intensive experiential methodology, targeting root subconscious patterns rather than surface habits."
      },
      {
        question: "Who attends Deep Immersion retreats?",
        answer: "Business leaders, C-suite executives, medical professionals, and dedicated individuals seeking profound mental clarity, stress relief, and purposeful realignment."
      },
      {
        question: "What is the duration of the retreat?",
        answer: "Retreats typically range from 4 to 7 intensive residential days held in serene nature sanctuaries, followed by structured integration coaching."
      }
    ],
    highlights: [
      { stat: "Top 10", label: "NLP Consultants Worldwide — CEO Insights" },
      { stat: "10,000+", label: "Participants Immersed" },
      { stat: "360°", label: "Mind, Body & Soul Transformation" },
      { stat: "15+", label: "Years of Proven Methodology" }
    ],
    pillars: [
      {
        title: "Emotional Healing & Self-Realization",
        focus: "Inner Peace, Emotional Clarity, and Subconscious Realignment",
        concept: "Resolving lingering emotional wounds, dismantling limiting self-beliefs, and restoring profound calm.",
        icon: "heart",
        image: "/images/programmes/highlite1.webp"
      },
      {
        title: "Life Harmony & Family Dynamics",
        focus: "Deepened Connection, Parenting, and Generational Love",
        concept: "Cultivating rich intimacy, active listening, and heart-centered communication with family and loved ones.",
        icon: "users",
        image: "/images/programmes/highlite3.webp"
      },
      {
        title: "Holistic Health & Vital Energy",
        focus: "Physical Vitality, Breathwork, and Restorative Rhythm",
        concept: "Restoring sleep, rejuvenating biological rhythm, and unlocking sustainable, joyful daily stamina.",
        icon: "shield",
        image: "/images/programmes/highlite2.webp"
      },
      {
        title: "Purpose-Driven Living & Spiritual Peace",
        focus: "Contribution, Legacy, and Transcendence",
        concept: "Reconnecting with transcendent meaning and using one's gifts to elevate society.",
        icon: "globe",
        image: "/images/programmes/highlite4.webp"
      }
    ],
    components: ["Hero", "About", "Testimonial", "UpcomingEvents"]
  },
  {
    slug: "hea",
    name: "Human Excellence Academy",
    description: "The most sought-after, innovative, and ethical coaching, counselling, and leadership development academy in the Middle East and India since 2010.",
    aboutImage: "/images/about/hea.webp",
    aboutParagraphs: [
      "Founded in 2010 and expanded across Asia and the Middle East, Dr. Omar's Human Excellence Academy (HEA) is an institutional benchmark for executive coaching and human development.",
      "HEA provides rigorous certifications, corporate leadership programs, and professional counselling designed to instill ethical wisdom and psychological mastery in leaders."
    ],
    missionVisionHeading: ["Empowering human potential", "Leading with ethical conviction", "Inspiring generational change"],
    missionVisionDesc: "To cultivate ethical leaders and world-class counselors who elevate individuals, corporations, and communities through proven behavioral science and compassionate wisdom.",
    stats: [
      { value: "1,500+", label: "Executive training and leadership workshops delivered." },
      { value: "20+", label: "Years of academic and professional counseling heritage." }
    ],
    mission: "To deliver transformative training, executive counseling, and human development programs that bridge behavioral excellence with moral integrity.",
    vision: "To establish a global standard for human excellence where intellect, compassion, and leadership converge.",
    faqs: [
      {
        question: "What courses does Human Excellence Academy offer?",
        answer: "HEA provides certified NLP practitioner courses, executive leadership development, corporate culture consulting, and master counselor certifications."
      },
      {
        question: "Is HEA accredited?",
        answer: "Yes, HEA courses adhere to international coaching frameworks accredited by the American Board of NLP and ICF standards."
      }
    ],
    highlights: [
      { stat: "Since 2010", label: "Serving Middle East & India" },
      { stat: "1,500+", label: "Workshops Conducted" },
      { stat: "1,000+", label: "Organizations Coached" },
      { stat: "ICF / ABNLP", label: "Accredited Methodologies" }
    ],
    components: ["Hero", "About", "Testimonial", "UpcomingEvents"]
  },
  {
    slug: "business_immersion",
    name: "Business Immersion",
    description: "A high-velocity residential program exclusively designed for business owners and enterprise leaders focusing on systems, scalability, and execution.",
    aboutImage: "/images/programmes/bi/bi1.webp",
    aboutParagraphs: [
      "Business Immersion (BI) is an intensive, closed-door residential program curated for founders and executive leaders who demand rapid operational breakthroughs.",
      "Through immersive simulations, strategic restructuring workshops, and peer masterminds, participants step out of operational firefighting to architect self-sustaining business machines."
    ],
    missionVisionHeading: ["Automate operations", "De-risk growth", "Accelerate valuation"],
    missionVisionDesc: "Equipping founders with real-time operational frameworks, financial architecture, and leadership teams to scale without bottlenecks.",
    stats: [
      { value: "500+", label: "Enterprises restructured into system-driven companies." },
      { value: "4X", label: "Average operational efficiency increase within 6 months." }
    ],
    components: ["Hero", "About", "Testimonial", "UpcomingEvents"]
  },
  {
    slug: "oathmen",
    name: "OATHMEN",
    description: "A practical 1-year entrepreneurship fellowship for young founders and next-gen builders. From Ideas to IPO.",
    aboutImage: "/images/about/oathman.webp",
    aboutParagraphs: [
      "OATHMEN is a specialized startup coaching club and practical fellowship that empowers young entrepreneurs to transform bold concepts into investment-ready enterprises.",
      "Covering ethical venture governance, weekly shipping cadences, and venture capital readiness, OATHMEN bridges ambition with institutional execution."
    ],
    missionVisionHeading: ["From ideas to IPO", "Execution-first learning", "Investment ready"],
    missionVisionDesc: "To cultivate a fearless generation of ethical startup builders who solve real-world problems and construct enduring enterprises.",
    stats: [
      { value: "50+", label: "Innovative startups established and mentored." },
      { value: "1 Year", label: "Intensive practical venture fellowship." }
    ],
    components: ["Hero", "About", "Testimonial", "UpcomingEvents"]
  }
];

