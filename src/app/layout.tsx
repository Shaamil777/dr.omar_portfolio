import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ScrollRestoration from "@/components/layout/ScrollRestoration";

const courier = localFont({
  src: "./fonts/cour.ttf",
  variable: "--font-courier",
});

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
const headingNow = localFont({
  src: [
    {
      path: "./fonts/HeadingNow/HeadingNowTrial-16Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HeadingNow/HeadingNowTrial-17Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/HeadingNow/HeadingNowTrial-18Heavy.ttf",
      weight: "900",
      style: "normal",
    }
  ],
  variable: "--font-heading-now",
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
      <body className={`${helvetica.className} ${national2.variable} ${headingNow.variable} ${courier.variable} antialiased min-h-screen flex flex-col`}>
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
