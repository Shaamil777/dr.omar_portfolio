import Link from "next/link";
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
        {/* Floating Back to Programmes Button */}
        <div className="fixed top-6 left-6 sm:top-8 sm:left-10 z-[100]">
          <Link 
            href="/programmes" 
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/60 hover:bg-[#CD1D1D] text-white backdrop-blur-md border border-white/20 transition-all shadow-lg font-helvetica font-bold text-xs sm:text-sm tracking-wider uppercase"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Programmes</span>
          </Link>
        </div>

        <ProgrammeHero company={company} />
        <ProgrammeAbout company={company} />
        <ProgrammeMissionVision company={company} />
        <ProgrammeHighlight company={company} />
        <ProgrammeFeatures company={company} />
        <CompanyOwnsSection />
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
