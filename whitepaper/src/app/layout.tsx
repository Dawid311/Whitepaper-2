import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '../context/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D.FAITH Ökosystem - Revolutionäres Fan-Engagement Whitepaper",
  description: "Entdecken Sie das innovative D.FAITH Ökosystem: Blockchain-basierte Fan-Belohnungen, Dual-Token-System und revolutionäres Social Media Engagement für Künstler.",
  keywords: "D.FAITH, D.INVEST, Blockchain, Fan-Engagement, Token, Staking, Dawid Faith, Base Chain",
  openGraph: {
    title: "D.FAITH Ökosystem Whitepaper",
    description: "Revolutionäres Fan-Engagement durch Blockchain-Technologie",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
