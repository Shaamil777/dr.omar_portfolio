export default function EntrepreneurSection() {
  return (
    <section id="entrepreneur" className="w-full py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 aspect-square bg-zinc-800 rounded-3xl">
          {/* Placeholder for Entrepreneur Image */}
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Meet The Entrepreneur</h2>
          <p className="text-zinc-400 text-lg mb-6">
            Highlight Dr. Omar's journey, experience, and the unique perspective he brings to the table.
          </p>
          <button className="px-6 py-2 rounded-full border border-zinc-700 hover:border-zinc-500 transition-colors">
            Read Full Bio
          </button>
        </div>
      </div>
    </section>
  );
}
