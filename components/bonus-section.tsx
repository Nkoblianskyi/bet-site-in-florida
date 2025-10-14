import { Card } from "./ui/card"

export const BonusSection = () => {
  return (
    <>
      {/* Bonuses Section */}
      <section id="bonuses" className="py-12 sm:py-16 md:py-20 bg-white w-full max-w-[1250px] mx-auto">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-zinc-800 px-4">
              Understanding Betting Bonuses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="text-center p-4 sm:p-6 bg-white border-2 border-zinc-200 hover:border-zinc-300 transition-colors">

                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zinc-800">Welcome Bonuses</h3>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Get extra value when you sign up with matched deposits and free bets.
                </p>
              </Card>

              <Card className="text-center p-4 sm:p-6 bg-white border-2 border-zinc-200 hover:border-zinc-300 transition-colors">

                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zinc-800">Loyalty Programs</h3>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Earn points and rewards for regular betting activity.
                </p>
              </Card>

              <Card className="text-center p-4 sm:p-6 sm:col-span-2 md:col-span-1 bg-white border-2 border-zinc-200 hover:border-zinc-300 transition-colors">

                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zinc-800">Fair Terms</h3>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  We only recommend sites with reasonable wagering requirements.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
