"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Layers,
  FilePlus,
  BookOpen,
  PenTool,
  ExternalLink,
  LogOut,
  Shield,
  Sparkles,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (e) {
      console.error("Logout error:", e);
    }
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      label: "All Programmes",
      href: "/admin/programs",
      icon: Layers,
      exact: false,
    },
    {
      label: "Add Programme",
      href: "/admin/programs/new",
      icon: FilePlus,
      exact: true,
    },
    {
      label: "All Blogs",
      href: "/admin/blogs",
      icon: BookOpen,
      exact: false,
    },
    {
      label: "Write Blog",
      href: "/admin/blogs/new",
      icon: PenTool,
      exact: true,
    },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href) && (href !== "/admin" || pathname === "/admin");
  };

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800/80 flex flex-col justify-between h-screen sticky top-0 z-50">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-zinc-800/80">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#CD1D1D] to-rose-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-950/40 group-hover:scale-105 transition-transform">
              Ω
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white tracking-tight text-base">DR. OMAR</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#CD1D1D]/20 text-[#ff6b6b] border border-[#CD1D1D]/30">CMS</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono tracking-wider">FULLSTACK ADMIN</p>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1.5">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
            Navigation
          </div>
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-[#CD1D1D] text-white shadow-md shadow-red-950/30 font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? "text-white" : "text-zinc-400 group-hover:text-white"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Info & Logout */}
      <div className="p-4 border-t border-zinc-800/80 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            Live Website
          </span>
          <span className="text-[10px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            View
          </span>
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-lg transition-colors border border-red-900/30"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>

        <div className="pt-2 px-1 text-center">
          <p className="text-[10px] text-zinc-400 font-mono">
            v2.0 • Dynamic CMS
          </p>
        </div>
      </div>
    </aside>
  );
}
