import type { CompanyData } from "@/constants/companies";

export default function ProgramHero({ company }: { company: CompanyData }) {
  return (
    <section className="h-[80vh] bg-blue-900 flex flex-col items-center justify-center text-white border-b border-white/10">
      <h1 className="text-6xl font-bold mb-4">{company.name} - Hero</h1>
      <p className="text-xl text-blue-200">{company.description}</p>
    </section>
  );
}
