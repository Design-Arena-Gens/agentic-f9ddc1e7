import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tutano = localFont({
  src: "./fonts/tutano.woff2",
  variable: "--font-tutano",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "FoodHub - Discover Amazing Food",
  description: "Discover, order, and track your favorite food experiences",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${tutano.variable} font-sans antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
