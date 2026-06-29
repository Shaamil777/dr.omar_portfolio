export default function HeroSection() {
  return (
    <section className="w-full px-6 flex flex-col items-center justify-center bg-brand-bg text-brand-primary min-h-screen">
      <div className="max-w-5xl mx-auto text-center mt-20">
        <h1 className="text-6xl font-bold tracking-tighter mb-6 text-brand-primary">
          Dr. Omar Portfolio
        </h1>
        <p className="text-xl text-brand-secondary max-w-2xl mx-auto mb-10">
          Elevating businesses and empowering entrepreneurs with premium solutions.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-brand-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
