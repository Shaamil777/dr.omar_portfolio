export default function ProgramAbout({ company }: { company: any }) {
  return (
    <section className="min-h-[50vh] bg-emerald-900 flex flex-col items-center justify-center text-white border-b border-white/10 p-12">
      <h2 className="text-4xl font-bold mb-4">About {company.name}</h2>
      <p className="text-lg text-emerald-200 max-w-2xl text-center">
        This is the dynamic about section placeholder for {company.name}.
      </p>
    </section>
  );
}
