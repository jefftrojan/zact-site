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
  description: 'Zact is your AI teammate that participates in real time, keeps context, and handles the follow‑through.',
  applicationName: 'Zact',
  category: 'technology',
  authors: [{ name: 'Zact', url: 'https://www.usezact.com' }],
  creator: 'Zact',
  publisher: 'Zact',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
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
    description: 'Your AI teammate that participates in real time, keeps context, and handles the follow‑through.',
    url: 'https://www.usezact.com',
    siteName: 'Zact',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zact — AI teammate for meetings' }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zact — The Zoom for AI Agents',
    description: 'Your AI teammate that participates in real time — with context and follow‑through.',
    images: ['/twitter-image']
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zact",
    url: "https://www.usezact.com",
    description:
      "Zact is your AI teammate that participates in real time, keeps context, and handles the follow‑through.",
    publisher: {
      "@type": "Organization",
      name: "Zact",
      url: "https://www.usezact.com",
    },
  }

  return (
    <html lang="en">
      <head>
        <Script 
          src="https://tally.so/widgets/embed.js" 
          strategy="afterInteractive"
        />
        <Script
          id="zact-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
