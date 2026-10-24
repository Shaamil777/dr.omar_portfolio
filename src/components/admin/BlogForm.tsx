"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/lib/storage";
import {
  Save,
  ArrowLeft,
  Sparkles,
  Upload,
  CheckCircle2,
  AlertCircle,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

interface BlogFormProps {
  initialData?: BlogPost;
  isEdit?: boolean;
}

export default function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [programs, setPrograms] = useState<{ slug: string; name: string }[]>([]);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/admin/programs")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data) {
          setPrograms(json.data);
        }
      })
      .catch((err) => console.error("Error fetching programs:", err));
  }, []);

  const [formData, setFormData] = useState<Partial<BlogPost>>(
    initialData || {
      title: "",
      slug: "",
      category: "Leadership",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).toUpperCase(),
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      excerpt: "",
      content: "",
      author: "Dr. Abdussalam Omar",
      readTime: "5 min read",
      programSlug: "all",
    }
  );

  const generateSlugFromName = () => {
    if (!formData.title) return;
    const generated = formData.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setFormData((prev) => ({ ...prev, slug: generated }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success && result.url) {
        setFormData({ ...formData, img: result.url });
        setStatusMessage({
          type: "success",
          text: `Image uploaded successfully: ${result.fileName}`,
        });
      } else {
        setStatusMessage({
          type: "error",
          text: result.error || "Upload failed",
        });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({ type: "error", text: "Error uploading image" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage(null);

    if (!formData.title?.trim()) {
      setStatusMessage({
        type: "error",
        text: "Blog Title is required.",
      });
      setSaving(false);
      return;
    }

    try {
      const url = isEdit
        ? `/api/admin/blogs/${initialData?.id}`
        : "/api/admin/blogs";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: isEdit
            ? "Article updated successfully!"
            : "Article published successfully!",
        });
        setTimeout(() => {
          router.push("/admin/blogs");
          router.refresh();
        }, 1200);
      } else {
        setStatusMessage({
          type: "error",
          text: result.error || "Failed to save article.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({
        type: "error",
        text: "A network or server error occurred.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-24">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/90 border border-zinc-800 p-5 rounded-2xl sticky top-24 z-30 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h2 className="text-base font-bold text-white">
              {isEdit ? "Edit Article" : "Write New Blog Article"}
            </h2>
            <p className="text-xs text-zinc-400 font-mono">
              /blogs/{formData.slug || "..."}
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2 text-sm font-bold rounded-lg bg-[#CD1D1D] hover:bg-red-700 text-white shadow-lg shadow-red-950/40 transition-all disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? "Publishing..." : isEdit ? "Save Changes" : "Publish Article"}
        </button>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
            statusMessage.type === "success"
              ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800/60"
              : "bg-red-950/40 text-red-300 border border-red-800/60"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Main Form Body */}
      <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
            Article Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g. The 5 Pillars of Scaling Without Losing Your Soul"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-[#CD1D1D] transition-colors"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                Slug (URL Identifier)
              </label>
              <button
                type="button"
                onClick={generateSlugFromName}
                className="text-[11px] text-[#ff6b6b] hover:underline flex items-center gap-1 font-mono"
              >
                <Sparkles className="w-3 h-3" /> Auto
              </button>
            </div>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="e.g. 5-pillars-of-scaling"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-[#CD1D1D]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Category
            </label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g. Leadership, Strategy"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#CD1D1D]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Show in Programme Page
            </label>
            <select
              value={formData.programSlug || "all"}
              onChange={(e) => setFormData({ ...formData, programSlug: e.target.value })}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#CD1D1D] cursor-pointer"
            >
              <option value="all">All Programmes</option>
              <option value="none">None (General Blog Only)</option>
              {programs.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} ({p.slug})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Publish Date
            </label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              placeholder="e.g. OCT 24, 2026"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#CD1D1D]"
            />
          </div>
        </div>

        {/* Cover Image & Read Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Cover Image URL or File Upload
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.img}
                onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#CD1D1D]"
              />
              <label className="px-3.5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Read Time
            </label>
            <input
              type="text"
              value={formData.readTime}
              onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
              placeholder="e.g. 5 min read"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#CD1D1D]"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
            Short Excerpt / Preview Summary
          </label>
          <textarea
            rows={2}
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="A compelling 1-2 sentence hook for the listing card..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#CD1D1D] leading-relaxed"
          />
        </div>

        {/* Full Article Content */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
              Full Article Body (Supports Markdown & Headings)
            </label>
            <span className="text-[11px] text-zinc-400 font-mono">
              Use # for H1, ## for H2, - for bullet points
            </span>
          </div>
          <textarea
            rows={14}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Write the full thought-leadership article here..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-100 font-sans focus:outline-none focus:border-[#CD1D1D] leading-relaxed"
          />
        </div>
      </div>
    </form>
  );
}
