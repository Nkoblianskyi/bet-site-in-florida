import { Card } from "./ui/card"

export const Faq = () => {
  return (
    <>
      <section id="faq" className="py-8 sm:py-12 md:py-16 bg-[#F5F1E8] w-full max-w-[1280px] mx-auto">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#B8860B] px-4">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#013220]">
                  Is online sports betting legal in Florida?
                </h3>
                <p className="text-sm sm:text-base text-[#2C1810]">
                  Yes, Hard Rock Bet operates legally in Florida under the gaming compact between the state and the
                  Seminole Tribe of Florida. It is regulated by the Florida Gaming Control Commission (FGCC) and the
                  Seminole Tribal Gaming Commission (STGC). You must be 21 or older to participate.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#013220]">
                  Can I bet on college sports in Florida?
                </h3>
                <p className="text-sm sm:text-base text-[#2C1810]">
                  Yes, you can bet on college sports in Florida, including Florida-based teams. However, you cannot
                  place bets on individual player performances or prop bets involving college athletes.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#013220]">
                  How do I claim the Hard Rock Bet bonus?
                </h3>
                <p className="text-sm sm:text-base text-[#2C1810]">
                  New customers can claim the "Bet $5 Get $150 in Bonus Bets if You Win" offer by creating an account,
                  making a qualifying deposit, and placing a $5 bet. If your bet wins, you'll receive $150 in bonus
                  bets. Terms and conditions apply.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#013220]">
                  How often do you update your rankings?
                </h3>
                <p className="text-sm sm:text-base text-[#2C1810]">
                  We continuously monitor Hard Rock Bet's performance, promotions, and user feedback. Our rankings are
                  reviewed and updated monthly to ensure accuracy and reflect any changes in service quality or
                  offerings.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#013220]">
                  Do you receive commissions from betting sites?
                </h3>
                <p className="text-sm sm:text-base text-[#2C1810]">
                  Yes, we may receive affiliate commissions when you sign up through our links. However, this does not
                  influence our rankings or reviews. Our evaluations are based on objective criteria including
                  licensing, user experience, odds quality, and customer feedback.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
