import fs from "fs/promises";
import path from "path";
import { CompanyData } from "@/constants/companies";
import initialPrograms from "@/data/programs.json";
import initialBlogs from "@/data/blogs.json";
import {
  getProgramsFromDB,
  getProgramBySlugFromDB,
  saveProgramToDB,
  deleteProgramFromDB,
  getBlogsFromDB,
  getBlogByIdFromDB,
  getBlogBySlugFromDB,
  saveBlogToDB,
  deleteBlogFromDB,
} from "./db";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  img: string;
  excerpt: string;
  content: string;
  author?: string;
  readTime?: string;
  createdAt?: string;
  programSlug?: string;
};

const PROGRAMS_FILE = path.join(process.cwd(), "src", "data", "programs.json");
const BLOGS_FILE = path.join(process.cwd(), "src", "data", "blogs.json");

// Helper to ensure JSON mirror backup file exists (only called on writes)
async function ensureFile(filePath: string, defaultData: unknown) {
  try {
    await fs.access(filePath);
  } catch {
    try {
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), "utf-8");
    } catch (e) {
      console.warn("[Storage] Could not create fallback file on read-only system:", e);
    }
  }
}

// ============================================================================
// PROGRAM STORAGE (SQL Primary with JSON Mirror Backup)
// ============================================================================

export async function getPrograms(): Promise<CompanyData[]> {
  try {
    const dbPrograms = await getProgramsFromDB();
    if (dbPrograms && dbPrograms.length > 0) {
      return dbPrograms;
    }
  } catch (error) {
    console.warn("[Storage] SQL getPrograms error, checking fallback:", error);
  }

  // Fallback to local JSON file if readable on disk
  try {
    const data = await fs.readFile(PROGRAMS_FILE, "utf-8");
    const parsed = JSON.parse(data) as CompanyData[];
    if (parsed && parsed.length > 0) return parsed;
  } catch {
    // fs.readFile not available on read-only serverless/Vercel
  }

  // Guaranteed bundled fallback with latest programs
  return (initialPrograms as CompanyData[]) || [];
}

export async function getProgramBySlug(slug: string): Promise<CompanyData | null> {
  try {
    const dbProg = await getProgramBySlugFromDB(slug);
    if (dbProg) return dbProg;
  } catch (error) {
    console.error("[Storage] SQL getProgramBySlug error, checking fallback:", error);
  }

  // Fallback to in-memory lookup from getPrograms()
  const programs = await getPrograms();
  const normalized = slug.toLowerCase();
  return (
    programs.find(
      (p) =>
        p.slug.toLowerCase() === normalized ||
        p.slug.toLowerCase().replace(/_/g, "-") === normalized ||
        p.slug.toLowerCase().replace(/-/g, "_") === normalized
    ) || null
  );
}

export async function saveProgram(program: CompanyData): Promise<CompanyData> {
  // 1. Save to SQL database
  try {
    await saveProgramToDB(program);
  } catch (err) {
    console.error("[Storage] SQL saveProgramToDB error:", err);
  }

  // 2. Mirror to JSON file
  try {
    await ensureFile(PROGRAMS_FILE, []);
    const data = await fs.readFile(PROGRAMS_FILE, "utf-8").catch(() => "[]");
    const programs = (JSON.parse(data) as CompanyData[]) || [];
    const index = programs.findIndex(
      (p) => p.slug.toLowerCase() === program.slug.toLowerCase()
    );

    if (index >= 0) {
      programs[index] = { ...programs[index], ...program };
    } else {
      programs.push(program);
    }

    await fs.writeFile(PROGRAMS_FILE, JSON.stringify(programs, null, 2), "utf-8");
  } catch (err) {
    console.error("[Storage] JSON mirror error for programs:", err);
  }

  return program;
}

