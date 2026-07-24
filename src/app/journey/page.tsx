import Link from "next/link";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center text-[#111] p-6 text-center pt-24">
      <h1 className="text-5xl md:text-7xl font-national2 font-black uppercase mb-6 tracking-tight">
        Explore Journey
      </h1>
      <div className="w-24 h-1.5 bg-[#CD1D1D] mb-8"></div>
      <p className="text-xl md:text-2xl font-helvetica font-bold text-zinc-500 mb-12 max-w-2xl">
        This section is currently under progress. Please check back soon for updates on Dr. Omar's journey.
      </p>
      <Link 
        href="/"
        className="bg-[#111] text-white px-8 py-5 rounded-xl hover:bg-[#CD1D1D] hover:-translate-y-1 transition-all shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:shadow-xl font-national2 font-black uppercase tracking-normal text-lg md:text-xl flex items-center justify-center"
      >
        <svg className="w-5 h-5 mr-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        Return to Home
      </Link>
    </div>
  );
}
