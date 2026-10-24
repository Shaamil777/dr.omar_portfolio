"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    document.documentElement.classList.add("admin-mode");
    document.body.classList.add("admin-mode");
    document.documentElement.style.cursor = "auto";
    document.body.style.cursor = "auto";
    return () => {
      document.documentElement.classList.remove("admin-mode");
      document.body.classList.remove("admin-mode");
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
    };
  }, []);

  useEffect(() => {
    if (isLoginPage) {
      setCheckingAuth(false);
      return;
    }

    const verifyAuth = async () => {
      try {
        const res = await fetch("/api/admin/me");
        if (!res.ok) {
          router.push("/admin/login");
        } else {
          setCheckingAuth(false);
        }
      } catch {
        router.push("/admin/login");
      }
    };

    verifyAuth();
  }, [pathname, isLoginPage, router]);

  const adminStyle = (
    <style dangerouslySetInnerHTML={{ __html: `
      html.admin-mode, body.admin-mode, .admin-root, .admin-root * {
        cursor: auto !important;
      }
      .admin-root a, .admin-root button, .admin-root [role="button"], .admin-root select, .admin-root label {
        cursor: pointer !important;
      }
      .admin-root input, .admin-root textarea {
        cursor: text !important;
      }
    `}} />
  );

  if (isLoginPage) {
    return (
      <div className="admin-root">
        {adminStyle}
        {children}
      </div>
    );
  }

  if (checkingAuth) {
    return (
      <div className="admin-root min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        {adminStyle}
        <div className="w-8 h-8 border-2 border-[#CD1D1D] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-xs text-zinc-400 font-mono">Verifying admin session...</p>
      </div>
    );
  }

  return (
    <div className="admin-root min-h-screen bg-zinc-950 text-white flex">
      {adminStyle}
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        <main className="flex-1 p-6 lg:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
