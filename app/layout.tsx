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
  title: "Nova AI Solutions | AI Chatbots for UK Businesses & Agencies",
  description: "Nova AI Solutions builds intelligent AI chatbots that handle customer enquiries, capture leads, and engage your audience 24/7. White-label ready for agencies.",
  openGraph: {
    title: "Nova AI Solutions | AI Chatbots for UK Businesses & Agencies",
    description: "Nova AI Solutions builds intelligent AI chatbots that handle customer enquiries, capture leads, and engage your audience 24/7. White-label ready for agencies.",
    url: "https://nova-ai-solutions-mauve.vercel.app",
    siteName: "Nova AI Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova AI Solutions | AI Chatbots for UK Businesses & Agencies",
    description: "Nova AI Solutions builds intelligent AI chatbots that handle customer enquiries, capture leads, and engage your audience 24/7. White-label ready for agencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
