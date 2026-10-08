import type { Metadata } from "next";
import "animate.css";
import "./globals.scss";
import WowInit from "@/app/WowInit";

const siteUrl = "https://sm-tech-two.vercel.app/";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SM Tech",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "SM Tech delivers integrated engineering, inspection, project management, equipment certification, crewing and digital solutions for critical industrial and energy operations.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SM Tech",
  url: siteUrl,
  description:
    "Integrated engineering and industrial solutions for safer, more reliable and efficient operations.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SM Tech | Engineering & Industrial Solutions",
    template: "%s | SM Tech",
  },

  description:
    "SM Tech delivers integrated engineering, inspection, project management, equipment certification, crewing and digital solutions for critical industrial and energy operations.",

  keywords: [
    "SM Tech",
    "engineering solutions",
    "industrial solutions",
    "oil and gas services",
    "oil and gas engineering",
    "equipment inspection",
    "equipment certification",
    "project management",
    "asset integrity",
    "industrial inspection",
    "energy solutions",
    "digital solutions",
  ],

  authors: [
    {
      name: "SM Tech",
    },
  ],

  creator: "SM Tech",
  publisher: "SM Tech",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SM Tech",

    title: "SM Tech | Engineering & Industrial Solutions",

    description:
      "Integrated engineering, inspection, project management, equipment certification and digital solutions for critical industrial operations.",

    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "SM Tech - Engineering & Industrial Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SM Tech | Engineering & Industrial Solutions",

    description:
      "Integrated engineering, inspection, project management, equipment certification and digital solutions for critical industrial operations.",

    images: [`${siteUrl}/og-image.jpg`],
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>       
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
          />
        </head>
        <WowInit />
        <body>{children}</body>
      </html>
    </>
  );
}