export async function deleteProgram(slug: string): Promise<boolean> {
  let sqlDeleted = false;
  try {
    sqlDeleted = await deleteProgramFromDB(slug);
  } catch (err) {
    console.error("[Storage] SQL deleteProgramFromDB error:", err);
  }

  // Also remove from JSON mirror
  try {
    const data = await fs.readFile(PROGRAMS_FILE, "utf-8").catch(() => "[]");
    const programs = (JSON.parse(data) as CompanyData[]) || [];
    const filtered = programs.filter(
      (p) => p.slug.toLowerCase() !== slug.toLowerCase()
    );
    await fs.writeFile(PROGRAMS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  } catch (err) {
    console.error("[Storage] JSON mirror delete error:", err);
  }

  return sqlDeleted;
}

// ============================================================================
// BLOG STORAGE (SQL Primary with JSON Mirror Backup)
// ============================================================================

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const dbBlogs = await getBlogsFromDB();
    if (dbBlogs && dbBlogs.length > 0) {
      return dbBlogs;
    }
  } catch (error) {
    console.warn("[Storage] SQL getBlogs error, checking fallback:", error);
  }

  // Fallback to local JSON file if readable on disk
  try {
    const data = await fs.readFile(BLOGS_FILE, "utf-8");
    const parsed = JSON.parse(data) as BlogPost[];
    if (parsed && parsed.length > 0) return parsed;
  } catch {
    // fs.readFile not available on read-only serverless/Vercel
  }

  return (initialBlogs as BlogPost[]) || [];
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  try {
    const dbBlog = await getBlogByIdFromDB(id);
    if (dbBlog) return dbBlog;
  } catch (error) {
    console.error("[Storage] SQL getBlogById error:", error);
  }

  const blogs = await getBlogs();
  return blogs.find((b) => b.id.toString() === id.toString()) || null;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const dbBlog = await getBlogBySlugFromDB(slug);
    if (dbBlog) return dbBlog;
  } catch (error) {
    console.error("[Storage] SQL getBlogBySlug error:", error);
  }

  const blogs = await getBlogs();
  return blogs.find((b) => b.slug.toLowerCase() === slug.toLowerCase()) || null;
}

export async function saveBlog(blogData: Omit<BlogPost, "id"> & { id?: string }): Promise<BlogPost> {
  let savedBlog: BlogPost;

  // 1. Save to SQL database
  try {
    savedBlog = await saveBlogToDB(blogData);
  } catch (err) {
    console.error("[Storage] SQL saveBlogToDB error:", err);
    const id = blogData.id || Date.now().toString();
    const slug =
      blogData.slug ||
      blogData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

    savedBlog = {
      ...blogData,
      id,
      slug,
      createdAt: blogData.createdAt || new Date().toISOString(),
    };
  }

  // 2. Mirror to JSON file
  try {
    await ensureFile(BLOGS_FILE, []);
    const data = await fs.readFile(BLOGS_FILE, "utf-8").catch(() => "[]");
    const blogs = (JSON.parse(data) as BlogPost[]) || [];
    const index = blogs.findIndex((b) => b.id.toString() === savedBlog.id.toString());

    if (index >= 0) {
      blogs[index] = { ...blogs[index], ...savedBlog };
    } else {
      blogs.unshift(savedBlog);
    }

    await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2), "utf-8");
  } catch (err) {
    console.error("[Storage] JSON mirror error for blogs:", err);
  }

  return savedBlog;
}

export async function deleteBlog(id: string): Promise<boolean> {
  let sqlDeleted = false;
  try {
    sqlDeleted = await deleteBlogFromDB(id);
  } catch (err) {
    console.error("[Storage] SQL deleteBlogFromDB error:", err);
  }

  // Also remove from JSON mirror
  try {
    const data = await fs.readFile(BLOGS_FILE, "utf-8").catch(() => "[]");
    const blogs = (JSON.parse(data) as BlogPost[]) || [];
    const filtered = blogs.filter((b) => b.id.toString() !== id.toString());
    await fs.writeFile(BLOGS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  } catch (err) {
    console.error("[Storage] JSON mirror delete error:", err);
  }

  return sqlDeleted;
}
