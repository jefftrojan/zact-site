"use client";

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { createPortal } from 'react-dom'

export default function WaitlistDialog({ triggerClass = "", triggerLabel = "Join the Waitlist" }: { triggerClass?: string; triggerLabel?: string }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Reset form when dialog opens
  useEffect(() => {
    if (open) {
      setOk(false)
      setError(null)
      setLoading(false)
    }
  }, [open])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') || '')
    const name = String(formData.get('name') || '')
    
    try {
      console.log('Submitting waitlist form:', { email, name })
      
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      })
      
      const data = await res.json()
      console.log('Waitlist API response:', data)
      
      if (!res.ok) {
        throw new Error(data.error || data.message || `HTTP ${res.status}: ${res.statusText}`)
      }
      
      if (data.ok) {
        setOk(true)
        form.reset()
        console.log('Waitlist signup successful:', data.message)
        
        // Auto-close dialog after 3 seconds
        setTimeout(() => {
          setOpen(false)
        }, 3000)
      } else {
        throw new Error(data.error || 'Unknown error occurred')
      }
    } catch (err: any) {
      console.error('Waitlist submission error:', err)
      setError(err?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button className={triggerClass} onClick={() => setOpen(true)}>{triggerLabel}</Button>
      {open && mounted && createPortal(
        <>
          <div className="fixed inset-0 z-[1000] bg-black/50" onClick={() => setOpen(false)} />
          <div className="fixed inset-0 z-[1001] grid place-items-center p-4">
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-2xl p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium text-foreground">Join the waitlist</h3>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">✕</button>
              </div>
              {ok ? (
                <div className="mt-4 space-y-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-lg font-medium text-foreground">You're on the list!</div>
                    <div className="text-sm text-muted-foreground mt-1">Thanks for joining. We'll be in touch soon.</div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    This dialog will close automatically in a few seconds...
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-4 space-y-3">
                  <div className="space-y-1">
                    <label className="text-sm text-muted-foreground">Name</label>
                    <input name="name" type="text" placeholder="Ada Lovelace" className="w-full h-11 rounded-md border border-border bg-background/70 px-3 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/40" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-muted-foreground">Email</label>
                    <input name="email" type="email" required placeholder="you@company.com" className="w-full h-11 rounded-md border border-border bg-background/70 px-3 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/40" />
                  </div>
                  {error && <div className="text-sm text-destructive">{error}</div>}
                  <div className="pt-2 flex gap-2">
                    <Button type="submit" disabled={loading} className="h-11 px-5">{loading ? 'Joining…' : 'Join'}</Button>
                    <Button type="button" variant="outline" onClick={() => setOpen(false)} className="h-11 px-5">Cancel</Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}



