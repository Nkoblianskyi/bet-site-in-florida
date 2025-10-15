import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Best Sport in Florida | Hard Rock Bet Florida | Legal Sports Betting in FL",
  description:
    "Experience premium sports betting in Florida with Hard Rock Bet. Bet on NFL, NBA, MLB, NHL, and more. Exclusive welcome bonus: Bet $5, Get $150 in bonus bets. The only legal online sportsbook in Florida.",
  keywords: [
    "Hard Rock Bet",
    "Florida sports betting",
    "legal sports betting Florida",
    "NFL betting",
    "NBA betting",
    "MLB betting",
    "NHL betting",
    "parlays",
    "sports betting bonus",
  ],
  openGraph: {
    title: "Hard Rock Bet Florida | Legal Sports Betting",
    description:
      "The only legal online sportsbook in Florida. Bet on your favorite sports with competitive odds and instant payouts.",
    type: "website",
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
