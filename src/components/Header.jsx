import { BUSINESS } from '../config'
import { ScissorsIcon } from './Icons'

const LINKS = [['Servicios', '#servicios'], ['Turnos', '#turno'], ['El local', '#local'], ['Contacto', '#contacto']]

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-2.5">
        <a href="#top" className="mr-auto flex items-center gap-2 font-display text-xl font-semibold uppercase tracking-wider">
          <ScissorsIcon size={22} className="text-copper" />
          {BUSINESS.name}
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {LINKS.map(([text, href]) => (
            <a key={text} href={href} className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-line">{text}</a>
          ))}
        </nav>
        <a href="#turno" className="btn !min-h-[40px] !px-4 !py-2 !text-sm">Pedir turno</a>
      </div>
      <nav aria-label="Secciones" className="flex gap-1.5 overflow-x-auto px-4 pb-2.5 md:hidden">
        {LINKS.map(([text, href]) => (
          <a key={text} href={href} className="whitespace-nowrap rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-semibold">{text}</a>
        ))}
      </nav>
    </header>
  )
}
