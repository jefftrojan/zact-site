import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400','500','600','700','800'] })

export const metadata: Metadata = {
  title: 'Zact Landing Page',
  description: 'Welcome to Zact - Your AI-powered solution',
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
