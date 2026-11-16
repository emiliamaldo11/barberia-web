// price en pesos. from: true muestra "desde". duration en minutos.
export const SERVICES = [
  { id: 'corte-clasico', category: 'Cortes', name: 'Corte clásico', price: 12000, duration: 30, description: 'Con tijera o máquina, terminación a navaja.' },
  { id: 'fade', category: 'Cortes', name: 'Degradé (fade)', price: 14000, duration: 40, description: 'Degradé prolijo, a tu medida.' },
  { id: 'corte-lavado', category: 'Cortes', name: 'Corte + lavado', price: 15000, duration: 45, description: 'Incluye lavado y peinado.' },
  { id: 'corte-ninos', category: 'Cortes', name: 'Corte niños', price: 10000, duration: 25, description: 'Hasta 12 años.' },
  { id: 'barba', category: 'Barba', name: 'Arreglo de barba', price: 8000, duration: 20, description: 'Recorte y perfilado.' },
  { id: 'barba-toalla', category: 'Barba', name: 'Barba con toalla caliente', price: 10000, duration: 30, description: 'Ritual completo con navaja.' },
  { id: 'perfilado', category: 'Barba', name: 'Perfilado de contorno', price: 5000, duration: 15, description: 'Líneas nítidas en cuello y mejillas.' },
  { id: 'color', category: 'Color y tratamientos', name: 'Color / mechas', price: 35000, from: true, duration: 90, description: 'El precio final depende del largo y del trabajo.' },
  { id: 'alisado', category: 'Color y tratamientos', name: 'Alisado', price: 45000, from: true, duration: 120, description: 'Consultanos según tu tipo de pelo.' },
  { id: 'hidratacion', category: 'Color y tratamientos', name: 'Hidratación profunda', price: 18000, duration: 45, description: 'Tratamiento nutritivo para pelo seco.' },
  { id: 'cejas', category: 'Color y tratamientos', name: 'Perfilado de cejas', price: 4000, duration: 10, description: 'Con cera o pinza.' },
  { id: 'combo', category: 'Combos', name: 'Corte + barba', price: 18000, duration: 50, description: 'El más pedido.' },
  { id: 'combo-full', category: 'Combos', name: 'Corte + barba + cejas', price: 21000, duration: 60, description: 'Look completo.' },
]

export const CATEGORIES = [...new Set(SERVICES.map((s) => s.category))]
