"use client";

import { motion, scale } from "framer-motion";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      category: "Leadership",
      title: "The Art of Transformational Leadership",
      excerpt: "Discover the core principles of leading with purpose and how to inspire lasting change within your organization.",
      date: "Oct 24, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      category: "Personal Growth",
      title: "Mastering Emotional Intelligence",
      excerpt: "Why EQ is more important than IQ in today's fast-paced business environment and how to develop it.",
      date: "Oct 18, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      category: "Business Strategy",
      title: "Building Ethical Businesses",
      excerpt: "A guide to maintaining integrity while scaling your business in competitive markets.",
      date: "Oct 12, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-[#FAF8F5] text-zinc-950 min-h-screen flex flex-col md:flex-row ">
      {/* Left part (Vertical Text) */}
      <div className="w-full md:w-[5%] lg:w-[8%] text-zinc-800 flex items-center justify-center py-16 md:py-0 relative overflow-hidden">
        {/* Decorative subtle lines */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center justify-center h-full w-full"
        >
          {/* Mobile horizontal text */}
          {/* <h2 className="md:hidden text-5xl font-black uppercase tracking-[0.2em] mt-24 md:mt-0">
            Blogs
          </h2> */}
          {/* Desktop vertical text */}
          <div className="hidden md:flex flex-col items-center justify-center h-full w-full pr-2">
            <motion.h2 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-between items-center w-full h-full text-[6.5rem] lg:text-[10.5rem] xl:text-[13.5rem] font-black uppercase leading-none"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {['B', 'L', 'O', 'G', 'S'].map((letter, i) => (
                <motion.span key={i} variants={letterVariants}>{letter}</motion.span>
              ))}
            </motion.h2>
          </div>
        </motion.div>
      </div>

      {/* Right part (Blog List) */}
      <div className="w-full md:w-[95%] lg:w-[92%] bg-zinc-800 py-16 md:py-24 flex flex-col justify-center">
        <div className="w-full flex flex-col">
          
          {/* Section Header */}
          <div className="flex flex-col gap-5 mb-12 md:mb-16 px-6 md:px-12 lg:px-24">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[1px] bg-zinc-500"
            ></motion.div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-xs md:text-sm font-bold tracking-[0.25em] text-zinc-400 uppercase"
            >
              Latest Articles
            </motion.h4>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                className="group flex flex-row gap-6 lg:gap-8 border-b border-white p-6 md:p-8 lg:p-12 cursor-pointer transition-colors duration-1000 ease-in-out hover:bg-[#dbff3d]"
              >
                {/* Image Area */}
                <div className="w-2/5 h-32 sm:h-40 md:h-48 relative overflow-hidden bg-zinc-800">
                  <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" />
                </div>

                {/* Content */}
                <div className="w-3/5 flex flex-col justify-center">
                  <span className="text-[10px] md:text-xs text-zinc-400 font-medium uppercase tracking-widest mb-2 group-hover:text-zinc-800 transition-colors duration-1000 ease-in-out">
                    {blog.category}
                  </span>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-100 uppercase leading-snug mb-4 group-hover:text-zinc-950 transition-colors duration-1000 ease-in-out line-clamp-3">
                    {blog.title}
                  </h4>
                  
                  <div className="mt-auto">
                    <a href="#" className="inline-block text-[10px] md:text-xs text-zinc-100 uppercase tracking-widest border-b border-zinc-100 pb-0.5 group-hover:border-zinc-950 group-hover:text-zinc-950 transition-colors duration-1000 ease-in-out">
                      Read Article
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
            {/* Empty grid cell to ensure the bottom border spans the full width if there's an odd number of blogs */}
            {blogs.length % 2 !== 0 && (
              <div className="hidden md:block border-b border-white"></div>
            )}
          </div>

          {/* View All Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <a href="#all-blogs" className="group relative inline-flex items-center justify-center">
              {/* Slab Layer */}
              <div className="absolute inset-0 bg-zinc-950 transform -skew-x-12 translate-x-1.5 translate-y-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              
              {/* Top Layer */}
              <div className="relative px-8 py-4 bg-zinc-100 text-zinc-900 transform -skew-x-12 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5 flex items-center justify-center border border-zinc-100">
                {/* Un-skew Content */}
                <div className="transform skew-x-12 flex items-center gap-3">
                  <span className="font-bold text-xs md:text-sm tracking-widest uppercase">View All Articles</span>
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
