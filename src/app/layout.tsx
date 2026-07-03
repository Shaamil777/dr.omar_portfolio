import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const helvetica = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowDisplay/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay/HelveticaNowDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
const national2 = localFont({
  src: [
    {
      path: "./fonts/National2Condensed/TestNational2Condensed-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-national2",
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
    <html lang="en" className="scroll-smooth bg-zinc-950 text-white">
      <body className={`${helvetica.className} ${national2.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
