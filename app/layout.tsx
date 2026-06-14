import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rickyrudiansyah.vercel.app"),
  title: "Ricky Rudiansyah — Portfolio",
  description:
    "Computer Science student at BINUS University. Purpose-driven builder of Warkop QR, JudiGone, SmartQuail, and CocoGo.",
  openGraph: {
    title: "Ricky Rudiansyah — Portfolio",
    description:
      "I can't build something that doesn't matter. If there's no purpose yet — I'll find one.",
    images: [{ url: "/image/profil/PP.jpeg" }],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ricky Rudiansyah",
              url: "https://rickyrudiansyah.vercel.app",
              jobTitle: "Computer Science Student",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Bina Nusantara University",
              },
              sameAs: [
                "https://github.com/RickyRudiansyah",
                "https://www.linkedin.com/in/ricky-rudiansyah-933344351",
                "https://instagram.com/nuaiman471",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
