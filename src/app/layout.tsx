import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Omar Portfolio",
  description: "Elevating businesses with premium solutions and unparalleled expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth bg-zinc-950 text-white`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        {/* padding top 20 to account for fixed 80px navbar */}
        <div className="flex-1 pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
