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
  title: "Nattayaporn Morprakop - IT Recruitment Consultant",
  description: "Professional IT Recruitment Consultant at GetLinks. Experienced in connecting top-tier IT talent with innovative companies in Bangkok, Thailand. Contact for recruitment opportunities.",
  keywords: "IT Recruitment, Recruitment Consultant, GetLinks, Bangkok, Thailand, Talent Acquisition, IT Jobs, Hiring, HR",
  authors: [{ name: "Nattayaporn Morprakop" }],
  openGraph: {
    title: "Nattayaporn Morprakop - IT Recruitment Consultant",
    description: "Professional IT Recruitment Consultant specializing in IT talent acquisition with 1+ years of experience at GetLinks.",
    type: "profile",
    locale: "en_US",
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
