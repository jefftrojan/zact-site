import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — Zact',
  description: 'The terms and conditions for using Zact.'
}

export default function TermsPage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-chart-4/10 text-chart-4 px-4 py-2 rounded-full border border-chart-4/20 backdrop-blur-sm text-sm font-medium">Legal</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium text-foreground">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted-foreground">Effective: 2025</p>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">By using Zact, you agree to these terms. If you don’t agree, please do not use the service.</p>
        </div>

        {/* Layout: sticky TOC + content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
          {/* TOC */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-24 bg-card/60 border border-border/40 rounded-xl p-4 backdrop-blur-xl">
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Contents</div>
              <nav className="space-y-2 text-sm">
                {[
                  { id: 'service', label: 'Use of Service' },
                  { id: 'accounts', label: 'Accounts' },
                  { id: 'payments', label: 'Payments & subscriptions' },
                  { id: 'acceptable', label: 'Acceptable use' },
                  { id: 'ip', label: 'Intellectual property' },
                  { id: 'warranty', label: 'Warranty disclaimer' },
                  { id: 'liability', label: 'Limitation of liability' },
                  { id: 'changes', label: 'Changes to terms' },
                  { id: 'governing', label: 'Governing law' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-9 space-y-6">
            <section id="service" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Use of Service</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Comply with all applicable laws and regulations</li>
                <li>• No abusive, illegal, or harmful behavior</li>
                <li>• Beta features may be added, changed, or removed</li>
              </ul>
            </section>

            <section id="accounts" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Accounts</h2>
              <p className="text-muted-foreground">You must provide accurate information and safeguard your credentials. You’re responsible for activity under your account.</p>
            </section>

            <section id="payments" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Payments & subscriptions</h2>
              <p className="text-muted-foreground">Paid plans bill in advance on a recurring basis unless cancelled. Fees are non‑refundable except where required by law.</p>
            </section>

            <section id="acceptable" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Acceptable use</h2>
              <p className="text-muted-foreground">No reverse engineering, unauthorized access, or interference with the service or other users.</p>
            </section>

            <section id="ip" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Intellectual property</h2>
              <p className="text-muted-foreground">All rights, title, and interest in and to the service remain with Zact and its licensors.</p>
            </section>

            <section id="warranty" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Warranty disclaimer</h2>
              <p className="text-muted-foreground">The service is provided “as is” and “as available” without warranties of any kind, express or implied.</p>
            </section>

            <section id="liability" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Limitation of liability</h2>
              <p className="text-muted-foreground">To the maximum extent permitted by law, Zact is not liable for indirect, incidental, or consequential damages.</p>
            </section>

            <section id="changes" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Changes to terms</h2>
              <p className="text-muted-foreground">We may update these terms from time to time. Continued use after changes constitutes acceptance of the updated terms.</p>
            </section>

            <section id="governing" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Governing law</h2>
              <p className="text-muted-foreground">These terms are governed by applicable laws of the jurisdiction where Zact operates, without regard to conflict‑of‑law provisions.</p>
            </section>

            <section id="contact" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Contact</h2>
              <p className="text-muted-foreground">Questions about these terms? <a className="underline" href="mailto:hello@usezact.com">hello@usezact.com</a></p>
              <div className="mt-4"><Link href="/" className="text-primary underline">Back to Home</Link></div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}


