"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CompanyData } from "@/constants/companies";
import {
  Save,
  ArrowLeft,
  Sparkles,
  Plus,
  Trash2,
  Upload,
  Layers,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Copy,
  Users,
  Compass,
  Star,
  MessageSquare,
  Building2,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProgramFormProps {
  initialData?: CompanyData;
  isEdit?: boolean;
}

const DEFAULT_OWNED_COMPANIES = [
  { name: "BCC", logo: "/logos/BCC/bcc.png" },
  { name: "Business Immersion", logo: "/logos/BI/bi_light.png" },
  { name: "Deep Immersion", logo: "/logos/DI/di_light.png" },
  { name: "Emotional Intelligence", logo: "/logos/EI/ei_light.png" },
  { name: "Human Excellence Academy", logo: "/logos/HEA/hea_light.png" },
  { name: "Master Deep Immersion", logo: "/logos/MDI/mdi_liight.png" },
  { name: "OATHMEN", logo: "/logos/OATHMEN/oathmen_light.png" },
  { name: "Teens Immersion", logo: "/logos/TI/ti_light.png" },
];

function CharCount({ current = 0, max }: { current?: number; max: number }) {
  const isNear = current >= max * 0.85;
  const isMax = current >= max;
  return (
    <span
      className={`text-[10px] font-mono tracking-tight px-1.5 py-0.5 rounded transition-colors ${
        isMax
          ? "bg-red-950/80 text-red-400 font-bold border border-red-800/60"
          : isNear
          ? "bg-amber-950/60 text-amber-400 font-medium border border-amber-800/40"
          : "text-zinc-500 bg-zinc-900/60"
      }`}
    >
      {current}/{max}
    </span>
  );
}

export default function ProgramForm({ initialData, isEdit = false }: ProgramFormProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    | "basic"
    | "about"
    | "pillars"
    | "ecosystem"
    | "owned"
    | "story"
    | "gallery"
    | "testimonials"
    | "faqs"
  >("basic");

  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Form State
  const [formData, setFormData] = useState<CompanyData>(
    initialData || {
      slug: "",
      name: "",
      description: "",
      aboutTitle: "About Business Coaching Club",
      aboutImage: "/images/programmes/bcc-about-bg.webp",
      aboutParagraphs: [
        "Business Coaching Club (BCC) is a year-long mentorship and business networking ecosystem designed to help entrepreneurs grow their businesses in a structured, sustainable, and ethical way.",
        "It focuses on transforming business owners into purpose-driven leaders who can scale their companies while maintaining balance in life values and spirituality.",
      ],
      missionVisionTagline: "PURPOSE & VISION",
      missionVisionHeading: [
        "Grow with clarity",
        "Lead with confidence",
        "Build a lasting legacy",
      ],
      missionVisionDesc:
        "To empower business owners to grow with clarity, lead with confidence, and build enduring legacies through a year-long ecosystem of structured mentorship, ethical leadership, and collaborative learning.",
      stats: [
        {
          value: "8,000+",
          label: "Entrepreneurs & families mentored across Asia & the Middle East.",
        },
        {
          value: "100+",
          label: "Companies guided to restructure for growth, valuation & funding.",
        },
      ],
      mission:
        "To provide an immersive, year-long mentorship platform that integrates business systems, leadership intelligence, and personal mastery enabling entrepreneurs to scale sustainably with integrity and impact.",
      vision:
        "To build a global community of ethical and visionary entrepreneurs who create businesses that serve humanity, sustain growth across generations, and embody the principles of purpose, peace, and prosperity.",
      missionVisionImages: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      ],
      pillarsTagline: "THE CORE FRAMEWORK",
      pillarsSubtitle: "BCC Pillars",
      pillars: [
        {
          title: "Ethical Leadership & Purpose-Driven Growth",
          focus: "Integrity, Values, and Visionary Governance",
          concept:
            "Building a business that stands on truth, moral strength, and transparency. Moving beyond pure profit to create real societal value, uplift people, and lead with purpose.",
          icon: "shield",
          image: "/images/programmes/highlite1.webp",
        },
        {
          title: "Scalable Systems, Automation & Business Structuring",
          focus: "Operational Excellence, Systemization, and PE/IPO Readiness",
          concept:
            "Transitioning from a founder-led business to a system-driven enterprise. Setting up SOPs, dashboards, and scalable architectures that make companies ready for growth, funding, and long-term valuation.",
          icon: "layers",
          image: "/images/programmes/highlite2.webp",
        },
      ],
      ecosystemTagline: "WHAT YOU GET",
      ecosystemTitle: "The Ecosystem",
      ecosystemMediaImage:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
      features: [
        {
          icon: "users",
          title: "Global Mastermind",
          description:
            "Join an elite network of visionary founders and industry leaders from across the globe.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        },
        {
          icon: "target",
          title: "Strategic Mentorship",
          description:
            "1-on-1 guidance from veterans who have scaled multi-million dollar enterprises.",
          image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        },
      ],
      ownedCompaniesTagline: "Dr. Omar's Ecosystem",
      ownedCompaniesHeading: "Companies Dr. Omar Owns and Leads",
      ownedCompanies: DEFAULT_OWNED_COMPANIES,
      story: {
        tagline: "OUR STORY // THE JOURNEY",
        heading: "A Legacy Forged Through Purpose & Transformation",
        description:
          "How a vision of ethical leadership evolved into a multi-national ecosystem empowering thousands of entrepreneurs to achieve scale without sacrificing their values.",
        chapters: [
          {
            chapter: "01",
            tag: "THE GENESIS",
            title: "The Spark That Redefined Entrepreneurship",
            description:
              "Business Coaching Club was born from a pivotal realization: rapid enterprise expansion should never come at the expense of personal values, family harmony, or spiritual peace.",
            quote:
              "A true leader does not merely construct profitable businesses; they build enduring institutions anchored in integrity and purpose.",
            image: "/images/about/brandmount.webp",
            caption: "DR. OMAR DELIVERING THE INAUGURAL ADDRESS",
          },
        ],
      },
      galleryTagline: "GALLERY // EXPERIENCE",
      galleryTitle: "Witness the\nTransformation",
      galleryDescription:
        "Take an inside look at our immersive retreats, hands-on masterclasses, and powerful mentorship sessions. Every moment is designed to push your boundaries and unlock your ultimate potential.",
      galleryStats: [
        { value: "50+", label: "Global Retreats" },
        { value: "10k", label: "Lives Changed" },
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
          alt: "Mentorship Session",
          caption: "01 // ONE-ON-ONE MENTORSHIP",
        },
        {
          url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
          alt: "Masterclass",
          caption: "02 // GLOBAL MASTERCLASS",
        },
      ],
      highlights: [
        { stat: "$1B+", label: "Generated in Client Revenue" },
        { stat: "50+", label: "Countries Represented" },
        { stat: "8,000+", label: "Founders Mentored" },
        { stat: "100%", label: "Commitment to Excellence" },
      ],
      testimonialsTagline: "THE ALUMNI",
      testimonialsHeading: "Leaders Who Scaled",
      testimonialsRatingText: "4.9/5 Average Rating",
      testimonials: [
        {
          name: "Sarah Jenkins",
          role: "CEO, TechFlow",
          quote:
            "BCC completely rewired how I approach scaling. We 10x'd our valuation in under 14 months.",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
          rating: 5,
        },
      ],
      faqTagline: "FAQ",
      faqHeading: "Frequently\nAsked\nQuestions",
      faqs: [
        {
          question: "Who is the Business Coaching Club (BCC) for?",
          answer:
            "BCC is designed for established entrepreneurs, founders, and business owners who are looking to scale their operations, restructure for valuation, and build a lasting legacy with purpose.",
        },
      ],
      blogsTagline: "INSIGHTS",
      blogsHeading: "Latest Case\nStudies",
      blogs: [
        {
          title: "The 5 Pillars of Scaling Without Losing Your Soul",
          category: "LEADERSHIP",
          description:
            "An experienced perspective on maintaining balance and values while driving exponential corporate valuation.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
          date: "OCT 12, 2026",
        },
      ],
      closing: {
        tagline: "THE NEXT STEP",
        heading: "Are You\nReady to\nScale?",
        description:
          "Join the elite network inside the Business Coaching Club and begin your transformational journey.",
        cta: "Join The Program",
      },
      components: ["Hero", "About", "Testimonial", "UpcomingEvents"],
    }
  );

  // Helper to prefill template from BCC
  const handleLoadBccTemplate = async () => {
    try {
      const res = await fetch("/api/admin/programs/bcc");
      const json = await res.json();
      if (json.success && json.data) {
        setFormData({
          ...json.data,
          slug: isEdit ? formData.slug : `${json.data.slug}_copy`,
          name: isEdit ? formData.name : `${json.data.name} (Copy)`,
        });
        setStatusMessage({
          type: "success",
          text: "BCC template with all sections loaded successfully!",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Could not fetch BCC template.",
      });
    }
  };

  // Upload handler
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    onUploaded: (url: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success && result.url) {
        onUploaded(result.url);
        setStatusMessage({
          type: "success",
          text: `File uploaded successfully: ${result.fileName}`,
        });
      } else {
        setStatusMessage({
          type: "error",
          text: result.error || "Upload failed",
        });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({ type: "error", text: "Error uploading image" });
    }
  };

  // Slug generator
  const generateSlugFromName = () => {
    if (!formData.name) return;
    const generated = formData.name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "_")
      .replace(/^_+|_+$/g, "");
    setFormData((prev) => ({ ...prev, slug: generated }));
  };

  // Save handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage(null);

    if (!formData.name.trim() || !formData.slug.trim()) {
      setStatusMessage({
        type: "error",
        text: "Program Name and Slug are required.",
      });
      setSaving(false);
      return;
    }

    try {
      const url = isEdit
        ? `/api/admin/programs/${formData.slug}`
        : "/api/admin/programs";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: isEdit
            ? "Programme updated successfully!"
            : "Programme created successfully!",
        });
        setTimeout(() => {
          router.push("/admin/programs");
          router.refresh();
        }, 800);
      } else {
        setStatusMessage({
          type: "error",
          text: result.error || "Failed to save programme.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error saving programme.",
      });
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: "basic", label: "1. Core & Hero" },
    { id: "about", label: "2. About & Vision" },
    { id: "pillars", label: "3. Framework Pillars" },
    { id: "ecosystem", label: "4. The Ecosystem" },
    { id: "owned", label: "5. Dr. Omar's Companies" },
    { id: "story", label: "6. Journey & Story" },
    { id: "gallery", label: "7. Gallery & Media" },
    { id: "testimonials", label: "8. Alumni & Reviews" },
    { id: "faqs", label: "9. FAQs & Case Studies" },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-24">
      {/* Top Sticky Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/90 border border-zinc-800 p-5 rounded-2xl sticky top-24 z-30 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/programs"
            className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h2 className="text-base font-bold text-white">
              {isEdit ? `Edit Programme: ${formData.name}` : "Create New Programme"}
            </h2>
            <p className="text-xs text-zinc-400 font-mono">
              slug: /programme/{formData.slug || "..."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!isEdit && (
            <button
              type="button"
              onClick={handleLoadBccTemplate}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-700 border border-zinc-700 transition-all cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-amber-400" />
              Prefill with BCC Template
            </button>
          )}

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 text-sm font-bold rounded-lg bg-[#CD1D1D] hover:bg-red-700 text-white shadow-lg shadow-red-950/40 transition-all disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : isEdit ? "Save Changes" : "Publish Programme"}
          </button>
        </div>
      </div>

      {/* Notifications */}
      {statusMessage && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
            statusMessage.type === "success"
              ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800/60"
              : "bg-red-950/40 text-red-300 border border-red-800/60"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto gap-2 border-b border-zinc-800 pb-3 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#CD1D1D] text-white shadow-md shadow-red-950/30"
                : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* BCC Layout Safety Guidance */}
      <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>
            <strong className="text-zinc-200">Design Layout Safety:</strong> Character counts are constrained to BCC proportions to maintain visual symmetry and typography scales.
          </span>
        </div>
        <span className="font-mono text-[10px] text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 self-start sm:self-auto">
          Calibrated to BCC Baseline
        </span>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: CORE & HERO */}
      {/* ============================================================== */}
      {activeTab === "basic" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold text-white border-b border-zinc-800 pb-3">
            Core Programme Information & Hero
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Programme Name *
                </label>
                <CharCount current={formData.name?.length || 0} max={35} />
              </div>
              <input
                type="text"
                value={formData.name}
                maxLength={35}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Business Coaching Club"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CD1D1D]"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                    URL Slug (Unique ID) *
                  </label>
                  <CharCount current={formData.slug?.length || 0} max={25} />
                </div>
                {!isEdit && (
                  <button
                    type="button"
                    onClick={generateSlugFromName}
                    className="text-[11px] text-[#ff6b6b] hover:underline flex items-center gap-1 font-mono cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" /> Auto from Name
                  </button>
                )}
              </div>
              <input
                type="text"
                value={formData.slug}
                maxLength={25}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g. bcc"
                disabled={isEdit}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-[#CD1D1D] disabled:opacity-60"
                required
              />
              <p className="text-[11px] text-zinc-500 mt-1 font-mono">
                Accessible at: /programme/{formData.slug || "[slug]"}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                Short Description / Summary
              </label>
              <CharCount current={formData.description?.length || 0} max={200} />
            </div>
            <textarea
              rows={3}
              value={formData.description}
              maxLength={200}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="A concise overview of the programme..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#CD1D1D] leading-relaxed"
            />
          </div>

          {/* Hero Highlights Counters */}
          <div className="pt-6 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Hero Metrics & Impact Stats
                </h4>
                <p className="text-xs text-zinc-400">
                  Counters displayed in the hero section chips (Max 10 chars for metric, 35 chars for label).
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    highlights: [
                      ...(formData.highlights || []),
                      { stat: "100+", label: "New Metric" },
                    ],
                  })
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Metric
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(formData.highlights || []).map((h, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 items-center bg-zinc-950 border border-zinc-800 p-3 rounded-xl"
                >
                  <div className="relative">
                    <input
                      type="text"
                      value={h.stat}
                      maxLength={10}
                      onChange={(e) => {
                        const updated = [...(formData.highlights || [])];
                        updated[idx].stat = e.target.value;
                        setFormData({ ...formData, highlights: updated });
                      }}
                      placeholder="$1B+"
                      className="w-24 bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-bold"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={h.label}
                      maxLength={35}
                      onChange={(e) => {
                        const updated = [...(formData.highlights || [])];
                        updated[idx].label = e.target.value;
                        setFormData({ ...formData, highlights: updated });
                      }}
                      placeholder="Metric Label..."
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-zinc-300"
                    />
                  </div>
                  <CharCount current={h.label?.length || 0} max={35} />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (formData.highlights || []).filter((_, i) => i !== idx);
                      setFormData({ ...formData, highlights: updated });
                    }}
                    className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: ABOUT & VISION */}
      {/* ============================================================== */}
      {activeTab === "about" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-8">
          <h3 className="text-lg font-bold text-white border-b border-zinc-800 pb-3">
            About Section, Mission & Vision
          </h3>

          {/* About Title & Background Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  About Sticky Title
                </label>
                <CharCount current={formData.aboutTitle?.length || 0} max={35} />
              </div>
              <input
                type="text"
                value={formData.aboutTitle || ""}
                maxLength={35}
                onChange={(e) => setFormData({ ...formData, aboutTitle: e.target.value })}
                placeholder="About Business Coaching Club"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                About Background Atmosphere Image
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.aboutImage || ""}
                  onChange={(e) => setFormData({ ...formData, aboutImage: e.target.value })}
                  placeholder="/images/programmes/bcc-about-bg.webp"
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white"
                />
                <label className="px-3.5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(e, (url) => setFormData({ ...formData, aboutImage: url }))
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          {/* About Paragraphs */}
          <div className="pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  About Section Paragraphs
                </label>
                <p className="text-[11px] text-zinc-500">
                  First paragraph renders as large statement (max 220 chars), second as narrative (max 240 chars).
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    aboutParagraphs: [...(formData.aboutParagraphs || []), ""],
                  })
                }
                className="text-xs text-[#ff6b6b] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Paragraph
              </button>
            </div>
            <div className="space-y-3">
              {(formData.aboutParagraphs || []).map((p, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 bg-zinc-950 border border-zinc-800 p-3 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-400">
                      {idx === 0 ? "Headline Paragraph (Large)" : `Paragraph ${idx + 1}`}
                    </span>
                    <div className="flex items-center gap-3">
                      <CharCount current={p?.length || 0} max={idx === 0 ? 220 : 240} />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = (formData.aboutParagraphs || []).filter((_, i) => i !== idx);
                          setFormData({ ...formData, aboutParagraphs: updated });
                        }}
                        className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <textarea
                    rows={idx === 0 ? 3 : 2}
                    value={p}
                    maxLength={idx === 0 ? 220 : 240}
                    onChange={(e) => {
                      const updated = [...(formData.aboutParagraphs || [])];
                      updated[idx] = e.target.value;
                      setFormData({ ...formData, aboutParagraphs: updated });
                    }}
                    placeholder={`Paragraph ${idx + 1}...`}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section Headings */}
          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Mission & Vision Section Typography
            </h4>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Section Tagline
                </label>
                <CharCount current={formData.missionVisionTagline?.length || 0} max={25} />
              </div>
              <input
                type="text"
                value={formData.missionVisionTagline || ""}
                maxLength={25}
                onChange={(e) => setFormData({ ...formData, missionVisionTagline: e.target.value })}
                placeholder="PURPOSE & VISION"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                3-Line Staggered Headings (Max 28 chars each)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[0, 1, 2].map((idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-zinc-500 font-mono">Line {idx + 1}</span>
                      <CharCount current={formData.missionVisionHeading?.[idx]?.length || 0} max={28} />
                    </div>
                    <input
                      type="text"
                      value={formData.missionVisionHeading?.[idx] || ""}
                      maxLength={28}
                      onChange={(e) => {
                        const updated = [...(formData.missionVisionHeading || ["", "", ""])];
                        updated[idx] = e.target.value;
                        setFormData({ ...formData, missionVisionHeading: updated });
                      }}
                      placeholder={`Line ${idx + 1}...`}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white font-semibold"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Mission / Vision Summary Paragraph
                </label>
                <CharCount current={formData.missionVisionDesc?.length || 0} max={380} />
              </div>
              <textarea
                rows={3}
                value={formData.missionVisionDesc || ""}
                maxLength={380}
                onChange={(e) => setFormData({ ...formData, missionVisionDesc: e.target.value })}
                placeholder="To empower business owners to grow with clarity..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Mission Statement
                  </label>
                  <CharCount current={formData.mission?.length || 0} max={240} />
                </div>
                <textarea
                  rows={3}
                  value={formData.mission || ""}
                  maxLength={240}
                  onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                  placeholder="To provide an immersive, year-long mentorship platform..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Vision Statement
                  </label>
                  <CharCount current={formData.vision?.length || 0} max={240} />
                </div>
                <textarea
                  rows={3}
                  value={formData.vision || ""}
                  maxLength={240}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  placeholder="To build a global community of ethical and visionary entrepreneurs..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"
                />
              </div>
            </div>

            {/* Mission Vision 2 Images */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Mission & Vision Showcase Images (2 Images)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[0, 1].map((imgIdx) => (
                  <div key={imgIdx} className="flex gap-2">
                    <input
                      type="text"
                      value={formData.missionVisionImages?.[imgIdx] || ""}
                      onChange={(e) => {
                        const updated = [...(formData.missionVisionImages || ["", ""])];
                        updated[imgIdx] = e.target.value;
                        setFormData({ ...formData, missionVisionImages: updated });
                      }}
                      placeholder={`Image URL ${imgIdx + 1}...`}
                      className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                    <label className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl flex items-center gap-1 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleFileUpload(e, (url) => {
                            const updated = [...(formData.missionVisionImages || ["", ""])];
                            updated[imgIdx] = url;
                            setFormData({ ...formData, missionVisionImages: updated });
                          })
                        }
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Key Statistics / Impact Metrics (Max 10 chars value, 75 chars label)
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      stats: [...(formData.stats || []), { value: "1,000+", label: "Metric label" }],
                    })
                  }
                  className="text-xs text-[#ff6b6b] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Stat
                </button>
              </div>
              <div className="space-y-2">
                {(formData.stats || []).map((s, idx) => (
                  <div key={idx} className="flex gap-2 items-center bg-zinc-950 border border-zinc-800 p-2.5 rounded-xl">
                    <input
                      type="text"
                      value={s.value}
                      maxLength={10}
                      onChange={(e) => {
                        const updated = [...(formData.stats || [])];
                        updated[idx].value = e.target.value;
                        setFormData({ ...formData, stats: updated });
                      }}
                      placeholder="8,000+"
                      className="w-32 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white font-bold"
                    />
                    <input
                      type="text"
                      value={s.label}
                      maxLength={75}
                      onChange={(e) => {
                        const updated = [...(formData.stats || [])];
                        updated[idx].label = e.target.value;
                        setFormData({ ...formData, stats: updated });
                      }}
                      placeholder="Entrepreneurs & families mentored..."
                      className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300"
                    />
                    <CharCount current={s.label?.length || 0} max={75} />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = (formData.stats || []).filter((_, i) => i !== idx);
                        setFormData({ ...formData, stats: updated });
                      }}
                      className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: FRAMEWORK PILLARS */}
      {/* ============================================================== */}
      {activeTab === "pillars" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">The Core Framework Pillars</h3>
              <p className="text-xs text-zinc-400">
                Fullscreen sliding pillars with 3D watermarks, focus badges, and background photography.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  pillars: [
                    ...(formData.pillars || []),
                    {
                      title: "New Strategic Pillar",
                      focus: "Core Focus Area",
                      concept: "Concept and implementation details...",
                      icon: "shield",
                      image: "/images/programmes/highlite1.webp",
                    },
                  ],
                })
              }
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#CD1D1D] hover:bg-red-700 text-white rounded-lg text-xs font-bold cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Pillar
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Section Tagline
                </label>
                <CharCount current={formData.pillarsTagline?.length || 0} max={25} />
              </div>
              <input
                type="text"
                value={formData.pillarsTagline || ""}
                maxLength={25}
                onChange={(e) => setFormData({ ...formData, pillarsTagline: e.target.value })}
                placeholder="THE CORE FRAMEWORK"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Section Subtitle
                </label>
                <CharCount current={formData.pillarsSubtitle?.length || 0} max={25} />
              </div>
              <input
                type="text"
                value={formData.pillarsSubtitle || ""}
                maxLength={25}
                onChange={(e) => setFormData({ ...formData, pillarsSubtitle: e.target.value })}
                placeholder="BCC Pillars"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {(formData.pillars || []).map((pillar, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-4 relative"
              >
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="font-mono text-xs text-[#ff6b6b] font-bold">
                    PILLAR #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (formData.pillars || []).filter((_, i) => i !== idx);
                      setFormData({ ...formData, pillars: updated });
                    }}
                    className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold uppercase text-zinc-400">
                        Pillar Title *
                      </label>
                      <CharCount current={pillar.title?.length || 0} max={55} />
                    </div>
                    <input
                      type="text"
                      value={pillar.title}
                      maxLength={55}
                      onChange={(e) => {
                        const updated = [...(formData.pillars || [])];
                        updated[idx].title = e.target.value;
                        setFormData({ ...formData, pillars: updated });
                      }}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold uppercase text-zinc-400">
                        Focus / Subtitle
                      </label>
                      <CharCount current={pillar.focus?.length || 0} max={65} />
                    </div>
                    <input
                      type="text"
                      value={pillar.focus}
                      maxLength={65}
                      onChange={(e) => {
                        const updated = [...(formData.pillars || [])];
                        updated[idx].focus = e.target.value;
                        setFormData({ ...formData, pillars: updated });
                      }}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold uppercase text-zinc-400">
                      Concept Description
                    </label>
                    <CharCount current={pillar.concept?.length || 0} max={220} />
                  </div>
                  <textarea
                    rows={2}
                    value={pillar.concept}
                    maxLength={220}
                    onChange={(e) => {
                      const updated = [...(formData.pillars || [])];
                      updated[idx].concept = e.target.value;
                      setFormData({ ...formData, pillars: updated });
                    }}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs text-white"
                  />
                </div>

                {/* Pillar Slide Background Image */}
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-400 mb-1">
                    Slide Atmospheric Background Image
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={pillar.image || ""}
                      onChange={(e) => {
                        const updated = [...(formData.pillars || [])];
                        updated[idx].image = e.target.value;
                        setFormData({ ...formData, pillars: updated });
                      }}
                      placeholder="/images/programmes/highlite1.webp"
                      className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white"
                    />
                    <label className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleFileUpload(e, (url) => {
                            const updated = [...(formData.pillars || [])];
                            updated[idx].image = url;
                            setFormData({ ...formData, pillars: updated });
                          })
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 4: THE ECOSYSTEM */}
      {/* ============================================================== */}
      {activeTab === "ecosystem" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">The Ecosystem (What You Get)</h3>
              <p className="text-xs text-zinc-400">
                Sticky media player and interactive numbered typography list with hover preview images.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  features: [
                    ...(formData.features || []),
                    {
                      title: "New Ecosystem Benefit",
                      description: "Detailed description of what the member receives...",
                      image:
                        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
                      icon: "users",
                    },
                  ],
                })
              }
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#CD1D1D] hover:bg-red-700 text-white rounded-lg text-xs font-bold cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Benefit
            </button>
          </div>

          {/* Section Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Ecosystem Tagline
                </label>
                <CharCount current={formData.ecosystemTagline?.length || 0} max={25} />
              </div>
              <input
                type="text"
                value={formData.ecosystemTagline || ""}
                maxLength={25}
                onChange={(e) => setFormData({ ...formData, ecosystemTagline: e.target.value })}
                placeholder="WHAT YOU GET"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Ecosystem Section Title
                </label>
                <CharCount current={formData.ecosystemTitle?.length || 0} max={25} />
              </div>
              <input
                type="text"
                value={formData.ecosystemTitle || ""}
                maxLength={25}
                onChange={(e) => setFormData({ ...formData, ecosystemTitle: e.target.value })}
                placeholder="The Ecosystem"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Media Player Cover Image */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Sticky Media Player Cover Image
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.ecosystemMediaImage || ""}
                onChange={(e) => setFormData({ ...formData, ecosystemMediaImage: e.target.value })}
                placeholder="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d..."
                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
              <label className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    handleFileUpload(e, (url) =>
                      setFormData({ ...formData, ecosystemMediaImage: url })
                    )
                  }
                />
              </label>
            </div>
          </div>

          {/* Dynamic List of Features */}
          <div className="space-y-4 pt-4 border-t border-zinc-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Ecosystem Points & Benefits
            </h4>

            {(formData.features || []).map((feat, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-3 relative"
              >
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="font-mono text-xs text-[#ff6b6b] font-bold">
                    ITEM #{String(idx + 1).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (formData.features || []).filter((_, i) => i !== idx);
                      setFormData({ ...formData, features: updated });
                    }}
                    className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold uppercase text-zinc-400">
                        Title *
                      </label>
                      <CharCount current={feat.title?.length || 0} max={35} />
                    </div>
                    <input
                      type="text"
                      value={feat.title}
                      maxLength={35}
                      onChange={(e) => {
                        const updated = [...(formData.features || [])];
                        updated[idx].title = e.target.value;
                        setFormData({ ...formData, features: updated });
                      }}
                      placeholder="e.g. Global Mastermind"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs font-bold text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-zinc-400 mb-1">
                      Hover Preview Image URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={feat.image || ""}
                        onChange={(e) => {
                          const updated = [...(formData.features || [])];
                          updated[idx].image = e.target.value;
                          setFormData({ ...formData, features: updated });
                        }}
                        placeholder="https://..."
                        className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white"
                      />
                      <label className="px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium rounded-lg flex items-center gap-1 cursor-pointer">
                        <Upload className="w-3 h-3" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(e, (url) => {
                              const updated = [...(formData.features || [])];
                              updated[idx].image = url;
                              setFormData({ ...formData, features: updated });
                            })
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold uppercase text-zinc-400">
                      Description
                    </label>
                    <CharCount current={feat.description?.length || 0} max={120} />
                  </div>
                  <textarea
                    rows={2}
                    value={feat.description}
                    maxLength={120}
                    onChange={(e) => {
                      const updated = [...(formData.features || [])];
                      updated[idx].description = e.target.value;
                      setFormData({ ...formData, features: updated });
                    }}
                    placeholder="Short description of this offering..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 5: DR. OMAR'S COMPANIES */}
      {/* ============================================================== */}
      {activeTab === "owned" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Companies Dr. Omar Owns and Leads</h3>
              <p className="text-xs text-zinc-400">
                Infinite marquee showing the companies and ventures owned by Dr. Omar.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    ownedCompanies: DEFAULT_OWNED_COMPANIES,
                  })
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Reset to Default 9
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    ownedCompanies: [
                      ...(formData.ownedCompanies || []),
                      { name: "New Venture", logo: "/logos/BCC/bcc.png" },
                    ],
                  })
                }
                className="flex items-center gap-1.5 px-3.5 py-2 bg-[#CD1D1D] hover:bg-red-700 text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Company
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Section Tagline
                </label>
                <CharCount current={formData.ownedCompaniesTagline?.length || 0} max={30} />
              </div>
              <input
                type="text"
                value={formData.ownedCompaniesTagline || ""}
                maxLength={30}
                onChange={(e) => setFormData({ ...formData, ownedCompaniesTagline: e.target.value })}
                placeholder="Dr. Omar's Ecosystem"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Section Main Heading
                </label>
                <CharCount current={formData.ownedCompaniesHeading?.length || 0} max={45} />
              </div>
              <input
                type="text"
                value={formData.ownedCompaniesHeading || ""}
                maxLength={45}
                onChange={(e) => setFormData({ ...formData, ownedCompaniesHeading: e.target.value })}
                placeholder="Companies Dr. Omar Owns and Leads"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Companies Marquee Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {(formData.ownedCompanies || []).map((company, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3 relative flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold">
                    COMPANY #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (formData.ownedCompanies || []).filter((_, i) => i !== idx);
                      setFormData({ ...formData, ownedCompanies: updated });
                    }}
                    className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[10px] font-bold uppercase text-zinc-500">
                      Company Name
                    </label>
                    <CharCount current={company.name?.length || 0} max={28} />
                  </div>
                  <input
                    type="text"
                    value={company.name}
                    maxLength={28}
                    onChange={(e) => {
                      const updated = [...(formData.ownedCompanies || [])];
                      updated[idx].name = e.target.value;
                      setFormData({ ...formData, ownedCompanies: updated });
                    }}
                    placeholder="Company Name"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">
                    Logo Image
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={company.logo}
                      onChange={(e) => {
                        const updated = [...(formData.ownedCompanies || [])];
                        updated[idx].logo = e.target.value;
                        setFormData({ ...formData, ownedCompanies: updated });
                      }}
                      placeholder="/logos/..."
                      className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <label className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleFileUpload(e, (url) => {
                            const updated = [...(formData.ownedCompanies || [])];
                            updated[idx].logo = url;
                            setFormData({ ...formData, ownedCompanies: updated });
                          })
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 6: JOURNEY & STORY */}
      {/* ============================================================== */}
      {activeTab === "story" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Our Story & Journey Chapters</h3>
              <p className="text-xs text-zinc-400">
                Editorial timeline chapters with quotes, narratives, and historic photographs.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  story: {
                    ...(formData.story || { heading: "", description: "", chapters: [] }),
                    chapters: [
                      ...(formData.story?.chapters || []),
                      {
                        chapter: `0${(formData.story?.chapters?.length || 0) + 1}`,
                        tag: "NEW MILESTONE",
                        title: "Chapter Title",
                        description: "Detailed narrative of this journey chapter...",
                        quote: "Inspirational quote highlighting this era...",
                        image: "/images/about/brandmount.webp",
                        caption: "PHOTO CAPTION",
                      },
                    ],
                  },
                })
              }
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#CD1D1D] hover:bg-red-700 text-white rounded-lg text-xs font-bold cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Chapter
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Story Tagline
                </label>
                <CharCount current={formData.story?.tagline?.length || 0} max={30} />
              </div>
              <input
                type="text"
                value={formData.story?.tagline || ""}
                maxLength={30}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    story: {
                      ...(formData.story || { heading: "", description: "", chapters: [] }),
                      tagline: e.target.value,
                    },
                  })
                }
                placeholder="OUR STORY // THE JOURNEY"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Story Heading
                </label>
                <CharCount current={formData.story?.heading?.length || 0} max={60} />
              </div>
              <input
                type="text"
                value={formData.story?.heading || ""}
                maxLength={60}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    story: {
                      ...(formData.story || { heading: "", description: "", chapters: [] }),
                      heading: e.target.value,
                    },
                  })
                }
                placeholder="A Legacy Forged Through Purpose & Transformation"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                Story Intro Summary
              </label>
              <CharCount current={formData.story?.description?.length || 0} max={200} />
            </div>
            <textarea
              rows={2}
              value={formData.story?.description || ""}
              maxLength={200}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  story: {
                    ...(formData.story || { heading: "", description: "", chapters: [] }),
                    description: e.target.value,
                  },
                })
              }
              placeholder="How a vision of ethical leadership evolved into a multi-national ecosystem..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"
            />
          </div>

          {/* Chapters List */}
          <div className="space-y-5 pt-4 border-t border-zinc-800">
            {(formData.story?.chapters || []).map((ch, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-4 relative"
              >
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[#ff6b6b] font-bold">
                      CHAPTER {ch.chapter || idx + 1}
                    </span>
                    <input
                      type="text"
                      value={ch.tag || ""}
                      maxLength={20}
                      onChange={(e) => {
                        const chapters = [...(formData.story?.chapters || [])];
                        chapters[idx].tag = e.target.value;
                        setFormData({
                          ...formData,
                          story: { ...formData.story!, chapters },
                        });
                      }}
                      placeholder="e.g. THE GENESIS"
                      className="bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5 text-[11px] font-mono text-zinc-300 uppercase"
                    />
                    <CharCount current={ch.tag?.length || 0} max={20} />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const chapters = (formData.story?.chapters || []).filter((_, i) => i !== idx);
                      setFormData({
                        ...formData,
                        story: { ...formData.story!, chapters },
                      });
                    }}
                    className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold uppercase text-zinc-400">
                        Chapter Title
                      </label>
                      <CharCount current={ch.title?.length || 0} max={55} />
                    </div>
                    <input
                      type="text"
                      value={ch.title}
                      maxLength={55}
                      onChange={(e) => {
                        const chapters = [...(formData.story?.chapters || [])];
                        chapters[idx].title = e.target.value;
                        setFormData({
                          ...formData,
                          story: { ...formData.story!, chapters },
                        });
                      }}
                      placeholder="The Spark That Redefined Leadership"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs font-bold text-white"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold uppercase text-zinc-400">
                        Quote
                      </label>
                      <CharCount current={ch.quote?.length || 0} max={160} />
                    </div>
                    <input
                      type="text"
                      value={ch.quote || ""}
                      maxLength={160}
                      onChange={(e) => {
                        const chapters = [...(formData.story?.chapters || [])];
                        chapters[idx].quote = e.target.value;
                        setFormData({
                          ...formData,
                          story: { ...formData.story!, chapters },
                        });
                      }}
                      placeholder="A true leader does not merely construct profitable businesses..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs italic text-zinc-300"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold uppercase text-zinc-400">
                      Detailed Story Narrative
                    </label>
                    <CharCount current={ch.description?.length || 0} max={420} />
                  </div>
                  <textarea
                    rows={3}
                    value={ch.description}
                    maxLength={420}
                    onChange={(e) => {
                      const chapters = [...(formData.story?.chapters || [])];
                      chapters[idx].description = e.target.value;
                      setFormData({
                        ...formData,
                        story: { ...formData.story!, chapters },
                      });
                    }}
                    placeholder="Chapter narrative..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-zinc-400 mb-1">
                      Chapter Image URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={ch.image}
                        onChange={(e) => {
                          const chapters = [...(formData.story?.chapters || [])];
                          chapters[idx].image = e.target.value;
                          setFormData({
                            ...formData,
                            story: { ...formData.story!, chapters },
                          });
                        }}
                        className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white"
                      />
                      <label className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg cursor-pointer">
                        <Upload className="w-3.5 h-3.5" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(e, (url) => {
                              const chapters = [...(formData.story?.chapters || [])];
                              chapters[idx].image = url;
                              setFormData({
                                ...formData,
                                story: { ...formData.story!, chapters },
                              });
                            })
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold uppercase text-zinc-400">
                        Photo Caption
                      </label>
                      <CharCount current={ch.caption?.length || 0} max={60} />
                    </div>
                    <input
                      type="text"
                      value={ch.caption || ""}
                      maxLength={60}
                      onChange={(e) => {
                        const chapters = [...(formData.story?.chapters || [])];
                        chapters[idx].caption = e.target.value;
                        setFormData({
                          ...formData,
                          story: { ...formData.story!, chapters },
                        });
                      }}
                      placeholder="e.g. DR. OMAR DELIVERING THE INAUGURAL ADDRESS"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 font-mono uppercase"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 7: GALLERY & MEDIA */}
      {/* ============================================================== */}
      {activeTab === "gallery" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Interactive Media Gallery</h3>
              <p className="text-xs text-zinc-400">
                Red dot-grid spotlight gallery showcasing retreats, masterclasses, and executive strategy sessions.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  gallery: [
                    ...(formData.gallery || []),
                    {
                      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
                      alt: "Photo Description",
                      caption: "01 // MOMENT TITLE",
                    },
                  ],
                })
              }
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#CD1D1D] hover:bg-red-700 text-white rounded-lg text-xs font-bold cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Photo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Gallery Tagline
                </label>
                <CharCount current={formData.galleryTagline?.length || 0} max={30} />
              </div>
              <input
                type="text"
                value={formData.galleryTagline || ""}
                maxLength={30}
                onChange={(e) => setFormData({ ...formData, galleryTagline: e.target.value })}
                placeholder="GALLERY // EXPERIENCE"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Gallery Title (Supports Line Breaks)
                </label>
                <CharCount current={formData.galleryTitle?.length || 0} max={35} />
              </div>
              <input
                type="text"
                value={formData.galleryTitle || ""}
                maxLength={35}
                onChange={(e) => setFormData({ ...formData, galleryTitle: e.target.value })}
                placeholder="Witness the&#10;Transformation"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                Gallery Intro Description
              </label>
              <CharCount current={formData.galleryDescription?.length || 0} max={220} />
            </div>
            <textarea
              rows={2}
              value={formData.galleryDescription || ""}
              maxLength={220}
              onChange={(e) => setFormData({ ...formData, galleryDescription: e.target.value })}
              placeholder="Take an inside look at our immersive retreats..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"
            />
          </div>

          {/* Gallery Impact Counters */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                Gallery Statistic Badges (Max 10 chars value, 25 chars label)
              </label>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    galleryStats: [
                      ...(formData.galleryStats || []),
                      { value: "50+", label: "Metric" },
                    ],
                  })
                }
                className="text-xs text-[#ff6b6b] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Counter
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(formData.galleryStats || []).map((s, idx) => (
                <div key={idx} className="flex gap-2 items-center bg-zinc-950 border border-zinc-800 p-2.5 rounded-xl">
                  <input
                    type="text"
                    value={s.value}
                    maxLength={10}
                    onChange={(e) => {
                      const updated = [...(formData.galleryStats || [])];
                      updated[idx].value = e.target.value;
                      setFormData({ ...formData, galleryStats: updated });
                    }}
                    placeholder="50+"
                    className="w-24 bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <input
                    type="text"
                    value={s.label}
                    maxLength={25}
                    onChange={(e) => {
                      const updated = [...(formData.galleryStats || [])];
                      updated[idx].label = e.target.value;
                      setFormData({ ...formData, galleryStats: updated });
                    }}
                    placeholder="Global Retreats"
                    className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs text-zinc-300"
                  />
                  <CharCount current={s.label?.length || 0} max={25} />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (formData.galleryStats || []).filter((_, i) => i !== idx);
                      setFormData({ ...formData, galleryStats: updated });
                    }}
                    className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Items */}
          <div className="space-y-4 pt-4 border-t border-zinc-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Gallery Media Items (Max 35 chars caption & alt)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(formData.gallery || []).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3 relative"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase">
                      PHOTO #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = (formData.gallery || []).filter((_, i) => i !== idx);
                        setFormData({ ...formData, gallery: updated });
                      }}
                      className="text-zinc-500 hover:text-red-400 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={item.url}
                      onChange={(e) => {
                        const updated = [...(formData.gallery || [])];
                        updated[idx].url = e.target.value;
                        setFormData({ ...formData, gallery: updated });
                      }}
                      placeholder="Image URL..."
                      className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                    <label className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleFileUpload(e, (url) => {
                            const updated = [...(formData.gallery || [])];
                            updated[idx].url = url;
                            setFormData({ ...formData, gallery: updated });
                          })
                        }
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        type="text"
                        value={item.caption}
                        maxLength={35}
                        onChange={(e) => {
                          const updated = [...(formData.gallery || [])];
                          updated[idx].caption = e.target.value;
                          setFormData({ ...formData, gallery: updated });
                        }}
                        placeholder="Caption: 01 // MENTORSHIP"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={item.alt}
                        maxLength={35}
                        onChange={(e) => {
                          const updated = [...(formData.gallery || [])];
                          updated[idx].alt = e.target.value;
                          setFormData({ ...formData, gallery: updated });
                        }}
                        placeholder="Alt description"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-400"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 8: ALUMNI & REVIEWS */}
      {/* ============================================================== */}
      {activeTab === "testimonials" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Alumni & Testimonials</h3>
              <p className="text-xs text-zinc-400">
                Quotes, roles, star ratings, and headshots from founders who transformed their businesses.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  testimonials: [
                    ...(formData.testimonials || []),
                    {
                      name: "Leader Name",
                      role: "Founder & CEO",
                      quote: "The programme gave me unmatched clarity and structure...",
                      image:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                      rating: 5,
                    },
                  ],
                })
              }
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#CD1D1D] hover:bg-red-700 text-white rounded-lg text-xs font-bold cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Alumni Tagline
                </label>
                <CharCount current={formData.testimonialsTagline?.length} max={25} />
              </div>
              <input
                type="text"
                maxLength={25}
                value={formData.testimonialsTagline || ""}
                onChange={(e) => setFormData({ ...formData, testimonialsTagline: e.target.value })}
                placeholder="THE ALUMNI"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Alumni Heading
                </label>
                <CharCount current={formData.testimonialsHeading?.length} max={35} />
              </div>
              <input
                type="text"
                maxLength={35}
                value={formData.testimonialsHeading || ""}
                onChange={(e) => setFormData({ ...formData, testimonialsHeading: e.target.value })}
                placeholder="Leaders Who Scaled"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Rating Badge Text
                </label>
                <CharCount current={formData.testimonialsRatingText?.length} max={25} />
              </div>
              <input
                type="text"
                maxLength={25}
                value={formData.testimonialsRatingText || ""}
                onChange={(e) => setFormData({ ...formData, testimonialsRatingText: e.target.value })}
                placeholder="4.9/5 Average Rating"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
            {(formData.testimonials || []).map((t, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-3 relative"
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-[#ff6b6b] font-bold">
                    REVIEW #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = (formData.testimonials || []).filter((_, i) => i !== idx);
                      setFormData({ ...formData, testimonials: updated });
                    }}
                    className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-zinc-500 uppercase font-mono">Name</span>
                      <CharCount current={t.name?.length} max={30} />
                    </div>
                    <input
                      type="text"
                      maxLength={30}
                      value={t.name}
                      onChange={(e) => {
                        const updated = [...(formData.testimonials || [])];
                        updated[idx].name = e.target.value;
                        setFormData({ ...formData, testimonials: updated });
                      }}
                      placeholder="Name"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs font-bold text-white"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-zinc-500 uppercase font-mono">Role</span>
                      <CharCount current={t.role?.length} max={35} />
                    </div>
                    <input
                      type="text"
                      maxLength={35}
                      value={t.role}
                      onChange={(e) => {
                        const updated = [...(formData.testimonials || [])];
                        updated[idx].role = e.target.value;
                        setFormData({ ...formData, testimonials: updated });
                      }}
                      placeholder="Role (e.g. CEO, TechFlow)"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-zinc-500 uppercase font-mono">Quote</span>
                    <CharCount current={t.quote?.length} max={140} />
                  </div>
                  <textarea
                    rows={2}
                    maxLength={140}
                    value={t.quote}
                    onChange={(e) => {
                      const updated = [...(formData.testimonials || [])];
                      updated[idx].quote = e.target.value;
                      setFormData({ ...formData, testimonials: updated });
                    }}
                    placeholder="Testimonial quote..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs text-white italic"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={t.image}
                    onChange={(e) => {
                      const updated = [...(formData.testimonials || [])];
                      updated[idx].image = e.target.value;
                      setFormData({ ...formData, testimonials: updated });
                    }}
                    placeholder="Avatar image URL..."
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white"
                  />
                  <label className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(e, (url) => {
                          const updated = [...(formData.testimonials || [])];
                          updated[idx].image = url;
                          setFormData({ ...formData, testimonials: updated });
                        })
                      }
                    />
                  </label>
                  <select
                    value={t.rating}
                    onChange={(e) => {
                      const updated = [...(formData.testimonials || [])];
                      updated[idx].rating = Number(e.target.value);
                      setFormData({ ...formData, testimonials: updated });
                    }}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-2 text-xs text-amber-400 font-bold"
                  >
                    {[5, 4, 3, 2, 1].map((r) => (
                      <option key={r} value={r}>
                        {r} ★
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 9: FAQS & CASE STUDIES */}
      {/* ============================================================== */}
      {activeTab === "faqs" && (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-8">
          {/* Part A: FAQs */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Frequently Asked Questions</h3>
                <p className="text-xs text-zinc-400">
                  Accordions answering admissions, timeline, format, and investment queries.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    faqs: [
                      ...(formData.faqs || []),
                      {
                        question: "Question text...",
                        answer: "Detailed answer explaining the policy or details...",
                      },
                    ],
                  })
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add FAQ
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                    FAQ Tagline
                  </label>
                  <CharCount current={formData.faqTagline?.length} max={20} />
                </div>
                <input
                  type="text"
                  maxLength={20}
                  value={formData.faqTagline || ""}
                  onChange={(e) => setFormData({ ...formData, faqTagline: e.target.value })}
                  placeholder="FAQ"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                    FAQ Heading
                  </label>
                  <CharCount current={formData.faqHeading?.length} max={35} />
                </div>
                <input
                  type="text"
                  maxLength={35}
                  value={formData.faqHeading || ""}
                  onChange={(e) => setFormData({ ...formData, faqHeading: e.target.value })}
                  placeholder="Frequently Asked Questions"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="space-y-3">
              {(formData.faqs || []).map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-2 relative"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase">
                      Q&A #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = (formData.faqs || []).filter((_, i) => i !== idx);
                        setFormData({ ...formData, faqs: updated });
                      }}
                      className="text-zinc-500 hover:text-red-400 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-zinc-500 uppercase font-mono">Question</span>
                      <CharCount current={faq.question?.length} max={80} />
                    </div>
                    <input
                      type="text"
                      maxLength={80}
                      value={faq.question}
                      onChange={(e) => {
                        const updated = [...(formData.faqs || [])];
                        updated[idx].question = e.target.value;
                        setFormData({ ...formData, faqs: updated });
                      }}
                      placeholder="Question..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs font-bold text-white"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-zinc-500 uppercase font-mono">Answer</span>
                      <CharCount current={faq.answer?.length} max={240} />
                    </div>
                    <textarea
                      rows={2}
                      maxLength={240}
                      value={faq.answer}
                      onChange={(e) => {
                        const updated = [...(formData.faqs || [])];
                        updated[idx].answer = e.target.value;
                        setFormData({ ...formData, faqs: updated });
                      }}
                      placeholder="Answer..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: Insights / Case Studies */}
          <div className="pt-6 border-t border-zinc-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Insights & Case Studies</h3>
                <p className="text-xs text-zinc-400">
                  Featured articles and case studies displayed at the bottom of the programme page.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    blogs: [
                      ...(formData.blogs || []),
                      {
                        title: "Article Title",
                        category: "LEADERSHIP",
                        description: "Short perspective excerpt...",
                        image:
                          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
                        date: "OCT 12, 2026",
                      },
                    ],
                  })
                }
                className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Study
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Insights Tagline
                  </label>
                  <CharCount current={formData.blogsTagline?.length} max={20} />
                </div>
                <input
                  type="text"
                  maxLength={20}
                  value={formData.blogsTagline || ""}
                  onChange={(e) => setFormData({ ...formData, blogsTagline: e.target.value })}
                  placeholder="INSIGHTS"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Insights Heading
                  </label>
                  <CharCount current={formData.blogsHeading?.length} max={30} />
                </div>
                <input
                  type="text"
                  maxLength={30}
                  value={formData.blogsHeading || ""}
                  onChange={(e) => setFormData({ ...formData, blogsHeading: e.target.value })}
                  placeholder="Latest Case Studies"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(formData.blogs || []).map((b, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3 relative"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold">
                      CASE STUDY #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = (formData.blogs || []).filter((_, i) => i !== idx);
                        setFormData({ ...formData, blogs: updated });
                      }}
                      className="text-zinc-500 hover:text-red-400 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-zinc-500 uppercase font-mono">Title</span>
                      <CharCount current={b.title?.length} max={65} />
                    </div>
                    <input
                      type="text"
                      maxLength={65}
                      value={b.title}
                      onChange={(e) => {
                        const updated = [...(formData.blogs || [])];
                        updated[idx].title = e.target.value;
                        setFormData({ ...formData, blogs: updated });
                      }}
                      placeholder="Title..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-bold text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-zinc-500 uppercase font-mono">Category</span>
                        <CharCount current={b.category?.length} max={20} />
                      </div>
                      <input
                        type="text"
                        maxLength={20}
                        value={b.category || ""}
                        onChange={(e) => {
                          const updated = [...(formData.blogs || [])];
                          updated[idx].category = e.target.value;
                          setFormData({ ...formData, blogs: updated });
                        }}
                        placeholder="Category (e.g. LEADERSHIP)"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-300 font-mono"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-zinc-500 uppercase font-mono">Date</span>
                        <CharCount current={b.date?.length} max={16} />
                      </div>
                      <input
                        type="text"
                        maxLength={16}
                        value={b.date || ""}
                        onChange={(e) => {
                          const updated = [...(formData.blogs || [])];
                          updated[idx].date = e.target.value;
                          setFormData({ ...formData, blogs: updated });
                        }}
                        placeholder="OCT 12, 2026"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-300 font-mono"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={b.image}
                      onChange={(e) => {
                        const updated = [...(formData.blogs || [])];
                        updated[idx].image = e.target.value;
                        setFormData({ ...formData, blogs: updated });
                      }}
                      placeholder="Cover Image URL..."
                      className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1 text-xs text-white"
                    />
                    <label className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleFileUpload(e, (url) => {
                            const updated = [...(formData.blogs || [])];
                            updated[idx].image = url;
                            setFormData({ ...formData, blogs: updated });
                          })
                        }
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
