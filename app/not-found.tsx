export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="text-sm text-muted-foreground mb-2">404</div>
        <h1 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          If you expected something here, ping us — we’ll fix it fast.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-chart-2 text-foreground border border-border/60"
          >
            Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
