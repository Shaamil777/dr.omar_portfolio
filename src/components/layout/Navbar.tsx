import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 bg-zinc-950/80 backdrop-blur-md z-50 flex gap-8 justify-center text-white text-lg font-medium">
      <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
      <Link href="/about" className="hover:text-zinc-400 transition-colors">About</Link>
      <Link href="/programmes" className="hover:text-zinc-400 transition-colors">Programmes</Link>
      <Link href="/testimonials" className="hover:text-zinc-400 transition-colors">Testimonials</Link>
      <Link href="/blogs" className="hover:text-zinc-400 transition-colors">Blogs</Link>
      <Link href="/contact" className="hover:text-zinc-400 transition-colors">Contact</Link>
    </nav>
  );
}
