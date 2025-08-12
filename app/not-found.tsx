import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl font-semibold text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">We couldn’t find that page.</p>
        <div className="mt-8">
          <Link href="/" className="text-primary underline">Back to Home</Link>
        </div>
      </div>
    </section>
  )
}



