import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400','500','600','700','800'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usezact.com'),
  title: {
    default: 'Zact AI — AI‑First Company OS',
    template: '%s | Zact AI'
  },
  description: 'Replace 15+ SaaS tools with coordinated AI agents for SaaS founders.',
  keywords: [
    'AI agents',
    'SaaS growth',
    'automation',
    'multi‑agent system',
    'startup tools',
    'Zact AI'
  ],
  openGraph: {
    title: 'Zact AI — AI‑First Company OS',
    description: 'Replace 15+ SaaS tools with coordinated AI agents for SaaS founders.',
    url: 'https://www.usezact.com',
    siteName: 'Zact AI',
    images: [
      { url: '/zactlogo.png', width: 1200, height: 630, alt: 'Zact AI' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zact AI — AI‑First Company OS',
    description: 'Replace 15+ SaaS tools with coordinated AI agents for SaaS founders.',
    images: ['/zactlogo.png']
  },
  icons: {
    icon: [
      { url: '/zactlogo.png', type: 'image/png' }
    ],
    shortcut: ['/zactlogo.png'],
    apple: ['/zactlogo.png']
  },
  alternates: {
    canonical: 'https://www.usezact.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
