import { HOURS } from '../data/hours'
import { TZ } from '../config'

const DAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const toMin = (t) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

// Día de la semana y minutos desde la medianoche, en horario de Argentina
export function getNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(date)
  const get = (type) => parts.find((p) => p.type === type).value
  return { dow: DAYS_EN.indexOf(get('weekday')), minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')) }
}

export function getOpenStatus(date = new Date()) {
  const { dow, minutes } = getNow(date)
  const today = HOURS.find((h) => h.dow === dow)
  if (today && !today.closed) {
    if (minutes >= toMin(today.open) && minutes < toMin(today.close)) return { open: true, text: `Abierto ahora · hasta las ${today.close} hs` }
    if (minutes < toMin(today.open)) return { open: false, text: `Cerrado · abrimos hoy a las ${today.open} hs` }
  }
  for (let i = 1; i <= 7; i++) {
    const next = HOURS.find((h) => h.dow === (dow + i) % 7)
    if (next && !next.closed) return { open: false, text: `Cerrado · abrimos ${i === 1 ? 'mañana' : next.label.toLowerCase()} a las ${next.open} hs` }
  }
  return { open: false, text: 'Cerrado' }
}

// Próximos días para elegir en el turno (los días cerrados quedan deshabilitados)
export function getNextDays(count = 7, base = new Date()) {
  const out = []
  for (let i = 0; i < count; i++) {
    const d = new Date(base.getTime() + i * 86400000)
    const parts = new Intl.DateTimeFormat('es-AR', { timeZone: TZ, weekday: 'long', day: '2-digit', month: '2-digit' }).formatToParts(d)
    const get = (type) => parts.find((p) => p.type === type).value
    const weekday = get('weekday')
    const value = `${weekday[0].toUpperCase()}${weekday.slice(1)} ${get('day')}/${get('month')}`
    const hours = HOURS.find((h) => h.dow === getNow(d).dow)
    out.push({ value, label: i === 0 ? 'Hoy' : i === 1 ? 'Mañana' : value, sub: i < 2 ? value : '', closed: !hours || !!hours.closed })
  }
  return out
}
