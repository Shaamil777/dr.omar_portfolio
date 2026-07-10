import { notFound } from "next/navigation";
import { companiesData, CompanyData } from "@/constants/companies";
import ProgramHero from "@/sections/program/ProgramHero";
import ProgramAbout from "@/sections/program/ProgramAbout";
import ProgramTestimonial from "@/sections/program/ProgramTestimonial";
import ProgramUpcomingEvents from "@/sections/program/ProgramUpcomingEvents";

const ComponentMap: Record<string, React.FC<{ company: CompanyData }>> = {
  Hero: ProgramHero,
  About: ProgramAbout,
  Testimonial: ProgramTestimonial,
  UpcomingEvents: ProgramUpcomingEvents,
};

export default async function DynamicCompanyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 bg-zinc-950">
      {/* Dynamically render components based on the company's configuration array */}
      {company.components.map((componentName, idx) => {
        const Component = ComponentMap[componentName];
        if (!Component) return null;
        
        // We pass the company data object down as a prop so the component knows what to display
        return <Component key={idx} company={company} />;
      })}
    </main>
  );
}

// Generate static params for lightning-fast performance
export function generateStaticParams() {
  return companiesData.map((company) => ({
    slug: company.slug,
  }));
}
