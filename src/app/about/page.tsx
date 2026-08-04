import Link from "next/link";
import AboutHero from "@/sections/about/AboutHero";
import AboutBiography from "@/sections/about/AboutBiography";
import AboutStory from "@/sections/about/AboutStory";
import AboutStats from "@/sections/about/AboutStats";
import AboutEcosystem from "@/sections/about/AboutEcosystem";
import AboutAuthority from "@/sections/about/AboutAuthority";
import AboutPhilanthropy from "@/sections/about/AboutPhilanthropy";
import AboutCta from "@/sections/about/AboutCta";
import PageGridBackground from "@/components/ui/PageGridBackground";

export default function AboutPage() {
  return (
    <PageGridBackground>
      <main className="min-h-screen relative">
        {/* Floating Back to Home Button */}
        <div className="fixed top-6 left-6 sm:top-8 sm:left-10 z-[100]">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/60 hover:bg-[#CD1D1D] text-white backdrop-blur-md border border-white/20 transition-all shadow-lg font-helvetica font-bold text-xs sm:text-sm tracking-wider uppercase"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        <AboutHero />
        <AboutBiography />
        <AboutStory />
        <AboutStats />
        <AboutEcosystem />
        <AboutAuthority />
        <AboutPhilanthropy />
        <AboutCta />
      </main>
    </PageGridBackground>
  );
}
