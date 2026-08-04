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
