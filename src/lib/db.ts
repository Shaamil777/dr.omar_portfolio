import { createClient, type Client, type InStatement, type ResultSet } from "@libsql/client";
import path from "path";
import fs from "fs/promises";
import type { CompanyData } from "@/constants/companies";
import type { BlogPost } from "./storage";

let _client: Client | null = null;

export function getDb(): Client | null {
  if (_client) return _client;
  try {
    const DB_FILE_PATH = path.join(process.cwd(), "src", "data", "dr_omar.db");
    const rawUrl = process.env.DATABASE_URL;

    // In serverless environments like Vercel without an external remote DATABASE_URL (e.g. libsql://),
    // skip local file SQLite to avoid EROFS and native addon failures
    if (process.env.VERCEL && (!rawUrl || rawUrl.startsWith("file:"))) {
      return null;
    }

    const dbUrl = rawUrl || `file:${DB_FILE_PATH}`;
    _client = createClient({ url: dbUrl });
    return _client;
  } catch (err) {
    console.warn("[SQL Database] Could not create database client:", err);
    return null;
  }
}

export const db = {
  execute: async (stmt: InStatement): Promise<ResultSet> => {
    const client = getDb();
    if (!client) {
      throw new Error("Database client not available in this environment");
    }
    return client.execute(stmt);
  },
};

let isInitialized = false;

/**
 * Initializes SQL tables and auto-migrates existing data if tables are empty.
 */
