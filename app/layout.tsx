import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
import CookieBanner from "@/components/CookieBanner";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"), // ← mets ton domaine après le déploiement
  title: "HelpPoints.ch by Dana Rey — Integration support for migrants, faster",
  description:
    "We connect migrants with trusted opportunities for work, community events, and local support.",
  openGraph: {
    title: "HelpPoints.ch by Dana Rey — Integration support for migrants, faster",
    description:
      "We connect migrants with trusted opportunities for work, community events, and local support.",
    url: "https://www.example.com",
    siteName: "HelpPoints.ch by Dana Rey",
    images: [{ url: "/publicog-image.png.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpPoints.ch by Dana Rey — Integration support for migrants, faster",
    description:
      "We connect migrants with trusted opportunities for work, community events, and local support.",
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
        <LanguageProvider>
          {children}
          {/* <Analytics /> */}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
