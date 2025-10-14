export interface BettingSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string // Optional property for duplicate bonus
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
}

export interface FirstListSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string
  modalBonus?: string // New field for modal bonus
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
  disclaimer?: string
  termsUrl?: string // Added terms URL field
}

export interface SecondListSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
  disclaimer?: string
}


export const firstListSites: FirstListSite[] = [
    {
    id: 1,
    name: "Hard Rock Bet",
    logo: "/hard-rock-logo.svg",
    category: "NEW CUSTOMER BONUS",
    bonus: "Bet $5 Get $150 ",
    dopbonus: "in Bonus Bets if You Win",
    rating: 9.8,
    reviewCount: 4875,
    url: "https://www.hardrock.bet/florida/",
    featured: true,
    termsUrl: "https://www.hardrock.bet/florida/terms",
  },
  
]
