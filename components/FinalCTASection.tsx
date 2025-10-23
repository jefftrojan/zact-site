"use client";

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import WaitlistDialog from './WaitlistDialog'
import { ArrowRight } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60 backdrop-blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-medium leading-tight">
              Join the Future of Work
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Zact is redefining how teams and AI collaborate. Because work should feel like teamwork — even with machines.
            </p>
            <div className="pt-4">
              <WaitlistDialog triggerLabel="Request Invite →" triggerClass="bg-background text-foreground hover:bg-background/90 px-8 py-4 backdrop-blur-sm border border-white/20 shadow-2xl" />
            </div>
            <div className="pt-8">
              <p className="text-sm text-primary-foreground/60">
                Talk. Act. Zact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Global footer renders via app/layout.tsx */}
    </section>
  )
}