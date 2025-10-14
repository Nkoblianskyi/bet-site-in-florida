import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black/60 backdrop-blur-sm text-foreground py-3 w-full border-b-2 border-primary fixed top-0 z-50 shadow-sm">
      <div className="w-full mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            </div>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Bet Site <span className="text-primary">in Florida</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
