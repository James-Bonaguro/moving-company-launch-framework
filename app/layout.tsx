import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "Chicago Moving Company Launch Command Center",
    description: "A private, compliance-first launch plan for a Southwest-suburbs moving company.",
    openGraph: {
      title: "Chicago Moving Company Launch",
      description: "Compliance-first. One crew. Evidence before scale.",
      images: [{ url: "/og.png", width: 1776, height: 888, alt: "Chicago Moving Company Launch" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Chicago Moving Company Launch",
      description: "Compliance-first. One crew. Evidence before scale.",
      images: ["/og.png"],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

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
