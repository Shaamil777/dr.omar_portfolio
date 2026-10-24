import React from "react";
import { notFound } from "next/navigation";
import { getBlogById } from "@/lib/storage";
import BlogForm from "@/components/admin/BlogForm";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Edit Article
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          Make updates to the article content or publish settings.
        </p>
      </div>

      <BlogForm initialData={blog} isEdit={true} />
    </div>
  );
}
