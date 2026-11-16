import { useEffect, useState } from 'react'
import { BUSINESS, waLink } from '../config'
import { HOURS } from '../data/hours'
import { getNow, getOpenStatus } from '../lib/hours'
import { ClockIcon, PinIcon, WhatsAppIcon } from './Icons'

export default function Hero() {
  const [status, setStatus] = useState(getOpenStatus())
  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60000)
    return () => clearInterval(id)
  }, [])

  const today = HOURS.find((h) => h.dow === getNow().dow)
  const todayText = today && !today.closed ? `Hoy: ${today.open} a ${today.close} hs` : 'Hoy cerrado'

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-10 md:pb-16 md:pt-16">
        <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold ${status.open ? 'bg-ok/10 text-ok' : 'bg-copper/10 text-copperdark'}`}>
          <span className={`h-2.5 w-2.5 rounded-full ${status.open ? 'bg-ok' : 'bg-copper'}`} />
          {status.text}
        </span>
        <p className="mt-5 font-display text-sm font-medium uppercase tracking-[0.25em] text-copper">{BUSINESS.type} · {BUSINESS.city}</p>
        <h1 className="mt-2 max-w-2xl font-display text-5xl font-semibold uppercase leading-[1.05] tracking-wide md:text-7xl">{BUSINESS.tagline}</h1>
        <p className="mt-4 max-w-lg text-lg text-muted">{BUSINESS.subtitle}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={waLink('¡Hola! Quiero pedir un turno.')} target="_blank" rel="noopener noreferrer" className="btn"><WhatsAppIcon size={20} />Pedir turno por WhatsApp</a>
          <a href="#servicios" className="btn-outline">Ver servicios y precios</a>
        </div>
        <ul className="mt-8 grid gap-3 text-sm font-semibold text-muted sm:grid-cols-2">
          <li className="flex items-center gap-2"><PinIcon size={18} className="flex-none text-copper" />{BUSINESS.address}</li>
          <li className="flex items-center gap-2"><ClockIcon size={18} className="flex-none text-copper" />{todayText}</li>
        </ul>
      </div>
      <div className="stripes h-3" aria-hidden="true" />
    </section>
  )
}
