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
  title: "Robra IT | IT Solutions, AMS & Data Services",
  description: "Robra IT delivers IT Solutions, Professional Project Services (PPS), and Application Managed Services (AMS) for enterprise organizations. Right-sized expert teams that execute on your goals.",
  keywords: [
    "IT solutions",
    "application managed services",
    "data services",
    "AI advisory",
    "enterprise integration",
    "IT consulting",
    "digital transformation",
    "professional project services",
    "enterprise data platform",
    "technology rationalization"
  ],
  authors: [{ name: "Robra IT" }],
  creator: "Robra IT",
  publisher: "Robra IT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robrait.com",
    title: "Robra IT | IT Solutions, AMS & Data Services",
    description: "Robra IT delivers IT Solutions, Professional Project Services (PPS), and Application Managed Services (AMS) for enterprise organizations. Right-sized expert teams that execute on your goals.",
    siteName: "Robra IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robra IT | IT Solutions, AMS & Data Services",
    description: "Robra IT delivers IT Solutions, Professional Project Services (PPS), and Application Managed Services (AMS) for enterprise organizations. Right-sized expert teams that execute on your goals.",
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
