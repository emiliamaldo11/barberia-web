import { useState } from 'react'
import { SERVICES, CATEGORIES } from '../data/services'
import { BUSINESS, waLink } from '../config'
import { useBooking } from '../context/BookingContext'
import { formatDuration, formatPrice } from '../lib/format'
import { CheckIcon, PlusIcon, WhatsAppIcon } from './Icons'

export default function Services() {
  const [cat, setCat] = useState('Todos')
  const { selected, toggleService } = useBooking()
  const list = SERVICES.filter((s) => cat === 'Todos' || s.category === cat)

  return (
    <section id="servicios" className="section">
      <h2 className="h2">Servicios y precios</h2>
      <p className="mt-2 max-w-lg text-muted">Tocá “Sumar al turno” en los que quieras y después pedí tu turno por WhatsApp.</p>

      <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-1">
        {['Todos', ...CATEGORIES].map((c) => (
          <button key={c} aria-pressed={c === cat} onClick={() => setCat(c)} className={`min-h-[44px] whitespace-nowrap rounded-full border-2 border-ink px-4 text-sm font-bold ${c === cat ? 'bg-ink text-white' : 'bg-paper'}`}>{c}</button>
        ))}
      </div>

      <ul className="mt-5 grid gap-3">
        {list.map((s) => {
          const on = selected.includes(s.id)
          return (
            <li key={s.id} className={`flex flex-col gap-3 rounded-2xl border-2 bg-paper p-4 sm:flex-row sm:items-center ${on ? 'border-copper' : 'border-line'}`}>
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-3 sm:justify-start sm:gap-4">
                  <h3 className="font-display text-xl font-medium uppercase tracking-wide">{s.name}</h3>
                  <b className="whitespace-nowrap text-lg text-copperdark">{s.from ? 'desde ' : ''}{formatPrice(s.price)}</b>
                </div>
                <p className="text-sm text-muted">{s.description} · {formatDuration(s.duration)}</p>
              </div>
              <button onClick={() => toggleService(s.id)} aria-pressed={on} className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border-2 px-4 text-sm font-bold ${on ? 'border-copper bg-copper text-white' : 'border-ink'}`}>
                {on ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
                {on ? 'En tu turno' : 'Sumar al turno'}
              </button>
            </li>
          )
        })}
      </ul>

      <div className="mt-5 flex flex-col gap-3 rounded-2xl bg-ink p-5 text-white sm:flex-row sm:items-center">
        <div className="flex-1">
          <h3 className="font-display text-xl font-medium uppercase tracking-wide">¿Buscás otro servicio?</h3>
          <p className="text-sm opacity-80">Si no está en la lista, consultanos y te decimos precio y disponibilidad.</p>
        </div>
        <a href={waLink(`¡Hola! Quería consultar por un servicio que no está en la lista de ${BUSINESS.name}: `)} target="_blank" rel="noopener noreferrer" className="btn"><WhatsAppIcon size={20} />Consultar</a>
      </div>
    </section>
  )
}
