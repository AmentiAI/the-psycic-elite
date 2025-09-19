import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ABTestingProvider } from "@/components/ab-testing-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Conjuring Psychic Services - Rhode Island's Premier Psychic Readings",
  description:
    "Connect with gifted psychics in Rhode Island for tarot readings, astrology, spiritual guidance, and more. Serving Providence, Newport, Warwick, and all of Rhode Island. Book your reading today.",
  keywords: "psychic reading, tarot cards, astrology, spiritual guidance, Rhode Island, Providence, Newport, Warwick, psychic advisor, clairvoyant, medium, energy healing, crystal healing, dream interpretation",
  authors: [{ name: "Conjuring Psychic Services" }],
  creator: "Conjuring Psychic Services",
  publisher: "Conjuring Psychic Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://conjuring-psychic-services.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Conjuring Psychic Services - Rhode Island's Premier Psychic Readings",
    description: "Connect with gifted psychics in Rhode Island for tarot readings, astrology, spiritual guidance, and more. Book your reading today.",
    url: 'https://conjuring-psychic-services.com',
    siteName: 'Conjuring Psychic Services',
    images: [
      {
        url: '/mystical-forest-with-ethereal-light-rays-and-spiri.jpg',
        width: 1200,
        height: 630,
        alt: 'Mystical forest background for psychic services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Conjuring Psychic Services - Rhode Island's Premier Psychic Readings",
    description: "Connect with gifted psychics in Rhode Island for tarot readings, astrology, spiritual guidance, and more.",
    images: ['/mystical-forest-with-ethereal-light-rays-and-spiri.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Conjuring Psychic Services",
    "description": "Rhode Island's premier psychic services offering tarot readings, astrology, spiritual guidance, and more.",
    "url": "https://conjuring-psychic-services.com",
    "telephone": "+1-401-XXX-XXXX", // Replace with actual phone number
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Providence",
      "addressRegion": "RI",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.8240",
      "longitude": "-71.4128"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.8240",
        "longitude": "-71.4128"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Psychic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tarot Card Reading",
            "description": "Professional tarot card readings for guidance and insight"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Psychic Reading",
            "description": "Intuitive psychic readings for spiritual guidance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Astrology Reading",
            "description": "Birth chart analysis and astrological guidance"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ABTestingProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ABTestingProvider>
      </body>
    </html>
  )
}
