import { REVIEWS } from '../data/reviews'

export default function Reviews() {
  return (
    <section id="opiniones" className="bg-paper">
      <div className="section">
        <h2 className="h2">Qué dicen los clientes</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-line bg-cream p-5">
              <p className="text-copper" aria-label="5 estrellas">★★★★★</p>
              <blockquote className="mt-2 text-base">“{r.text}”</blockquote>
              <figcaption className="mt-3 text-sm font-bold">{r.name} <span className="font-normal text-muted">· reseña de ejemplo</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
