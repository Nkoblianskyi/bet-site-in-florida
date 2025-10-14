"use client"

import { useState, useEffect } from "react"
import { firstListSites, type FirstListSite } from "@/data/betting-sites"
import { BonusSection } from "@/components/bonus-section"
import { HowWeRank } from "@/components/how-we-rank"
import { Hero } from "@/components/hero"
import { Faq } from "@/components/faq"
import { SafeSection } from "@/components/safe-section"
import { FirstListSites } from "@/components/first-list-sites"
import { CookieConsent } from "@/components/cookie-consent"
import { RankingModal } from "@/components/ranking-modal"

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [topSite, setTopSite] = useState<FirstListSite | null>(null)
  const [isClient, setIsClient] = useState(false)

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    if (!showModal) {
      setShowModal(true)
    }
  }

  useEffect(() => {
    setIsClient(true)
    setTopSite(firstListSites[0] || null)

    const timer = setTimeout(() => {
      setShowModal(true)
    }, 12000)

    return () => clearTimeout(timer)
  }, [])

  const openModal = () => {
    setShowModal(true)
  }

  if (!isClient) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="rounded-full h-32 w-32 border-b-2 border-primary animate-spin"></div>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/sports-bg.jpg')",
      }}
    >

      <Hero onOpenModal={openModal} />

      <FirstListSites />

      {/* Bonuses Section */}
      <div id="bonuses" className="w-full bg-white  max-w-[1250px] relative z-10">
        <BonusSection />
      </div>

      {/* How We Rank Section */}
      <div className="w-full bg-white  max-w-[1250px] relative z-10">
        <HowWeRank />
      </div>

      {/* Safe Gambling Section */}
      <div className="w-full bg-white  max-w-[1250px] relative z-10">
        <SafeSection />
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-white  max-w-[1250px] relative z-10">
        <Faq />
      </div>

      <CookieConsent onAccept={handleAcceptCookies} />

      <RankingModal show={showModal} onClose={() => setShowModal(false)} site={topSite} />
    </div>
  )
}
