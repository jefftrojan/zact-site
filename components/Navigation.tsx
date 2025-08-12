import Link from 'next/link'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import WaitlistDialog from './WaitlistDialog'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-medium text-foreground">
              {"{zact}"}
            </h1>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </Link>
            <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <WaitlistDialog
              triggerLabel="Get Early Access"
              triggerClass="bg-primary text-primary-foreground hover:bg-primary/90 backdrop-blur-sm border border-white/20 shadow-lg"
            />
            <Button variant="ghost" size="sm" className="md:hidden backdrop-blur-sm bg-background/50">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}