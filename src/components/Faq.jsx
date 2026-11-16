import { FAQ } from '../data/faq'

export default function Faq() {
  return (
    <section id="faq" className="section">
      <h2 className="h2">Preguntas frecuentes</h2>
      <div className="mt-6 grid gap-2">
        {FAQ.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-line bg-paper p-4">
            <summary className="flex min-h-[32px] cursor-pointer list-none items-center justify-between gap-3 font-semibold">
              {f.q}
              <span className="text-xl text-copper transition group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-2 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
