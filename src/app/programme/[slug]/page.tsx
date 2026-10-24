import Link from "next/link";
import { notFound } from "next/navigation";
import { companiesData } from "@/constants/companies";
import { getProgramBySlug, getBlogs } from "@/lib/storage";
import ProgrammeHero from "@/sections/programme/ProgrammeHero";
import ProgrammeAbout from "@/sections/programme/ProgrammeAbout";
import ProgrammeHighlight from "@/sections/programme/ProgrammeHighlight";
import ProgrammeFeatures from "@/sections/programme/ProgrammeFeatures";
import ProgrammeStory from "@/sections/programme/ProgrammeStory";
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
  const company =
    (await getProgramBySlug(slug)) ||
    companiesData.find(
      (c) =>
        c.slug === slug ||
        c.slug.replace(/_/g, "-") === slug ||
        c.slug.replace(/-/g, "_") === slug
    );

  if (!company) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white p-6 text-center">
        <h1 className="text-3xl font-bold mb-3">Programme Not Found</h1>
        <p className="text-zinc-400 text-sm mb-6 max-w-md">
          The requested programme with slug &quot;{slug}&quot; does not exist or has been removed.
        </p>
        <Link
          href="/programmes"
          className="px-6 py-2.5 rounded-full bg-[#CD1D1D] text-white font-bold text-xs uppercase tracking-wider"
        >
          View All Programmes
        </Link>
      </div>
    );
  }

  // Load blogs assigned to this programme or all programmes
  const allBlogs = await getBlogs();
  const assignedBlogs = allBlogs.filter((b) => {
    if (!b.programSlug) return false;
    if (b.programSlug === "none") return false;
    return b.programSlug === company.slug || b.programSlug === "all";
  });

  const companyWithBlogs = {
    ...company,
    blogs:
      assignedBlogs.length > 0
        ? assignedBlogs.map((b) => ({
            title: b.title,
            category: b.category,
            description: b.excerpt,
            image: b.img,
            date: b.date,
            slug: b.slug,
          }))
        : company.blogs,
  };

  return (
    <PageGridBackground>
      <main className="min-h-screen relative">
        {/* Floating Back to Programmes Button */}
        <div className="fixed top-6 left-6 sm:top-8 sm:left-10 z-[100]">
          <Link 
            href="/programmes" 
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-none bg-black/80 lg:hover:bg-[#CD1D1D] text-white backdrop-blur-md border border-white/20 transition-all shadow-md font-helvetica font-bold text-xs sm:text-sm tracking-wider uppercase"
          >
            <svg className="w-4 h-4 transition-transform lg:group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <ProgrammeStory company={company} />
        <CompanyOwnsSection company={company} />
        <ProgrammeGallery company={company} />
        <ProgrammeTestimonial company={company} />
        <ProgrammeFAQ company={company} />
        <ProgrammeBlog company={companyWithBlogs} />
        <ProgrammeCore company={company} />
      </main>
    </PageGridBackground>
  );
}

