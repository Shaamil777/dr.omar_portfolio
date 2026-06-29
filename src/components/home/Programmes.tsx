import Link from "next/link";

export default function ProgrammesSection() {
  const programmes = [
    { title: "Program 1", slug: "program1" },
    { title: "Program 2", slug: "program2" },
    { title: "Program 3", slug: "program3" },
  ];

  return (
    <section id="programmes" className="w-full py-24 px-6 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Programmes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programmes.map((prog) => (
            <Link 
              key={prog.slug}
              href={`/programmes/${prog.slug}`}
              className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-500 transition-colors flex flex-col items-center justify-center min-h-[200px]"
            >
              <h3 className="text-2xl font-semibold mb-2">{prog.title}</h3>
              <p className="text-zinc-500 text-sm">Explore Details &rarr;</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
