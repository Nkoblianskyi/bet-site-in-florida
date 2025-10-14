"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { FirstListSite } from "@/data/betting-sites"

interface RankingModalProps {
  show: boolean
  onClose: () => void
  site: FirstListSite | null
}

export function RankingModal({ show, onClose, site }: RankingModalProps) {
  if (!show || !site) return null

  const renderStars = (rating: number, size = "w-4 h-4 sm:w-5 sm:h-5") => {
    const starsToShow = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(1, starsToShow - i))

      if (fillPercentage >= 1) {
        return (
          <span key={i} className={`${size} inline-block text-yellow-500 font-black text-2xl leading-none`}>
            ★
          </span>
        )
      } else if (fillPercentage > 0) {
        return (
          <span key={i} className={`${size} inline-block relative font-black text-2xl leading-none`}>
            <span className="absolute inset-0 text-gray-300">★</span>
            <span
              className="absolute inset-0 text-yellow-500 block"
              style={{
                clipPath: `inset(0 ${100 - fillPercentage * 100}% 0 0)`,
              }}
            >
              ★
            </span>
          </span>
        )
      } else {
        return (
          <span key={i} className={`${size} inline-block text-gray-300 font-black text-2xl leading-none`}>
            ★
          </span>
        )
      }
    })
  }

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white border-4 border-yellow-400 shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-yellow-400 text-white py-6 px-6 relative border-b-4 border-yellow-400">
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-black mb-1">Players Choice</div>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-2xl font-bold leading-none text-black"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          <div className="bg-white">
            {/* Logo Section - White background with dark border */}
            <div className="p-6 border-b-2 border-gray-200 bg-black">
              <div className="w-56 h-32 sm:w-64 sm:h-36 mx-auto flex items-center justify-center">
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={240}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Rating Section - Light gray background with dark text */}
            <div className="p-6 bg-gray-50 border-b-2 border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex gap-1">{renderStars(site.rating, "w-5 h-5 sm:w-6 sm:h-6")}</div>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">{site.rating.toFixed(1)}</span>
                </div>
                <div className="text-sm text-gray-600">{site.reviewCount} verified reviews</div>
              </div>
            </div>

            {/* Bonus Section - Green background with dark text */}
            <div className="p-6 bg-green-50 border-b-2 border-green-200">
              <div className="text-center">
                <p className="font-bold mb-3 text-lg text-primary">Exclusive Welcome Bonus</p>
                <div className="font-bold text-gray-900 text-xl sm:text-2xl leading-tight">
                  {site.modalBonus || site.bonus}
                </div>
              </div>
            </div>

            {/* CTA Section - White background */}
            <div className="p-6 space-y-4">
              <Link href={site.url} target="_blank" rel="noopener noreferrer" onClick={handleClose}>
                <Button className="bg-yellow-400 hover:bg-green-800 text-black px-8 py-6 text-lg sm:text-xl font-bold shadow-lg hover:shadow-xl w-full transition-all rounded-lg">
                  Claim Bonus Now →
                </Button>
              </Link>

              <p className="text-[9px] sm:text-[10px] text-gray-800 max-w-md mx-auto leading-relaxed text-center font-medium">
                21+ Florida residents only. Play responsibly. Terms and wagering conditions apply. GambleAware.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
