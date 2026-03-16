import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hady Awny | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, and Node.js. Explore my projects, experience, and get in touch.",
  openGraph: {
    title: "Hady Awny | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and Node.js. Explore my projects, experience, and get in touch.",
    url: "https://hadyawny.com",
    siteName: "Hady Awny",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hady Awny | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and Node.js. Explore my projects, experience, and get in touch.",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/h-letter.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
