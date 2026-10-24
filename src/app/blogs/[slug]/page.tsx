import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogById, getBlogs } from "@/lib/storage";
import { ArrowLeft, Clock, Calendar, Tag, User } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Try by slug first, then fallback to id
  let blog = await getBlogBySlug(slug);
  if (!blog) {
    blog = await getBlogById(slug);
  }

  if (!blog) {
    notFound();
  }

  // Split content by paragraphs or headings for clean layout
  const paragraphs = blog.content ? blog.content.split("\n\n") : [];

  return (
    <article className="min-h-screen bg-[#FAF8F5] text-[#111] pt-32 pb-40 px-6 lg:px-12 relative">
      {/* Back button */}
      <div className="fixed top-6 left-6 sm:top-8 sm:left-10 z-[100]">
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111] hover:bg-[#CD1D1D] text-white transition-all shadow-lg font-helvetica font-bold text-xs sm:text-sm tracking-wider uppercase"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Articles</span>
        </Link>
      </div>

      <div className="container mx-auto max-w-4xl">
        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-courier text-[#CD1D1D] font-bold text-xs sm:text-sm tracking-widest uppercase bg-[#CD1D1D]/10 px-3 py-1 rounded-md">
            {blog.category}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <span className="font-courier text-zinc-500 font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {blog.date}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <span className="font-courier text-zinc-500 font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime || "5 min read"}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-helvetica font-black text-3xl sm:text-5xl lg:text-6xl text-[#111] tracking-tight leading-[1.05] mb-8">
          {blog.title}
        </h1>

        {/* Excerpt / Lead */}
        {blog.excerpt && (
          <p className="font-helvetica text-lg sm:text-2xl text-zinc-600 font-medium leading-relaxed mb-10 border-l-4 border-[#CD1D1D] pl-6 italic">
            {blog.excerpt}
          </p>
        )}

        {/* Cover Image */}
        {blog.img && (
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-14 bg-zinc-200">
            <Image
              src={blog.img}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-lg max-w-none font-helvetica space-y-6 text-zinc-800 leading-relaxed text-base sm:text-lg">
          {paragraphs.map((p, idx) => {
            if (p.startsWith("### ")) {
              return (
                <h3 key={idx} className="font-bold text-2xl text-[#111] pt-6 mb-2 tracking-tight">
                  {p.replace("### ", "")}
                </h3>
              );
            }
            if (p.startsWith("## ")) {
              return (
                <h2 key={idx} className="font-bold text-3xl text-[#111] pt-8 mb-3 tracking-tight">
                  {p.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            );
          })}
        </div>

        {/* Author Byline */}
        <div className="mt-16 pt-8 border-t border-zinc-300 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#CD1D1D] text-white flex items-center justify-center font-bold text-xl">
              Ω
            </div>
            <div>
              <div className="font-helvetica font-bold text-base text-[#111]">
                {blog.author || "Dr. Abdussalam Omar"}
              </div>
              <div className="text-xs text-zinc-500 font-mono tracking-wider uppercase">
                Global Leadership Coach & Strategist
              </div>
            </div>
          </div>

          <Link
            href="/blogs"
            className="px-5 py-2.5 rounded-full bg-[#111] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#CD1D1D] transition-colors"
          >
            All Articles
          </Link>
        </div>
      </div>
    </article>
  );
}
