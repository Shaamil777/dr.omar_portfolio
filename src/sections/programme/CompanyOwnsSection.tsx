import Image from 'next/image';

export default function CompanyOwnsSection() {
  // We can use default placeholder logos for the companies owned by Dr Omar
  // Using some abstract Unsplash images to represent corporate logos
  const ownedCompanies = [
    { name: "BCC", logo: "/logos/BCC/bcc.png" },
    { name: "Business Immersion", logo: "/logos/BI/bi_light.png" },
    { name: "Deep Immersion", logo: "/logos/DI/di_light.png" },
    { name: "Emotional Intelligence", logo: "/logos/EI/ei_light.png" },
    { name: "Human Excellence Academy", logo: "/logos/HEA/hea_light.png" },
    { name: "Master Deep Immersion", logo: "/logos/MDI/mdi_liight.png" },
    { name: "OATHMEN", logo: "/logos/OATHMEN/oathmen_light.png" },
    { name: "Teens Immersion", logo: "/logos/TI/ti_light.png" },
    { name: "Youth Immersion", logo: "/logos/YI/yi_light.png" },
  ];

  // We duplicate the array multiple times to ensure a seamless infinite loop across wide screens
  const marqueeItems = [...ownedCompanies, ...ownedCompanies, ...ownedCompanies];

  return (
    <section className="w-full py-24 md:py-32 bg-[#0a0a0a] text-white overflow-hidden relative z-30 border-y border-white/10">
      {/* Abstract Background Elements (Matching Story Section) */}
      <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] bg-[#CD1D1D]/5 rounded-full blur-[140px] translate-x-1/4 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-[#CD1D1D]/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none z-0" />

      
      {/* CSS for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-6 lg:px-24 max-w-[100rem] mb-16 text-center">
        <span className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-400 uppercase mb-4 block">
          Dr. Omar's Ecosystem
        </span>
        <h2 className="font-helvetica text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white flex flex-wrap justify-center gap-x-3 lg:gap-x-4">
          <span>Companies Dr. Omar</span>
          <span className="text-[#CD1D1D]">Owns</span>
          <span>and</span>
          <span>Leads</span>
        </h2>
      </div>

      {/* Marquee Wrapper without Track Styling */}
      <div className="relative flex overflow-x-hidden group py-6 mt-8">
        
        {/* Gradient Fades for edges to blend with the #0a0a0a background */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Track */}
        <div className="flex animate-marquee whitespace-nowrap min-w-max py-4">
          {marqueeItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center mx-12 md:mx-16 group/item cursor-pointer"
            >
              {/* Logo */}
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 relative flex items-center justify-center mb-3 group-hover/item:-translate-y-2 group-hover/item:scale-105 transition-all duration-500 drop-shadow-md">
                <Image 
                  src={item.logo} 
                  alt={item.name} 
                  fill 
                  className="object-contain transition-all duration-700 ease-out"
                />
              </div>
              
              {/* Company Name */}
              <div className="text-center w-[120%]">
                <h4 className="font-helvetica text-xs md:text-sm lg:text-sm font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover/item:text-white transition-colors duration-300">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
