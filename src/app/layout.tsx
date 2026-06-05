import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { ScrollTriggerRefresh } from "@/components/gsap/scroll-trigger-refresh";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Epilogue({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteTitle = "Colectivo Xperimental";
const siteDescription =
  "Archivo digital y plataforma editorial para un colectivo de arte contemporaneo, experimental y situado.";
const siteUrl = getSiteUrl();
const socialImage = "/og-image.jpg";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Colectivo Xperimental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${display.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollTriggerRefresh />
        {children}
      </body>
    </html>
  );
}
