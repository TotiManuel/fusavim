import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsappButton';

interface News {
  title: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
}

const Novedades: React.FC = () => {
  const [newsList] = useState<News[]>([
    {
      title: 'Circulo de la Mujer',
      date: '2025-11-01',
      description: 'Lanzamos un programa integral de prevencion para las mujeres, con chequeos completos y planes personalizados para cuidarlas.',
      image: '/news/images/cardiologia-preventiva.jpg',
      link: '/circulo-mujer'
    },
    {
      title: 'Campaña de vacunación 2025',
      date: '2025-10-20',
      description: 'Se inicia la campaña anual de vacunación. Consultá tu calendario de vacunas y turnos disponibles.',
      image: '/news/images/vacunacion-campana-2025.jpg',
      link: '/campania-vacunacion'
    },
    {
      title: 'Horario extendido en laboratorio',
      date: '2025-10-15',
      description: 'Nuestro laboratorio amplía su horario de atención para facilitar la realización de estudios.',
      image: '/news/images/laboratorio.jpg',
      link: '/laboratorio-extendido'
    }
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-br from-teal-600 to-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Novedades
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsList.map((news, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                {news.image && (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">{news.title}</h2>
                  <p className="text-gray-400 text-sm mb-4">{news.date}</p>
                  <p className="text-gray-700 mb-4">{news.description}</p>
                  {news.link && (
                    <a
                      href={news.link}
                      className="inline-block px-4 py-2 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-colors"
                    >
                      Leer más
                    </a>
                  )}
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

export default Novedades;
