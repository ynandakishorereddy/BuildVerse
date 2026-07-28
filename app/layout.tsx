import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuildVerse Solutions — Websites, Google Maps & Meta Ads for Local Businesses",
  description:
    "Get found. Get called. Get customers. BuildVerse builds your website, ranks you on Google Maps, and runs Meta Ads — all managed by one team. Transparent pricing, no lock-in contracts.",
  keywords: [
    "local business website",
    "Google Maps SEO",
    "Meta Ads management",
    "digital marketing agency India",
    "BuildVerse Solutions",
  ],
  openGraph: {
    title: "BuildVerse Solutions — Get Found. Get Called. Get Customers.",
    description:
      "One team, three growth levers: website development, Google Maps ranking, and Meta Ads. Transparent pricing, no lock-in contracts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sora antialiased">
        {children}
      </body>
    </html>
  );
}
