"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { BlogPost } from "@/lib/storage";

const DUMMY_BLOGS: BlogPost[] = [
  {
    id: "1",
    slug: "the-protection-that-is-rarely-spoken-of",
    title: "The protection that is rarely spoken of...",
    category: "Security",
    date: "AUG 12, 2026",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    excerpt: "True security begins far before the physical perimeter is ever tested.",
    content: "",
  },
  {
    id: "2",
    slug: "5-tips-for-excelling-as-an-executive-protection-subcontractor",
    title: "5 Tips for excelling as an executive protection subcontractor",
    category: "Leadership",
    date: "AUG 05, 2026",
    img: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
    excerpt: "Mastering the subtle art of executive leadership and protective excellence.",
    content: "",
  },
  {
    id: "3",
    slug: "navigating-high-risk-environments-with-precision",
    title: "Navigating high-risk environments with precision",
    category: "Strategy",
    date: "JUL 28, 2026",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    excerpt: "Strategic planning and emotional composure in volatile geopolitical climates.",
    content: "",
  },
  {
    id: "4",
    slug: "the-future-of-tactical-security-technology",
    title: "The future of tactical security technology",
    category: "Technology",
    date: "JUL 15, 2026",
    img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80",
    excerpt: "How AI and autonomous surveillance are redefining executive safety.",
    content: "",
  },
  {
    id: "5",
    slug: "mastering-situational-awareness-in-urban-settings",
    title: "Mastering situational awareness in urban settings",
    category: "Training",
    date: "JUN 30, 2026",
    img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
    excerpt: "Practical techniques to develop acute environmental mindfulness.",
    content: "",
  },
  {
    id: "6",
    slug: "strategic-planning-for-vip-transport-and-logistics",
    title: "Strategic planning for VIP transport and logistics",
    category: "Logistics",
    date: "JUN 18, 2026",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    excerpt: "The intricate art of coordinating international delegations.",
    content: "",
  },
];

const containerVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: import("framer-motion").Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
};

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BlogsList() {
  const [blogs, setBlogs] = useState(DUMMY_BLOGS);

  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data && json.data.length > 0) {
          setBlogs(json.data);
        }
      })
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  return (
    <section className="w-full bg-[#FAF8F5] py-24 md:py-40 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={cardVariants} className="flex flex-col h-full">
              <Link
                href={`/blogs/${blog.slug || blog.id}`}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-zinc-200">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] lg:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 lg:group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-courier text-[#CD1D1D] font-bold text-xs tracking-widest uppercase">
                      {blog.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                    <span className="font-courier text-zinc-500 font-bold text-xs tracking-widest uppercase">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="font-helvetica font-bold text-2xl md:text-3xl leading-[1.1] text-[#111] mb-6 lg:group-hover:text-[#CD1D1D] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  {/* Read More Link */}
                  <div className="mt-auto flex items-center gap-2 text-[#111] lg:group-hover:text-[#CD1D1D] transition-colors duration-300">
                    <span className="font-helvetica font-bold text-sm tracking-tight uppercase">Read Article</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform lg:group-hover:translate-x-1 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
