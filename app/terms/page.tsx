export const metadata = {
  title: 'Terms of Service — Zact',
  description: 'Terms and conditions for using Zact, including integrations, permissions, and acceptable use.'
}

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="text-sm text-muted-foreground">Legal</div>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Effective: 2025</p>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              These Terms of Service (“Terms”) govern your access to and use of Zact (“Zact”, “we”, “us”),
              including any websites, apps, integrations, and related services (collectively, the “Service”).
              By using the Service, you agree to these Terms.
            </p>
          </div>

          <div className="space-y-10 text-foreground">
            <section id="definitions">
              <h2 className="text-xl font-display font-semibold">0. Definitions</h2>
              <div className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-medium">“Service”</span> means Zact’s websites, apps, integrations, and related
                  services. <span className="text-foreground font-medium">“You”</span> means the individual or entity using the Service.
                </p>
                <p>
                  <span className="text-foreground font-medium">“Integrations”</span> means third‑party services you connect (e.g., Google
                  Calendar/Drive/Docs, Notion, Asana, Jira, Slack).
                </p>
                <p>
                  <span className="text-foreground font-medium">“Meeting content”</span> means content exchanged during a meeting (including
                  spoken or written content) that Zact may process depending on configuration and permissions.
                </p>
              </div>
            </section>

            <section id="service">
              <h2 className="text-xl font-display font-semibold">1. The Service</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Zact is an AI meeting assistant that can join meetings with context, participate in real time,
                and help coordinate follow‑through by syncing outcomes into your workspace tools (docs, tasks, and messaging)
                based on your configuration.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Zact is not just a passive notetaker. Depending on settings, it may speak up, ask clarifying questions, confirm owners
                and deadlines, and help drive the meeting toward decisions.
              </p>
            </section>

            <section id="accounts">
              <h2 className="text-xl font-display font-semibold">2. Accounts</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You are responsible for maintaining the security of your account and for all activity that occurs under it.
                You must provide accurate information and promptly update it as needed.
              </p>
            </section>

            <section id="integrations">
              <h2 className="text-xl font-display font-semibold">3. Integrations, permissions & third‑party services</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                The Service may integrate with third‑party products you choose to connect, such as Google Calendar, Google Drive/Docs,
                Notion, Asana, Jira, Slack, CRMs, and other tools. When you connect an integration, you authorize Zact to access data
                and perform actions according to the permissions (scopes) you grant.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">You control the permissions.</span> The OAuth consent screen (or integration
                configuration) shows the exact access you grant. You can revoke access by disconnecting the integration.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Permissions vary by integration and feature, but may include:
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>Access meeting metadata (title, time, agenda/description, attendees)</li>
                <li>Create or update calendar events you request (e.g., follow‑ups)</li>
                <li>Create or update documents/notes (e.g., meeting outcomes)</li>
                <li>Create or update tasks/issues (e.g., Asana/Jira) with owners and deadlines</li>
                <li>Post updates to channels you specify (e.g., Slack)</li>
              </ul>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You are responsible for complying with the third‑party provider’s terms and for ensuring you have rights and consent
                to grant Zact access (including access to other participants’ data where applicable).
              </p>
            </section>

            <section id="meeting-consent">
              <h2 className="text-xl font-display font-semibold">4. Meetings, consent & compliance</h2>
              <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  You are responsible for ensuring that inviting Zact into a meeting (and any processing of meeting content) complies
                  with applicable laws, workplace policies, and any consent requirements.
                </p>
                <p>
                  Some jurisdictions require consent for recording or processing communications. If your use of Zact involves recording,
                  transcription, or storing meeting content, you represent that you have obtained all required consents and permissions.
                </p>
              </div>
            </section>

            <section id="acceptable">
              <h2 className="text-xl font-display font-semibold">5. Acceptable use</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>Do not misuse the Service, interfere with it, or access it using a method other than the interface provided.</li>
                <li>Do not attempt to reverse engineer, exploit, or bypass security controls.</li>
                <li>Do not use the Service for unlawful, harmful, or abusive activities.</li>
                <li>Do not upload or share content you don’t have the right to use.</li>
                <li>Do not use the Service to generate or distribute malware, phishing, or spam.</li>
              </ul>
            </section>

            <section id="content">
              <h2 className="text-xl font-display font-semibold">6. Content, outputs & outcomes</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You control which meetings Zact joins and which tools Zact syncs outcomes into. Zact may generate outputs such as
                summaries, decisions, action items, tasks, and messages based on meeting context and your instructions. You are responsible
                for reviewing outputs before relying on them for critical decisions.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                The Service may make mistakes. You are responsible for verifying critical information, approvals, and changes to external
                systems (e.g., tasks, docs, calendar events) before treating them as final.
              </p>
            </section>

            <section id="privacy">
              <h2 className="text-xl font-display font-semibold">7. Privacy</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>{" "}
                explains how we collect, use, and protect information, including data accessed through integrations.
              </p>
            </section>

            <section id="ip">
              <h2 className="text-xl font-display font-semibold">8. Intellectual property</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                The Service, including its software and design, is owned by Zact and protected by applicable laws. You may not copy,
                modify, distribute, sell, or lease any part of the Service unless we give you written permission.
              </p>
            </section>

            <section id="disclaimer">
              <h2 className="text-xl font-display font-semibold">9. Disclaimers</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”. WE DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT.
              </p>
            </section>

            <section id="liability">
              <h2 className="text-xl font-display font-semibold">10. Limitation of liability</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZACT WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, DATA, OR GOODWILL.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-xl font-display font-semibold">11. Changes</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. Continued use of the Service after an update constitutes acceptance of
                the updated Terms.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-xl font-display font-semibold">12. Contact</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Questions about these Terms? Email{" "}
                <a className="underline" href="mailto:hello@usezact.com">
                  hello@usezact.com
                </a>
                .
              </p>
              <div className="mt-6">
                <Link href="/" className="underline text-primary">
                  Back to Home
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}


