import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shikhara Films | Premier Ad Production House",
  description: "Shikhara Films - Creating compelling advertisements for television, theatre, and social media. Professional ad production services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
