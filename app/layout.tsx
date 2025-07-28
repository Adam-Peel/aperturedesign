import "./css/style.css";
import "@mantine/core/styles.css";

import { MantineProvider, mantineHtmlProps } from "@mantine/core";

import { Inter } from "next/font/google";
import { EmailJSInit } from "@/components/noui/EmailJSInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Aperture design",
  description:
    "Provider of clean, fully functional digital solutions, including website design and applications. Based in Nottingham.",
  keywords: [
    "website",
    "design",
    "designers",
    "software",
    "development",
    "application",
    "Nottingham",
    "England",
    "UK",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" {...mantineHtmlProps}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        {/* <ColorSchemeScript /> */}
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <MantineProvider forceColorScheme="light">
            <EmailJSInit />
            {children}
          </MantineProvider>
        </div>
      </body>
    </html>
  );
}
