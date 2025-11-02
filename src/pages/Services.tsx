// src/pages/Services.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsappButton';

interface Study {
  name: string;
  category: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const [filter, setFilter] = useState("");

  const studies: Study[] = [
    {
      name: 'Estudios Cardiologicos',
      category: 'Cardiología',
      description: 'Registro de la actividad eléctrica del corazón para detectar anomalías.',
      image: '/images/pendiente.jpg',
    },
    {
      name: 'Ecografias',
      category: 'Imagenología',
      description: 'Imágenes en tiempo real para estudio de órganos y tejidos internos.',
      image: '/images/pendiente.jpg',
    },
    {
      name: 'Análisis de laboratorio',
      category: 'Laboratorio',
      description: 'Exámenes de sangre, orina y otros fluidos para diagnóstico clínico.',
      image: '/images/pendiente.jpg',
    },
    {
      name: 'Servicio de Imagenes',
      category: 'Imagenología',
      description: 'Estudios de imagen para huesos, tórax y otras estructuras del cuerpo.',
      image: '/images/pendiente.jpg',
    },
    {
      name: 'Endoscopías',
      category: 'Gastroenterología',
      description: 'Evaluación visual del tracto digestivo mediante cámara endoscópica.',
      image: '/images/pendiente.jpg',
    },
    {
      name: 'Pruebas de función renal',
      category: 'Nefrología',
      description: 'Estudios para evaluar el funcionamiento de los riñones.',
      image: '/images/pendiente.jpg',
    },
    {
      name: 'Pruebas respiratorias',
      category: 'Neumonología',
      description: 'Espirometrías y otros estudios para evaluar la función pulmonar.',
      image: '/images/pendiente.jpg',
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStudies = studies.filter(study =>
    study.category.toLowerCase().includes(filter.toLowerCase())
  );

  const categories = Array.from(new Set(studies.map(study => study.category)));

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="py-20 bg-gradient-to-br from-teal-600 to-sky-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Estudios que realizamos</h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Conoce los estudios disponibles en nuestra clínica para diagnóstico y prevención de distintas patologías.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Todas las categorías</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={study.image}
                    alt={study.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{study.name}</h3>
                    <p className="text-teal-600 font-medium mb-2">{study.category}</p>
                    <p className="text-gray-700">{study.description}</p>
                  </div>
                </div>
              ))}

              {filteredStudies.length === 0 && (
                <p className="text-center col-span-full text-gray-600">No se encontraron estudios para esta categoría.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
