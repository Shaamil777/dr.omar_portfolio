import React from "react";
import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Write New Article
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          Draft a leadership perspective or security analysis for Dr. Omar&apos;s audience.
        </p>
      </div>

      <BlogForm isEdit={false} />
    </div>
  );
}
