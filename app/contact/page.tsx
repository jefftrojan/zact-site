export const metadata = {
  title: 'Contact — Zact',
  description: 'Get in touch with the Zact team.'
}

import CinematicBackground from '../../components/CinematicBackground'

export default function ContactPage() {
  return (
    <section className="py-24 relative overflow-hidden">
      <CinematicBackground src="/bg-2.png" overlay={0.86} imageClassName="object-cover object-center" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 zact-pill text-foreground px-4 py-2 text-sm font-medium">Contact</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-semibold text-foreground">Talk to us</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Have a question, partnership idea, or enterprise inquiry? We’d love to hear from you.</p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="zact-glass-card p-6">
            <div className="text-sm text-muted-foreground">General</div>
            <div className="text-foreground font-medium">hello@usezact.com</div>
          </div>
          <div className="zact-glass-card p-6">
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


