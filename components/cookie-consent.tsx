"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CookieConsentProps {
  onAccept: () => void
}

export function CookieConsent({ onAccept }: CookieConsentProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    setShow(false)
    onAccept()
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-foreground p-3 sm:p-4 z-50 border-t-2  shadow-lg">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-foreground">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
          <Link href="/cookies" className="text-black hover:underline text-xs sm:text-sm font-medium">
            Learn More
          </Link>
          <Button
            onClick={handleAccept}
            className="bg-accent hover:bg-accent/90 text-green-600 text-xs sm:text-sm px-4 py-2 font-semibold"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
