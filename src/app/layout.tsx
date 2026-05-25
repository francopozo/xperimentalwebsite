import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { ScrollTriggerRefresh } from "@/components/gsap/scroll-trigger-refresh";
import "./globals.css";

const display = Epilogue({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Colectivo Xperimental",
    template: "%s | Colectivo Xperimental",
  },
  description:
    "Archivo digital y plataforma editorial para un colectivo de arte contemporaneo, experimental y situado.",
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
