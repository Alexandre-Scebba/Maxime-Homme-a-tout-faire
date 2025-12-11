import Header from "./components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./TranslationProvider";
import LenisProvider from "./LenisProvider";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

// Base site URL (no trailing slash)
const SITE_URL = "https://maxime-homme-a-tout-faire.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maxime Peinture | Peintre à Montréal & Laval",
  description:
    "Peintres professionnels à Montréal et Laval pour appartements, condos et maisons. Peinture intérieure et extérieure, réparation de gypse, tirage de joints et préparation de surface soignée.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-CA": SITE_URL,
      "en-CA": `${SITE_URL}?lang=en`,
    },
  },
  openGraph: {
    title: "Maxime Peinture – Peinture intérieure et extérieure à Montréal et Laval",
    description:
      "Service de peinture professionnelle pour appartements, condos et maisons à Montréal et Laval. Finitions propres, protection complète des surfaces et réparations de gypse.",
    url: SITE_URL,
    siteName: "Maxime Peinture",
    images: [
      {
        url: "/bathroom-tub-before-after.jpg",
        width: 1200,
        height: 630,
        alt: "Projet de peinture avant et après dans une salle de bain à Montréal par Maxime Peinture",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime Peinture – Peinture intérieure et extérieure à Montréal et Laval",
    description:
      "Peintres professionnels pour vos projets résidentiels à Montréal et Laval : murs, plafonds, boiseries, gypse et tirage de joints.",
    images: ["/bathroom-tub-before-after.jpg"],
  },
};

// JSON-LD schema for local SEO (HousePainter)
const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: "Maxime Peinture",
  url: SITE_URL,
  image: `public/hero.jpg`,
  description:
    "Peintres professionnels à Montréal et Laval pour appartements, condos et maisons. Peinture intérieure et extérieure, réparation de gypse, tirage de joints, préparation de surface et réparation de murs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montréal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Montréal" },
    { "@type": "City", name: "Laval" },
  ],
  priceRange: "$$",
  serviceType: [
    "Peinture intérieure",
    "Peinture extérieure",
    "Réparation de gypse",
    "Réparation de murs",
    "Tirage de joints",
    "Préparation de surface",
    "Finition intérieure"
  ],
  knowsAbout: [
    "wall repair",
    "drywall repair",
    "gypsum repair",
    "plaster repair",
    "interior painting",
    "home painting",
    "residential painting"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TranslationProvider>
          <LenisProvider>
            <Header />
            {children}
            <BackToTopButton />
            <Footer />
          </LenisProvider>
        </TranslationProvider>

        {/* LocalBusiness JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
      </body>
    </html>
  );
}
