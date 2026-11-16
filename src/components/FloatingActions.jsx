import { useEffect, useState } from 'react'
import { telLink, waLink } from '../config'
import { useBooking } from '../context/BookingContext'
import { formatPrice } from '../lib/format'
import { PhoneIcon, WhatsAppIcon } from './Icons'

// Botones siempre visibles en el celular + resumen del turno mientras se arma
export default function FloatingActions() {
  const { chosen, total, hasFrom } = useBooking()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = document.getElementById('turno')
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a href={telLink} aria-label="Llamar" className="fixed bottom-[5.5rem] right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-lg"><PhoneIcon size={22} /></a>
      <a href={waLink('¡Hola! Quiero pedir un turno.')} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp" className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg"><WhatsAppIcon size={28} /></a>
      {chosen.length > 0 && !inView && (
        <a href="#turno" className="fixed bottom-4 left-4 right-20 z-40 flex min-h-[56px] items-center justify-center rounded-full bg-copper px-4 text-center text-sm font-bold text-white shadow-lg">
          {chosen.length} {chosen.length === 1 ? 'servicio' : 'servicios'} · {hasFrom ? 'desde ' : ''}{formatPrice(total)} · Pedir turno
        </a>
      )}
    </>
  )
}
