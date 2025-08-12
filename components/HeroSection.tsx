"use client";

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import WaitlistDialog from './WaitlistDialog'
import { ArrowRight, Play, Zap, MessageSquare, BarChart3, Users } from 'lucide-react'

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const demoScrollRef = useRef<HTMLDivElement | null>(null)
  const demoStickyRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: demoScrollRef, offset: ["start 85%", "end 25%"] })
  // Keep interactions subtle to avoid overflow and visual jumps
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.6, 0.95], [1, 1, 1.015, 1.02])
  const radius = useTransform(scrollYProgress, [0, 0.1, 0.6, 0.95], [24, 24, 22, 20])
  const DEMO_MP4_URL = '/demo.mov'
  const POSTER_URL = '/sc1.png'
  const ICON_HEX = '6B7280' // gray-500

  // Scroll-driven play/pause based on progress
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v > 0.12 && v < 0.9) {
        if (!isPlaying) setIsPlaying(true)
        videoRef.current?.play().catch(() => {})
      } else {
        if (isPlaying) setIsPlaying(false)
        videoRef.current?.pause()
      }
    })
    return () => unsub()
  }, [scrollYProgress, isPlaying])
  return (
    <section className="pt-24 pb-4 bg-background relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Headline & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-chart-2/10 text-chart-2 px-4 py-2 rounded-full border border-chart-2/20 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">AI-First Company OS</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-medium leading-tight text-foreground">
              Zact — Your AI‑First Company OS 🧠
            </h1>

            <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              One Platform. Every Role. Zero Headcount.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Zact is the operating system for AI‑run companies, where every department — sales, marketing,
              legal, finance, and product — is handled by specialized, autonomous AI agents that work together
              in real time. Instead of juggling 15+ SaaS tools and endless context‑switching, you simply install
              agents like you’d hire employees — but faster, cheaper, and smarter.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaitlistDialog />
            <a href="#features">
              <Button size="lg" variant="outline" className="border-border backdrop-blur-sm bg-background/50">
                <ArrowRight className="mr-2 h-4 w-4" />
                Explore Features
              </Button>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6">
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-medium text-foreground">100+ SaaS founders</span>
            </p>
            <div className="hidden sm:flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Integrations strip moved above the demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-40"
        >
          <div className="text-center">
            <p className="text-muted-foreground mb-8">Integrates with tools you already use</p>
            <div className="relative">
              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-4 min-w-max"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  {['stripe','hubspot','googleads','intercom','slack','notion','zapier','salesforce','mailchimp','calendly','figma','stripe','hubspot','googleads','intercom','slack','notion','zapier','salesforce','mailchimp','calendly','figma'].map((slug, idx) => (
                    <div key={idx} className="bg-muted text-muted-foreground px-4 py-3 rounded-lg border border-border flex-shrink-0 min-w-32 text-center">
                      <img 
                        src={`https://cdn.simpleicons.org/${slug}/${ICON_HEX}`}
                        alt={`${slug} logo`} 
                        className="h-6 w-auto mx-auto" 
                        loading="lazy" 
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://api.iconify.design/simple-icons:${slug}.svg?color=%23${ICON_HEX}` }} 
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-40"/>
        {/* Large Demo Below */}
        {/* Scroll scene: provides room for sticky expansion */}
        <div ref={demoScrollRef} className="mt-6 lg:mt-8 relative h-[90vh]">
          <motion.div
            id="product-demo"
            ref={demoStickyRef}
            className="sticky top-8 z-30 mx-auto max-w-6xl bg-card/80 border border-border/50 overflow-hidden backdrop-blur-xl will-change-transform"
            style={{
              width: '100%',
              scale,
              borderRadius: radius as unknown as number,
              boxShadow: `0 40px 140px rgba(0,0,0,0.2)`,
            }}
          >
            {/* Responsive video area */}
            <motion.div className="relative w-full" style={{ paddingBottom: useTransform(scrollYProgress, [0, 0.4, 1], ["56.25%", "55%", "53%"]) }}>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={DEMO_MP4_URL}
                muted
                playsInline
                loop
                controls={false}
                poster={POSTER_URL}
              />
              {/* overlay chips removed */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}