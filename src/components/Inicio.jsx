import React from 'react';

const Inicio = () => {
  // Datos básicos del perfil
  const perfil = {
    nombre: "Verónica Vidal Polanía",
    titulo: "Análisis y Desarrollo de Software",
    ubicacion: "Departamento del Huila, Garzón",
    email: "vidalveropolania@gmail.com",
    telefono: "+52 310 336 6848",
    linkedin: "https://github.com/dashboard",
    github: "https://github.com/Vero-010/portafolio_personal.git"
  };

  // Descripción profesional
  const descripcionProfesional = 
  `Estoy cursando el tecnólogo en Análisis y Desarrollo de Software 
  en el SENA. Actualmente estoy en etapa lectiva y busco una empresa 
  para realizar la etapa productiva a partir del 23 de octubre de 2025. 
  Me apasiona trabajar en proyectos innovadores, donde pueda aplicar mis 
  conocimientos y habilidades para generar un impacto positivo. 
  Mi compromiso es el aprendizaje constante y mi habilidad para adaptarme a 
  diferentes entornos me convierten en un colaborador valioso para cualquier equipo.` ;

  return (
    <div className="max-w-4xl mx-auto p-6 font-montserrat text-white">
      {/* Header con foto de perfil y datos básicos */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
          <img src="/perfil.jpg" alt="Foto de perfil" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white m-0">{perfil.nombre}</h1>
          <h2 className="text-2xl text-blue-300 font-medium my-1">{perfil.titulo}</h2>
          <p className="text-gray-300">{perfil.ubicacion}</p>
        </div>
      </div>
      
      {/* Descripción profesional */}
      <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-white border-b-2 border-blue-400 pb-2 mb-4">
          Perfil Profesional
        </h3>
        <p className="text-gray-200 leading-relaxed">{descripcionProfesional}</p>
      </div>
      
      {/* Información de contacto */}
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-white border-b-2 border-blue-400 pb-2 mb-4">
          Información de Contacto
        </h3>
        <ul className="space-y-3">
          <li className="text-gray-200">
            <span className="font-semibold text-white mr-2">Email:</span>
            {perfil.email}
          </li>
          <li className="text-gray-200">
            <span className="font-semibold text-white mr-2">Teléfono:</span>
            {perfil.telefono}
          </li>
          <li className="text-gray-200">
            <span className="font-semibold text-white mr-2">LinkedIn:</span>
            {perfil.linkedin}
          </li>
          <li className="text-gray-200">
            <span className="font-semibold text-white mr-2">GitHub:</span>
            {perfil.github}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inicio;