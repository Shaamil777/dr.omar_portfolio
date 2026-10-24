import React from "react";
import ProgramForm from "@/components/admin/ProgramForm";

export default function NewProgramPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Create New Programme
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          Define all strategic parameters, curriculum pillars, story chapters, and proof points.
        </p>
      </div>

      <ProgramForm isEdit={false} />
    </div>
  );
}
