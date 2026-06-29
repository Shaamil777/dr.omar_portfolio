export default function TestimonialSection() {
  return (
    <section id="testimonials" className="w-full py-24 px-6 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Client Testimonials</h2>
        <div className="max-w-4xl mx-auto bg-zinc-950 p-12 rounded-3xl border border-zinc-800">
          <p className="text-2xl italic text-zinc-300 mb-8">
            "Working with Dr. Omar completely transformed our business approach. The premium quality and depth of knowledge is unmatched."
          </p>
          <div>
            <h4 className="font-bold text-lg">Jane Doe</h4>
            <span className="text-zinc-500 text-sm">CEO, InnovateTech</span>
          </div>
        </div>
      </div>
    </section>
  );
}
