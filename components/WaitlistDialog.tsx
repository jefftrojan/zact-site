"use client";

import { Button } from './ui/button'

export default function WaitlistDialog({ triggerClass = "", triggerLabel = "Join the Waitlist" }: { triggerClass?: string; triggerLabel?: string }) {
  const openTallyForm = () => {
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.openPopup('mRAvBl', {
        layout: 'modal',
        width: 700,
        autoClose: 5000,
        onOpen: () => {
          console.log('Tally form opened')
        },
        onClose: () => {
          console.log('Tally form closed')
        },
        onSubmit: (payload: any) => {
          console.log('Tally form submitted:', payload)
          // The webhook will handle the email marketing integration
        }
      })
    } else {
      console.error('Tally widget not loaded')
    }
  }

  return (
    <Button 
      className={triggerClass} 
      onClick={openTallyForm}
    >
      {triggerLabel}
    </Button>
  )
}



