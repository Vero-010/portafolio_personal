import React from 'react';

const Habilidades = () => {
  const tecnologias = [
    {
      nombre: "HTML",
      imagen: "/html.png",
      nivel: "Avanzado",
      descripcion: "Estructura semántica, HTML5, formularios, accesibilidad"
    },
    {
      nombre: "CSS",
      imagen: "/css.png",
      nivel: "Avanzado",
      descripcion: "Flexbox, Grid, animaciones, responsive design"
    },
    {
      nombre: "JavaScript",
      imagen: "/js.png",
      nivel: "Avanzado",
      descripcion: "ES6+, asincronía, DOM manipulation, APIs"
    },
    {
      nombre: "React",
      imagen: "/react.png",
      nivel: "Intermedio-Avanzado",
      descripcion: "Hooks, Context API, Redux, React Router"
    },
    {
      nombre: "Tailwind CSS",
      imagen: "/tailwind.png",
      nivel: "Intermedio",
      descripcion: "Utility-first, responsive, personalización"
    },
    {
      nombre: "GitHub",
      imagen: "/github.png",
      nivel: "Intermedio",
      descripcion: "Control de versiones, colaboración, CI/CD"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-montserrat text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Mis <span className="text-blue-400">Habilidades</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tecnologias.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-blue-500/30 hover:scale-105 transform transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {/* Imagen con tamaño fijo */}
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <img
                  src={tech.imagen}
                  alt={`Logo de ${tech.nombre}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Nombre */}
              <h3 className="text-base font-semibold mb-1">{tech.nombre}</h3>

              {/* Nivel */}
              <span className="text-sm text-blue-300 font-medium mb-2">
                {tech.nivel}
              </span>

              {/* Descripción */}
              <p className="text-xs text-gray-300">{tech.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;


  