export default function ProgramTestimonial({ company }: { company: any }) {
  return (
    <section className="min-h-[50vh] bg-fuchsia-900 flex flex-col items-center justify-center text-white border-b border-white/10 p-12">
      <h2 className="text-4xl font-bold mb-4">{company.name} Testimonials</h2>
      <p className="text-lg text-fuchsia-200 max-w-2xl text-center italic">
        "Working with {company.name} has been absolutely incredible!"
      </p>
    </section>
  );
}
