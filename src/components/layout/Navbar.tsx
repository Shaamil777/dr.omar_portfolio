import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-emerald-400 transition-colors">
          Dr. Omar
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-zinc-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {/* We'll link to program 1 directly for the demo, since we removed the programmes index page */}
          <Link href="/programmes/program1" className="hover:text-white transition-colors">
            Programmes
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <button className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors ml-4">
            Book Demo
          </button>
        </nav>
        
        {/* Mobile Menu Placeholder (Hamburger icon) */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
