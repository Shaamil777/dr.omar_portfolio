import React from "react";
import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Admin CMS | Dr. Abdussalam Omar",
  description: "Executive Portal for managing dynamic programmes and blogs.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-admin="true" className="admin-root w-full min-h-screen">
      <style>{`
        html, html body, body, .admin-root, [data-admin="true"] {
          cursor: auto !important;
        }
        .admin-root, .admin-root * {
          cursor: auto !important;
        }
        .admin-root a,
        .admin-root button,
        .admin-root [role="button"],
        .admin-root select,
        .admin-root label,
        .admin-root summary,
        .admin-root input[type="file"],
        .admin-root input[type="checkbox"],
        .admin-root input[type="radio"],
        .admin-root input[type="button"],
        .admin-root input[type="submit"] {
          cursor: pointer !important;
        }
        .admin-root input,
        .admin-root textarea,
        .admin-root [contenteditable="true"] {
          cursor: text !important;
        }
        .admin-root button:disabled,
        .admin-root input:disabled {
          cursor: not-allowed !important;
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              document.documentElement.classList.add('admin-mode');
              if (document.body) {
                document.body.classList.add('admin-mode');
                document.body.style.cursor = 'auto';
              }
            } catch (e) {}
          `,
        }}
      />
      <AdminShell>{children}</AdminShell>
    </div>
  );
}
