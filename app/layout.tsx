import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shikhara Films | Premium Ad Production House",
  description:
    "Shikhara Films is a premier ad production house creating compelling advertisements for Television, Theatre, and Social Media. Transform your brand with cinematic storytelling.",
  keywords: [
    "ad production house",
    "TV commercials",
    "cinema ads",
    "social media content",
    "video production",
    "Mumbai",
    "advertising agency",
    "brand films",
    "corporate videos",
  ],
  authors: [{ name: "Shikhara Films" }],
  openGraph: {
    title: "Shikhara Films | Premium Ad Production House",
    description:
      "Creating compelling advertisements for Television, Theatre, and Social Media that captivate audiences.",
    type: "website",
    locale: "en_IN",
    siteName: "Shikhara Films",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikhara Films | Premium Ad Production House",
    description:
      "Creating compelling advertisements for Television, Theatre, and Social Media.",
  },
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
        {children}
      </body>
    </html>
  );
}
