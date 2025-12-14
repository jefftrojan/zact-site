import data from './subprocessors.json'
import CinematicBackground from "../../components/CinematicBackground";

type Subprocessor = {
  name: string
  purpose: string
  dataCategories: string
  location: string
}

export const metadata = {
  title: 'Subprocessors — Zact',
  description: 'Vendors we use to provide and improve Zact.'
}

export default function SubprocessorsPage() {
  const rows = (data as Subprocessor[])
  return (
    <main className="py-20 sm:py-24 relative overflow-hidden">
      <CinematicBackground
        src="/bg-mascot.png"
        overlay={0.94}
        imageClassName="object-cover object-center"
      />
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="text-sm text-muted-foreground">Compliance</div>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground">
              Subprocessors
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: 2025</p>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Subprocessors are vendors that help Zact provide the Service (for example: hosting infrastructure, monitoring errors,
              product analytics, and sending transactional emails). We vet subprocessors and limit the data they receive to what’s
              necessary for their role.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Note: tools you connect (like Google Calendar/Docs, Notion, Asana/Jira, Slack) are generally{" "}
              <span className="text-foreground font-medium">third‑party services</span> you authorize Zact to access — they are not
              typically “subprocessors” acting on Zact’s behalf. This page lists Zact’s own vendors.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <a href="/subprocessors/subprocessors.json" className="underline">Download JSON</a>
              <a href="/subprocessors.csv" className="underline">Download CSV</a>
              <a href="/dpa" className="underline">View DPA</a>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-border/50">
              <thead className="bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium border-b border-border/50">Vendor</th>
                  <th className="px-4 py-3 font-medium border-b border-border/50">Purpose</th>
                  <th className="px-4 py-3 font-medium border-b border-border/50">Data categories</th>
                  <th className="px-4 py-3 font-medium border-b border-border/50">Location</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name} className="border-b border-border/30 last:border-0">
                    <td className="px-4 py-3 text-foreground">{row.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.dataCategories}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-sm text-muted-foreground leading-relaxed">
            For questions about subprocessors or to request notice of updates, email{" "}
            <a className="underline" href="mailto:legal@usezact.com">legal@usezact.com</a>.
          </div>
        </div>
      </div>
    </main>
  )
}







