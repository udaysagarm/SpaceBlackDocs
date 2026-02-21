import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Black | Infrastructure for AI",
  description: "Space Black: The terminal operating system for autonomous agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
