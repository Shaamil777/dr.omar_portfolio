"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full">
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 border-black/10 rounded-2xl p-8 md:p-12 shadow-sm"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 font-courier">Full Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-5 py-4 text-[#111] font-helvetica font-medium placeholder-zinc-400 focus:outline-none focus:border-[#CD1D1D] focus:ring-1 focus:ring-[#CD1D1D] transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 font-courier">Email Address</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-5 py-4 text-[#111] font-helvetica font-medium placeholder-zinc-400 focus:outline-none focus:border-[#CD1D1D] focus:ring-1 focus:ring-[#CD1D1D] transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 font-courier">Program Interest</label>
            <select 
              id="subject"
              className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-5 py-4 text-[#111] font-helvetica font-medium focus:outline-none focus:border-[#CD1D1D] focus:ring-1 focus:ring-[#CD1D1D] transition-all appearance-none"
            >
              <option value="" className="text-zinc-400">Select a topic...</option>
              <option value="bcc">Business Coaching Club (BCC)</option>
              <option value="oathmen">OATHMEN Startup Coaching</option>
              <option value="deep-immersion">Deep Immersion Program</option>
              <option value="speaking">Speaking Engagement</option>
              <option value="other">General Inquiry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 font-courier">Your Message</label>
            <textarea 
              id="message"
              required
              rows={5}
              className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-5 py-4 text-[#111] font-helvetica font-medium placeholder-zinc-400 focus:outline-none focus:border-[#CD1D1D] focus:ring-1 focus:ring-[#CD1D1D] transition-all resize-none"
              placeholder="Tell us about your goals..."
            />
          </div>

          <button
            disabled={isSubmitting || submitted}
            type="submit"
            className={`w-full py-5 rounded-xl font-national2 font-black uppercase tracking-normal text-[18px] md:text-[20px] leading-none flex items-center justify-center transition-all duration-300 shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1 ${
              submitted 
                ? 'bg-green-600 text-white' 
                : 'bg-[#111] text-white hover:bg-[#CD1D1D] hover:shadow-[0_12px_24px_rgba(205,29,29,0.3)]'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>SENDING...</span>
              </span>
            ) : submitted ? (
              <span>MESSAGE SENT</span>
            ) : (
              <>
                <span>SEND MESSAGE</span>
                <Send className="w-5 h-5 ml-3" />
              </>
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
}
