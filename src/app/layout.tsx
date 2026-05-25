import type { Metadata } from "next";
import { Epilogue, Source_Sans_3 } from "next/font/google";
import { ScrollTriggerRefresh } from "@/components/gsap/scroll-trigger-refresh";
import "./globals.css";

const display = Epilogue({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Source_Sans_3({
  variable: "--font-sans-face",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollTriggerRefresh />
        {children}
      </body>
    </html>
  );
}
