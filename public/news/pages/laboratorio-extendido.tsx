import React, { useEffect } from 'react';
import Header from '../../../src/components/Header';
import Footer from '../../../src/components/Footer';

const LaboratorioHorarioExtendido: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Encabezado */}
        <section className="py-20 bg-sky-500 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Horario Extendido en Laboratorio</h1>
        <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Pensado para tu comodidad. Más tiempo para realizar tus estudios sin esperas ni demoras.
        </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-6">
          Atención más flexible para nuestros pacientes
          </h2>
          <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          En respuesta a la creciente demanda de estudios y la necesidad de ofrecer una atención más accesible, 
          nuestro <strong>laboratorio clínico</strong> amplía su horario de atención para brindar mayor comodidad a 
          quienes necesitan realizar análisis sin interrumpir su rutina diaria.
          </p>

          <h3 className="text-xl font-semibold text-teal-700 mb-3">Nuevo horario de atención</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li><strong>Lunes a viernes:</strong> de 7:00 a 19:00 hs</li>
            <li><strong>Sábados:</strong> de 7:00 a 12:00 hs</li>
          </ul>

          <h3 className="text-xl font-semibold text-teal-700 mb-3">Beneficios para los pacientes</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Mayor disponibilidad para estudios y extracciones.</li>
            <li>Menor tiempo de espera y atención personalizada.</li>
            <li>Turnos flexibles para quienes trabajan o estudian.</li>
            <li>Resultados disponibles en formato digital.</li>
          </ul>

          <h3 className="text-xl font-semibold text-teal-700 mb-3">Solicitá tu turno</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Podés pedir turno fácilmente a través de WhatsApp o acercarte a nuestra recepción.  
            Recordá traer tu orden médica y DNI para agilizar la atención.
          </p>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/5493535106738?text=Hola!%20Quisiera%20pedir%20un%20turno%20para%20análisis%20en%20el%20laboratorio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all"
            >
              Pedir turno por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LaboratorioHorarioExtendido;
