import { createContext, useContext, useMemo, useState } from 'react'
import { SERVICES } from '../data/services'
import { waLink } from '../config'

const BookingContext = createContext(null)
export const SLOTS = ['Mañana', 'Tarde', 'Hora puntual']

export function BookingProvider({ children }) {
  const [selected, setSelected] = useState([]) // ids de servicios
  const [day, setDay] = useState('')
  const [slot, setSlot] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [pro, setPro] = useState('')
  const [notes, setNotes] = useState('')

  const toggleService = (id) => setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const chosen = useMemo(() => SERVICES.filter((s) => selected.includes(s.id)), [selected])
  const total = chosen.reduce((sum, s) => sum + s.price, 0)
  const hasFrom = chosen.some((s) => s.from)
  const minutes = chosen.reduce((sum, s) => sum + s.duration, 0)

  const missing = []
  if (!chosen.length) missing.push('un servicio')
  if (!day) missing.push('el día')
  if (!slot) missing.push('el horario')
  else if (slot === 'Hora puntual' && !time) missing.push('la hora')
  if (!name.trim()) missing.push('tu nombre')
  const canSend = missing.length === 0

  const when = slot === 'Hora puntual' ? `a las ${time} hs` : slot === 'Mañana' ? 'por la mañana' : 'por la tarde'
  const message = `¡Hola! Quiero pedir turno para ${chosen.map((s) => s.name).join(' + ')} el ${day} ${when}${pro ? `, con ${pro}` : ''}. Soy ${name.trim()}.${notes.trim() ? ` Aclaración: ${notes.trim()}.` : ''} ¿Tienen disponibilidad?`
  const whatsappUrl = canSend ? waLink(message) : '#turno'

  const value = { selected, chosen, toggleService, day, setDay, slot, setSlot, time, setTime, name, setName, pro, setPro, notes, setNotes, total, hasFrom, minutes, missing, canSend, whatsappUrl }
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export const useBooking = () => useContext(BookingContext)
