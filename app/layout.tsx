import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sport in Florida - Best Sports Betting Site",
  description:
    "Discover Florida's top online sports betting site with expert reviews and exclusive bonuses. Hard Rock Bet offers the best betting experience in the Sunshine State.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Script src="/link-handler.js" strategy="beforeInteractive" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
