import React from "react";
import { notFound } from "next/navigation";
import { getProgramBySlug } from "@/lib/storage";
import ProgramForm from "@/components/admin/ProgramForm";

export default async function EditProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Edit Programme: {program.name}
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          Modify the programme parameters. Updates will reflect immediately on /programme/{program.slug}
        </p>
      </div>

      <ProgramForm initialData={program} isEdit={true} />
    </div>
  );
}
