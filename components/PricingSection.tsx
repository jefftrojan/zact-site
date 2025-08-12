"use client";

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from './ui/button'
import WaitlistDialog from './WaitlistDialog'

export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      highlight: 'Get started and join the waitlist',
      features: [
        'Basic agent previews',
        'Email updates',
        'Early access invite',
      ],
      featured: false,
    },
    {
      name: 'Pro',
      price: 'Waitlist',
      period: '',
      highlight: 'Full platform access when invited',
      features: [
        'All core agents',
        'Unlimited workflows',
        'Team collaboration',
        'Analytics & reporting',
      ],
      featured: true,
    },
  ] as const

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-medium leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, transparent pricing
          </motion.h2>
          <p className="text-lg text-muted-foreground mt-6">Join the waitlist today. Pricing tiers will unlock as we roll out access.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border ${tier.featured ? 'border-primary/40 bg-primary/5' : 'border-border bg-card/60'} backdrop-blur-xl p-8`}
            >
              {tier.featured && (
                <div className="absolute -top-3 right-6 text-xs px-2 py-0.5 rounded bg-primary text-primary-foreground border border-white/20">Popular</div>
              )}
              <div className="text-sm text-muted-foreground mb-2">{tier.name}</div>
              <div className="text-4xl font-medium text-foreground">{tier.price} <span className="text-base font-normal text-muted-foreground">{tier.period}</span></div>
              <div className="mt-2 text-sm text-muted-foreground">{tier.highlight}</div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-chart-2" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WaitlistDialog triggerLabel="Join Waitlist" triggerClass={`w-full ${tier.featured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


