"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../ui/button'
import WaitlistDialog from '../WaitlistDialog'

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-2/10 to-chart-4/10 blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl font-medium text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              We’re building the OS for AI‑run companies
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Zact helps founders focus on building, while autonomous agents coordinate work across growth, finance, legal and success.
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

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-4xl font-medium text-foreground">How we started</h2>
            <p className="text-muted-foreground leading-relaxed">
              We’ve known each other for almost 4 years, first meeting as freshmen in 2022. Since then, we’ve shipped
              multiple projects together, traveled across states and countries, and won 10+ hackathons — one of which
              led to broader recognition. We’ve all met in person and built a strong working relationship over the years.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Zact began from a simple belief: building product should be the only focus. Everything else — marketing,
              sales, analytics, and operations — should run itself. We prototyped agentic workflows and saw firsthand how
              coordinated agents remove tool‑switching and context loss. Zact is that system, productized for SaaS founders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[{h:'Who we are',t:'All-technical founding team. We ship fast and own outcomes.'},{h:'What we value',t:'Focus, clarity, ownership, kindness.'},{h:'How to join',t:'Explore roles on Careers or join the waitlist to hear first.'}].map((b, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6">
                <div className="text-sm text-muted-foreground">{b.h}</div>
                <div className="text-xl font-medium text-foreground mt-2">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-foreground">What we’re building</h3>
              <p className="text-muted-foreground leading-relaxed">
                Solo SaaS founders spend most of their time juggling 15+ tools. Zact replaces that stack with coordinated
                AI agents that understand SaaS business models. Sales, Marketing, Analytics, and Success agents share context
                and act in real‑time to drive growth while you ship product.
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


