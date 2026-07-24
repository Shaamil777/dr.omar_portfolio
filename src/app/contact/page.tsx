import ContactHero from "@/sections/contact/ContactHero";
import ContactForm from "@/sections/contact/ContactForm";
import ContactInfo from "@/sections/contact/ContactInfo";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contact | Dr. Abdussalam Omar",
  description: "Get in touch with Dr. Abdussalam Omar for coaching, programs, and partnerships.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111] relative z-10 -mb-[15vh] pb-[20vh] rounded-b-[2rem] md:rounded-b-[4rem] shadow-2xl">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      <ContactHero />
      
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-6 lg:px-24 max-w-[100rem]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
