import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Your Psychic Reading | The Conjuring House",
  description: "Book your personalized psychic reading with our certified psychics. Choose your service, psychic, and schedule your reading online. Secure booking process.",
  keywords: "book psychic reading, schedule reading, psychic appointment, tarot booking, astrology booking",
  openGraph: {
    title: "Book Your Psychic Reading | The Conjuring House",
    description: "Book your personalized psychic reading with our certified psychics. Choose your service, psychic, and schedule your reading online.",
    type: "website",
  },
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
