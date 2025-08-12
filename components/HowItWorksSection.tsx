"use client";

import { motion } from 'framer-motion'
import { MessageSquare, Search, CalendarDays, Video } from 'lucide-react'

export default function HowItWorksSection() {
  const SCREENSHOT_URL = '/sc2.png';

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Floating brand icons (kept tight, non-overflowing) */}
      <div className="pointer-events-none select-none absolute inset-0 z-20 flex items-center justify-center">
        <div className="hidden md:block absolute top-24 left-[22%] w-24 h-24 rounded-2xl bg-card/95 shadow-2xl border border-border/60 p-5 rotate-6">
          <img src="https://cdn.simpleicons.org/slack/4A154B" alt="Slack" className="w-full h-full object-contain" loading="lazy" />
        </div>
        <div className="hidden md:block absolute top-28 right-[22%] w-24 h-24 rounded-2xl bg-card/95 shadow-2xl border border-border/60 p-5 -rotate-3">
          <img src="https://cdn.simpleicons.org/hubspot/FF7A59" alt="HubSpot" className="w-full h-full object-contain" loading="lazy" />
        </div>
        <div className="hidden md:block absolute bottom-16 left-[24%] w-24 h-24 rounded-2xl bg-card/95 shadow-2xl border border-border/60 p-5 -rotate-2">
          <img src="https://cdn.simpleicons.org/stripe/635BFF" alt="Stripe" className="w-full h-full object-contain" loading="lazy" />
        </div>
        <div className="hidden md:block absolute bottom-10 right-[24%] w-24 h-24 rounded-2xl bg-card/95 shadow-2xl border border-border/60 p-5 rotate-3">
          <img src="https://cdn.simpleicons.org/notion/000000" alt="Notion" className="w-full h-full object-contain" loading="lazy" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-chart-2 text-sm font-medium mb-4">How Zact works</div>
            <h2 className="text-4xl md:text-6xl font-medium leading-tight text-foreground">
              Agents handle the work
              <br />
              so you can ship faster
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell Zact what you need in plain English. It coordinates your tools, drafts the next steps,
              opens the right tasks, and flags what needs attention — keeping your team in flow.
            </p>
          </motion.div>
        </div>

        {/* Screenshot card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-card/80 border border-border rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Window chrome */}
          <div className="bg-muted/30 border-b border-border/50 p-4 flex items-center gap-3 backdrop-blur-sm">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-chart-4"></div>
              <div className="w-3 h-3 rounded-full bg-chart-2"></div>
            </div>
            <div className="flex-1 bg-muted/50 rounded px-3 py-1 text-xs text-muted-foreground">app.usezact.com</div>
          </div>

          <div className="relative w-full pb-[62%]">
            <img
              src={SCREENSHOT_URL}
              alt="Zact product screenshot"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-background/0 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}