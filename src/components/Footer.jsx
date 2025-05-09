const redes = [
  { nombre: 'WhatsApp', url: '#', icono: '📱' },
  { nombre: 'Facebook', url: '#', icono: '📘' },
  { nombre: 'Instagram', url: '#', icono: '📸' },
  { nombre: 'Twitter', url: '#', icono: '🐦' },
];

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-6 text-center">
      <p className="font-semibold text-lg">Verónica Vidal Polanía</p>
      <p className="text-sm">Email: vidalveropolania@gmail.com</p>
      <div className="mt-4 flex justify-center gap-6">
        {redes.map((red) => (
          <a key={red.nombre} href={red.url} className="hover:underline">
            {red.icono} {red.nombre}
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs">&copy; 2025 Verónica Vidal. Todos los derechos reservados.</p>
    </footer>
  );
}


  