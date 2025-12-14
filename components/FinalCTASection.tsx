"use client";

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import WaitlistDialog from './WaitlistDialog'
import { ArrowRight } from 'lucide-react'
import CinematicBackground from './CinematicBackground'

export default function FinalCTASection() {
  return (
    <section className="min-h-[100svh] flex items-center relative overflow-hidden">
      <CinematicBackground src="/bg-mascot.png" overlay={0.84} imageClassName="object-cover object-center" />
      
      <div className="container mx-auto px-6 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-display font-semibold leading-tight text-foreground">
              Bring an AI teammate into the room.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Zact joins with context, participates in real time, and turns decisions into action — so meetings feel human and outcomes actually ship.
            </p>
            <div className="pt-4">
              <WaitlistDialog triggerLabel="Request Invite →" triggerClass="bg-chart-2 text-foreground hover:bg-chart-2/90 px-8 py-4 backdrop-blur-sm border border-border/60 shadow-2xl" />
            </div>
            <div className="pt-8">
              <p className="text-sm text-muted-foreground">
                Meet. Decide. Ship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Global footer renders via app/layout.tsx */}
    </section>
  )
}