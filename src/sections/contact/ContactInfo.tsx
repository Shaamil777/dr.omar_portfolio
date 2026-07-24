"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "contact@dromar.com",
    description: "Our friendly team is here to help.",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+971 50 123 4567",
    description: "Mon-Fri from 8am to 5pm.",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Dubai, United Arab Emirates",
    description: "Available globally via hybrid model.",
  },
];

const socialLinks = [
  { icon: MessageCircle, href: "#", label: "Community" },
  { icon: Globe, href: "#", label: "Website" },
];

export default function ContactInfo() {
  return (
    <div className="w-full h-full flex flex-col justify-between py-6">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-national2 font-black text-[#111] mb-4 uppercase tracking-tight">Direct Access</h2>
          <p className="text-zinc-500 font-helvetica font-medium leading-relaxed max-w-md">
            Reach out to our team directly. We typically respond to all inquiries within 24 hours. Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="space-y-8">
          {contactDetails.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-6 group cursor-pointer"
            >
              <div className="p-4 bg-white border-2 border-black/10 rounded-2xl text-[#111] group-hover:border-[#CD1D1D] group-hover:text-[#CD1D1D] group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-national2 font-black uppercase text-[#111] mb-1 group-hover:text-[#CD1D1D] transition-colors">{item.title}</h3>
                <p className="text-zinc-900 font-helvetica font-bold text-lg">{item.detail}</p>
                <p className="text-sm text-zinc-500 font-helvetica mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-12 border-t-2 border-black/10">
        <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest font-courier mb-6">Connect & Follow</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white border-2 border-black/10 rounded-full text-[#111] hover:text-[#CD1D1D] hover:border-[#CD1D1D] transition-all duration-300 shadow-sm"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
