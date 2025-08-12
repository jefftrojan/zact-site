"use client";

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

export default function ProblemSection() {
  const messyTools = [
    'Slack', 'HubSpot', 'Stripe', 'Notion', 'Google Ads', 'Intercom', 
    'Zoom', 'Figma', 'Calendly', 'Mailchimp', 'Analytics', 'Zapier'
  ]

  const cleanAgents = [
    'Growth Agent', 'Finance Agent', 'Legal Agent', 'Success Agent'
  ]

  return (
    <section className="pt-16 pb-24 bg-muted/30" id="problem">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-medium mb-6 text-foreground">The Problem</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Early‑stage founders and lean teams are drowning in tool overload (CRM, Ads, Docs, HR, Analytics…),
              manual processes for sales, onboarding and reporting, and the high costs of hiring and managing
              specialized roles. It creates drag on growth, attention and runway.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Before - Tool Chaos */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="text-xl font-medium text-foreground">Before: Tool Chaos</h3>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="grid grid-cols-3 gap-3">
                  {messyTools.map((tool, index) => (
                    <div
                      key={tool}
                      className="bg-muted text-muted-foreground text-sm p-3 rounded-lg text-center border border-border/50"
                      style={{ 
                        transform: `rotate(${Math.random() * 6 - 3}deg)`,
                        opacity: 0.7 + Math.random() * 0.3 
                      }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-destructive rounded-full" />Tool overload (CRM, Ads, Docs, HR, Analytics…)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-destructive rounded-full" />Manual processes for sales, onboarding and reporting</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-destructive rounded-full" />High costs of hiring and managing specialized roles</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* After - Clean Agents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-chart-2/10 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-chart-2" />
                </div>
                <h3 className="text-xl font-medium text-foreground">The Zact Solution</h3>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="space-y-4">
                  {cleanAgents.map((agent, index) => (
                    <div
                      key={agent}
                      className="flex items-center gap-4 p-4 bg-chart-2/5 border border-chart-2/20 rounded-lg"
                    >
                      <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                      <span className="text-foreground font-medium">{agent}</span>
                      <div className="ml-auto flex items-center gap-1">
                        <div className="w-1 h-1 bg-chart-2 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-chart-2 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1 h-1 bg-chart-2 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-chart-2 rounded-full" />Share context across all functions</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-chart-2 rounded-full" />Act autonomously, but ask for approval when needed</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-chart-2 rounded-full" />Continuously learn from your workflows to optimize decisions</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}