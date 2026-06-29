export default function CtaSection() {
  return (
    <section className="w-full py-32 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-6">Ready to Elevate Your Business?</h2>
        <p className="text-xl text-zinc-400 max-w-2xl mb-10">
          Book a consultation today and discover how our premium programmes can accelerate your success.
        </p>
        <button className="px-10 py-4 rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          Contact Us Now
        </button>
      </div>
    </section>
  );
}
