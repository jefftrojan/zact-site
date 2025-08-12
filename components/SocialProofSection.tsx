"use client";

import { motion } from 'framer-motion'

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "Zact replaced our entire growth stack. Instead of managing 12 different tools, I now just give commands in plain English.",
      author: "Sarah Chen",
      role: "Founder",
      company: "DataFlow AI",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      metric: "70% time saved"
    },
    {
      quote: "We went from 2 hours daily on manual processes to everything automated. Trial-to-paid conversion improved 40% in month one.",
      author: "Marcus Rodriguez", 
      role: "CEO",
      company: "CloudSync Pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      metric: "+40% conversion"
    },
    {
      quote: "The agent marketplace is incredible. I installed 4 agents and they're already coordinating better than my old team of VAs.",
      author: "Emily Johnson",
      role: "Founder",
      company: "DevTools Inc",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      metric: "$3k/mo saved"
    },
    {
      quote: "Zact's agents actually understand context. When a lead comes in, every agent knows exactly what to do without me managing anything.",
      author: "David Park",
      role: "CTO",
      company: "AI Insights",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      metric: "15+ tools replaced"
    }
  ]

  const integrations = [
    { slug: 'stripe', name: 'Stripe', category: 'Payments' },
    { slug: 'hubspot', name: 'HubSpot', category: 'CRM' },
    { slug: 'googleads', name: 'Google Ads', category: 'Marketing' },
    { slug: 'intercom', name: 'Intercom', category: 'Support' },
    { slug: 'slack', name: 'Slack', category: 'Communication' },
    { slug: 'notion', name: 'Notion', category: 'Docs' },
    { slug: 'zapier', name: 'Zapier', category: 'Automation' },
    { slug: 'salesforce', name: 'Salesforce', category: 'CRM' },
    { slug: 'mailchimp', name: 'Mailchimp', category: 'Email' },
    { slug: 'calendly', name: 'Calendly', category: 'Scheduling' },
    { slug: 'figma', name: 'Figma', category: 'Design' }
  ]

  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]
  const duplicatedIntegrations = [...integrations, ...integrations]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-chart-2/10 text-chart-2 px-4 py-2 rounded-full border border-chart-2/20 mb-6">
              <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
              <span className="text-sm font-medium">Trusted by 100+ SaaS founders</span>
            </div>
            {/* Removed "What Founders Say" heading and subtext */}
          </motion.div>

          {/* Removed testimonials carousel */}

          {/* Integrations moved to Hero */}
        </div>
      </div>
    </section>
  )
}