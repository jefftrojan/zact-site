"use client";

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { createPortal } from 'react-dom'

export default function WaitlistDialog({ triggerClass = "", triggerLabel = "Join the Waitlist" }: { triggerClass?: string; triggerLabel?: string }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Button className={triggerClass} onClick={() => setOpen(true)}>{triggerLabel}</Button>
      {open && mounted && createPortal(
        <>
          <div className="fixed inset-0 z-[1000] bg-black/50" onClick={() => setOpen(false)} />
          <div className="fixed inset-0 z-[1001] grid place-items-center p-4">
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-medium text-foreground">Join the waitlist</h3>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">✕</button>
              </div>
              
              {/* Tally Form Embed */}
              <div className="w-full">
                <iframe
                  src="https://tally.so/embed/w8jKXq?alignLeft=1&hideTitle=1&transparentBackground=1"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Zact Waitlist"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}



