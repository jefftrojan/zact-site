"use client";

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import WaitlistDialog from './WaitlistDialog'
import { Zap } from 'lucide-react'

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Talk.', 'Act.', 'Zact.']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="pt-20 sm:pt-24 pb-10 bg-background relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-chart-2/10 text-chart-2 px-4 py-2 rounded-full border border-chart-2/20 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Zact — The Zoom for AI Agents</span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
              <span className="inline-block min-w-[200px]">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {words[currentWord]}
                </motion.span>
              </span>
              <br />
              <span className="text-foreground/70">to your AI agents like real teammates.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Create and collaborate with agents in live meetings — voice, memory, and workflow integration.
            </p>
          </div>

          <div className="flex justify-center">
            <WaitlistDialog triggerLabel="Request Invite →" />
          </div>
        </motion.div>
        {/* MacBook mockup peeking from hero */}
        <div className="mt-10 sm:mt-12">
          <div className="mx-auto max-w-5xl">
            {/* Thick MacBook-style bezel */}
            <div className="relative mx-auto rounded-[22px] bg-black/90 border border-white/10 p-3 sm:p-4 lg:p-6 shadow-2xl backdrop-blur-xl" style={{ width: '100%' }}>
              {/* Subtle outer highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
              {/* Screen */}
              <div className="relative w-full rounded-[12px] overflow-hidden" style={{ paddingBottom: '62%' }}>
                {/* Camera notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 rounded-b-full bg-black/60" />
                <img
                  src="/screen.png"
                  alt="Zact meeting mockup"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                {/* Soft glass reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
              </div>
            </div>
            {/* Laptop base */}
            <div className="mx-auto h-3 w-[92%] bg-gradient-to-b from-muted/70 to-muted/50 border-x border-b border-white/10 rounded-b-[18px] -mt-1 shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}