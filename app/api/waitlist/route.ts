import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    const listIdRaw = process.env.BREVO_LIST_ID
    const listId = listIdRaw ? Number(listIdRaw) : undefined
    if (!apiKey || !listId) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name },
        updateEnabled: true,
        listIds: [listId],
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: 'Loops error', detail: text }, { status: 502 })
    }

    // Send emails via Resend (optional)
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


