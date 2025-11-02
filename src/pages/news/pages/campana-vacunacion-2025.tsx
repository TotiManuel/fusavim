import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const CampaniaVacunacion2025: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Sección principal */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-sky-500 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Campaña de Vacunación 2025</h1>
          <p className="max-w-3xl mx-auto text-lg text-teal-100">
            Sumate a nuestra campaña anual de vacunación. Protegé tu salud y la de quienes más querés 
            con un calendario actualizado y atención segura.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Protección y prevención para toda la familia</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            La <strong>Campaña de Vacunación 2025</strong> tiene como objetivo garantizar el acceso a las vacunas
            recomendadas para todas las edades, promoviendo la prevención de enfermedades transmisibles 
            y el cuidado comunitario.
          </p>

          <h3 className="text-xl font-semibold text-teal-700 mb-3">Vacunas disponibles</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Gripe (influenza)</li>
            <li>COVID-19 (dosis de refuerzo)</li>
            <li>Neumococo y antitetánica</li>
            <li>Triple viral (sarampión, paperas y rubéola)</li>
            <li>Hepatitis B y HPV</li>
          </ul>

          <h3 className="text-xl font-semibold text-teal-700 mb-3">Modalidad y turnos</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Las aplicaciones se realizan en nuestra clínica bajo estricto protocolo sanitario. 
            Los turnos se asignan por WhatsApp o en recepción. Recordá traer tu carnet de vacunación 
            y documento de identidad.
          </p>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20solicitar%20turno%20para%20la%20Campaña%20de%20Vacunación%202025."
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

export default CampaniaVacunacion2025;
