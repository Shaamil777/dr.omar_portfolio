"use client";

import React from "react";
import Link from "next/link";
import { Plus, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";

export default function AdminHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}) {
  return (
    <header className="h-20 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-40">
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-zinc-400 mt-0.5 font-medium">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        {actions}
        <div className="h-6 w-px bg-zinc-800 mx-1 hidden sm:block" />
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-mono text-[11px]">admin:active</span>
        </div>
      </div>
    </header>
  );
}
