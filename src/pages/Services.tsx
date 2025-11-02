// src/pages/Services.tsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsappButton';

interface Study {
  name: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const studies: Study[] = [
    {
      name: 'Electrocardiograma (ECG)',
      description: 'Registro de la actividad eléctrica del corazón para detectar anomalías.',
      image: '/studies/ecg.jpg',
    },
    {
      name: 'Ecografía',
      description: 'Imágenes en tiempo real para estudio de órganos y tejidos internos.',
      image: '/studies/ecografia.jpg',
    },
    {
      name: 'Análisis de laboratorio',
      description: 'Exámenes de sangre, orina y otros fluidos para diagnóstico clínico.',
      image: '/studies/laboratorio.jpg',
    },
    {
      name: 'Radiografía',
      description: 'Estudios de imagen para huesos, tórax y otras estructuras del cuerpo.',
      image: '/studies/radiografia.jpg',
    },
    {
      name: 'Endoscopía digestiva',
      description: 'Evaluación visual del tracto digestivo mediante cámara endoscópica.',
      image: '/studies/endoscopia.jpg',
    },
    {
      name: 'Pruebas de función renal',
      description: 'Estudios para evaluar el funcionamiento de los riñones.',
      image: '/studies/funcion-renal.jpg',
    },
    {
      name: 'Pruebas respiratorias',
      description: 'Espirometrías y otros estudios para evaluar la función pulmonar.',
      image: '/studies/respiratorias.jpg',
    },
    {
      name: 'Consulta nutricional',
      description: 'Evaluación del estado nutricional y planificación de dietas personalizadas.',
      image: '/studies/nutricion.jpg',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Estudios que realizamos
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img
                  src={study.image}
                  alt={study.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{study.name}</h2>
                  <p className="text-gray-700">{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
