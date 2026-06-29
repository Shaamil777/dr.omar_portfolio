import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            Dr. Omar
          </Link>
          <p className="mt-4 text-zinc-400 max-w-sm">
            Elevating businesses with premium solutions and unparalleled expertise.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/programmes/program1" className="hover:text-white transition-colors">Programmes</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-4">Socials</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Dr. Omar Portfolio. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-zinc-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-zinc-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
