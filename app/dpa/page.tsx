export const metadata = {
  title: 'Data Processing Addendum (DPA) — Zact',
  description: 'Standard DPA terms and downloadable PDF for customers.'
}

export default function DpaPage() {
  return (
    <main className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="text-sm text-muted-foreground">Legal</div>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground">
              Data Processing Addendum (DPA)
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Effective: 2025</p>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our DPA describes how Zact processes personal data on behalf of customers when providing the Service,
              including roles (controller/processor), security measures, subprocessor disclosures, and cross‑border transfers.
              The signed PDF is the canonical version.
            </p>
          </div>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-medium">Download:</span>{" "}
              <a className="underline" href="/Zact-DPA.pdf">Zact-DPA.pdf</a>
            </p>
            <p>
              <span className="text-foreground font-medium">Subprocessors:</span>{" "}
              <a className="underline" href="/subprocessors">View list</a>{" "}
              (also available as{" "}
              <a className="underline" href="/subprocessors/subprocessors.json">JSON</a>{" "}
              and{" "}
              <a className="underline" href="/subprocessors.csv">CSV</a>
              ).
            </p>
            <p>
              <span className="text-foreground font-medium">Need a signed copy?</span>{" "}
              Email{" "}
              <a className="underline" href="mailto:legal@usezact.com">legal@usezact.com</a>.
            </p>
          </section>

          <div className="mt-10 space-y-10 text-foreground">
            <section id="scope">
              <h2 className="text-xl font-display font-semibold">1. Scope</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                The DPA applies when Zact processes personal data as a processor on behalf of a customer (the controller) to provide the
                Service. This typically includes processing meeting metadata and any content the customer authorizes Zact to access via
                integrations.
              </p>
            </section>

            <section id="integrations">
              <h2 className="text-xl font-display font-semibold">2. Integrations & permissions</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Customers control which integrations are connected and what permissions (OAuth scopes) are granted. Connected third‑party
                services may include Google Calendar/Drive/Docs, Notion, Asana/Jira, Slack, and other workspace tools. The DPA governs
                Zact’s processing of personal data obtained through these integrations for the purpose of providing the Service.
              </p>
            </section>

            <section id="security">
              <h2 className="text-xl font-display font-semibold">3. Security measures</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We maintain technical and organizational measures designed to protect customer data (e.g., encryption in transit and at rest,
                access controls, monitoring, and incident response). For a plain‑language overview, see{" "}
                <a className="underline" href="/security">Security</a>.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-xl font-display font-semibold">4. Contact</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Questions about the DPA? Email{" "}
                <a className="underline" href="mailto:legal@usezact.com">legal@usezact.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}







