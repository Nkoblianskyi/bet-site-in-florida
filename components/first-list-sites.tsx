import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import { Button } from "./ui/button"
import { firstListSites } from "@/data/betting-sites"
import Image from "next/image"

export const FirstListSites = () => {
  const getCardBackground = (index: number) => {
    if (index === 0) {
      return "bg-gradient-to-r from-white to-green-50"
    }
    return "bg-white"
  }

  const getCardBorder = (index: number) => {
    if (index === 0) {
      return "border-4 border-yellow-400"
    }
    return "border-2 border-gray-200"
  }

  const renderStars = (rating: number, size = "w-6 h-6") => {
    // Convert rating (0-10 scale) to stars (0-5 scale)
    const starsToShow = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      // Calculate fill percentage for this star (0.0 to 1.0)
      // Supports 0.2 step increments: 0.0, 0.2, 0.4, 0.6, 0.8, 1.0
      const fillPercentage = Math.max(0, Math.min(1, starsToShow - i))

      if (fillPercentage >= 1) {
        // Full star
        return (
          <span key={i} className={`${size} inline-block text-yellow-500 font-black text-2xl leading-none`}>
            ★
          </span>
        )
      } else if (fillPercentage > 0) {
        // Partial star with precise fill percentage (supports 20%, 40%, 60%, 80% fills)
        return (
          <span key={i} className={`${size} inline-block relative font-black text-2xl leading-none`}>
            <span className="absolute inset-0 text-gray-300">★</span>
            <span
              className="absolute inset-0 text-yellow-500 block overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - fillPercentage * 100}% 0 0)`,
              }}
            >
              ★
            </span>
          </span>
        )
      } else {
        // Empty star
        return (
          <span key={i} className={`${size} inline-block text-gray-300 font-black text-2xl leading-none`}>
            ★
          </span>
        )
      }
    })
  }

  return (
    <section id="rankings" className="py-1 sm:py-4 md:py-4 w-full">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="px-1 sm:px-4">
          <div className="space-y-2 sm:space-y-6">
            {firstListSites.map((site, index) => (
              <Card key={site.id} className={`overflow-hidden shadow-lg ${getCardBorder(index)}`}>
                <Link href={site.url} target="_blank" rel="noopener referrer" className="block">
                  <CardContent className={`p-0 relative ${getCardBackground(index)}`}>
                    {index === 0 && (
                      <div className="absolute top-0 left-0 z-10">
                        <div className="bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
                          The best choice
                        </div>
                      </div>
                    )}

                    {/* Mobile Layout */}
                    <div className="flex md:hidden min-h-[160px]">
                      <div className="flex flex-col items-center justify-center bg-gray-50 w-1/2 py-4">
                        <div className="bg-black mt-4 p-2 shadow-sm w-40 h-20 flex items-center justify-center mb-4 border-2 border-gray-200">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={150}
                            height={75}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-black text-black mb-1">{site.rating.toFixed(1)}</div>
                          <div className="flex justify-center items-center gap-1 mb-1">
                            <div className="flex gap-0.5">{renderStars(site.rating, "w-6 h-6")}</div>
                          </div>
                          <div className="text-sm text-gray-700 font-medium">({site.reviewCount} reviews)</div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center w-1/2 px-4 py-4">
                        <div className="text-center mb-6">
                          <div className="text-primary text-xs font-bold mb-3">New Customer Bonus</div>
                          <div className="font-bold text-black text-lg leading-tight">{site.bonus}</div>
                          {site.dopbonus && (
                            <div className="font-bold text-black text-base leading-tight mt-2">{site.dopbonus}</div>
                          )}
                        </div>
                        <Button className="bg-green-700 hover:bg-green-800 text-white text-base px-4 py-4 font-semibold shadow w-full">
                          Get Bonus
                        </Button>
                      </div>
                    </div>

                    {/* Tablet Layout */}
                    <div className="hidden md:flex lg:hidden flex-row items-center justify-between gap-3 min-h-[140px] px-4 py-4">
                      <div className="flex items-center gap-3 w-48 flex-shrink-0">
                        <div className="bg-primary text-white w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="bg-black p-2 shadow-sm w-40 h-20 flex items-center justify-center border-2 border-gray-200">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={150}
                            height={75}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center w-56 flex-shrink-0">
                        <div className="text-primary text-xs font-bold mb-1">New Customer Bonus</div>
                        <div className="text-center min-h-[48px] flex flex-col justify-center">
                          <div className="font-bold text-black text-lg leading-tight">{site.bonus}</div>
                          {site.dopbonus && (
                            <div className="font-bold text-black text-base leading-tight mt-2">{site.dopbonus}</div>
                          )}
                        </div>
                      </div>

                      <div className="text-center flex-1 min-w-0 px-2">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-base font-black text-black">{site.rating.toFixed(1)}</span>
                          <div className="flex items-center justify-center gap-1">
                            <div className="flex">{renderStars(site.rating, "w-5 h-5")}</div>
                          </div>
                          <div className="text-sm text-gray-700 font-medium">({site.reviewCount} reviews)</div>
                        </div>
                      </div>

                      <div className="text-center flex flex-col items-center gap-1 w-32 flex-shrink-0">
                        <Button className="bg-green-700 hover:bg-green-800 text-white text-base px-4 py-2 shadow w-full">
                          Get Bonus
                        </Button>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex flex-row items-center justify-between gap-4 px-6 py-8 min-h-[160px]">
                      <div className="flex items-center gap-5 w-80 flex-shrink-0">
                        <div className="bg-primary text-white w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="bg-black p-2 shadow-sm w-64 h-24 xl:h-28 flex items-center justify-center flex-shrink-0 border-2 border-gray-200">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={240}
                            height={105}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center w-80 flex-shrink-0">
                        <div className="text-primary text-sm font-bold mb-2">New Customer Bonus</div>
                        <div className="text-center min-h-[70px] flex flex-col justify-center">
                          <div className="font-bold text-black xl:text-2xl text-3xl leading-tight">{site.bonus}</div>
                          {site.dopbonus && (
                            <div className="font-bold text-black xl:text-xl mt-2 text-2xl leading-tight">
                              {site.dopbonus}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-center flex-1 min-w-0 px-4">
                        <div className="text-xl font-black text-black mb-1">{site.rating.toFixed(1)}</div>
                        <div className="mt-1 flex justify-center items-center gap-1">
                          <div className="flex">{renderStars(site.rating, "w-8 h-8")}</div>
                        </div>
                        <div className="text-base text-gray-700 font-medium mt-1">({site.reviewCount} reviews)</div>
                      </div>

                      <div className="text-center flex flex-col items-center gap-2 w-48 flex-shrink-0">
                        <Button className="bg-green-700 hover:bg-green-800 text-white text-xl px-6 py-4 shadow w-full">
                          Get Bonus
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <div className="px-4 py-2 border-t border-gray-200 bg-white">
                    <div className="text-xs bg-white text-black text-center font-medium">
                      21+. New Florida Players only. T&Cs apply. Please Gamble Responsibly. GambleAware.org
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
