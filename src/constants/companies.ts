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
  aboutImage?: string;
  aboutParagraphs?: string[];
  missionVisionHeading?: string[];
  missionVisionDesc?: string;
  stats?: { value: string; label: string }[];
  mission?: string;
  vision?: string;
  missionVisionImages?: string[];
  faqs?: { question: string; answer: string }[];
  gallery?: { url: string; alt: string; caption: string }[];
  galleryTitle?: string;
  galleryDescription?: string;
  galleryStats?: { value: string; label: string }[];
  highlights?: { stat: string; label: string }[];
  pillars?: { title: string; focus: string; concept: string; icon: string; image?: string }[];
  features?: { icon?: string; image?: string; title: string; description: string }[];
  testimonials?: { name: string; role: string; quote: string; image: string; rating: number }[];
  blogs?: { title: string; category?: string; image: string; date?: string; description?: string }[];
  story?: CompanyStory;
  closing?: {
    tagline?: string;
    heading: string;
    description: string;
    cta: string;
  };
  components: ("Hero" | "About" | "Testimonial" | "UpcomingEvents")[];
};

export const companiesData: CompanyData[] = [
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
    slug: "youth_immersion",
    name: "Youth Immersion",
    description: "A transformational youth development program empowering young adults with confidence, leadership, communication, emotional intelligence, career clarity, and purpose-driven living.",
    aboutParagraphs: [
      "Youth Immersion® is a youth development program designed to prepare young adults for the future by developing confidence, leadership, communication, emotional intelligence, career clarity, and purpose.",
      "Through experiential learning and mentoring, it helps young people develop the mindset and life skills needed to become responsible leaders and meaningful contributors to society."
    ],
    missionVisionHeading: [
      "Discover your purpose",
      "Lead with confidence",
      "Shape your future"
    ],
    missionVisionDesc: "Youth Immersion® empowers young adults to develop confidence, strengthen leadership and communication skills, build emotional intelligence, and gain career clarity through experiential learning and mentoring. It prepares the next generation to become purpose-driven leaders who make responsible decisions, pursue meaningful goals, and contribute positively to society.",
    stats: [
      {
        value: "6 Core Skills",
        label: "Confidence, leadership, communication, emotional intelligence, career clarity, and purpose."
      },
      {
        value: "Purpose-Driven Growth",
        label: "Developing the mindset and life skills to become responsible leaders and meaningful contributors to society."
      }
    ],
    mission: "To empower young adults through experiential learning and mentoring that develop confidence, leadership, communication, emotional intelligence, and career clarity, preparing them to make responsible decisions and build meaningful futures.",
    vision: "To nurture a generation of purpose-driven young leaders who lead with confidence, live with purpose, and contribute meaningfully to their families, communities, and society.",
    missionVisionImages: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
    ],
    pillars: [
      {
        title: "Confidence, Identity & Personal Growth",
        focus: "Self-Awareness, Confidence, and Positive Mindset",
        concept: "Helping young adults recognize their potential, develop self-confidence, and build a stronger sense of identity. Encouraging personal growth and the mindset needed to navigate future challenges.",
        icon: "shield",
        image: "/images/programmes/highlite1.webp"
      },
      {
        title: "Leadership & Effective Communication",
        focus: "Leadership Skills, Communication, and Responsibility",
        concept: "Developing the ability to communicate effectively, work with others, take initiative, and make responsible decisions. Preparing young adults to become confident and purpose-driven future leaders.",
        icon: "users",
        image: "/images/programmes/highlite2.webp"
      },
      {
        title: "Emotional Intelligence & Resilience",
        focus: "Emotional Awareness, Understanding, and Life Skills",
        concept: "Strengthening emotional intelligence and developing the mindset to navigate personal and social challenges. Helping young adults build healthier interactions and respond to life's challenges with greater awareness.",
        icon: "heart",
        image: "/images/programmes/highlite3.webp"
      },
      {
        title: "Career Clarity & Purpose-Driven Future",
        focus: "Career Direction, Purpose Discovery, and Social Contribution",
        concept: "Helping young adults gain clarity about their future direction, recognize meaningful goals, and develop a sense of purpose. Encouraging them to become responsible individuals who contribute positively to their communities and society.",
        icon: "compass",
        image: "/images/programmes/highlite4.webp"
      }
    ],
    features: [
      {
        title: "Confidence & Self-Discovery",
        description: "Recognize your strengths, build self-confidence, and develop a stronger understanding of who you are.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Leadership Development",
        description: "Develop the mindset and skills to take initiative, make responsible decisions, and lead with confidence.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Career Clarity",
        description: "Explore your future direction, identify meaningful goals, and gain clarity about your personal and professional aspirations.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Emotional Intelligence",
        description: "Build emotional awareness, strengthen relationships, and develop healthier ways to navigate life's challenges.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Communication Skills",
        description: "Learn to express yourself effectively, connect with others, and build the communication skills needed for personal and professional growth.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Purpose-Driven Living",
        description: "Discover the importance of purpose, responsibility, and meaningful contribution to your community and society.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
      }
    ],
    story: {
      tagline: "OUR STORY // THE JOURNEY",
      heading: "The Story Behind Youth Immersion®",
      description: "How a vision of human transformation evolved into a youth development program preparing young adults to become confident, purposeful, and responsible future leaders.",
      chapters: [
        {
          chapter: "01",
          tag: "THE FOUNDATION",
          title: "Beyond Academic Knowledge",
          description: "Youth Immersion® was shaped by a fundamental belief: preparing young people for the future requires more than academic knowledge alone. They also need confidence, emotional intelligence, communication skills, leadership, and a clear sense of purpose. Dr. Abdussalam Omar's broader philosophy of human transformation places personal growth at the heart of meaningful leadership and lasting social impact.",
          quote: "Your past may explain who you are today, but it never has to decide who you become tomorrow.",
          image: "/images/about/brandmount.webp"
        },
        {
          chapter: "02",
          tag: "THE METHODOLOGY",
          title: "Experiential Learning & Mentoring",
          description: "Through experiential learning and mentoring, Youth Immersion® focuses on helping young adults understand their potential, strengthen their life skills, and gain clarity about their future direction. The program encourages participants to develop the mindset and capabilities needed to navigate challenges, make responsible decisions, and lead with confidence.",
          quote: "Purpose gives direction. Habits create destiny.",
          image: "/images/about/SSK04766.webp"
        },
        {
          chapter: "03",
          tag: "THE CORE PILLARS",
          title: "Building Meaningful Growth",
          description: "At its core, Youth Immersion® brings together confidence, leadership, communication, emotional intelligence, career clarity, and purpose-driven development. These foundations are intended to help young people grow into responsible individuals who build meaningful relationships and contribute positively to their communities.",
          quote: "When people transform, businesses transform. When leaders grow, organizations grow.",
          image: "/images/about/SSK04519.webp"
        },
        {
          chapter: "04",
          tag: "THE BROADER IMPACT",
          title: "Shaping Tomorrow's Society",
          description: "The broader vision extends beyond individual development. By encouraging young adults to discover their purpose, strengthen their character, and embrace responsibility, Youth Immersion® seeks to prepare a generation capable of creating positive change in their families, workplaces, and society.",
          quote: "Dream boldly. Live ethically. Serve generously.",
          image: "/images/about/travel.webp"
        }
      ]
    },
    galleryTitle: "Witness the\nTransformation",
    galleryDescription: "Take an inside look at the journey of self-discovery, leadership development, and personal growth through Youth Immersion®. Every experience is designed to build confidence, strengthen emotional intelligence, develop essential life skills, and help young adults discover their purpose.",
    galleryStats: [
      {
        value: "6",
        label: "Core Development Areas"
      },
      {
        value: "Purpose-Driven",
        label: "Future Leaders"
      }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", alt: "Youth Immersion Workshops", caption: "01 // WORKSHOPS" },
      { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", alt: "Leadership Dynamics", caption: "02 // LEADERSHIP" },
      { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", alt: "Interactive Mentoring", caption: "03 // MENTORING" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", alt: "Future Purpose", caption: "04 // PURPOSE" },
    ],
    blogs: [
      {
        title: "The Power of Self-Confidence in Shaping Your Future",
        category: "PERSONAL GROWTH",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
        date: "OCT 12, 2026"
      },
      {
        title: "Emotional Intelligence: A Foundation for Future Leaders",
        category: "LEADERSHIP",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
        date: "SEP 28, 2026"
      },
      {
        title: "Finding Career Clarity and Living with Purpose",
        category: "CAREER & PURPOSE",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
        date: "SEP 05, 2026"
      }
    ],
    faqs: [
      {
        question: "What is Youth Immersion®?",
        answer: "Youth Immersion® is a youth development program designed to prepare young adults for the future by developing confidence, leadership, communication, emotional intelligence, career clarity, and purpose through experiential learning and mentoring."
      },
      {
        question: "Who is Youth Immersion® designed for?",
        answer: "The program is designed for young adults who want to develop their personal and leadership skills, gain clarity about their future, and become more confident and responsible individuals. The specific age eligibility should be confirmed with the program team."
      },
      {
        question: "What skills can participants develop through Youth Immersion®?",
        answer: "Participants are encouraged to develop self-confidence, leadership abilities, effective communication, emotional intelligence, career clarity, and a stronger sense of purpose."
      },
      {
        question: "How does Youth Immersion® help young adults prepare for the future?",
        answer: "Through experiential learning and mentoring, the program helps young adults strengthen essential life skills, develop a responsible mindset, navigate challenges, and prepare to contribute meaningfully to society."
      },
      {
        question: "How can I join Youth Immersion®?",
        answer: "To learn about upcoming batches, eligibility, program duration, fees, and registration, contact the Youth Immersion® team directly for the latest details."
      }
    ],
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "deep_immersion",
    name: "Deep Immersion",
    description: "A transformational residential experience designed to help individuals reconnect with themselves, heal emotional wounds, discover their purpose, and redesign their lives.",
    aboutParagraphs: [
      "Deep Immersion® is Dr. Abdussalam Omar's signature residential transformation program, designed to help individuals reconnect with themselves, heal emotional wounds, discover their purpose, and redesign their lives.",
      "By integrating psychology, emotional intelligence, neuroscience, NLP, spirituality, coaching, and experiential learning, the program creates an environment for deep inner transformation that can become a turning point in participants' personal and professional journeys."
    ],
    missionVisionHeading: [
      "Reconnect With Yourself",
      "Rediscover Your Purpose",
      "Redesign Your Life"
    ],
    missionVisionDesc: "Deep Immersion® is Dr. Abdussalam Omar's signature residential transformation program, designed to facilitate deep inner transformation through an integrated approach combining psychology, emotional intelligence, neuroscience, NLP, spirituality, coaching, and experiential learning.",
    stats: [
      {
        value: "7 Approaches",
        label: "Psychology, neuroscience, NLP, emotional intelligence, spirituality, coaching & experiential learning."
      },
      {
        value: "Residential",
        label: "An immersive retreat creating an environment for deep personal and professional breakthrough."
      }
    ],
    vision: "To inspire a world where individuals understand themselves more deeply, discover their purpose, cultivate inner peace, build meaningful relationships, and contribute positively to society.",
    mission: "To facilitate personal transformation through an integrated approach combining psychology, emotional intelligence, neuroscience, NLP, spirituality, coaching, and experiential learning, helping individuals reconnect with themselves and redesign their lives with purpose.",
    missionVisionImages: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200"
    ],
    pillars: [
      {
        title: "Emotional Healing & Inner Awareness",
        focus: "Self-Awareness, Emotional Understanding, and Personal Growth",
        concept: "Encouraging individuals to reconnect with themselves, reflect on their emotional experiences, and develop greater self-awareness as part of their personal transformation journey.",
        icon: "heart",
        image: "/images/programmes/highlite1.webp"
      },
      {
        title: "Identity, Purpose & Direction",
        focus: "Identity Discovery, Purpose, and Meaningful Living",
        concept: "Helping individuals reflect on who they are, understand what matters to them, and develop a clearer sense of purpose to guide their personal and professional lives.",
        icon: "compass",
        image: "/images/programmes/highlite2.webp"
      },
      {
        title: "Emotional Intelligence & Personal Mastery",
        focus: "Emotional Intelligence, Reflection, and Self-Development",
        concept: "Integrating emotional intelligence, psychology, neuroscience, and coaching to support greater self-understanding and a more intentional approach to personal growth.",
        icon: "brain",
        image: "/images/programmes/highlite3.webp"
      },
      {
        title: "Life Redesign & Lasting Transformation",
        focus: "Experiential Learning, Coaching, and Purpose-Driven Living",
        concept: "Combining coaching, spirituality, and experiential learning to help individuals reflect on their lives, reconnect with their values, and explore a more meaningful future.",
        icon: "sparkles",
        image: "/images/programmes/highlite4.webp"
      }
    ],
    features: [
      {
        icon: "01",
        title: "Reconnect With Yourself",
        description: "Create space for self-reflection, develop deeper self-awareness, and reconnect with your identity and personal values.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "02",
        title: "Explore Emotional Healing",
        description: "Explore emotional experiences and develop a greater understanding of yourself as part of your personal growth journey.",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "03",
        title: "Discover Your Purpose",
        description: "Reflect on what matters most, identify meaningful directions, and build a stronger connection with your life's purpose.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "04",
        title: "Develop Emotional Intelligence",
        description: "Explore emotional intelligence as a foundation for greater self-understanding, healthier relationships, and intentional living.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "05",
        title: "Experience Holistic Learning",
        description: "Explore an integrated approach combining psychology, neuroscience, NLP, spirituality, coaching, and experiential learning.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "06",
        title: "Redesign Your Life",
        description: "Reflect on your personal and professional journey and explore how to align your future with your identity, values, and purpose.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
      }
    ],
    story: {
      tagline: "OUR STORY // THE JOURNEY",
      heading: "The Story Behind Deep Immersion®",
      description: "A vision of human transformation built on the belief that meaningful change begins within.",
      chapters: [
        {
          chapter: "01",
          tag: "THE ESSENCE",
          title: "The Power of Inner Transformation",
          description: "Dr. Abdussalam Omar's work is rooted in the belief that when people heal emotionally and discover their purpose, they can build stronger relationships, become better leaders, and contribute meaningfully to society.",
          quote: "Your past may explain who you are today, but it never has to decide who you become tomorrow.",
          image: "/images/about/brandmount.webp"
        },
        {
          chapter: "02",
          tag: "THE METHODOLOGY",
          title: "An Integrated Approach to Human Development",
          description: "Deep Immersion® brings together psychology, emotional intelligence, neuroscience, NLP, spirituality, coaching, and experiential learning in a residential transformation experience designed to help individuals reconnect with themselves and explore new possibilities for their lives.",
          quote: "Healing is the beginning of every transformation.",
          image: "/images/about/SSK04766.webp"
        },
        {
          chapter: "03",
          tag: "THE EVOLUTION",
          title: "From Awareness to Purpose",
          description: "The program encourages participants to reflect on their identity, emotional experiences, and personal direction. Its focus is on supporting meaningful personal and professional growth through deeper self-understanding and purpose discovery.",
          quote: "Purpose gives direction. Habits create destiny.",
          image: "/images/about/SSK04519.webp"
        },
        {
          chapter: "04",
          tag: "THE VISION",
          title: "A More Meaningful Future",
          description: "Deep Immersion® reflects a broader vision of human development in which personal growth supports inner peace, meaningful relationships, ethical leadership, and a positive contribution to society.",
          quote: "Dream boldly. Live ethically. Serve generously.",
          image: "/images/about/travel.webp"
        }
      ]
    },
    galleryTitle: "Witness the\nTransformation",
    galleryDescription: "Take an inside look at the journey of self-discovery, emotional awareness, and personal growth. Deep Immersion® brings together psychology, emotional intelligence, coaching, spirituality, and experiential learning to support a deeper understanding of yourself and your purpose.",
    galleryStats: [
      {
        value: "7",
        label: "Integrated Approaches"
      },
      {
        value: "Residential",
        label: "Immersive Experience"
      }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", alt: "Deep Immersion Residential Experience", caption: "01 // RESIDENTIAL RETREAT" },
      { url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800", alt: "Emotional Healing & Awareness", caption: "02 // INNER TRANSFORMATION" },
      { url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", alt: "Experiential Learning Sessions", caption: "03 // EXPERIENTIAL DISCOVERY" },
      { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", alt: "Purpose & Life Redesign", caption: "04 // PURPOSE & MASTERY" }
    ],
    testimonials: [
      {
        name: "Dr. Farhan K.",
        role: "Physician & Health Founder",
        quote: "Dr. Omar's retreat was the pivotal turning point of my life. I finally confronted what was holding me back and found profound peace, mental clarity, and purpose.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Ananya S.",
        role: "Creative Director",
        quote: "Seven days that completely shifted my perception of life and inner alignment. You walk in carrying years of emotional fatigue and leave with grounded freedom.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Tariq M.",
        role: "Managing Director",
        quote: "The integration of neuroscience, psychology, and spirituality is unlike anything I've experienced anywhere in the world. It altered how I lead and live.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Layla R.",
        role: "Executive Coach",
        quote: "I didn't just learn new techniques; I reconnected with who I truly am. My family relationships and personal trajectory have been forever enriched.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What is Deep Immersion®?",
        answer: "Deep Immersion® is Dr. Abdussalam Omar's signature residential transformation program. It helps individuals reconnect with themselves, explore emotional healing, discover their purpose, and redesign their lives."
      },
      {
        question: "Who is Deep Immersion® designed for?",
        answer: "The program is intended for individuals seeking deeper self-understanding, personal growth, purpose discovery, and meaningful personal or professional transformation. Specific eligibility requirements should be confirmed with the program team."
      },
      {
        question: "What approaches are integrated into the program?",
        answer: "The program integrates psychology, emotional intelligence, neuroscience, NLP, spirituality, coaching, and experiential learning as part of its human transformation methodology."
      },
      {
        question: "Is Deep Immersion® a residential program?",
        answer: "Yes. Deep Immersion® is described as a residential transformation program. Details about the venue, accommodation, schedule, and upcoming sessions should be confirmed with the program team."
      },
      {
        question: "How can I enrol in Deep Immersion®?",
        answer: "Contact the Deep Immersion® team to enquire about upcoming program dates, eligibility, duration, fees, residential arrangements, and registration."
      }
    ],
    blogs: [
      {
        title: "The Journey Within: Understanding the Power of Self-Awareness",
        category: "SELF-DISCOVERY",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "Emotional Intelligence and the Path to Personal Growth",
        category: "EMOTIONAL INTELLIGENCE",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "Finding Your Purpose: Creating a More Meaningful Life",
        category: "PURPOSE & GROWTH",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      }
    ],
    closing: {
      heading: "Your Transformation\nBegins Within",
      description: "Reconnect with yourself, explore your purpose, and take a meaningful step towards redesigning your life.",
      cta: "Enquire About Deep Immersion®"
    },
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "business_immersion",
    name: "Business Immersion",
    description: "An advanced leadership and business acceleration program designed for entrepreneurs and business owners who aspire to build scalable, system-driven, and purpose-led organizations.",
    aboutParagraphs: [
      "Business Immersion® is an advanced leadership and business acceleration program created for entrepreneurs and business owners who aspire to build scalable, system-driven, and purpose-led organizations.",
      "The program focuses on business strategy, leadership, branding, governance, organizational culture, financial sustainability, and long-term growth. It helps founders evolve from managing businesses to leading institutions, with an emphasis on building organizations designed for sustainable growth."
    ],
    missionVisionHeading: [
      "Build Systems",
      "Develop Leaders",
      "Scale With Purpose"
    ],
    missionVisionDesc: "Business Immersion® is an advanced leadership and business acceleration program created for entrepreneurs and business owners who aspire to build scalable, system-driven, and purpose-led organizations that sustain growth, create meaningful value, and contribute positively to society.",
    stats: [
      {
        value: "6 Focus Areas",
        label: "Strategy, leadership, branding, governance, organizational culture & financial sustainability."
      },
      {
        value: "Long-Term",
        label: "Growth & leadership development designed to build institutions that outlast their founders."
      }
    ],
    vision: "To inspire a generation of visionary business leaders who build scalable, system-driven, and purpose-led organizations that sustain growth, create meaningful value, and contribute positively to society.",
    mission: "To empower entrepreneurs and business owners through strategic business development, leadership advancement, branding, governance, organizational culture, and financial sustainability, enabling them to build stronger organizations and pursue long-term growth.",
    missionVisionImages: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
    ],
    pillars: [
      {
        title: "Strategic Business Growth",
        focus: "Business Strategy, Long-Term Planning, and Sustainable Growth",
        concept: "Strengthening business strategy and long-term planning to help entrepreneurs make informed decisions, identify growth opportunities, and build organizations with a clear direction.",
        icon: "target",
        image: "/images/programmes/highlite1.webp"
      },
      {
        title: "Leadership & Organizational Development",
        focus: "Leadership Excellence, Organizational Culture, and Team Development",
        concept: "Developing business leaders who can guide their organizations with clarity, strengthen organizational culture, and create an environment that supports consistent performance and growth.",
        icon: "users",
        image: "/images/programmes/highlite2.webp"
      },
      {
        title: "Branding & Market Positioning",
        focus: "Brand Identity, Strategic Positioning, and Business Differentiation",
        concept: "Recognizing branding as a strategic business function and strengthening the identity and positioning that help organizations communicate their value and build lasting customer trust.",
        icon: "layers",
        image: "/images/programmes/highlite3.webp"
      },
      {
        title: "Governance & Financial Sustainability",
        focus: "Business Governance, Financial Responsibility, and Sustainable Operations",
        concept: "Emphasizing sound governance, responsible financial management, and sustainable business practices to support organizational stability and long-term growth.",
        icon: "shield-check",
        image: "/images/programmes/highlite4.webp"
      }
    ],
    features: [
      {
        icon: "01",
        title: "Strategic Clarity",
        description: "Develop a clearer understanding of business direction, strategic priorities, and the decisions that support long-term growth.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "02",
        title: "Stronger Leadership",
        description: "Strengthen leadership capabilities to guide teams, make informed decisions, and lead an organization with greater clarity.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "03",
        title: "Scalable Business Structures",
        description: "Focus on developing organizational structures and systems that support business growth beyond the founder's individual efforts.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "04",
        title: "Distinctive Brand Positioning",
        description: "Understand the importance of branding and positioning in communicating business value and establishing a recognizable identity.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "05",
        title: "Effective Governance",
        description: "Build awareness of governance, organizational culture, and responsible business practices that support stability and accountability.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "06",
        title: "Sustainable Long-Term Growth",
        description: "Align business strategy, financial sustainability, and organizational development to pursue lasting growth and meaningful impact.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
      }
    ],
    story: {
      tagline: "OUR STORY // THE JOURNEY",
      heading: "The Story Behind Business Immersion®",
      description: "A vision of business leadership that moves beyond managing daily operations towards building scalable, system-driven, and purpose-led institutions.",
      chapters: [
        {
          chapter: "01",
          tag: "THE EVOLUTION",
          title: "Beyond Managing a Business",
          description: "Business Immersion® is designed for entrepreneurs and business owners who aspire to move beyond managing daily operations and develop the capabilities required to lead growing organizations. The program emphasizes the evolution from business management towards institutional leadership.",
          quote: "Businesses may be built through systems, but great organizations are built by great leaders.",
          image: "/images/about/SSK04766.webp"
        },
        {
          chapter: "02",
          tag: "STRATEGIC FOUNDATION",
          title: "Building a Strategic Foundation",
          description: "Business strategy and long-term planning provide the foundation for sustainable growth. Business Immersion® focuses on helping entrepreneurs strengthen their strategic direction and align business decisions with their wider organizational ambitions.",
          quote: "Purpose gives direction. Habits create destiny.",
          image: "/images/about/brandmount.webp"
        },
        {
          chapter: "03",
          tag: "ORGANIZATIONAL MASTERY",
          title: "Creating Stronger Organizations",
          description: "Leadership, branding, governance, organizational culture, and financial sustainability are central to the program's approach. Together, these areas help business owners focus on the structures, leadership capabilities, and business practices that support organizational development.",
          quote: "Businesses grow only as much as their leaders grow.",
          image: "/images/about/SSK04519.webp"
        },
        {
          chapter: "04",
          tag: "INSTITUTIONAL SCALE",
          title: "Leading for Long-Term Growth",
          description: "The broader goal is to help entrepreneurs build organizations that are scalable, sustainable, and guided by purpose. By developing both business capabilities and leadership, founders can work towards creating lasting value for their organizations and the communities they serve.",
          quote: "Build systems that create freedom, not dependency.",
          image: "/images/about/travel.webp"
        }
      ]
    },
    galleryTitle: "Witness the\nTransformation",
    galleryDescription: "Explore the journey of business leadership, strategic development, and organizational growth. Business Immersion® focuses on business strategy, leadership, branding, governance, organizational culture, and financial sustainability to help entrepreneurs work towards building scalable, purpose-led organizations.",
    galleryStats: [
      {
        value: "6",
        label: "Core Business Focus Areas"
      },
      {
        value: "Long-Term",
        label: "Growth & Leadership Development"
      }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", alt: "Business Acceleration Masterclass", caption: "01 // STRATEGIC ACCELERATION" },
      { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", alt: "Executive Leadership Alignment", caption: "02 // LEADERSHIP CONCLAVE" },
      { url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800", alt: "System-Driven Scale & Governance", caption: "03 // GOVERNANCE & SCALE" },
      { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800", alt: "Institutional Brand Positioning", caption: "04 // STRATEGIC POSITIONING" }
    ],
    testimonials: [
      {
        name: "Tariq Al-Hassan",
        role: "Managing Partner, Apex Logistics",
        quote: "Business Immersion helped me break free from 14-hour operational firefighting. We built real systems, and our valuation tripled in 12 months.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Rajiv Menon",
        role: "Founder & CEO, Omnix Technologies",
        quote: "The transition from founder-dependent chaos to autonomous governance was seamless with Dr. Omar's leadership blueprints.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Clara Vance",
        role: "Managing Director, Aurelius Capital",
        quote: "Understanding brand positioning as an institutional asset was the single highest-ROI decision our board made this decade.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Faisal Al-Qasimi",
        role: "Chairman, Gulf Horizon Group",
        quote: "Dr. Omar doesn't just teach management; he cultivates institutional mindset. Our executive team now operates with unwavering strategic alignment.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What is Business Immersion®?",
        answer: "Business Immersion® is an advanced leadership and business acceleration program created for entrepreneurs and business owners who want to build scalable, system-driven, and purpose-led organizations."
      },
      {
        question: "Who is Business Immersion® designed for?",
        answer: "The program is designed for entrepreneurs and business owners who aspire to strengthen their leadership, improve business strategy, and develop organizations capable of sustainable long-term growth."
      },
      {
        question: "What areas does Business Immersion® focus on?",
        answer: "The program focuses on business strategy, leadership, branding, governance, organizational culture, financial sustainability, and long-term growth."
      },
      {
        question: "How does Business Immersion® support business growth?",
        answer: "Its approach emphasizes stronger business strategy, leadership development, organizational systems, governance, and financial sustainability to help founders move from managing daily operations towards leading institutions."
      },
      {
        question: "How can I enrol in Business Immersion®?",
        answer: "Contact the Business Immersion® team to enquire about eligibility, upcoming program dates, duration, fees, participation requirements, and registration."
      }
    ],
    blogs: [
      {
        title: "From Founder to Leader: Building a Business That Runs on Systems",
        category: "LEADERSHIP",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "The Role of Strategic Branding in Sustainable Business Growth",
        category: "BRANDING",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "Building an Organizational Culture That Supports Long-Term Growth",
        category: "STRATEGY",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      }
    ],
    closing: {
      heading: "Build a Business That\nGrows Beyond You",
      description: "Strengthen your leadership, sharpen your strategy, and develop the foundations for a scalable, system-driven, and purpose-led organization.",
      cta: "Enquire About Business Immersion®"
    },
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "human-excellence-academy",
    name: "Human Excellence Academy",
    description: "A human development and coaching institution dedicated to helping individuals discover their potential, develop leadership capabilities, strengthen relationships, and build meaningful, purpose-driven lives.",
    aboutParagraphs: [
      "Human Excellence Academy (HEA) is an institution founded by Dr. Abdussalam Omar to help individuals unlock their potential through holistic human development.",
      "The academy integrates psychology, emotional intelligence, leadership, coaching, neuroscience, spirituality, and experiential learning to support personal growth, stronger relationships, purpose discovery, and leadership development. Its broader work encompasses coaching, counselling, training, and development for individuals, families, professionals, entrepreneurs, and organizations."
    ],
    missionVisionHeading: [
      "Transforming People",
      "Developing Leaders",
      "Living With Purpose"
    ],
    missionVisionDesc: "Human Excellence Academy (HEA) is dedicated to unlocking human potential through holistic development. By integrating psychology, neuroscience, emotional intelligence, and leadership coaching, HEA empowers individuals, families, and organizations to achieve lasting personal mastery and meaningful social impact.",
    stats: [
      {
        value: "Since 2010",
        label: "Pioneering holistic coaching, counselling, and leadership development across the Middle East & India."
      },
      {
        value: "Holistic",
        label: "Multidisciplinary integration of psychology, neuroscience, NLP, spirituality & experiential learning."
      }
    ],
    vision: "To create a world where individuals discover their potential, lead with purpose, build stronger relationships, and contribute to a more ethical, compassionate, and thriving society.",
    mission: "To empower individuals, families, professionals, entrepreneurs, and organizations through holistic human development, coaching, counselling, and experiential learning that strengthen emotional intelligence, leadership, personal growth, and purpose-driven living.",
    missionVisionImages: [
      "/images/about/hea.webp",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
    ],
    pillars: [
      {
        title: "Holistic Human Development",
        focus: "Self-Awareness, Personal Growth, and Human Potential",
        concept: "Supporting individuals in understanding themselves, recognizing their potential, and developing the mindset needed to pursue meaningful personal and professional growth.",
        icon: "heart",
        image: "/images/programmes/highlite1.webp"
      },
      {
        title: "Emotional Intelligence & Relationships",
        focus: "Emotional Awareness, Communication, and Relationship Development",
        concept: "Emphasizing emotional intelligence, effective communication, and personal awareness as foundations for healthier relationships, better decisions, and more balanced living.",
        icon: "users",
        image: "/images/programmes/highlite2.webp"
      },
      {
        title: "Leadership & Professional Excellence",
        focus: "Leadership Development, Coaching, and Organizational Growth",
        concept: "Developing leadership capabilities and professional effectiveness through coaching, mentoring, training, and organizational development initiatives.",
        icon: "target",
        image: "/images/programmes/highlite3.webp"
      },
      {
        title: "Purpose & Meaningful Living",
        focus: "Purpose Discovery, Values, and Positive Social Impact",
        concept: "Encouraging individuals to discover their purpose, align their actions with their values, and contribute meaningfully to their families, workplaces, and communities.",
        icon: "compass",
        image: "/images/programmes/highlite4.webp"
      }
    ],
    features: [
      {
        icon: "01",
        title: "Discover Your Potential",
        description: "Develop greater self-awareness, recognize your strengths, and explore opportunities for personal and professional growth.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "02",
        title: "Strengthen Emotional Intelligence",
        description: "Build awareness of emotions and their role in communication, decision-making, relationships, and personal development.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "03",
        title: "Build Meaningful Relationships",
        description: "Explore effective communication, relationship development, and approaches to creating healthier personal and family connections.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "04",
        title: "Develop Leadership Capabilities",
        description: "Strengthen leadership, communication, and decision-making capabilities that support personal and professional effectiveness.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "05",
        title: "Gain Clarity & Direction",
        description: "Reflect on your values, interests, goals, and purpose to develop a clearer direction for your life and career.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "06",
        title: "Create Positive Impact",
        description: "Apply personal growth and leadership principles to contribute positively to your family, workplace, organization, and wider community.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
      }
    ],
    story: {
      tagline: "OUR STORY // THE JOURNEY",
      heading: "The Story Behind Human Excellence Academy",
      description: "A vision to develop people before developing businesses, and to make human transformation the foundation of meaningful and lasting success.",
      chapters: [
        {
          chapter: "01",
          tag: "THE PHILOSOPHY",
          title: "A Purpose Beyond Professional Success",
          description: "Dr. Abdussalam Omar's journey spans healthcare, emergency medical education, academic development, leadership, and human transformation. His experience shaped a broader philosophy: lasting success begins with developing people, strengthening their capabilities, and helping them discover their purpose.",
          quote: "When people heal emotionally and discover their purpose, they become better leaders, build stronger families, and contribute meaningfully to society.",
          image: "/images/about/hea.webp"
        },
        {
          chapter: "02",
          tag: "THE METHODOLOGY",
          title: "Bringing Human Development Together",
          description: "Human Excellence Academy brings together psychology, emotional intelligence, leadership, coaching, neuroscience, spirituality, and experiential learning. This multidisciplinary approach supports personal growth and leadership development across different stages of life and professional experience.",
          quote: "When people transform, businesses transform. When leaders grow, organizations grow.",
          image: "/images/about/SSK04766.webp"
        },
        {
          chapter: "03",
          tag: "THE REACH",
          title: "Developing People at Every Stage",
          description: "Through its broader ecosystem of transformational programs, coaching, counselling, and training, HEA addresses different development needs across personal life, relationships, youth development, entrepreneurship, and organizational leadership.",
          quote: "Purpose gives direction. Habits create destiny.",
          image: "/images/about/SSK04519.webp"
        },
        {
          chapter: "04",
          tag: "THE LASTING IMPACT",
          title: "Building a Legacy of Human Excellence",
          description: "HEA reflects a long-term vision in which personal development contributes to stronger families, ethical leadership, sustainable organizations, and healthier communities. Its purpose extends beyond individual achievement towards creating meaningful and lasting social impact.",
          quote: "Leave every person and every organization better than you found them.",
          image: "/images/about/brandmount.webp"
        }
      ]
    },
    galleryTitle: "Witness the\nTransformation",
    galleryDescription: "Explore the journey of personal growth, leadership development, and human transformation through the work of Human Excellence Academy. Discover how coaching, experiential learning, emotional intelligence, and purpose-driven development can support growth across personal and professional life.",
    galleryStats: [
      {
        value: "Holistic",
        label: "Human Development"
      },
      {
        value: "Purpose-Driven",
        label: "Leadership & Growth"
      }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Holistic Coaching & Mentorship", caption: "01 // HOLISTIC COACHING" },
      { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", alt: "Executive Leadership Masterclass", caption: "02 // LEADERSHIP EXCELLENCE" },
      { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", alt: "Family & Relationship Counselling", caption: "03 // COUNSELLING & WELLBEING" },
      { url: "/images/about/hea.webp", alt: "Human Excellence Ecosystem", caption: "04 // PURPOSE & IMPACT" }
    ],
    testimonials: [
      {
        name: "Dr. Sophia Chen",
        role: "Medical Director & Healthcare Executive",
        quote: "HEA's holistic approach to emotional intelligence and leadership re-anchored our entire executive team. We communicate with real empathy and execute with clarity.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Zaid Al-Mansoor",
        role: "Entrepreneur",
        quote: "The family and relationship counselling transformed how my spouse and I navigate pressure and parenthood. It brought lasting peace into our home.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Miriam K.",
        role: "Corporate Strategist",
        quote: "Dr. Omar's coaching bridged the gap between my inner values and my professional aspirations. I finally lead with purpose instead of anxiety.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Robert H.",
        role: "Chief People Officer",
        quote: "Human Excellence Academy is more than an institution; it's a movement that develops the person before the title. The impact on our corporate culture has been profound.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What is Human Excellence Academy?",
        answer: "Human Excellence Academy (HEA) is an institution founded by Dr. Abdussalam Omar that focuses on human development, coaching, counselling, training, leadership, and personal transformation."
      },
      {
        question: "What services does Human Excellence Academy offer?",
        answer: "HEA's services include personal coaching and counselling, relationship and family counselling, career coaching, business and corporate coaching, and keynote speaking and training."
      },
      {
        question: "Who can benefit from Human Excellence Academy?",
        answer: "HEA's work serves individuals, families, students, professionals, entrepreneurs, business leaders, and organizations seeking personal development, stronger relationships, career direction, or leadership and organizational growth."
      },
      {
        question: "What programs are available through HEA?",
        answer: "HEA offers transformational programs covering areas such as personal development, youth development, leadership, and business growth. Program availability, eligibility, and schedules should be confirmed with the academy."
      },
      {
        question: "How can I connect with Human Excellence Academy?",
        answer: "You can contact the HEA team to enquire about coaching, counselling, training, programs, and upcoming events. The team can guide you towards the service or program that best fits your needs."
      }
    ],
    blogs: [
      {
        title: "The Journey to Human Excellence: Discovering Your True Potential",
        category: "PERSONAL GROWTH",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "Emotional Intelligence: The Foundation of Better Relationships",
        category: "EMOTIONAL INTELLIGENCE",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "Purpose-Driven Leadership: Transforming People and Organizations",
        category: "LEADERSHIP",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      }
    ],
    closing: {
      heading: "Your Journey Towards\nHuman Excellence\nBegins Here",
      description: "Discover your potential, develop your capabilities, and take meaningful steps towards a more purposeful, balanced, and fulfilling life.",
      cta: "Connect With Human Excellence Academy"
    },
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "master-deep-immersion",
    name: "Master Deep Immersion",
    description: "An immersive personal transformation experience inspired by the principles of emotional awareness, identity discovery, purpose, and holistic human development.",
    aboutParagraphs: [
      "Master Deep Immersion® is positioned as an immersive human development experience focused on self-awareness, emotional understanding, purpose discovery, and meaningful personal growth.",
      "Inspired by Dr. Abdussalam Omar's broader philosophy of human transformation, the proposed program positioning brings together psychology, emotional intelligence, neuroscience, NLP, spirituality, coaching, and experiential learning. Its central theme is helping individuals reconnect with themselves and reflect on the direction of their personal and professional lives."
    ],
    missionVisionHeading: [
      "Go Deeper Within",
      "Discover Your Purpose",
      "Transform How You Live"
    ],
    missionVisionDesc: "Master Deep Immersion® is an advanced personal transformation experience inspired by Dr. Abdussalam Omar's philosophy of human development. It integrates emotional intelligence, neuroscience, psychology, spirituality, coaching, and experiential learning to encourage deeper self-awareness and purposeful living.",
    stats: [
      {
        value: "Holistic",
        label: "Multidisciplinary integration of psychology, neuroscience, emotional intelligence & experiential coaching."
      },
      {
        value: "Purpose-Driven",
        label: "Advanced personal mastery and inner reflection designed to guide life direction and intentional decisions."
      }
    ],
    vision: "To inspire individuals to develop deeper self-understanding, discover their purpose, cultivate inner peace, and build meaningful lives that positively influence their families, relationships, and communities.",
    mission: "To support meaningful personal development through an integrated approach to human transformation, combining emotional intelligence, psychology, coaching, spirituality, and experiential learning to encourage self-awareness, purpose discovery, and intentional living.",
    missionVisionImages: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200"
    ],
    pillars: [
      {
        title: "Deep Self-Awareness & Identity",
        focus: "Identity Discovery, Reflection, and Personal Understanding",
        concept: "Encouraging individuals to reflect on their experiences, understand their values, and develop a clearer sense of identity. The focus is on recognizing personal patterns and exploring opportunities for meaningful growth.",
        icon: "user-round-search",
        image: "/images/programmes/highlite1.webp"
      },
      {
        title: "Emotional Intelligence & Inner Growth",
        focus: "Emotional Awareness, Self-Understanding, and Personal Development",
        concept: "Exploring emotional intelligence as part of a broader journey of self-understanding. Psychology and coaching provide a framework for reflecting on emotional experiences and developing a more intentional approach to everyday life.",
        icon: "heart",
        image: "/images/programmes/highlite2.webp"
      },
      {
        title: "Purpose, Values & Life Direction",
        focus: "Purpose Discovery, Personal Values, and Meaningful Decisions",
        concept: "Helping individuals reflect on what matters to them, reconnect with their values, and explore a clearer direction for their personal and professional journeys.",
        icon: "compass",
        image: "/images/programmes/highlite3.webp"
      },
      {
        title: "Holistic Transformation & Intentional Living",
        focus: "Experiential Learning, Coaching, and Purpose-Driven Growth",
        concept: "Bringing together personal reflection, coaching, spirituality, and experiential learning to encourage a more thoughtful approach to personal growth, relationships, and future aspirations.",
        icon: "sparkles",
        image: "/images/programmes/highlite4.webp"
      }
    ],
    features: [
      {
        icon: "01",
        title: "Understand Yourself More Deeply",
        description: "Create space to reflect on your identity, personal values, experiences, and opportunities for growth.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "02",
        title: "Develop Emotional Awareness",
        description: "Explore the role of emotions in personal decisions, relationships, and everyday experiences.",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "03",
        title: "Reconnect With Your Values",
        description: "Reflect on the principles that matter most to you and consider how they influence the way you live.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "04",
        title: "Discover Greater Purpose",
        description: "Explore meaningful goals and develop a clearer understanding of the direction you want your life to take.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "05",
        title: "Adopt a Holistic Perspective",
        description: "Explore personal development through an integrated perspective that brings together psychology, emotional intelligence, coaching, and experiential learning.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "06",
        title: "Move Forward With Intention",
        description: "Use self-reflection and purpose discovery to consider meaningful changes in your personal and professional life.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
      }
    ],
    story: {
      tagline: "OUR STORY // THE JOURNEY",
      heading: "The Story Behind Master Deep Immersion®",
      description: "A journey inspired by the belief that meaningful transformation begins with understanding ourselves and discovering the purpose that guides our lives.",
      chapters: [
        {
          chapter: "01",
          tag: "THE INITIATION",
          title: "Looking Beyond the Surface",
          description: "Dr. Abdussalam Omar's broader philosophy of human transformation emphasizes the importance of emotional healing, identity, and purpose. This proposed Master Deep Immersion® narrative begins with the idea that meaningful development requires more than external achievement; it also involves understanding ourselves and the values that shape our lives.",
          quote: "Your past may explain who you are today, but it never has to decide who you become tomorrow.",
          image: "/images/about/SSK04766.webp"
        },
        {
          chapter: "02",
          tag: "INNER METHODOLOGY",
          title: "Understanding the Inner Journey",
          description: "Psychology, emotional intelligence, neuroscience, NLP, spirituality, coaching, and experiential learning form the integrated methodology described for Deep Immersion®. These disciplines provide the foundation for this proposed narrative about reflection, self-understanding, and personal development.",
          quote: "Healing is the beginning of every transformation.",
          image: "/images/about/brandmount.webp"
        },
        {
          chapter: "03",
          tag: "IDENTITY & ALIGNMENT",
          title: "Rediscovering Identity and Purpose",
          description: "A central theme of the proposed program is the relationship between identity, personal values, and purpose. By reflecting on these foundations, individuals can explore how they want to approach relationships, personal responsibilities, and their future direction.",
          quote: "Purpose gives direction. Habits create destiny.",
          image: "/images/about/SSK04519.webp"
        },
        {
          chapter: "04",
          tag: "A LASTING IMPACT",
          title: "Creating a Meaningful Future",
          description: "The broader philosophy behind Deep Immersion® connects personal transformation with inner peace, meaningful relationships, ethical leadership, and positive contributions to society. This proposed narrative carries those principles into a story about intentional living and lasting personal growth.",
          quote: "Dream boldly. Live ethically. Serve generously.",
          image: "/images/about/travel.webp"
        }
      ]
    },
    galleryTitle: "Witness the\nTransformation",
    galleryDescription: "Explore a journey of self-discovery, emotional awareness, and purpose-driven growth. Inspired by the human transformation philosophy of Dr. Abdussalam Omar, this experience emphasizes reflection, coaching, and holistic personal development.",
    galleryStats: [
      {
        value: "Holistic",
        label: "Human Development"
      },
      {
        value: "Purpose-Driven",
        label: "Personal Growth"
      }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", alt: "Deep Personal Reflection Retreat", caption: "01 // INNER CONTEMPLATION" },
      { url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800", alt: "Advanced Emotional Intelligence", caption: "02 // EMOTIONAL MASTERY" },
      { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", alt: "Experiential Purpose Coaching", caption: "03 // PURPOSE WORKSHOPS" },
      { url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", alt: "Holistic Life Alignment", caption: "04 // INTENTIONAL LIVING" }
    ],
    testimonials: [
      {
        name: "Elena Rostova",
        role: "Leadership Mentor & Author",
        quote: "Master Deep Immersion opened a dimension of self-understanding I didn't know was possible. I re-anchored my core identity and discovered my true life purpose.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Jonathan Hayes",
        role: "Managing Partner",
        quote: "The depth of psychological and spiritual integration in this retreat allowed me to release decades of unspoken baggage and step into authentic peace.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Safia Al-Nuaimi",
        role: "Founder & Philanthropist",
        quote: "Dr. Omar creates a sacred, transformative container where high achievers can finally take off the mask and align their inner world with their public life.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "David Vance",
        role: "Executive Advisor",
        quote: "Going through Master Deep Immersion altered how I perceive family, career, and legacy. It is an unmatched turning point in my personal evolution.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What is Master Deep Immersion®?",
        answer: "Master Deep Immersion® is proposed here as an immersive human development experience focused on self-awareness, emotional understanding, purpose discovery, and personal growth. Its official format and distinction from Deep Immersion® should be confirmed with the program team."
      },
      {
        question: "Who is Master Deep Immersion® designed for?",
        answer: "The proposed positioning is intended for individuals interested in deeper self-understanding, personal development, and purpose discovery. The official target audience and eligibility requirements need to be confirmed."
      },
      {
        question: "What areas does the experience explore?",
        answer: "The proposed content draws on the broader Deep Immersion® methodology, which integrates psychology, emotional intelligence, neuroscience, NLP, spirituality, coaching, and experiential learning."
      },
      {
        question: "How is Master Deep Immersion® different from Deep Immersion®?",
        answer: "The source document describes Deep Immersion® as Dr. Omar's flagship residential transformation program but does not establish a separate Master Deep Immersion® program. The differences in curriculum, duration, format, and outcomes need confirmation from the program team."
      },
      {
        question: "How can I participate in Master Deep Immersion®?",
        answer: "Contact the program team to confirm whether Master Deep Immersion® is offered separately, along with availability, eligibility, duration, venue, fees, and registration details."
      }
    ],
    blogs: [
      {
        title: "The Inner Journey: Why Self-Awareness Matters for Personal Growth",
        category: "SELF-DISCOVERY",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "Emotional Intelligence and the Art of Understanding Yourself",
        category: "EMOTIONAL INTELLIGENCE",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "Finding Your Purpose and Creating a More Meaningful Life",
        category: "PURPOSE & GROWTH",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      }
    ],
    closing: {
      heading: "Your Next Chapter\nBegins Within",
      description: "Take time to reconnect with yourself, reflect on what matters, and explore a more purposeful direction for your life.",
      cta: "Enquire About Master Deep Immersion®"
    },
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "teens-immersion",
    name: "Teens Immersion",
    description: "A teen development program designed to help teenagers build self-confidence, discipline, emotional intelligence, communication skills, resilience, and positive life habits during their formative years.",
    aboutParagraphs: [
      "Teens Immersion® is a personal development program designed to help teenagers develop essential life skills and positive habits during their formative years.",
      "The program focuses on self-confidence, discipline, emotional intelligence, communication, and resilience. It aims to empower young minds to make responsible choices, develop a stronger sense of self, and prepare for a purposeful future."
    ],
    missionVisionHeading: [
      "Build Strong Foundations",
      "Develop Resilience",
      "Shape a Brighter Future"
    ],
    missionVisionDesc: "Teens Immersion® is designed to empower young minds during their formative years. Through experiential learning, emotional awareness, and positive habit formation, it prepares teenagers to navigate life's challenges with confidence and purpose.",
    stats: [
      {
        value: "6 Core Areas",
        label: "Confidence, discipline, emotional intelligence, communication, resilience & positive daily habits."
      },
      {
        value: "Life Skills",
        label: "Foundational personal development preparing teenagers to make responsible and purposeful life decisions."
      }
    ],
    vision: "To nurture a generation of confident, resilient, emotionally aware, and responsible young people who grow with purpose and contribute positively to their families, communities, and society.",
    mission: "To support teenagers in developing self-confidence, discipline, emotional intelligence, communication skills, resilience, and positive life habits that help them make responsible choices and build strong foundations for their future.",
    missionVisionImages: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
    ],
    pillars: [
      {
        title: "Self-Confidence & Personal Growth",
        focus: "Self-Belief, Self-Awareness, and Personal Development",
        concept: "Encouraging teenagers to recognize their strengths, develop self-confidence, and build a healthier understanding of themselves as they navigate their formative years.",
        icon: "user-round",
        image: "/images/programmes/highlite1.webp"
      },
      {
        title: "Discipline & Positive Habits",
        focus: "Consistency, Responsibility, and Positive Daily Habits",
        concept: "Emphasizing the importance of discipline, personal responsibility, and constructive habits that support learning, personal development, and everyday decision-making.",
        icon: "calendar-check",
        image: "/images/programmes/highlite2.webp"
      },
      {
        title: "Emotional Intelligence & Resilience",
        focus: "Emotional Awareness, Resilience, and Self-Management",
        concept: "Helping teenagers develop greater awareness of their emotions and understand the importance of resilience when facing everyday challenges, changes, and setbacks.",
        icon: "heart",
        image: "/images/programmes/highlite3.webp"
      },
      {
        title: "Communication & Responsible Choices",
        focus: "Effective Communication, Decision-Making, and Life Skills",
        concept: "Developing communication skills and encouraging teenagers to think carefully about their choices, take responsibility for their actions, and build positive relationships.",
        icon: "messages-square",
        image: "/images/programmes/highlite4.webp"
      }
    ],
    features: [
      {
        icon: "01",
        title: "Build Self-Confidence",
        description: "Develop greater self-belief, recognize personal strengths, and approach new experiences with increased confidence.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "02",
        title: "Develop Discipline",
        description: "Understand the importance of consistency, responsibility, and positive habits in everyday life.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "03",
        title: "Understand Your Emotions",
        description: "Develop emotional awareness and learn to recognize the role emotions play in everyday experiences and relationships.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "04",
        title: "Strengthen Resilience",
        description: "Develop a more resilient mindset to help navigate setbacks, challenges, and changes during adolescence.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "05",
        title: "Improve Communication",
        description: "Build communication skills that support self-expression, understanding, cooperation, and positive relationships.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
      },
      {
        icon: "06",
        title: "Make Responsible Choices",
        description: "Develop greater awareness of personal responsibility and the importance of thoughtful decisions in shaping the future.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
      }
    ],
    story: {
      tagline: "OUR STORY // THE JOURNEY",
      heading: "The Story Behind Teens Immersion®",
      description: "A vision to help teenagers build strong foundations for life by developing confidence, character, emotional intelligence, and positive habits during their formative years.",
      chapters: [
        {
          chapter: "01",
          tag: "FORMATIVE GROWTH",
          title: "Building Confidence During Formative Years",
          description: "The teenage years are an important period of personal development. Teens Immersion® focuses on helping young people develop self-confidence, recognize their potential, and build a stronger foundation for the challenges and opportunities ahead.",
          quote: "Your past may explain who you are today, but it never has to decide who you become tomorrow.",
          image: "/images/about/SSK04519.webp"
        },
        {
          chapter: "02",
          tag: "DAILY HABITS",
          title: "Developing Discipline & Positive Habits",
          description: "Positive habits and personal discipline are important foundations for growth. Teens Immersion® emphasizes these qualities to encourage responsible behaviour, consistency, and a more intentional approach to everyday life.",
          quote: "Purpose gives direction. Habits create destiny.",
          image: "/images/about/SSK04766.webp"
        },
        {
          chapter: "03",
          tag: "INNER RESILIENCE",
          title: "Understanding Emotions & Building Resilience",
          description: "Emotional intelligence and resilience are among the core development areas identified for Teens Immersion®. The program aims to help teenagers develop emotional awareness and build the capacity to navigate life's challenges with greater understanding.",
          quote: "Healing is the beginning of every transformation.",
          image: "/images/about/brandmount.webp"
        },
        {
          chapter: "04",
          tag: "BRIGHTER FUTURE",
          title: "Preparing for a Purposeful Future",
          description: "By focusing on communication, confidence, discipline, emotional intelligence, and positive life habits, Teens Immersion® seeks to empower young people to make responsible choices and develop strong foundations for their future.",
          quote: "Dream boldly. Live ethically. Serve generously.",
          image: "/images/about/travel.webp"
        }
      ]
    },
    galleryTitle: "Witness the\nTransformation",
    galleryDescription: "Explore the journey of teenage development through confidence-building, positive habits, emotional intelligence, communication, and resilience. Teens Immersion® focuses on helping young people strengthen essential life skills and prepare for a purposeful future.",
    galleryStats: [
      {
        value: "6",
        label: "Core Development Areas"
      },
      {
        value: "Life Skills",
        label: "Foundations for the Future"
      }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", alt: "Teen Confidence Workshops", caption: "01 // CONFIDENCE & GROWTH" },
      { url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800", alt: "Habit Formation & Discipline", caption: "02 // HABIT MASTERY" },
      { url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800", alt: "Emotional Intelligence Activities", caption: "03 // RESILIENCE & AWARENESS" },
      { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", alt: "Interactive Peer Mentoring", caption: "04 // PURPOSE & FRIENDSHIPS" }
    ],
    testimonials: [
      {
        name: "Reem Al-Kuwari",
        role: "Mother & Educator",
        quote: "Teens Immersion completely shifted how my son approaches school and daily responsibilities. He went from avoiding challenges to facing them with calm confidence.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Dr. Tariq Siddiqui",
        role: "Parent & Consultant",
        quote: "The program gave my daughter healthy emotional tools to express herself and build genuine, positive friendships. It was worth every minute.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Aryan M.",
        role: "Participant (Age 16)",
        quote: "I learned how to stop procrastinating and understand why I felt anxious about the future. I feel so much more in control of my goals now.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
        rating: 5
      },
      {
        name: "Sarah Jenkins",
        role: "High School Counselor",
        quote: "Dr. Omar's mentoring team created an environment where teenagers feel respected and motivated to lead with integrity. Truly life-shaping.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What is Teens Immersion®?",
        answer: "Teens Immersion® is a youth development program designed to help teenagers develop self-confidence, discipline, emotional intelligence, communication skills, resilience, and positive life habits."
      },
      {
        question: "Who is Teens Immersion® designed for?",
        answer: "The program is designed for teenagers during their formative years. The exact age range and eligibility requirements should be confirmed with the program team."
      },
      {
        question: "What skills can teenagers develop through the program?",
        answer: "The program focuses on self-confidence, discipline, emotional intelligence, communication, resilience, and positive life habits to help teenagers make responsible choices and prepare for the future."
      },
      {
        question: "Why are positive habits and emotional intelligence important for teenagers?",
        answer: "Positive habits support consistency and responsibility, while emotional intelligence encourages greater awareness of emotions and relationships. Both are important areas of personal development during adolescence."
      },
      {
        question: "How can I enrol my teenager in Teens Immersion®?",
        answer: "Contact the Teens Immersion® team to enquire about age eligibility, upcoming batches, program duration, fees, schedule, and registration."
      }
    ],
    blogs: [
      {
        title: "Building Self-Confidence During the Teenage Years",
        category: "SELF-CONFIDENCE",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "Emotional Intelligence: An Essential Life Skill for Teenagers",
        category: "EMOTIONAL INTELLIGENCE",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      },
      {
        title: "The Power of Positive Habits in Shaping Your Future",
        category: "PERSONAL DEVELOPMENT",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600",
        date: "COMING SOON"
      }
    ],
    closing: {
      heading: "Strong Foundations.\nBrighter Futures.",
      description: "Help young minds develop the confidence, discipline, resilience, and life skills they need to grow into responsible and purposeful individuals.",
      cta: "Enquire About Teens Immersion®"
    },
    components: ["Hero", "About", "Testimonial"],
  },
];
