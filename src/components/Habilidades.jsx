import React from 'react';

const Habilidades = () => {
  // Lista de habilidades técnicas
  const technicalSkills = [
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '📜' },
    { name: 'HTML/CSS', level: 90, icon: '🌐' },
    { name: 'Tailwind CSS', level: 75, icon: '🎨' },
    { name: 'Git', level: 70, icon: '📊' },
    { name: 'MySQL', level: 65, icon: '🗄️' }
  ];

  // Habilidades personales/blandas
  const softSkills = [
    "Responsable",
    " Creativa",
    "Puntual",
    "Aprendizaje continuo",
    "Solución de problemas",
    "Trabajo en equipo",
    "Adaptabilidad"
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-pink-300">Habilidades</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-semibold mb-6">Habilidades técnicas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{skill.icon}</span>
                <h4 className="font-medium">{skill.name}</h4>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-pink-400 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-6">Habilidades personales</h3>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6 p-6 bg-pink-50 rounded-lg">
          <p className="text-gray-700">
            Soy una persona responsable, creativa y puntual, con una mentalidad orientada al aprendizaje continuo y a la solución de problemas. 
            Mi objetivo es contribuir al crecimiento de organizaciones mediante la creación de soluciones tecnológicas efectivas y alineadas con las necesidades del mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;


  