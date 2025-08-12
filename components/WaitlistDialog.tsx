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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') || '')
    const name = String(formData.get('name') || '')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      })
      if (!res.ok) throw new Error('Failed to join')
      setOk(true)
      form.reset()
    } catch (err: any) {
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
                <div className="mt-4 text-sm text-foreground">Thanks! You’re on the list. We’ll be in touch.</div>
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



