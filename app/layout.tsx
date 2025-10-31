import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"), // ← mets ton domaine après le déploiement
  title: "Dana Rey — Jobs for migrants, faster",
  description: "We connect migrants with fair, verified jobs and community support.",
  openGraph: {
    title: "Dana Rey — Jobs for migrants, faster",
    description: "We connect migrants with fair, verified jobs and community support.",
    url: "https://www.example.com",
    siteName: "Dana Rey",
    images: [{ url: "/publicog-image.png.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dana Rey — Jobs for migrants, faster",
    description: "We connect migrants with fair, verified jobs and community support.",
    images: ["/publicog-image.png.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/publiclogo.svg.png", sizes: "any" },
      { url: "/publiclogo.svg.png", type: "image/png" },
    ],
    shortcut: "/publiclogo.svg.png",
    apple: "/publiclogo.svg.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <Analytics /> */}
        <CookieBanner />
      </body>
    </html>
  );
}
