export default function BlogsSection() {
  return (
    <section id="blogs" className="w-full py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold">Latest Insights</h2>
          <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            View All &rarr;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col gap-4">
              <div className="w-full aspect-[4/3] bg-zinc-800 rounded-2xl"></div>
              <div>
                <span className="text-xs text-emerald-400 font-semibold mb-2 block">BUSINESS</span>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-400 cursor-pointer transition-colors">
                  The Future of Strategic Growth
                </h3>
                <p className="text-zinc-400 text-sm">Read a brief snippet about how modern companies scale.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
