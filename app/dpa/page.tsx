export const metadata = {
  title: 'Data Processing Addendum (DPA) — Zact',
  description: 'Standard DPA terms and downloadable PDF for customers.'
}

export default function DpaPage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-chart-4/10 text-chart-4 px-4 py-2 rounded-full border border-chart-4/20 backdrop-blur-sm text-sm font-medium">Legal</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium text-foreground">Data Processing Addendum</h1>
          <p className="mt-6 text-lg text-muted-foreground">Our DPA reflects standard data protection terms, including controller/processor roles, security measures, and subprocessor disclosures.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="/Zact-DPA.pdf" className="px-5 py-3 rounded-md border border-border bg-card/60 hover:bg-card/80 transition-colors">Download PDF</a>
            <a href="/subprocessors" className="px-5 py-3 rounded-md border border-border bg-card/60 hover:bg-card/80 transition-colors">View Subprocessors</a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Need a signed copy? Email <a className="underline" href="mailto:legal@usezact.com">legal@usezact.com</a>.</p>
        </div>
      </div>
    </section>
  )
}



