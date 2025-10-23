import Link from 'next/link'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import WaitlistDialog from './WaitlistDialog'

export default function Navigation() {
  return (
    <nav className="fixed top-4 inset-x-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6">
        <div className="pointer-events-auto mx-auto max-w-3xl flex items-center justify-between h-14 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl px-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-medium text-foreground">
              {"{zact}"}
            </h1>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <WaitlistDialog
              triggerLabel="Request Invite"
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