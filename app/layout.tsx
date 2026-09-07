import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces } from "next/font/google";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myicons.vercel.app"),

  title: {
    default: "MyIcons — Payment Icons for React",
    template: "%s — MyIcons",
  },

  description:
    "A modern React icon library for payment methods, banks, wallets, cards, and digital payment platforms. Built for developers.",

  applicationName: "MyIcons",

  authors: [
    {
      name: "Rauf Semi",
      url: "https://github.com/raufsemi",
    },
  ],

  creator: "Rauf Semi",

  alternates: {
    canonical: "https://myicons.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://myicons.vercel.app",
    siteName: "MyIcons",
    title: "MyIcons — Payment Icons for React",
    description:
      "A modern React icon library for payment methods, banks, wallets, cards, and digital payment platforms.",
  },

  twitter: {
    card: "summary_large_image",
    title: "MyIcons — Payment Icons for React",
    description:
      "A modern React icon library for payment methods, banks, wallets, cards, and digital payment platforms.",
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body className="min-h-screen bg-white font-sans text-neutral-950 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
