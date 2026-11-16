// Datos del local. TODO ES DE EJEMPLO: reemplazalo por los datos reales.
export const BUSINESS = {
  name: 'Don Lucho',
  type: 'Barbería',
  tagline: 'Cortes y barba con turno, sin vueltas',
  subtitle: 'Pedí tu turno en un minuto por WhatsApp. Te respondemos y lo confirmamos.',
  city: 'Mar del Plata',
  address: 'Av. Ejemplo 1234, Mar del Plata',
  whatsapp: '5492230000000', // con código de país, sin + ni espacios
  phoneDisplay: '223 000-0000',
  instagram: 'donlucho.barberia',
  payments: ['Efectivo', 'Transferencia', 'Débito y crédito', 'Mercado Pago'],
  isExample: true, // poné false cuando uses datos reales: oculta el aviso de "datos de ejemplo"
}

export const AUTHOR = {
  name: 'María Emilia Maldonado',
  portfolio: 'https://portfolio-rosy-chi-38.vercel.app/',
  github: 'https://github.com/emiliamaldo11',
}

export const TZ = 'America/Argentina/Buenos_Aires'
export const waLink = (text) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`
export const telLink = `tel:+${BUSINESS.whatsapp}`
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`
export const img = (path) => `${import.meta.env.BASE_URL}images/${path}`
