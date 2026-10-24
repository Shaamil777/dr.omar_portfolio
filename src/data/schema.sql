-- ============================================================================
-- Dr. Abdussalam Omar Portfolio & CMS - SQL Database Schema
-- Compatible with SQLite, PostgreSQL, MySQL, LibSQL, Turso, Supabase, Neon
-- ============================================================================

-- 1. Programmes Table
CREATE TABLE IF NOT EXISTS programs (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT DEFAULT 'Mentorship',
  tagline TEXT,
  data_json TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_programs_slug ON programs(slug);

-- 2. Blogs / Articles Table
CREATE TABLE IF NOT EXISTS blogs (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'General',
  date TEXT,
  img TEXT,
  excerpt TEXT,
  content TEXT,
  author TEXT DEFAULT 'Dr. Abdussalam Omar',
  read_time TEXT DEFAULT '5 min read',
  program_slug TEXT DEFAULT 'all',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_program_slug ON blogs(program_slug);
