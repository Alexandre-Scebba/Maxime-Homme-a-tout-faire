import Header from "./components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./TranslationProvider";
import LenisProvider from "./LenisProvider";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Placeholder Company",
  description: "Professional excavation, drainage & turf services.",
  openGraph: {
    title: "Placeholder Company",
    description: "Professional excavation, drainage & turf services.",
    url: "https://www.yourdomain.com",
    siteName: "Placeholder Company",
    images: [
      {
        url: "/file.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Placeholder Company",
    description: "Professional excavation, drainage & turf services.",
    images: ["/file.svg"],
  },
  // Optionally add other meta here
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
