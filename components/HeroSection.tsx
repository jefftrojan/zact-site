"use client";

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import WaitlistDialog from './WaitlistDialog'
import { Zap } from 'lucide-react'
import CinematicBackground from './CinematicBackground'

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Join.', 'Understand.', 'Contribute.']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [words.length])
  return (
    <section className="min-h-[100svh] pt-20 sm:pt-24 pb-10 relative overflow-hidden flex items-center">
      <CinematicBackground
        src="/bg-1.png"
        priority
        overlayVariant="hero"
        overlay={0.9}
        imageClassName="object-cover object-top"
      />

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
              className="inline-flex items-center gap-2 zact-pill text-foreground px-4 py-2"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Zact — where your AI joins the conversation</span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground">
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
              <span className="text-foreground/70">An AI teammate that speaks up in real time.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Zact joins your calls with context, understands what’s happening, and can participate like a real person — asking clarifying questions, surfacing decisions, and driving next steps.
            </p>
          </div>

          <div className="flex justify-center">
            <WaitlistDialog triggerLabel="Request Invite →" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}