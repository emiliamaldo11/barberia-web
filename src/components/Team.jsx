import { TEAM } from '../data/team'
import { img } from '../config'

export default function Team() {
  return (
    <section id="equipo" className="section">
      <h2 className="h2">El equipo</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {TEAM.map((t) => (
          <div key={t.id} className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 sm:flex-col sm:text-center">
            {t.image ? (
              <img src={img(t.image)} alt={t.name} loading="lazy" className="h-20 w-20 rounded-full object-cover" />
            ) : (
              <span className="grid h-20 w-20 flex-none place-items-center rounded-full bg-ink font-display text-3xl text-white" aria-hidden="true">{t.name[0]}</span>
            )}
            <div>
              <h3 className="font-display text-xl font-medium uppercase tracking-wide">{t.name}</h3>
              <p className="text-sm text-muted">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
