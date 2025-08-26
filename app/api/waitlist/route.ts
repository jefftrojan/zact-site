import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }
    
    // Provider priority: EmailOctopus (free tier) -> Brevo
    const eoKey = process.env.EMAILOCTOPUS_API_KEY
    const eoListId = process.env.EMAILOCTOPUS_LIST_ID
    if (eoKey && eoListId) {
      const res = await fetch(`https://emailoctopus.com/api/1.6/lists/${encodeURIComponent(eoListId)}/contacts`, {
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
        return NextResponse.json({ error: 'EmailOctopus error', detail: text }, { status: 502 })
      }
    } else {
      const brevoKey = process.env.BREVO_API_KEY
      const brevoListIdRaw = process.env.BREVO_LIST_ID
      const brevoListId = brevoListIdRaw ? Number(brevoListIdRaw) : undefined
      if (!brevoKey || !brevoListId) {
        return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
      }
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
        return NextResponse.json({ error: 'Brevo error', detail: text }, { status: 502 })
      }
    }

    // Send emails via Resend (optional, free developer tier)
    const resendKey = process.env.RESEND_API_KEY
    const resendFrom = process.env.RESEND_FROM
    const resendInternal = process.env.RESEND_INTERNAL
    if (resendKey && resendFrom && resendInternal) {
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
          html: `<p>Hi ${name || ''},</p><p>Thanks for joining the Zact waitlist. We’ll be in touch soon.</p>`
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
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


