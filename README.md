# ✂️ Barbería / peluquería — web con turnos por WhatsApp

Web de una barbería (adaptable a peluquería) hecha con **React + Vite + Tailwind CSS**.
Muestra servicios y precios, el local y los horarios, y arma el pedido de turno como mensaje de WhatsApp.

> **Todos los datos son de ejemplo** (nombre, precios, dirección, teléfono, equipo y reseñas).
> No hay fotos: las secciones de galería y equipo traen espacios listos para fotos reales.

Diseño y desarrollo: **María Emilia Maldonado** · [Portfolio](https://portfolio-rosy-chi-38.vercel.app/) · [GitHub](https://github.com/emiliamaldo11)

## Qué incluye
- Menú fijo, hero con indicador **"Abierto ahora / Cerrado"** calculado con los horarios (hora de Argentina).
- Servicios y precios con filtros por categoría y tarjeta "¿Buscás otro servicio? Consultanos".
- **Pedido de turno en 3 pasos** (servicios → día y horario → tus datos) con total estimado y duración, y botón de WhatsApp que se habilita al completar todo.
- El local: dirección, mapa, tabla de horarios con el día de hoy resaltado y medios de pago.
- Galería, equipo, reseñas y preguntas frecuentes.
- Botones flotantes de WhatsApp y llamada, y un resumen del turno mientras se arma.
- Mobile-first: botones de 44 px o más, texto legible, accesible con teclado.

## Cómo correrlo
Necesitás [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # versión final en /dist
```

## Cómo adaptarlo a un local real
| Qué cambiar | Archivo |
|---|---|
| Nombre, rubro, dirección, WhatsApp, Instagram, medios de pago | `src/config.js` |
| Servicios, precios y duraciones | `src/data/services.js` |
| Horarios | `src/data/hours.js` |
| Equipo | `src/data/team.js` |
| Galería de trabajos | `src/data/gallery.js` + fotos en `public/images/gallery/` |
| Reseñas y preguntas frecuentes | `src/data/reviews.js`, `src/data/faq.js` |
| Colores y tipografías | `tailwind.config.js` |
| Título y datos para buscadores | `index.html` |

Pasos recomendados:
1. Cambiá los datos en `src/config.js` y poné `isExample: false` para que desaparezca el aviso de ejemplo.
2. Cargá los servicios y horarios reales.
3. Agregá fotos reales (formato `.webp`, livianas) y poné su ruta en los archivos de `src/data/`.
4. Actualizá el título y los datos del bloque `ld+json` de `index.html`.
5. Probá el pedido de turno desde un celular real y confirmá que el mensaje llega al WhatsApp del local.

## Subirlo a GitHub y publicarlo
```bash
git init
git add .
git commit -m "Web de barbería con turnos por WhatsApp"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/barberia-web.git
git push -u origin main
```
Después, en [vercel.com](https://vercel.com): **Add New → Project**, elegí el repositorio y tocá **Deploy** (detecta Vite solo).
