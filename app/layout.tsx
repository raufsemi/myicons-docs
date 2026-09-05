import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "MyIcons",
    template: "%s — MyIcons",
  },
  description: "A modern React icon library for developers.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-white font-sans text-neutral-950 antialiased">
        {children}
      </body>
    </html>
  );
}
