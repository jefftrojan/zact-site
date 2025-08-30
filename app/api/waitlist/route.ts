import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }
    
    console.log('Waitlist signup attempt:', { email, name })
    
    // Provider priority: SendGrid (free tier) -> EmailOctopus (free tier) -> Brevo
    const sgKey = process.env.SENDGRID_API_KEY
    let contactAdded = false
    
    if (sgKey) {
      console.log('Using SendGrid for contacts')
      const sgListId = process.env.SENDGRID_LIST_ID
      try {
        // Upsert contact into Marketing Campaigns
        const contactsRes = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${sgKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            list_ids: sgListId ? [sgListId] : [],
            contacts: [
              {
                email,
                first_name: name || undefined,
              },
            ],
          }),
        })
        if (!contactsRes.ok) {
          const text = await contactsRes.text()
          console.error('SendGrid contacts error:', text)
          return NextResponse.json({ error: 'Failed to add contact to SendGrid', detail: text }, { status: 502 })
        } else {
          console.log('Contact added to SendGrid successfully')
          contactAdded = true
        }
      } catch (error) {
        console.error('SendGrid contacts error:', error)
        return NextResponse.json({ error: 'SendGrid service unavailable' }, { status: 502 })
      }
    } else {
      const eoKey = process.env.EMAILOCTOPUS_API_KEY
      const eoListId = process.env.EMAILOCTOPUS_LIST_ID
      if (eoKey && eoListId) {
        console.log('Using EmailOctopus for contacts')
        try {
          const res = await fetch(`https://emailoctopus.com/api/2.0/lists/${encodeURIComponent(eoListId)}/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              api_key: eoKey,
              email_address: email,
              fields: { FirstName: name },
              status: 'SUBSCRIBED'
            })
          })
          if (!res.ok) {
            const text = await res.text()
            console.error('EmailOctopus error:', text)
            return NextResponse.json({ error: 'Failed to add contact to EmailOctopus', detail: text }, { status: 502 })
          } else {
            console.log('Contact added to EmailOctopus successfully')
            contactAdded = true
          }
        } catch (error) {
          console.error('EmailOctopus error:', error)
          return NextResponse.json({ error: 'EmailOctopus service unavailable' }, { status: 502 })
        }
      } else {
        const brevoKey = process.env.BREVO_API_KEY
        const brevoListIdRaw = process.env.BREVO_LIST_ID
        const brevoListId = brevoListIdRaw ? Number(brevoListIdRaw) : undefined
        if (brevoKey && brevoListId) {
          console.log('Using Brevo for contacts')
          try {
            const res = await fetch('https://api.brevo.com/v3/contacts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'api-key': brevoKey,
              },
              body: JSON.stringify({
                email,
                attributes: { FIRSTNAME: name },
                updateEnabled: true,
                listIds: [brevoListId],
              }),
            })
            if (!res.ok) {
              const text = await res.text()
              console.error('Brevo error:', text)
              return NextResponse.json({ error: 'Failed to add contact to Brevo', detail: text }, { status: 502 })
            } else {
              console.log('Contact added to Brevo successfully')
              contactAdded = true
            }
          } catch (error) {
            console.error('Brevo error:', error)
            return NextResponse.json({ error: 'Brevo service unavailable' }, { status: 502 })
          }
        } else {
          return NextResponse.json({ error: 'No email marketing service configured. Please set up SendGrid, EmailOctopus, or Brevo.' }, { status: 500 })
        }
      }
    }

    // Send emails: prefer SendGrid if configured, otherwise Resend as optional (free developer tier)
    let emailSent = false
    if (sgKey) {
      const sgFrom = process.env.SENDGRID_FROM
      const sgInternal = process.env.SENDGRID_INTERNAL
      if (sgFrom) {
        console.log('Sending emails via SendGrid')
        try {
          const welcome = fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${sgKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              personalizations: [{ to: [{ email }] }],
              from: { email: sgFrom },
              subject: "You're on the Zact waitlist ✅",
              content: [
                { type: 'text/html', value: `<p>Hi ${name || ''},</p><p>Thanks for joining the Zact waitlist. We'll be in touch soon.</p>` }
              ]
            })
          })
          const notify = sgInternal
            ? fetch('https://api.sendgrid.com/v3/mail/send', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${sgKey}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  personalizations: [{ to: [{ email: sgInternal }] }],
                  from: { email: sgFrom },
                  subject: 'New waitlist signup',
                  content: [
                    { type: 'text/html', value: `<p>Name: ${name || '(n/a)'}<br/>Email: ${email}</p>` }
                  ]
                })
              })
            : undefined
          await Promise.allSettled([welcome, notify as unknown as Promise<unknown>].filter(Boolean))
          emailSent = true
          console.log('SendGrid emails sent successfully')
        } catch (error) {
          console.error('SendGrid email error:', error)
        }
      }
    } else {
      // Resend fallback
      const resendKey = process.env.RESEND_API_KEY
      const resendFrom = process.env.RESEND_FROM
      const resendInternal = process.env.RESEND_INTERNAL
      if (resendKey && resendFrom && resendInternal) {
        console.log('Sending emails via Resend')
        try {
          const welcome = fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
              from: resendFrom,
              to: email,
              subject: "You're on the Zact waitlist ✅",
              html: `<p>Hi ${name || ''},</p><p>Thanks for joining the Zact waitlist. We'll be in touch soon.</p>`
            })
          })
          const notify = fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
              from: resendFrom,
              to: resendInternal,
              subject: 'New waitlist signup',
              html: `<p>Name: ${name || '(n/a)'}<br/>Email: ${email}</p>`
            })
          })
          await Promise.allSettled([welcome, notify])
          emailSent = true
          console.log('Resend emails sent successfully')
        } catch (error) {
          console.error('Resend email error:', error)
        }
      }
    }

    // Log the result
    console.log('Waitlist signup result:', { contactAdded, emailSent, email, name })
    
    // Return success
    return NextResponse.json({ 
      ok: true, 
      contactAdded, 
      emailSent,
      message: 'Successfully joined waitlist'
    })
    
  } catch (e) {
    console.error('Waitlist API error:', e)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


