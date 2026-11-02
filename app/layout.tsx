import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abin T S — Full-Stack Developer",
    template: "%s — Abin T S",
  },
  description:
    "Portfolio of Abin T S, a full-stack developer building fast, minimal web experiences with Next.js, React and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
