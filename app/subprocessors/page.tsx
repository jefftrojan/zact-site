import data from './subprocessors.json'

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-chart-1/10 text-chart-1 px-4 py-2 rounded-full border border-chart-1/20 backdrop-blur-sm text-sm font-medium">Compliance</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium text-foreground">Subprocessors</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">We work with carefully vetted vendors to run Zact reliably and securely.</p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <a href="/subprocessors/subprocessors.json" className="underline">Download JSON</a>
            <a href="/subprocessors.csv" className="underline">Download CSV</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-card/70 border border-border/40 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b border-border/50 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Vendor</th>
                  <th className="px-4 py-3 font-medium">Purpose</th>
                  <th className="px-4 py-3 font-medium">Data categories</th>
                  <th className="px-4 py-3 font-medium">Location</th>
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
        </div>
      </div>
    </section>
  )
}



