import { NextResponse } from "next/server";
import { getBlogs, saveBlog, BlogPost } from "@/lib/storage";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  try {
    const blogs = await getBlogs();
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const isAuth = await getAdminSession();
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as Partial<BlogPost>;

    if (!body.title) {
      return NextResponse.json(
        { error: "Blog title is required" },
        { status: 400 }
      );
    }

    const newBlog = await saveBlog({
      title: body.title,
      slug: body.slug || "",
      category: body.category || "General",
      date:
        body.date ||
        new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }).toUpperCase(),
      img:
        body.img ||
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      excerpt: body.excerpt || "",
      content: body.content || "",
      author: body.author || "Dr. Abdussalam Omar",
      readTime: body.readTime || "5 min read",
      programSlug: body.programSlug || "all",
    });

    return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
