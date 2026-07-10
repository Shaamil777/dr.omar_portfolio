import type { CompanyData } from "@/constants/companies";

export default function ProgramUpcomingEvents({ company }: { company: CompanyData }) {
  return (
    <section className="min-h-[50vh] bg-amber-900 flex flex-col items-center justify-center text-white border-b border-white/10 p-12">
      <h2 className="text-4xl font-bold mb-4">Upcoming Events for {company.name}</h2>
      <div className="w-full max-w-2xl bg-amber-950/50 p-6 rounded-xl border border-amber-800">
        <p className="text-amber-200">Event placeholder: Annual Summit 2026</p>
      </div>
    </section>
  );
}
