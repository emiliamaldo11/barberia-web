import { useMemo } from 'react'
import { SERVICES, CATEGORIES } from '../data/services'
import { TEAM } from '../data/team'
import { getNextDays } from '../lib/hours'
import { formatDuration, formatPrice } from '../lib/format'
import { SLOTS, useBooking } from '../context/BookingContext'
import { CheckIcon, WhatsAppIcon } from './Icons'

function Step({ n, done, title, children }) {
  return (
    <div className="rounded-3xl border-2 border-line bg-paper p-4 md:p-6">
      <h3 className="flex items-center gap-3 font-display text-2xl font-medium uppercase tracking-wide">
        <span className={`grid h-9 w-9 flex-none place-items-center rounded-full text-base text-white ${done ? 'bg-ok' : 'bg-copper'}`}>{done ? <CheckIcon size={18} /> : n}</span>
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

const field = 'min-h-[48px] w-full rounded-xl border-2 border-line bg-cream px-3 text-base focus:border-copper'

export default function Booking() {
  const b = useBooking()
  const days = useMemo(() => getNextDays(7), [])

  return (
    <section id="turno" className="bg-paper">
      <div className="section">
        <h2 className="h2">Pedí tu turno</h2>
        <p className="mt-2 max-w-lg text-muted">Seguí los 3 pasos. Al final se abre WhatsApp con el mensaje ya escrito.</p>

        <div className="mt-6 grid gap-4">
          <Step n="1" done={b.chosen.length > 0} title="Elegí tus servicios">
            {CATEGORIES.map((c) => (
              <div key={c} className="mb-3">
                <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-muted">{c}</p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.filter((s) => s.category === c).map((s) => {
                    const on = b.selected.includes(s.id)
                    return (
                      <button key={s.id} aria-pressed={on} onClick={() => b.toggleService(s.id)} className={`min-h-[44px] rounded-full border-2 px-3.5 text-sm font-semibold ${on ? 'border-ink bg-ink text-white' : 'border-line bg-cream'}`}>
                        {on && <CheckIcon size={14} className="mr-1 inline" />}{s.name} · {s.from ? 'desde ' : ''}{formatPrice(s.price)}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
            <p className="mt-2 rounded-xl bg-cream p-3 text-sm">
              {b.chosen.length
                ? <><b>Total estimado: {b.hasFrom ? 'desde ' : ''}{formatPrice(b.total)}</b> · Duración aprox. {formatDuration(b.minutes)}</>
                : 'Todavía no elegiste ningún servicio.'}
            </p>
          </Step>

          <Step n="2" done={Boolean(b.day && b.slot && (b.slot !== 'Hora puntual' || b.time))} title="Elegí día y horario">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {days.map((d) => (
                <button key={d.value} disabled={d.closed} aria-pressed={b.day === d.value} onClick={() => b.setDay(d.value)} className={`min-h-[56px] rounded-xl border-2 px-2 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40 ${b.day === d.value ? 'border-copper bg-copper text-white' : 'border-line bg-cream'}`}>
                  {d.label}
                  <span className="block text-xs font-medium opacity-80">{d.closed ? 'Cerrado' : d.sub}</span>
                </button>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {SLOTS.map((s) => (
                <button key={s} aria-pressed={b.slot === s} onClick={() => b.setSlot(s)} className={`min-h-[48px] rounded-xl border-2 px-2 text-sm font-bold ${b.slot === s ? 'border-copper bg-copper text-white' : 'border-line bg-cream'}`}>{s}</button>
              ))}
            </div>
            {b.slot === 'Hora puntual' && (
              <label className="mt-3 block text-sm font-semibold">¿A qué hora te queda bien?
                <input type="time" value={b.time} onChange={(e) => b.setTime(e.target.value)} className={`${field} mt-1`} />
              </label>
            )}
          </Step>

          <Step n="3" done={b.name.trim().length > 0} title="Tus datos">
            <label className="block text-sm font-semibold">Tu nombre
              <input type="text" value={b.name} onChange={(e) => b.setName(e.target.value)} placeholder="Ej: Martín" autoComplete="given-name" className={`${field} mt-1`} />
            </label>
            <label className="mt-3 block text-sm font-semibold">Profesional (opcional)
              <select value={b.pro} onChange={(e) => b.setPro(e.target.value)} className={`${field} mt-1`}>
                <option value="">Sin preferencia</option>
                {TEAM.map((t) => <option key={t.id} value={t.name}>{t.name}</option>)}
              </select>
            </label>
            <label className="mt-3 block text-sm font-semibold">Aclaraciones (opcional)
              <textarea rows={2} value={b.notes} onChange={(e) => b.setNotes(e.target.value)} placeholder="Ej: prefiero después de las 18" className={`${field} mt-1 py-2`} />
            </label>
          </Step>

          <div className="rounded-3xl bg-ink p-5 text-center text-white md:p-6">
            <a href={b.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-disabled={!b.canSend} className={`btn ${b.canSend ? '' : 'pointer-events-none opacity-40'}`}><WhatsAppIcon size={20} />Pedir turno por WhatsApp</a>
            <p className="mt-3 text-sm opacity-90">
              {b.canSend ? 'Listo: tocá el botón y enviá el mensaje.' : `Te falta elegir: ${b.missing.join(', ')}.`}
            </p>
            <p className="mt-1 text-xs opacity-70">El turno queda confirmado cuando te respondemos por WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
