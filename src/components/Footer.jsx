import { AUTHOR, BUSINESS, telLink, waLink } from '../config'
import { HOURS } from '../data/hours'
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from './Icons'

export default function Footer() {
  const weekdays = HOURS.filter((h) => h.dow >= 1 && h.dow <= 5)
  const same = weekdays.every((h) => h.open === weekdays[0].open && h.close === weekdays[0].close)
  const sat = HOURS.find((h) => h.dow === 6)
  return (
    <footer id="contacto" className="bg-ink pb-28 pt-12 text-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-medium uppercase tracking-wide">{BUSINESS.name}</h3>
          <p className="mt-1 text-sm opacity-80">{BUSINESS.type} · {BUSINESS.city}</p>
          <p className="mt-1 text-sm opacity-80">{BUSINESS.address}</p>
        </div>
        <div className="grid content-start gap-2 text-sm font-semibold">
          <a href={waLink('¡Hola! Quería hacer una consulta.')} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center gap-2"><WhatsAppIcon size={20} />WhatsApp {BUSINESS.phoneDisplay}</a>
          <a href={telLink} className="flex min-h-[44px] items-center gap-2"><PhoneIcon size={20} />Llamar</a>
          <a href={`https://instagram.com/${BUSINESS.instagram}`} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center gap-2"><InstagramIcon size={20} />@{BUSINESS.instagram}</a>
        </div>
        <div className="text-sm opacity-90">
          <p className="font-bold">Horarios</p>
          {same && <p>Lunes a viernes: {weekdays[0].open} a {weekdays[0].close} hs</p>}
          {sat && !sat.closed && <p>Sábados: {sat.open} a {sat.close} hs</p>}
          <p>Domingos: cerrado</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl border-t border-white/15 px-4 pt-6 text-center text-sm">
        <p>
          Diseño y desarrollo por{' '}
          <a href={AUTHOR.portfolio} target="_blank" rel="noopener noreferrer" className="font-bold text-[#E9A877]">{AUTHOR.name}</a>
          {' · '}
          <a href={AUTHOR.github} target="_blank" rel="noopener noreferrer" className="text-[#E9A877]">GitHub</a>
        </p>
        {BUSINESS.isExample && <p className="mt-1 text-xs opacity-70">Sitio de ejemplo · nombre, precios, horarios, dirección, teléfono, equipo y reseñas son ficticios.</p>}
      </div>
    </footer>
  )
}
