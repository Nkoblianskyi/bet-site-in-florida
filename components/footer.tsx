import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F5F1E8] text-[#013220] py-8 sm:py-12 w-full border-t-2 border-[#013220]">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#013220]">SportInFlorida</h3>
            </div>
            <p className="text-sm sm:text-base text-[#5A1A1A] mt-2">
              Your trusted source for betting site reviews and rankings in Florida.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#013220]">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-[#5A1A1A]">
              <li>
                <Link href="/privacy" className="hover:text-[#013220] hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#013220] hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>


        </div>

        <div className="border-t-2 border-[#013220] pt-6 sm:pt-8 mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-semibold mb-4 text-center text-[#013220]">Responsible Gambling</h4>

          {/* Florida Problem Gambling Helpline */}
          <div className="bg-destructive text-white p-4 rounded-lg mb-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="w-5 h-5" />
              <h5 className="font-semibold text-lg">Florida Problem Gambling Helpline</h5>
            </div>
            <a href="tel:1-888-ADMIT-IT" className="text-2xl font-bold hover:underline">
              1-888-ADMIT-IT (1-888-236-4848)
            </a>
            <p className="text-sm mt-2">24/7 Confidential Support</p>
          </div>

          {/* Responsible Gambling Organizations */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-4">
          <Link
                href="https://www.gamcare.org.uk/"
                className=" p-2 sm:p-3 rounded text-center transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamecare.svg"
                  alt="GamCare"
                  width={80}
                  height={30}
                  className="h-6 sm:h-8 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </Link>
            <Link
                href="https://www.gambleaware.org/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamble.webp"
                  alt="GambleAware"
                  width={80}
                  height={30}
                  className="h-6 sm:h-8 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </Link>
              <Link
                href="https://flgaming.gov/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/fgcc.png"
                  alt="FGCC"
                  width={80}
                  height={30}
                  className="h-6 sm:h-8 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </Link>
              
              <Link
                href="https://www.gamstop.co.uk/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamstop.svg"
                  alt="GamStop"
                  width={80}
                  height={30}
                  className="h-6 sm:h-8 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </Link>
              
              <Link
                href="https://www.ncpgambling.org/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo-split-home-ncpg.svg"
                  alt="ncpgambling"
                  width={140}
                  height={80}
                  className="h-14 sm:h-16 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </Link>
              <Link
                href="https://gamblinghelp.org/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamblinghelp.webp"
                  alt="gamblinghelp"
                  width={120}
                  height={60}
                  className="h-14 sm:h-16 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </Link>
              
          </div>

          <div className="text-center">
            <Badge className="bg-secondary text-secondary-foreground">21+</Badge>
          </div>
        </div>

        <div className="border-t-2 border-[#013220] pt-6 sm:pt-8 text-center text-[#5A1A1A]">
          <p className="text-xs sm:text-sm mb-3 sm:mb-4 px-4">
            <strong className="text-[#013220]">Responsible Gambling</strong>
            <br />
            Bonuses and content are subject to change. Always review the terms on the bookmaker's official site before
            joining. 21+ only. New Florida Players only. T&Cs apply. Please Gamble Responsibly. GambleAware.org
          </p>
          <p className="text-xs sm:text-sm">&copy; 2025 SportInFlorida.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
