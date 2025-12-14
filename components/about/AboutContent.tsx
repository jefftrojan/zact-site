"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../ui/button'
import WaitlistDialog from '../WaitlistDialog'
import CinematicBackground from '../CinematicBackground'

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-28 pb-16 relative overflow-hidden">
        <CinematicBackground
          src="/bg-hero.png"
          priority
          overlay={0.82}
          overlayVariant="hero"
          imageClassName="object-cover object-top"
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl font-display font-semibold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              We’re building an AI teammate that joins your meetings.
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Zact shows up with context, speaks up when it matters, and turns decisions into clean follow‑through across your tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistDialog triggerLabel="Join the Waitlist" />
              <Link href="/careers">
                <Button variant="outline" className="border-border">See Open Roles</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden">
        <CinematicBackground src="/bg-1.png" overlay={0.88} imageClassName="object-cover object-center" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="zact-glass-card p-7 sm:p-10"
            >
              <h2 className="text-2xl md:text-4xl font-display font-semibold text-foreground">
                Why we started Zact
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Meetings create momentum. Follow‑through loses it. Teams leave a call with good energy… then decisions disappear into
                  chat logs, owners get fuzzy, and “what are we doing next?” comes back the next day.
                </p>
                <p>
                  We built Zact because we wanted an AI that feels human: prepared from the invite, aware of who’s in the room,
                  able to ask a crisp clarification, and able to drive toward a decision — then carry outcomes into the tools you already use.
                </p>
                <p>
                  We’ve been building together for years, shipping fast, iterating in public, and obsessing over one thing:
                  turning confusion into clarity without making people feel dumb.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden">
        <CinematicBackground src="/bg-2.png" overlay={0.88} imageClassName="object-cover object-center" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="zact-glass-card p-7 sm:p-10"
            >
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-5">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                    What we believe
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    The future of work isn’t more tools. It’s fewer tabs — and more shared understanding.
                  </p>
                </div>

                <div className="md:col-span-7 md:border-l md:border-border/60 md:pl-8">
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Personality</div>
                      <div className="mt-2 text-foreground leading-relaxed">
                        Smart, not arrogant • Optimistic • Creative & curious • Human‑first • Minimal, not empty
                      </div>
                    </div>
                    <div className="pt-6 border-t border-border/60">
                      <div className="text-sm text-muted-foreground">How we build</div>
                      <ul className="mt-3 space-y-2 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-chart-2 shrink-0" />
                          <span>Design for calm clarity first, then add power.</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-chart-2 shrink-0" />
                          <span>Make outcomes obvious: decisions, owners, deadlines — no clutter.</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-chart-2 shrink-0" />
                          <span>Respect trust: security‑minded by default.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <CinematicBackground src="/bg-3.png" overlay={0.88} imageClassName="object-cover object-center" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-foreground">What we’re building</h3>
              <p className="text-muted-foreground leading-relaxed">
                A meeting assistant that feels like a real teammate: prepared with context, able to participate live, and able to
                carry the follow‑up into Notion/Docs/tasks so work actually moves.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-foreground">Where we’re based</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kigali, Rwanda / San Francisco, United States. We’ll soon relocate to SF to be closer to customers,
                partners, and the ecosystem powering modern SaaS.
              </p>
            </div>
          </motion.div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/careers">
              <Button variant="outline" className="border-border">See Open Roles</Button>
            </Link>
            <WaitlistDialog triggerLabel="Join the Waitlist" />
          </div>
        </div>
      </section>

      {/* Careers CTA moved to dedicated page */}
    </main>
  )
}


