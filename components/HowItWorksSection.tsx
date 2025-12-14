"use client";

import { motion } from 'framer-motion'
import { useState } from 'react'
import CinematicBackground from './CinematicBackground'

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Connect your calendar",
      subtitle: "One setup, then it runs",
      points: [
        "Invite Zact to the meetings you want covered",
        "Connect the tools you already use (Notion, Asana/Jira, Slack, Docs, CRM)",
        "Set preferences (when to speak up, who gets tasks)",
        "Optional: approvals for sensitive actions"
      ]
    },
    {
      title: "Zact joins on time",
      subtitle: "Prepared with meeting context",
      points: [
        "Understands title, agenda, and attendees",
        "Keeps a running memory of decisions",
        "Stays relevant — not spammy"
      ]
    },
    {
      title: "Live, in‑meeting help",
      subtitle: "Participates like a teammate",
      points: [
        "Summarizes mid‑call when needed",
        "Clarifies owners + deadlines in real time",
        "Helps steer back to decisions"
      ]
    },
    {
      title: "Automatic follow‑through",
      subtitle: "Turns talk into execution",
      points: [
        "Converts decisions into owners + next steps",
        "Pushes outcomes into docs + tasks",
        "History + notifications so nothing slips"
      ]
    }
  ]
  
  return (
    <section id="how-it-works" className="relative overflow-hidden">
      <CinematicBackground src="/bg-3.png" overlay={0.86} imageClassName="object-cover object-center" />
      <div className="relative z-10 container mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-semibold text-foreground">
              How it works
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Zact joins the conversation, keeps the context, and turns outcomes into execution — automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="zact-glass-card p-6 sm:p-8"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Step nav (single panel) */}
              <div className="lg:col-span-5">
                <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-1">
                  {steps.map((step, idx) => {
                    const active = idx === activeStep
                    return (
                      <button
                        key={step.title}
                        type="button"
                        onClick={() => setActiveStep(idx)}
                        className={[
                          "flex-shrink-0 text-left transition-colors",
                          "px-0 py-0 border-0 bg-transparent",
                        ].join(" ")}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={[
                              "mt-1 h-6 w-0.5 rounded-full",
                              active ? "bg-chart-2" : "bg-border/70",
                            ].join(" ")}
                            aria-hidden
                          />
                          <div className="min-w-0">
                            <div className={["text-sm", active ? "text-foreground font-medium" : "text-muted-foreground"].join(" ")}>
                              {String(idx + 1).padStart(2, "0")} — {step.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">{step.subtitle}</div>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Step content (no repeated cards) */}
              <div className="lg:col-span-7 lg:border-l lg:border-border/50 lg:pl-8">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-xs text-muted-foreground">Step {String(activeStep + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 text-2xl font-display font-semibold text-foreground">
                    {steps[activeStep].title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{steps[activeStep].subtitle}</p>

                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {steps[activeStep].points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-chart-2 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}