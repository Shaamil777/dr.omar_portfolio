import Program1 from "@/components/program1";
import Program2 from "@/components/program2";
import Program3 from "@/components/program3";

export default async function ProgrammeDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center">
      {/* Dynamic Component Rendering Based on Slug */}
      {slug === "program1" && <Program1 />}
      {slug === "program2" && <Program2 />}
      {slug === "program3" && <Program3 />}

      {/* Fallback for unknown slugs */}
      {!["program1", "program2", "program3"].includes(slug) && (
        <div className="text-center py-40">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Program Not Found
          </h1>
          <p className="text-xl text-zinc-400">
            The program "{slug}" does not exist.
          </p>
        </div>
      )}
    </main>
  );
}
