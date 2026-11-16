import { BUSINESS, mapsEmbed, mapsLink } from '../config'
import { HOURS } from '../data/hours'
import { getNow } from '../lib/hours'
import { PinIcon } from './Icons'

export default function Location() {
  const todayDow = getNow().dow
  return (
    <section id="local" className="section">
      <h2 className="h2">El local</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="grid content-start gap-5">
          <div>
            <p className="flex items-start gap-2 text-lg font-semibold"><PinIcon size={22} className="mt-0.5 flex-none text-copper" />{BUSINESS.address}</p>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-3">Cómo llegar</a>
          </div>
          <div>
            <h3 className="mb-2 font-display text-xl font-medium uppercase tracking-wide">Horarios</h3>
            <table className="w-full overflow-hidden rounded-2xl border border-line bg-paper text-sm">
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h.dow} className={h.dow === todayDow ? 'bg-copper/10 font-bold' : ''}>
                    <th scope="row" className="px-4 py-2.5 text-left font-semibold">{h.label}{h.dow === todayDow ? ' (hoy)' : ''}</th>
                    <td className="px-4 py-2.5 text-right">{h.closed ? 'Cerrado' : `${h.open} a ${h.close} hs`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="mb-2 font-display text-xl font-medium uppercase tracking-wide">Medios de pago</h3>
            <ul className="flex flex-wrap gap-2">
              {BUSINESS.payments.map((p) => <li key={p} className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-semibold">{p}</li>)}
            </ul>
          </div>
        </div>
        <iframe title={`Mapa de ${BUSINESS.name}`} src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-2xl border-0 md:h-full md:min-h-[26rem]" />
      </div>
    </section>
  )
}
