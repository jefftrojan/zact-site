export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© 2025 Zact. All rights reserved.</div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap justify-center md:justify-end">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="/contact" className="hover:text-foreground transition-colors">Contact</a>
            <a href="/security" className="hover:text-foreground transition-colors">Security</a>
            <a href="/subprocessors" className="hover:text-foreground transition-colors">Subprocessors</a>
            <a href="/dpa" className="hover:text-foreground transition-colors">DPA</a>
            <a href="/careers" className="hover:text-foreground transition-colors">Careers</a>
            <a href="/about" className="hover:text-foreground transition-colors">About</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}


