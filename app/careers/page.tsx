export const metadata = {
  title: 'Careers — Zact',
  description: 'Join us to build the AI‑first operating system for companies.'
}

const roles = [
  { title: 'Founding Engineer (Full‑Stack)', location: 'Remote (EU/US/Africa timezones)', type: 'Full‑time', email: 'hello@usezact.com', desc: 'Own product end‑to‑end across frontend and backend. Help design architecture, ship features fast, and shape our agent platform.' },
  { title: 'ML Engineer (Agents/Tools)', location: 'Remote (EU/US/Africa timezones)', type: 'Full‑time', email: 'hello@usezact.com', desc: 'Design, build, and evaluate agent tools and orchestrations. Productionize LLM workflows and improve reliability.' },
  { title: 'Designer (Product/Brand)', location: 'Remote (EU/US/Africa timezones)', type: 'Contract/Full‑time', email: 'hello@usezact.com', desc: 'Design product flows, component systems, and polished UIs. Contribute to brand and visual storytelling.' },
]

export default function CareersPage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-chart-2/10 text-chart-2 px-4 py-2 rounded-full border border-chart-2/20 backdrop-blur-sm text-sm font-medium">Careers</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium text-foreground">Join Zact</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Help us build the AI‑first Company OS. We value ownership, clarity, and speed.</p>
        </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <a
                key={role.title}
                href={`mailto:${role.email}?subject=${encodeURIComponent('Application: ' + role.title)}`}
                className="bg-card/70 border border-border/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl flex flex-col hover:border-primary/30 hover:bg-card/80 transition-colors"
              >
                <h3 className="text-xl font-medium text-foreground">{role.title}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{role.location} • {role.type}</div>
                <p className="mt-4 text-sm text-muted-foreground">{role.desc}</p>
                <div className="mt-6 text-sm text-primary">Apply via email →</div>
              </a>
            ))}
          </div>
      </div>
    </section>
  )
}



