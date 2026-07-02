export type CompanyData = {
  slug: string;
  name: string;
  description: string;
  components: ("Hero" | "About" | "Testimonial" | "UpcomingEvents")[];
};

export const companiesData: CompanyData[] = [
  {
    slug: "bcc",
    name: "BCC",
    description: "Business Consulting Company - Leading the market.",
    components: ["Hero", "About", "Testimonial", "UpcomingEvents"],
  },
  {
    slug: "yi",
    name: "YI",
    description: "Innovative solutions for tomorrow.",
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "di",
    name: "Di",
    description: "Empowering the next generation.",
    components: ["Hero", "About"],
  },
  {
    slug: "bi",
    name: "BI",
    description: "Bridging financial gaps.",
    components: ["Hero", "About", "UpcomingEvents"],
  },
  {
    slug: "hea",
    name: "HEA",
    description: "Sustainable architecture and construction.",
    components: ["Hero", "About", "Testimonial"],
  },
  {
    slug: "mdi",
    name: "MDI",
    description: "Elite training and coaching.",
    components: ["Hero", "About", "UpcomingEvents", "Testimonial"],
  },
  {
    slug: "ti",
    name: "TI",
    description: "Global supply chain solutions.",
    components: ["Hero", "About"],
  },
];
