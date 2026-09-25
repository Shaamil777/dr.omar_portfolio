import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ScrollRestoration from "@/components/layout/ScrollRestoration";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";

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
      <body className={`${poppins.className} ${poppins.variable} antialiased min-h-screen flex flex-col`}>
        <CustomCursor />
        <ScrollRestoration />
        <SmoothScrollProvider>
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
