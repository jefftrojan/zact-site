"use client";

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const steps = [
    {
      title: "Create Agents",
      subtitle: "Assign names, roles, and tasks",
      points: [
        "Name the agent and define its scope",
        "Set guardrails and approval rules",
        "Give it access only to what it needs"
      ]
    },
    {
      title: "Connect Workflows", 
      subtitle: "Integrate with your tools",
      points: [
        "Hook into Slack, Notion, Jira, Calendar, CRM",
        "Use existing accounts and permissions",
        "Keep your data in your stack"
      ]
    },
    {
      title: "Collaborate Live",
      subtitle: "Talk in real-time meetings",
      points: [
        "Run stand‑ups and planning with voice commands",
        "Ask for summaries, next steps, owners",
        "See updates posted where you already work"
      ]
    },
    {
      title: "Get Things Done",
      subtitle: "Instant action and results",
      points: [
        "Schedule follow‑ups and calendar holds",
        "Open Jira issues and update status",
        "Draft notes and share to Slack/Notion"
      ]
    }
  ]
  
  return (
    <section ref={containerRef} id="how-it-works" className="min-h-[85vh] flex">
      {/* Left Side - Dark Blue */}
      <div className="w-1/2 bg-primary relative flex items-center justify-center sticky top-20 self-start">
        <div className="max-w-md px-8">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mx-auto mb-6 w-12 h-12 rounded-full bg-primary-foreground/10 text-primary-foreground flex items-center justify-center text-base font-medium">
              {String(activeStep + 1).padStart(2, '0')}
            </div>
            <h2 className="text-3xl font-medium text-primary-foreground mb-2">
              {steps[activeStep].title}
            </h2>
            <p className="text-base text-primary-foreground/80">
              {steps[activeStep].subtitle}
            </p>
          </motion.div>
        </div>
        
        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeStep === index ? 'bg-primary-foreground' : 'bg-primary-foreground/30'
              }`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - White */}
      <div className="w-1/2 bg-background">
        <div className="max-w-2xl mx-auto px-8 py-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`mb-16 transition-all duration-500 ${
                activeStep === index ? 'opacity-100' : 'opacity-30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: activeStep === index ? 1 : 0.3 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onViewportEnter={() => setActiveStep(index)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted/60 text-foreground/80 text-xs font-medium flex items-center justify-center">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                  </div>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  {step.points.map((p) => (
                    <li key={p} className="text-muted-foreground">{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}