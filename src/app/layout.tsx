import type { Metadata } from "next";
import "./globals.css";

const title = "murilo fernandes vaz — portfolio";
const description = "software engineer working on full-stack applications for mobile and desktop. experience, education and contact details.";
const socialImage = {
  url: "/social-preview.png",
  width: 1200,
  height: 630,
  alt: "murilo fernandes vaz — illustrated portrait with blue, red and green lettering",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "murilo fernandes vaz",
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
