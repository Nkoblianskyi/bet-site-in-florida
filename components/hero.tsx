"use client"

import { Smartphone, Lock, Zap } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  onOpenModal: (type: "age" | "terms" | "ranking") => void
}

export const Hero = ({ onOpenModal }: HeroProps) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })

  return (
    <section className="w-full relative overflow-hidden border-b-2 border-gray-300 max-h-[250px] md:max-h-[350px] pt-14">
      <div
        className="absolute w-full inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      <div className="hidden md:block absolute inset-0 bg-black/80" />

      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 md:hidden" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 py-4 md:py-8 h-full flex flex-col justify-center">
        {/* Main Hero Title */}
        <div className="text-center mb-3 md:mb-6">
          <h1 className="text-xl md:text-3xl font-bold text-white mb-2">Best betting sites in Florida</h1>
          <p className="text-sm md:text-lg text-white/90 max-w-3xl mx-auto">
            Discover Florida's Best Betting Site with Comprehensive Rankings
          </p>
        </div>

        {/* Date */}
        <div className="text-center mb-3 md:mb-4">
          <p className="text-xs md:text-sm text-white/80 font-medium">Updated Monthly - {currentDate}</p>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-4xl mx-auto mb-3 md:mb-4">
          <div className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm rounded-lg py-1 px-2">
            <Image
              src="/flag-florida.png"
              width={16}
              height={16}
              alt="FL Logo"
              className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
            />
            <span className="text-xs md:text-sm font-medium text-white">FL Licensed</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm rounded-lg py-1 px-2">
            <Smartphone className="w-3 h-3 md:w-5 md:h-5 text-white flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Mobile Friendly</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm rounded-lg py-1 px-2">
            <Lock className="w-3 h-3 md:w-5 md:h-5 text-white flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Safe & Secure</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm rounded-lg py-1 px-2">
            <Zap className="w-3 h-3 md:w-5 md:h-5 text-white flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Fast Withdrawals</span>
          </div>
        </div>

        {/* Links */}
        <div className="text-center">
          <div className="flex flex-row justify-center gap-3 md:gap-6">
            <span
              onClick={() => onOpenModal("terms")}
              className="text-white/80 hover:text-white cursor-pointer underline hover:no-underline text-[10px] sm:text-xs transition-colors"
            >
              Advertiser Info
            </span>
            <span
              onClick={() => onOpenModal("age")}
              className="text-white/80 hover:text-white cursor-pointer underline hover:no-underline text-[10px] sm:text-xs transition-colors"
            >
              21+ Only
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
