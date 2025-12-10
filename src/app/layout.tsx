import Header from "./components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./TranslationProvider";
import LenisProvider from "./LenisProvider";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

const SITE_URL = "https://maxime-homme-a-tout-faire.vercel.app/";

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
  },
  openGraph: {
    title: "Maxime Peinture – Peinture intérieure et extérieure à Montréal et Laval",
    description:
      "Service de peinture professionnelle pour appartements, condos et maisons à Montréal et Laval. Finitions propres, protection complète des surfaces et réparations de gypse.",
    url: SITE_URL,
    siteName: "Maxime Peinture",
    images: [
      {
        url: "/file.svg", 
        width: 1200,
        height: 630,
        alt: "Projet de peinture intérieure réalisé par Maxime Peinture à Montréal",
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
    images: ["/file.svg"],
  },
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
      </body>
    </html>
  );
}
