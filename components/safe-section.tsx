export const SafeSection = () => {
  return (
    <>
      <section id="safety" className="py-8 sm:py-12 md:py-16 bg-[#F5F1E8] w-full max-w-[1280px] mx-auto">
        <div className="w-full max-w-[1280px] mx-auto text-center">
          <div className="px-2 sm:px-4">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-4 text-[#013220]">
              Responsible Gambling in Florida
            </h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4 text-[#2C1810]">
                Gambling should be fun and entertaining. If you feel like your gambling is becoming a problem, please
                seek help immediately. Florida offers multiple resources for responsible gambling support.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
                <div className="bg-white p-4 sm:p-6 border-l-4 border-[#8B0000]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#013220]">Warning Signs</h3>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-[#2C1810]">
                    <li>• Betting more than you can afford to lose</li>
                    <li>• Chasing losses or gambling to recover money</li>
                    <li>• Neglecting work, family, or personal responsibilities</li>
                    <li>• Lying about gambling activities or spending</li>
                    <li>• Borrowing money to gamble</li>
                  </ul>
                </div>

                <div className="bg-white p-4 sm:p-6 border-l-4 border-[#013220]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#013220]">Get Help Now</h3>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-[#2C1810]">
                    <li>• Set deposit and betting limits</li>
                    <li>• Take regular breaks from gambling</li>
                    <li>• Use self-exclusion tools available on Hard Rock Bet</li>
                    <li>• Contact the Florida Council on Compulsive Gambling</li>
                    <li>• Call the 24/7 Helpline: 1-888-ADMIT-IT</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 bg-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#013220]">
                  Florida Responsible Gambling Resources
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-[#2C1810]">
                  <div>
                    <p className="font-semibold mb-2">Regulatory Bodies:</p>
                    <ul className="space-y-1">
                      <li>• Florida Gaming Control Commission (FGCC)</li>
                      <li>• Seminole Tribal Gaming Commission (STGC)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Support Organizations:</p>
                    <ul className="space-y-1">
                      <li>• GamCare</li>
                      <li>• Gambleaware</li>
                      <li>• National Council on Problem Gambling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
