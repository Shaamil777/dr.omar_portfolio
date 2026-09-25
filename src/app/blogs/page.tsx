import Link from "next/link";
import BlogsHero from "@/sections/blogs/BlogsHero";
import BlogsList from "@/sections/blogs/BlogsList";
import BlogsCta from "@/sections/blogs/BlogsCta";

export default function BlogsPage() {
  return (
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

      <BlogsHero />
      <BlogsList />
      <BlogsCta />
    </main>
  );
}
