"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/storage";
import {
  Plus,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  AlertCircle,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [programs, setPrograms] = useState<{ slug: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/blogs");
      const json = await res.json();
      if (json.success) setBlogs(json.data);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to load blogs" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetch("/api/admin/programs")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data) setPrograms(json.data);
      })
      .catch((err) => console.error("Error loading programs:", err));
  }, []);

  const handleProgramChange = async (id: string, programSlug: string) => {
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programSlug }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setBlogs((prev) =>
          prev.map((b) =>
            b.id.toString() === id.toString() ? { ...b, programSlug } : b
          )
        );
        setMessage({
          type: "success",
          text: "Updated target programme for article.",
        });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({
          type: "error",
          text: json.error || "Failed to update target programme.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Network error updating target programme.",
      });
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      const json = await res.json();

      if (res.ok && json.success) {
        setMessage({ type: "success", text: "Article deleted successfully." });
        setBlogs((prev) => prev.filter((b) => b.id.toString() !== id.toString()));
      } else {
        setMessage({ type: "error", text: json.error || "Failed to delete article" });
      }
    } catch {
      setMessage({ type: "error", text: "Network error while deleting article" });
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            Articles & Insights ({blogs.length})
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Publish thought-leadership articles, executive insights, and security perspectives.
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#CD1D1D] hover:bg-red-700 text-white text-xs font-bold shadow-lg shadow-red-950/40 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Write New Article
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
          placeholder="Search articles by title, category, or keyword..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-[#CD1D1D] transition-colors"
        />
      </div>

      {/* Blogs List */}
      {loading ? (
        <div className="py-12 text-center text-xs text-zinc-500 font-mono">
          Loading articles from database...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-12 text-center space-y-4">
          <BookOpen className="w-12 h-12 text-zinc-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No Articles Found</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Write your first thought leadership article to feature in Dr. Omar&apos;s blog.
          </p>
          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#CD1D1D] text-white text-xs font-bold"
          >
            <Plus className="w-4 h-4" /> Write Article
          </Link>
        </div>
      ) : (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-zinc-800 bg-zinc-950/60 text-zinc-400 font-mono uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3.5 px-6">Article</th>
                <th className="py-3.5 px-6">Category</th>
                <th className="py-3.5 px-6">Show in Programme</th>
                <th className="py-3.5 px-6">Published Date</th>
                <th className="py-3.5 px-6">Read Time</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-medium">
              {filtered.map((blog) => (
                <tr key={blog.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-4 px-6 max-w-md">
                    <div className="font-bold text-white text-sm line-clamp-1">
                      {blog.title}
                    </div>
                    {blog.excerpt && (
                      <div className="text-zinc-400 line-clamp-1 text-xs mt-0.5">
                        {blog.excerpt}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[#ff6b6b] text-[11px] font-mono uppercase font-bold">
                      {blog.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={blog.programSlug || "all"}
                      onChange={(e) => handleProgramChange(blog.id, e.target.value)}
                      className="bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 font-medium focus:border-[#CD1D1D] focus:outline-none cursor-pointer"
                    >
                      <option value="all">All Programmes</option>
                      <option value="none">None (General Only)</option>
                      {programs.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.name} ({p.slug})
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-4 px-6 font-mono text-zinc-300">
                    {blog.date}
                  </td>
                  <td className="py-4 px-6 font-mono text-zinc-400">
                    {blog.readTime || "5 min read"}
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    <Link
                      href={`/blogs/${blog.slug || blog.id}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" /> View
                    </Link>
                    <Link
                      href={`/admin/blogs/${blog.id}/edit`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#CD1D1D]/20 hover:bg-[#CD1D1D] text-[#ff6b6b] hover:text-white border border-[#CD1D1D]/30 text-xs font-bold transition-all"
                    >
                      <Edit className="w-3 h-3" /> Edit
                    </Link>
                    <button
                      type="button"
                      disabled={deletingId === blog.id}
                      onClick={() => handleDelete(blog.id, blog.title)}
                      className="inline-flex items-center p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors disabled:opacity-50"
                      title="Delete Article"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
