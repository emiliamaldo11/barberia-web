import { CameraIcon } from './Icons'

// Espacio reservado para una foto real
export default function Placeholder({ label = 'Tu foto acá', className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-muted/30 bg-line/50 text-muted ${className}`}>
      <CameraIcon size={26} />
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </div>
  )
}
