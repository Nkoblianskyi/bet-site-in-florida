import Link from "next/link"
import { Cookie, ArrowLeft } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <header className="bg-[#013220] text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 hover:text-[#B8860B] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="w-8 h-8 text-[#B8860B]" />
            <h1 className="text-4xl font-bold text-[#013220]">Cookie Policy</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#2C1810] mb-8">Last updated: {new Date().toLocaleDateString("en-US")}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">What Are Cookies</h2>
              <p className="text-[#2C1810]">
                Cookies are small text files that are placed on your computer or mobile device when you visit Sport in
                Florida (sportinflorida.com). They help us provide you with a better experience by remembering your
                preferences, analyzing how you use our site, and ensuring our betting recommendations are relevant to
                Florida residents.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-[#013220] pl-4">
                  <h3 className="text-xl font-semibold text-[#013220] mb-2">Essential Cookies</h3>
                  <p className="text-[#2C1810]">
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation, access to secure areas, and remembering your cookie preferences. These cookies do
                    not store any personally identifiable information.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A8A] pl-4">
                  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">Analytics Cookies</h3>
                  <p className="text-[#2C1810]">
                    We use analytics cookies to understand how Florida visitors interact with our website. This helps us
                    improve our betting site reviews, rankings, and content. We may use Google Analytics and similar
                    services to collect this data.
                  </p>
                </div>

                <div className="border-l-4 border-[#B8860B] pl-4">
                  <h3 className="text-xl font-semibold text-[#B8860B] mb-2">Marketing & Affiliate Cookies</h3>
                  <p className="text-[#2C1810]">
                    These cookies track your browsing habits to show you relevant betting promotions and measure the
                    effectiveness of our affiliate partnerships with Hard Rock Bet. They help us provide you with the
                    most current bonus offers available to Florida players.
                  </p>
                </div>

                <div className="border-l-4 border-[#8B0000] pl-4">
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Preference Cookies</h3>
                  <p className="text-[#2C1810]">
                    These cookies remember your settings and preferences, such as language selection and display
                    options, to provide a more personalized experience when you return to our site.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Managing Cookies</h2>
              <p className="mb-4 text-[#2C1810]">You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#2C1810]">
                <li>
                  <strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through their
                  settings menu
                </li>
                <li>
                  <strong>Cookie consent banner:</strong> Use our cookie preferences center when you first visit the
                  site
                </li>
                <li>
                  <strong>Opt-out tools:</strong> Use industry opt-out tools like the Digital Advertising Alliance for
                  advertising cookies
                </li>
              </ul>
              <p className="mt-4 text-[#2C1810]">
                Please note that blocking certain cookies may impact your experience on our site and limit access to
                some features.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Third-Party Cookies</h2>
              <p className="text-[#2C1810]">
                We may use third-party services that place cookies on your device. These include analytics providers
                (Google Analytics), advertising networks, and our affiliate partners like Hard Rock Bet. Each third
                party has their own privacy and cookie policies, which we encourage you to review.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Age Verification</h2>
              <p className="text-[#2C1810]">
                Our website is intended for Florida residents aged 21 and over. We do not knowingly collect information
                from individuals under 21. If you are under 21, please do not use this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Updates to This Policy</h2>
              <p className="text-[#2C1810]">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
                business practices. Any changes will be posted on this page with an updated revision date. We encourage
                you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Contact Us</h2>
              <p className="text-[#2C1810]">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us through our
                website. We're here to help Florida bettors make informed decisions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