export async function initDatabase(): Promise<void> {
  if (isInitialized) return;
  const client = getDb();
  if (!client) return;

  try {
    // 1. Create programs table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS programs (
        id TEXT PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        category TEXT,
        tagline TEXT,
        data_json TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.execute(`
      CREATE INDEX IF NOT EXISTS idx_programs_slug ON programs(slug);
    `);

    // 2. Create blogs table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS blogs (
        id TEXT PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        category TEXT,
        date TEXT,
        img TEXT,
        excerpt TEXT,
        content TEXT,
        author TEXT,
        read_time TEXT,
        program_slug TEXT DEFAULT 'all',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.execute(`
      CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
    `);

    await db.execute(`
      CREATE INDEX IF NOT EXISTS idx_blogs_program_slug ON blogs(program_slug);
    `);

    // 3. Seed programs if table is empty
    const progCountRes = await db.execute("SELECT COUNT(*) as count FROM programs");
    const progCount = Number(progCountRes.rows[0]?.count ?? 0);

    if (progCount === 0) {
      try {
        const jsonPath = path.join(process.cwd(), "src", "data", "programs.json");
        const raw = await fs.readFile(jsonPath, "utf-8");
        const programs = JSON.parse(raw) as CompanyData[];
        for (const p of programs) {
          const id = p.slug;
          await db.execute({
            sql: `
              INSERT OR REPLACE INTO programs (id, slug, name, category, tagline, data_json)
              VALUES (?, ?, ?, ?, ?, ?)
            `,
            args: [
              id,
              p.slug,
              p.name,
              (p as unknown as Record<string, unknown>).category as string || "Mentorship",
              (p as unknown as Record<string, unknown>).tagline as string || p.description || "",
              JSON.stringify(p),
            ],
          });
        }
        console.log(`[SQL Database] Seeded ${programs.length} programs into SQL table.`);
      } catch (err) {
        console.warn("[SQL Database] Could not seed programs from JSON:", err);
      }
    }

    // 4. Seed blogs if table is empty
    const blogCountRes = await db.execute("SELECT COUNT(*) as count FROM blogs");
    const blogCount = Number(blogCountRes.rows[0]?.count ?? 0);

    if (blogCount === 0) {
      try {
        const jsonPath = path.join(process.cwd(), "src", "data", "blogs.json");
        const raw = await fs.readFile(jsonPath, "utf-8");
        const blogs = JSON.parse(raw) as BlogPost[];
        for (const b of blogs) {
          await db.execute({
            sql: `
              INSERT OR REPLACE INTO blogs (
                id, slug, title, category, date, img, excerpt, content, author, read_time, program_slug, created_at
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            args: [
              b.id.toString(),
              b.slug,
              b.title,
              b.category || "General",
              b.date || "",
              b.img || "",
              b.excerpt || "",
              b.content || "",
              b.author || "Dr. Abdussalam Omar",
              b.readTime || "5 min read",
              b.programSlug || "all",
              b.createdAt || new Date().toISOString(),
            ],
          });
        }
        console.log(`[SQL Database] Seeded ${blogs.length} blogs into SQL table.`);
      } catch (err) {
        console.warn("[SQL Database] Could not seed blogs from JSON:", err);
      }
    }

    isInitialized = true;
  } catch (err) {
    console.error("[SQL Database] Initialization error:", err);
  }
}

// ============================================================================
// SQL PROGRAM OPERATIONS
// ============================================================================

export async function getProgramsFromDB(): Promise<CompanyData[]> {
  await initDatabase();
  try {
    const res = await db.execute("SELECT data_json FROM programs ORDER BY created_at ASC");
    return res.rows.map((row) => JSON.parse(String(row.data_json)) as CompanyData);
  } catch (err) {
    console.error("[SQL Database] getProgramsFromDB error:", err);
    return [];
  }
}

export async function getProgramBySlugFromDB(slug: string): Promise<CompanyData | null> {
  await initDatabase();
  try {
    const normalized = slug.toLowerCase();
    const res = await db.execute({
      sql: "SELECT data_json FROM programs WHERE LOWER(slug) = ? OR LOWER(slug) = ? LIMIT 1",
      args: [normalized, normalized.replace(/-/g, "_")],
    });

    if (res.rows.length === 0) return null;
    return JSON.parse(String(res.rows[0].data_json)) as CompanyData;
  } catch (err) {
    console.error("[SQL Database] getProgramBySlugFromDB error:", err);
    return null;
  }
}

export async function saveProgramToDB(program: CompanyData): Promise<CompanyData> {
  await initDatabase();
  const id = program.slug;
  const dataJson = JSON.stringify(program);

  await db.execute({
    sql: `
      INSERT INTO programs (id, slug, name, category, tagline, data_json, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(slug) DO UPDATE SET
        name = excluded.name,
        category = excluded.category,
        tagline = excluded.tagline,
        data_json = excluded.data_json,
        updated_at = CURRENT_TIMESTAMP
    `,
    args: [
      id,
      program.slug,
      program.name,
      (program as unknown as Record<string, unknown>).category as string || "Mentorship",
      (program as unknown as Record<string, unknown>).tagline as string || program.description || "",
      dataJson,
    ],
  });

  return program;
}

export async function deleteProgramFromDB(slug: string): Promise<boolean> {
  await initDatabase();
  const res = await db.execute({
    sql: "DELETE FROM programs WHERE LOWER(slug) = ?",
    args: [slug.toLowerCase()],
  });
  return res.rowsAffected > 0;
}

// ============================================================================
// SQL BLOG OPERATIONS
// ============================================================================

export async function getBlogsFromDB(): Promise<BlogPost[]> {
  await initDatabase();
  try {
    const res = await db.execute(`
      SELECT 
        id, 
        slug, 
        title, 
        category, 
        date, 
        img, 
        excerpt, 
        content, 
        author, 
        read_time as readTime, 
        program_slug as programSlug, 
        created_at as createdAt
      FROM blogs 
      ORDER BY created_at DESC
    `);

    return res.rows.map((row) => ({
      id: String(row.id),
      slug: String(row.slug),
      title: String(row.title),
      category: String(row.category || "General"),
      date: String(row.date || ""),
      img: String(row.img || ""),
      excerpt: String(row.excerpt || ""),
      content: String(row.content || ""),
      author: String(row.author || "Dr. Abdussalam Omar"),
      readTime: String(row.readTime || "5 min read"),
      programSlug: String(row.programSlug || "all"),
      createdAt: String(row.createdAt || ""),
    }));
  } catch (err) {
    console.error("[SQL Database] getBlogsFromDB error:", err);
    return [];
  }
}

export async function getBlogByIdFromDB(id: string): Promise<BlogPost | null> {
  await initDatabase();
  try {
    const res = await db.execute({
      sql: `
        SELECT 
          id, slug, title, category, date, img, excerpt, content, author, 
          read_time as readTime, program_slug as programSlug, created_at as createdAt
        FROM blogs 
        WHERE id = ? 
        LIMIT 1
      `,
      args: [id.toString()],
    });

    if (res.rows.length === 0) return null;
    const row = res.rows[0];
    return {
      id: String(row.id),
      slug: String(row.slug),
      title: String(row.title),
      category: String(row.category || "General"),
      date: String(row.date || ""),
      img: String(row.img || ""),
      excerpt: String(row.excerpt || ""),
      content: String(row.content || ""),
      author: String(row.author || "Dr. Abdussalam Omar"),
      readTime: String(row.readTime || "5 min read"),
      programSlug: String(row.programSlug || "all"),
      createdAt: String(row.createdAt || ""),
    };
  } catch (err) {
    console.error("[SQL Database] getBlogByIdFromDB error:", err);
    return null;
  }
}

export async function getBlogBySlugFromDB(slug: string): Promise<BlogPost | null> {
  await initDatabase();
  try {
    const res = await db.execute({
      sql: `
        SELECT 
          id, slug, title, category, date, img, excerpt, content, author, 
          read_time as readTime, program_slug as programSlug, created_at as createdAt
        FROM blogs 
        WHERE LOWER(slug) = ? OR id = ?
        LIMIT 1
      `,
      args: [slug.toLowerCase(), slug],
    });

    if (res.rows.length === 0) return null;
    const row = res.rows[0];
    return {
      id: String(row.id),
      slug: String(row.slug),
      title: String(row.title),
      category: String(row.category || "General"),
      date: String(row.date || ""),
      img: String(row.img || ""),
      excerpt: String(row.excerpt || ""),
      content: String(row.content || ""),
      author: String(row.author || "Dr. Abdussalam Omar"),
      readTime: String(row.readTime || "5 min read"),
      programSlug: String(row.programSlug || "all"),
      createdAt: String(row.createdAt || ""),
    };
  } catch (err) {
    console.error("[SQL Database] getBlogBySlugFromDB error:", err);
    return null;
  }
}

export async function saveBlogToDB(blogData: Omit<BlogPost, "id"> & { id?: string }): Promise<BlogPost> {
  await initDatabase();
  const id = blogData.id || Date.now().toString();
  const slug =
    blogData.slug ||
    blogData.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const createdAt = blogData.createdAt || new Date().toISOString();

  await db.execute({
    sql: `
      INSERT INTO blogs (
        id, slug, title, category, date, img, excerpt, content, author, read_time, program_slug, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(id) DO UPDATE SET
        slug = excluded.slug,
        title = excluded.title,
        category = excluded.category,
        date = excluded.date,
        img = excluded.img,
        excerpt = excluded.excerpt,
        content = excluded.content,
        author = excluded.author,
        read_time = excluded.read_time,
        program_slug = excluded.program_slug,
        updated_at = CURRENT_TIMESTAMP
    `,
    args: [
      id.toString(),
      slug,
      blogData.title,
      blogData.category || "General",
      blogData.date || "",
      blogData.img || "",
      blogData.excerpt || "",
      blogData.content || "",
      blogData.author || "Dr. Abdussalam Omar",
      blogData.readTime || "5 min read",
      blogData.programSlug || "all",
      createdAt,
    ],
  });

  return {
    ...blogData,
    id: id.toString(),
    slug,
    createdAt,
  };
}

export async function deleteBlogFromDB(id: string): Promise<boolean> {
  await initDatabase();
  const res = await db.execute({
    sql: "DELETE FROM blogs WHERE id = ?",
    args: [id.toString()],
  });
  return res.rowsAffected > 0;
}
