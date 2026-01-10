import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Quick Fix Construction | Premium Home Improvement & Renovation",
  description: "Expert carpentry, joinery, painting, tiling, and refurbishment services. High-quality home improvement and property renovation for residential and commercial clients.",
  keywords: "construction, carpentry, joinery, home improvement, renovation, painting, tiling, carpet fitting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
