"use client";

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import WaitlistDialog from '../WaitlistDialog'

export default function CareersContent() {
  const openings: Array<{ title: string; location: string; type: string; email: string; desc: string; }> = [
    {
      title: 'Founding Engineer (Full‑Stack)',
      location: 'Remote (EU/US/Africa timezones)',
      type: 'Full‑time',
      email: 'hello@usezact.com',
      desc: 'Own product end‑to‑end across frontend and backend. Help design architecture, ship features fast, and shape our agent platform.'
    },
    {
      title: 'Product Designer',
      location: 'Remote (EU/US/Africa timezones)',
      type: 'Full‑time',
      email: 'hello@usezact.com',
      desc: 'Design product flows, component systems, and polished UIs. Work closely with engineering to prototype and ship quickly.'
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 to-chart-2/10 blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl font-medium text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Build the future of AI‑run companies
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We hire thoughtfully. If you don’t see a role that fits, join the waitlist and we’ll reach out as we grow.
            </p>
            <WaitlistDialog triggerLabel="Join the Waitlist" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-4">
            {openings.map((job) => {
              const href = `mailto:${job.email}?subject=${encodeURIComponent('Application: ' + job.title)}`
              return (
                <a
                  key={job.title}
                  href={href}
                  className="rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 block hover:border-primary/30 hover:bg-card/70 transition-colors"
                >
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-medium text-foreground">{job.title}</div>
                    <div className="text-sm text-muted-foreground">{job.location} • {job.type}</div>
                    <p className="text-sm text-muted-foreground mt-2">{job.desc}</p>
                    <div className="mt-3 text-sm text-primary">Apply via email →</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}


