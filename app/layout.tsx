import type { Metadata } from "next";
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

  keywords: [
    "MyIcons",
    "React icons",
    "payment icons",
    "payment icon library",
    "Malaysia payment icons",
    "bank icons",
    "wallet icons",
    "DuitNow icons",
    "Touch 'n Go icons",
    "React",
    "TypeScript",
    "SVG icons",
    "npm",
    "developer tools",
  ],

  authors: [
    {
      name: "Rauf Semi",
      url: "https://github.com/raufsemi",
    },
  ],

  creator: "Rauf Semi",

  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://myicons.dev",
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
      </body>
    </html>
  );
}
