import type { Metadata } from "next";
import { inter } from '@/app/dashboard/fonts';
import "./globals.css";


export const metadata: Metadata = {
  title: "TideCast",
  description: "Weather and Tides of the NC Coast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}