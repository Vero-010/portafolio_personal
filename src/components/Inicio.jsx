import React from 'react';

const Inicio = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row bg-pink-100 rounded-xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
          <div className="rounded-full border-8 border-pink-200 overflow-hidden h-64 w-64">
            {/* Aquí va la imagen de perfil */}
            <img 
              src="/public/perfil.jpg" 
              alt="Verónica Vidal Polanía" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 p-8 bg-white">
          <h1 className="text-4xl font-bold mb-2">VERÓNICA VIDAL POLANÍA</h1>
          <h2 className="text-xl text-gray-700 mb-6">TECNÓLOGO EN ANÁLISIS Y DESARROLLO DE SOFTWARE</h2>
          
          <div className="bg-pink-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2">Mi perfil</h3>
            <p className="text-gray-700">
              Me apasiona trabajar en proyectos innovadores, donde pueda aplicar mis conocimientos y habilidades para generar un impacto positivo. 
              Mi compromiso es el aprendizaje constante y mi habilidad para adaptarme a diferentes entornos me convierten en un colaborador valioso para cualquier equipo.
            </p>
          </div>
          
          <div className="bg-pink-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Acerca de mí</h3>
            <p className="text-gray-700">
              Estoy cursando el tecnólogo en Análisis y Desarrollo de Software en el SENA. 
              Actualmente estoy en etapa lectiva y busco una empresa para realizar la etapa productiva a partir del 23 de octubre de 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;