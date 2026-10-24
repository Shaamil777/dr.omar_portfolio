"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CompanyData } from "@/constants/companies";
import { BlogPost } from "@/lib/storage";
import {
  Layers,
  BookOpen,
  FilePlus,
  PenTool,
  ExternalLink,
  Edit,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [programs, setPrograms] = useState<CompanyData[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [programsRes, blogsRes] = await Promise.all([
          fetch("/api/admin/programs"),
          fetch("/api/admin/blogs"),
        ]);
        const programsJson = await programsRes.json();
        const blogsJson = await blogsRes.json();

        if (programsJson.success) setPrograms(programsJson.data);
        if (blogsJson.success) setBlogs(blogsJson.data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-10">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-10 shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD1D1D]/20 border border-[#CD1D1D]/30 text-[#ff6b6b] text-xs font-bold font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Full Stack Dynamic CMS
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Welcome to Dr. Omar&apos;s Content Management System
          </h1>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            Create, update, and manage executive programmes, mentorship retreats, and thought leadership articles in real-time. All changes sync dynamically with the live site.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              href="/admin/programs/new"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#CD1D1D] hover:bg-red-700 text-white text-xs font-bold shadow-lg shadow-red-950/40 transition-all"
            >
              <FilePlus className="w-4 h-4" />
              Add New Programme
            </Link>
            <Link
              href="/admin/blogs/new"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-bold border border-zinc-700 transition-all"
            >
              <PenTool className="w-4 h-4" />
              Write New Blog
            </Link>
          </div>
        </div>

        {/* Ambient Red Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#CD1D1D]/10 rounded-full blur-[90px] pointer-events-none" />
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
              Programmes
            </span>
            <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/40 text-[#ff6b6b] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {loading ? "..." : programs.length}
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Active programmes published in ecosystem
          </p>
          <Link
            href="/admin/programs"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#ff6b6b] hover:underline font-semibold"
          >
            Manage programmes <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
              Blog Articles
            </span>
            <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-900/40 text-amber-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {loading ? "..." : blogs.length}
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Thought leadership articles published
          </p>
          <Link
            href="/admin/blogs"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline font-semibold"
          >
            Manage articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
              System Engine
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-900/40 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Fully Operational
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Next.js App Router • JSON Storage Store
          </p>
          <Link
            href="/"
            target="_blank"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-semibold"
          >
            Open Live Website <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Programmes List Overview */}
      <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Programmes in Database ({programs.length})
            </h2>
            <p className="text-xs text-zinc-400">
              Each programme has its own dynamic landing page at /programme/[slug]
            </p>
          </div>
          <Link
            href="/admin/programs/new"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#CD1D1D] hover:bg-red-700 text-white text-xs font-bold transition-all"
          >
            <FilePlus className="w-3.5 h-3.5" />
            + New Programme
          </Link>
        </div>

        {loading ? (
          <div className="py-8 text-center text-xs text-zinc-500 font-mono">
            Loading programmes...
          </div>
        ) : programs.length === 0 ? (
          <div className="py-8 text-center text-xs text-zinc-500 font-mono">
            No programmes found. Click &quot;Add New Programme&quot; to create one.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-zinc-800 text-zinc-400 font-mono uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">Programme</th>
                  <th className="py-3 px-4">Slug / Route</th>
                  <th className="py-3 px-4">Pillars</th>
                  <th className="py-3 px-4">Testimonials</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-medium">
                {programs.map((p) => (
                  <tr key={p.slug} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-bold text-white text-sm">{p.name}</div>
                      <div className="text-zinc-400 line-clamp-1 max-w-md text-xs mt-0.5">
                        {p.description}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-zinc-300">
                      <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-[11px]">
                        /{p.slug}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-zinc-300 font-mono">
                      {p.pillars?.length || 0} pillars
                    </td>
                    <td className="py-4 px-4 text-zinc-300 font-mono">
                      {p.testimonials?.length || 0} reviews
                    </td>
                    <td className="py-4 px-4 text-right space-x-2">
                      <Link
                        href={`/programme/${p.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Live
                      </Link>
                      <Link
                        href={`/admin/programs/${p.slug}/edit`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#CD1D1D]/20 hover:bg-[#CD1D1D] text-[#ff6b6b] hover:text-white border border-[#CD1D1D]/30 text-xs font-bold transition-all"
                      >
                        <Edit className="w-3 h-3" /> Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Blogs Overview */}
      <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Recent Articles ({blogs.length})
            </h2>
            <p className="text-xs text-zinc-400">
              Thought-leadership articles featured in the blogs section.
            </p>
          </div>
          <Link
            href="/admin/blogs/new"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-all"
          >
            <PenTool className="w-3.5 h-3.5" />
            + Write Article
          </Link>
        </div>

        {loading ? (
          <div className="py-6 text-center text-xs text-zinc-500 font-mono">
            Loading articles...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.slice(0, 6).map((b) => (
              <div
                key={b.id}
                className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl flex flex-col justify-between space-y-3 hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-[#ff6b6b] font-bold uppercase">{b.category}</span>
                    <span className="text-zinc-500">{b.date}</span>
                  </div>
                  <h3 className="font-bold text-white text-xs line-clamp-2 leading-snug">
                    {b.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                  <Link
                    href={`/blogs/${b.slug || b.id}`}
                    target="_blank"
                    className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" /> View
                  </Link>
                  <Link
                    href={`/admin/blogs/${b.id}/edit`}
                    className="text-[11px] text-[#ff6b6b] hover:underline font-bold"
                  >
                    Edit Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
