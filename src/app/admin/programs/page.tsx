"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CompanyData } from "@/constants/companies";
import {
  Plus,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  AlertCircle,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/programs");
      const json = await res.json();
      if (json.success) setPrograms(json.data);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to load programmes" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleDelete = async (slug: string) => {
    if (slug === "bcc") {
      alert("The default BCC programme cannot be deleted as it serves as the core template.");
      return;
    }

    if (!confirm(`Are you sure you want to delete programme "${slug}"? This action cannot be undone.`)) {
      return;
    }

    setDeletingSlug(slug);
    try {
      const res = await fetch(`/api/admin/programs/${slug}`, { method: "DELETE" });
      const json = await res.json();

      if (res.ok && json.success) {
        setMessage({ type: "success", text: `Programme ${slug} was deleted.` });
        setPrograms((prev) => prev.filter((p) => p.slug !== slug));
      } else {
        setMessage({ type: "error", text: json.error || "Failed to delete programme" });
      }
    } catch {
      setMessage({ type: "error", text: "Network error while deleting" });
    } finally {
      setDeletingSlug(null);
    }
  };

  const filtered = programs.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()) ||
      p.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            Programmes Management ({programs.length})
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Manage your full suite of transformational programmes and mentorship cohorts.
          </p>
        </div>

        <Link
          href="/admin/programs/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#CD1D1D] hover:bg-red-700 text-white text-xs font-bold shadow-lg shadow-red-950/40 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Create New Programme
        </Link>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
            message.type === "success"
              ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800/60"
              : "bg-red-950/40 text-red-300 border border-red-800/60"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search programmes by title, slug, or keywords..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-[#CD1D1D] transition-colors"
        />
      </div>

      {/* Programmes Table / Cards */}
      {loading ? (
        <div className="py-12 text-center text-xs text-zinc-500 font-mono">
          Loading programmes from database...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-12 text-center space-y-4">
          <Layers className="w-12 h-12 text-zinc-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No Programmes Match Your Search</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Try adjusting your search query or create a new programme from scratch or from the BCC template.
          </p>
          <Link
            href="/admin/programs/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#CD1D1D] text-white text-xs font-bold"
          >
            <Plus className="w-4 h-4" /> Create Programme
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((program) => (
            <div
              key={program.slug}
              className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[#ff6b6b] font-bold">
                    /{program.slug}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                    <span>{program.pillars?.length || 0} pillars</span>
                    <span>•</span>
                    <span>{program.stats?.length || 0} stats</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {program.name}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <Link
                  href={`/programme/${program.slug}`}
                  target="_blank"
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Preview Live</span>
                </Link>

                <div className="flex items-center gap-2">
                  {program.slug !== "bcc" && (
                    <button
                      type="button"
                      disabled={deletingSlug === program.slug}
                      onClick={() => handleDelete(program.slug)}
                      className="p-2 text-zinc-500 hover:text-red-400 rounded-lg hover:bg-zinc-800 transition-colors disabled:opacity-50"
                      title="Delete Programme"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <Link
                    href={`/admin/programs/${program.slug}/edit`}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#CD1D1D]/20 hover:bg-[#CD1D1D] text-[#ff6b6b] hover:text-white border border-[#CD1D1D]/30 text-xs font-bold transition-all"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
