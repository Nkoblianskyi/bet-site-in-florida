import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-[#B8860B]" />
            <h1 className="text-4xl font-bold text-[#013220]">Privacy Policy</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#2C1810] mb-8">Last updated: {new Date().toLocaleDateString("en-US")}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Introduction</h2>
              <p className="text-[#2C1810]">
                Welcome to Sport in Florida (sportinflorida.com). We are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website and use our services to find the
                best sports betting options in Florida.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Information We Collect</h2>
              <p className="mb-4 text-[#2C1810]">
                We collect information you provide directly to us, as well as information automatically collected when
                you use our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#2C1810]">
                <li>
                  <strong>Personal Information:</strong> Name, email address, and age verification (to confirm you are
                  21+)
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on site, betting site preferences, and
                  interaction with our content
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, operating system, and device
                  identifiers
                </li>
                <li>
                  <strong>Location Data:</strong> General location information to verify you are accessing from Florida
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> Information collected through cookies and similar technologies
                  (see our Cookie Policy)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">How We Use Your Information</h2>
              <p className="mb-4 text-[#2C1810]">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#2C1810]">
                <li>To provide and improve our betting site ranking and review services</li>
                <li>To verify you are 21 years or older and located in Florida</li>
                <li>To send you updates about Hard Rock Bet promotions and bonuses</li>
                <li>To analyze usage patterns and optimize user experience for Florida bettors</li>
                <li>To comply with legal obligations and Florida gaming regulations</li>
                <li>To prevent fraud and ensure responsible gambling practices</li>
                <li>To communicate with you about our services and respond to inquiries</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4 text-[#2C1810]">
                We do not sell your personal information to third parties. We may share your information in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#2C1810]">
                <li>
                  <strong>Affiliate Partners:</strong> When you click on links to Hard Rock Bet, we may share limited
                  information to track referrals
                </li>
                <li>
                  <strong>Service Providers:</strong> With third-party vendors who help us operate our website
                  (analytics, hosting, email services)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to comply with Florida gaming regulations
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly agree to share your information
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Data Security</h2>
              <p className="text-[#2C1810]">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. These measures include
                encryption, secure servers, and regular security audits. However, no method of transmission over the
                internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Your Privacy Rights</h2>
              <p className="mb-4 text-[#2C1810]">
                Depending on your location and applicable laws, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#2C1810]">
                <li>
                  <strong>Access:</strong> Request access to the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your personal information
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data in a portable format
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent was given
                </li>
              </ul>
              <p className="mt-4 text-[#2C1810]">
                To exercise these rights, please contact us through our website. We will respond to your request within
                30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Age Restrictions</h2>
              <p className="text-[#2C1810]">
                Our website is intended exclusively for individuals who are 21 years of age or older and located in
                Florida. We do not knowingly collect information from individuals under 21. If we become aware that we
                have collected personal information from someone under 21, we will take steps to delete that information
                promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Responsible Gambling</h2>
              <p className="text-[#2C1810]">
                We are committed to promoting responsible gambling. If you or someone you know has a gambling problem,
                please contact the Florida Council on Compulsive Gambling at 1-888-ADMIT-IT or visit their website for
                support resources.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Third-Party Links</h2>
              <p className="text-[#2C1810]">
                Our website contains links to third-party websites, including Hard Rock Bet. We are not responsible for
                the privacy practices or content of these external sites. We encourage you to review the privacy
                policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Changes to This Privacy Policy</h2>
              <p className="text-[#2C1810]">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or other factors. We will notify you of any material changes by posting the updated
                policy on this page with a new "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Contact Us</h2>
              <p className="text-[#2C1810] mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="bg-[#F5F1E8] p-4 rounded text-[#2C1810]">
                <p>
                  <strong>Sport in Florida</strong>
                </p>
                <p>Website: sportinflorida.com</p>
                <p>
                  For Florida residents: We are committed to addressing your privacy concerns promptly and in accordance
                  with Florida law.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#013220] mb-4">Florida-Specific Disclosures</h2>
              <p className="text-[#2C1810]">
                This website operates in compliance with Florida gaming laws and regulations. We work with licensed
                operators regulated by the Florida Gaming Control Commission (FGCC) and the Seminole Tribal Gaming
                Commission (STGC). All betting activities must be conducted in accordance with Florida state law.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
