"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header spacer */}
      <div className="h-24" />

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Effective Date: January 1, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-gray-700 leading-relaxed">
                Robra IT ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information, including data related to SMS and messaging through 10-digit long codes (10DLC).
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                If you have questions about this Privacy Policy or your data, please contact us at:
              </p>
              <p className="text-gray-700 leading-relaxed">
                Email:{" "}
                <a
                  href="mailto:privacy@robrait.com"
                  className="text-primary hover:text-primary/80 transition-colors underline font-semibold"
                >
                  privacy@robrait.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                1. Scope and Applicability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy applies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Our website and online services.</li>
                <li>SMS and 10DLC messaging programs.</li>
                <li>Any interactions where we collect personal information from you.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                By interacting with our services or opting into our messaging programs, you agree to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following categories of information:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                a. Information You Provide Directly
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Name, email address, and phone number</li>
                <li>Any message content you send us</li>
                <li>Consent and opt-in details for SMS messaging</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                b. Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>IP address and device details</li>
                <li>Browser and usage data (e.g., pages visited, timestamps)</li>
                <li>Cookies and analytics information</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                c. Consent Records
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain records of SMS opt-in consent to ensure compliance with 10DLC and TCPA requirements.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Send SMS messages you&apos;ve explicitly opted in to receive</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Manage and improve our services and communications</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Protect against fraud and unauthorized use</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not use your information for any purpose that you have not consented to.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                4. Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Robra IT does not sell, rent, or share personal information or SMS opt-in data for marketing purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information only with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Service Providers:</strong> Trusted partners who assist in delivering our services (e.g., SMS gateways or cloud hosting).
                </li>
                <li>
                  <strong>Legal Authorities:</strong> If required by law or to protect our rights and users&apos; safety.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If Robra IT is merged or acquired, data may transfer under equivalent privacy protections.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All third parties must protect your data and use it only for authorized purposes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5. SMS and 10DLC Messaging Compliance
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                a. Opt-In Consent
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>You must explicitly consent to receive SMS messages from Robra IT.</li>
                <li>Consent may be obtained via form submission, verbal agreement, or checkbox.</li>
                <li>At the point of opt-in, you&apos;ll be notified of message frequency (which may vary) and that message and data rates may apply.</li>
                <li>After opt-in, you will receive a confirmation message with opt-out instructions.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                b. Opt-Out
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>You can opt out at any time by replying STOP to any text message.</li>
                <li>After opting out, you will receive a final confirmation message and no further texts will be sent.</li>
                <li>
                  You may also text HELP for support or email{" "}
                  <a
                    href="mailto:privacy@robrait.com"
                    className="text-primary hover:text-primary/80 transition-colors underline font-semibold"
                  >
                    privacy@robrait.com
                  </a>
                  .
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                c. Identification and Transparency
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Each SMS message will clearly identify Robra IT as the sender.</li>
                <li>All programs include &quot;Message and data rates may apply&quot; disclosure.</li>
                <li>Message frequency is stated as &quot;1–4 messages per month (or as needed, frequency may vary).&quot;</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                6. Data Security and Retention
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We use reasonable technical and organizational measures to protect your information against unauthorized access or disclosure.</li>
                <li>While no system is completely secure, we regularly review our security practices to safeguard data.</li>
                <li>We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                7. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access and receive a copy of your personal data.</li>
                <li>Request correction or deletion of your information.</li>
                <li>Withdraw consent for SMS communications by replying STOP or contacting us.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, email{" "}
                <a
                  href="mailto:privacy@robrait.com"
                  className="text-primary hover:text-primary/80 transition-colors underline font-semibold"
                >
                  privacy@robrait.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                8. Children&apos;s Privacy
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Our services are not intended for children under 13 years of age.</li>
                <li>We do not knowingly collect personal information from children. If we learn we have done so, we will promptly delete the data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                9. Changes to This Policy
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We may update this Privacy Policy periodically to reflect changes in law or our practices.</li>
                <li>When updates occur, we will revise the &quot;Effective Date&quot; above and post the new version on our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions, requests, or privacy concerns, please contact:
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Robra IT</strong>
                <br />
                Email:{" "}
                <a
                  href="mailto:privacy@robrait.com"
                  className="text-primary hover:text-primary/80 transition-colors underline font-semibold"
                >
                  privacy@robrait.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
