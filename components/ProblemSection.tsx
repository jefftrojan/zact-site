"use client";

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import CinematicBackground from './CinematicBackground'

export default function ProblemSection() {
  const messyTools = [
    'Zoom', 'Google Meet', 'Calendar', 'Slack', 'Notion', 'Docs',
    'Email', 'Jira', 'Asana', 'CRM', 'Sheets', 'Random DMs'
  ]

  const cleanAgents = [
    'Joins meetings automatically',
    'Tracks decisions + action items',
    'Speaks up + asks clarifying questions',
    'Syncs outcomes to your tools'
  ]

  return (
    <section className="min-h-[100svh] flex items-center relative overflow-hidden" id="problem">
      <CinematicBackground src="/bg-1.png" overlay={0.82} imageClassName="object-cover object-center" />
      <div className="container mx-auto px-6 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-semibold mb-6 text-foreground">Meetings create momentum. Follow‑ups lose it.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Decisions disappear into chat logs. Action items get fuzzy. Notes end up everywhere. Zact keeps the thread — so your team moves fast without feeling lost (or cringe).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="zact-glass-card p-6 sm:p-8"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Before */}
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <div className="text-lg font-medium text-foreground">Before: Follow‑up drift</div>
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  {messyTools.join(" · ")}
                </div>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-destructive" />“What did we decide again?”</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-destructive" />Action items with no owner or deadline</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-destructive" />Follow‑ups stuck in someone’s head</li>
                </ul>
              </div>

              {/* With Zact */}
              <div className="min-w-0 lg:border-l lg:border-border/50 lg:pl-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-chart-2" />
                  </div>
                  <div className="text-lg font-medium text-foreground">With Zact</div>
                </div>

                <div className="space-y-3">
                  {cleanAgents.map((agent) => (
                    <div
                      key={agent}
                      className="flex items-center gap-3 p-4 bg-chart-2/10 border border-chart-2/25 rounded-xl backdrop-blur-md"
                    >
                      <span className="w-2 h-2 rounded-full bg-chart-2" />
                      <span className="text-foreground font-medium">{agent}</span>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-chart-2" />Speaks up when it matters (not noise)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-chart-2" />Owners + deadlines pulled out automatically</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-chart-2" />Outcomes synced into docs + tasks</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}