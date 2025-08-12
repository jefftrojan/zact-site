export const metadata = {
  title: 'Security — Zact',
  description: 'How we protect your data: encryption, access, compliance, and incident response.'
}

export default function SecurityPage() {
  const toc = [
    { id: 'overview', label: 'Overview' },
    { id: 'encryption', label: 'Encryption' },
    { id: 'access', label: 'Access controls' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'incident', label: 'Incident response' },
    { id: 'disclosure', label: 'Responsible disclosure' },
    { id: 'subprocessors', label: 'Subprocessors' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-chart-1/10 text-chart-1 px-4 py-2 rounded-full border border-chart-1/20 backdrop-blur-sm text-sm font-medium">Security</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium text-foreground">Security at Zact</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Enterprise‑minded practices to keep your data safe by default.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-24 bg-card/60 border border-border/40 rounded-xl p-4 backdrop-blur-xl">
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Contents</div>
              <nav className="space-y-2 text-sm">
                {toc.map(i => (
                  <a key={i.id} href={`#${i.id}`} className="block text-muted-foreground hover:text-foreground transition-colors">{i.label}</a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="md:col-span-9 space-y-6">
            <section id="overview" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground">Security is built into our product and operations: least‑privilege access, encrypted data flows, continuous monitoring, and vendor due diligence.</p>
            </section>

            <section id="encryption" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Encryption</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• TLS 1.2+ for data in transit</li>
                <li>• AES‑256 for data at rest (managed KMS)</li>
                <li>• Secret management for credentials and tokens</li>
              </ul>
            </section>

            <section id="access" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Access controls</h2>
              <p className="text-muted-foreground">Role‑based access, SSO support (on request), audit trails, and annual access reviews. Production access is limited and logged.</p>
            </section>

            <section id="compliance" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Compliance</h2>
              <p className="text-muted-foreground">We follow SOC‑2 minded practices. Data is hosted with reputable cloud providers with robust certifications.</p>
            </section>

            <section id="incident" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Incident response</h2>
              <p className="text-muted-foreground">We maintain an incident runbook with triage, escalation, communication, and post‑mortem. Customers are notified per legal requirements.</p>
            </section>

            <section id="disclosure" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Responsible disclosure</h2>
              <p className="text-muted-foreground">Report vulnerabilities to <a className="underline" href="mailto:security@usezact.com">security@usezact.com</a>. Please include steps to reproduce. We will acknowledge and remediate promptly.</p>
            </section>

            <section id="subprocessors" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Subprocessors</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cloud infrastructure and storage</li>
                <li>• Error monitoring and analytics</li>
                <li>• Email delivery and support</li>
              </ul>
            </section>

            <section id="contact" className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-medium text-foreground mb-3">Contact</h2>
              <p className="text-muted-foreground">Security questions? <a className="underline" href="mailto:security@usezact.com">security@usezact.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}



