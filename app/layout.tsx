import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usezact.com'),
  title: {
    default: 'Zact — The Zoom for AI Agents',
    template: '%s | Zact'
  },
  description: 'Zact is where your AI joins the conversation, participates in real-time, and automatically handles the follow-up.',
  keywords: [
    'AI agents',
    'voice AI',
    'meeting assistant',
    'meeting recap',
    'action items',
    'workflow automation',
    'Zoom for AI',
    'Zact'
  ],
  openGraph: {
    title: 'Zact — The Zoom for AI Agents',
    description: 'Where your AI joins the conversation, participates in real-time, and automatically handles the follow-up.',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
