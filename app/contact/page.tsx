export const metadata = {
  title: 'Contact — Zact',
  description: 'Get in touch with the Zact team.'
}

export default function ContactPage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-chart-1/10 text-chart-1 px-4 py-2 rounded-full border border-chart-1/20 backdrop-blur-sm text-sm font-medium">Contact</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium text-foreground">Talk to us</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Have a question, partnership idea, or enterprise inquiry? We’d love to hear from you.</p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
            <div className="text-sm text-muted-foreground">General</div>
            <div className="text-foreground font-medium">hello@usezact.com</div>
          </div>
          <div className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
            <div className="text-sm text-muted-foreground">Support</div>
            <div className="text-foreground font-medium">support@usezact.com</div>
          </div>
        </div>

        {/* Note */}
        <div className="max-w-5xl mx-auto mt-10 text-center text-sm text-muted-foreground">We aim to reply within 1–2 business days.</div>
      </div>
    </section>
  )
}


