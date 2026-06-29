export default function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Key Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center p-6">
            <span className="text-5xl font-bold text-emerald-400 mb-2">10+</span>
            <span className="text-zinc-400 font-medium">Years Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6">
            <span className="text-5xl font-bold text-blue-400 mb-2">500+</span>
            <span className="text-zinc-400 font-medium">Clients Served</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6">
            <span className="text-5xl font-bold text-purple-400 mb-2">3</span>
            <span className="text-zinc-400 font-medium">Core Programmes</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6">
            <span className="text-5xl font-bold text-orange-400 mb-2">100%</span>
            <span className="text-zinc-400 font-medium">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
