import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
})

export const metadata: Metadata = {
  title: "Robra IT | Modern IT Staffing Solutions",
  description: "Empowering businesses with world-class IT talent. Robra IT connects companies with top-tier technology professionals — delivering flexible staffing solutions for your projects, teams, and long-term growth.",
  keywords: [
    "IT staffing",
    "technology recruitment",
    "contract staffing",
    "direct hire",
    "managed services",
    "remote talent",
    "IT consulting",
    "software developers",
    "IT professionals",
    "staffing solutions"
  ],
  authors: [{ name: "Robra IT" }],
  creator: "Robra IT",
  publisher: "Robra IT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robrait.com",
    title: "Robra IT | Modern IT Staffing Solutions",
    description: "Empowering businesses with world-class IT talent. Flexible staffing solutions for your projects, teams, and long-term growth.",
    siteName: "Robra IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robra IT | Modern IT Staffing Solutions",
    description: "Empowering businesses with world-class IT talent. Flexible staffing solutions for your projects, teams, and long-term growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification tokens here when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${ubuntu.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
