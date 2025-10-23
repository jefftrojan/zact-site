import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400','500','600','700','800'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usezact.com'),
  title: {
    default: 'Zact — The Zoom for AI Agents',
    template: '%s | Zact'
  },
  description: 'Create, name, and talk to your AI agents like real teammates — with voice, memory, and workflow integration.',
  keywords: [
    'AI agents',
    'voice AI',
    'workflow automation',
    'meeting AI',
    'Zoom for AI',
    'Zact'
  ],
  openGraph: {
    title: 'Zact — The Zoom for AI Agents',
    description: 'Create, name, and talk to your AI agents like real teammates — in live meetings with voice, memory, and workflow integration.',
    url: 'https://www.usezact.com',
    siteName: 'Zact',
    images: [
      { url: '/zactlogo.png', width: 1200, height: 630, alt: 'Zact AI' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zact — The Zoom for AI Agents',
    description: 'Talk to AI agents like teammates. Voice, memory, workflow integration.',
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
      <head>
        <Script 
          src="https://tally.so/widgets/embed.js" 
          strategy="afterInteractive"
        />
      </head>
      <body className={plusJakarta.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
