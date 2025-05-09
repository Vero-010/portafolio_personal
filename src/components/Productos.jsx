const proyectos = [
    {
      nombre: 'JavaScript Avanzado',
      imagen: '/public/proyecto1.png',
      enlace: 'https://github.com/Vero-010/javascript-veronicavidal.git',
    },
    {
      nombre: 'Mi Primera App',
      imagen: '/public/proyecto2.png',
      enlace: 'https://github.com/Vero-010/mi-primera-app.git',
    },
  ];
  
  export default function Productos() {
    return (
      <section className="bg-white py-10 px-5 text-center">
        <h2 className="text-2xl font-bold mb-6">Proyectos</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.nombre}
              className="bg-gray-100 rounded-xl shadow-md p-4 w-64 hover:shadow-lg transition"
            >
              <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-4 font-semibold">{proyecto.nombre}</h3>
              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                Ver en GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  