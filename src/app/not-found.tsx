import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center py-24">
      <h1 className="font-display text-7xl font-bold text-navy">404</h1>
      <p className="mt-3 text-lg text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition shadow-card"
      >
        Return to Home
      </Link>
    </div>
  );
}
