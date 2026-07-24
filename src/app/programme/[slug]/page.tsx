import { notFound } from "next/navigation";
import { companiesData } from "@/constants/companies";
import ProgrammeHero from "@/sections/programme/ProgrammeHero";
import ProgrammeAbout from "@/sections/programme/ProgrammeAbout";
import ProgrammeHighlight from "@/sections/programme/ProgrammeHighlight";
import ProgrammeFeatures from "@/sections/programme/ProgrammeFeatures";
import ProgrammeFAQ from "@/sections/programme/ProgrammeFAQ";
import ProgrammeGallery from "@/sections/programme/ProgrammeGallery";
import ProgrammeTestimonial from "@/sections/programme/ProgrammeTestimonial";
import ProgrammeBlog from "@/sections/programme/ProgrammeBlog";
import ProgrammeCore from "@/sections/programme/ProgrammeCore";
import ProgrammeMissionVision from "@/sections/programme/ProgrammeMissionVision";
import CompanyOwnsSection from "@/sections/programme/CompanyOwnsSection";
import PageGridBackground from "@/components/ui/PageGridBackground";

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
    <PageGridBackground>
      <main className="min-h-screen relative">
        <ProgrammeHero company={company} />
        <ProgrammeAbout company={company} />
        <ProgrammeMissionVision company={company} />
        <ProgrammeHighlight company={company} />
        <ProgrammeFeatures company={company} />
        <CompanyOwnsSection company={company} />
        <ProgrammeGallery company={company} />
        <ProgrammeTestimonial company={company} />
        <ProgrammeFAQ company={company} />
        <ProgrammeBlog company={company} />
        <ProgrammeCore company={company} />
      </main>
    </PageGridBackground>
  );
}

export function generateStaticParams() {
  return companiesData.map((company) => ({
    slug: company.slug,
  }));
}
