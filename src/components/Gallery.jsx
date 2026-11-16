import { GALLERY } from '../data/gallery'
import { img } from '../config'
import Placeholder from './Placeholder'

export default function Gallery() {
  return (
    <section id="galeria" className="bg-paper">
      <div className="section">
        <h2 className="h2">Nuestros trabajos</h2>
        <p className="mt-2 max-w-lg text-muted">Mirá cómo quedan los cortes, la barba y el color.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {GALLERY.map((g) =>
            g.image ? (
              <img key={g.id} src={img(g.image)} alt={g.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            ) : (
              <Placeholder key={g.id} label="Foto de ejemplo" className="aspect-square" />
            )
          )}
        </div>
      </div>
    </section>
  )
}
