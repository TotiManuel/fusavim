import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsappButton';
import { Award, Mail, Phone } from 'lucide-react';

const Oncologia: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Médicos de Oncología
  const doctors = [
    {
      name: 'Dra. Pedraza Maria Cecilia',
      specialty: ['Oncología Integral y Seguimiento Post-Tratamiento'],
      experience: '10 Años',
      email: '',
      phone: ''
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Encabezado */}
        <section className="py-20 bg-purple-700 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Oncología</h1>
          <p className="max-w-3xl mx-auto text-lg text-purple-100">
            Atención integral en la prevención, diagnóstico y tratamiento del cáncer, 
            con un enfoque humano, tecnológico y multidisciplinario.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cuidamos cada paso de tu tratamiento</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            En <strong>Oncología</strong>, acompañamos a nuestros pacientes desde el diagnóstico hasta la recuperación, 
            brindando tratamientos personalizados y un abordaje integral que combina la ciencia, la empatía y el apoyo emocional. 
            Trabajamos junto a un equipo interdisciplinario para garantizar la mejor calidad de vida posible.
          </p>

          <h3 className="text-xl font-semibold text-purple-700 mb-3">Servicios ofrecidos</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Diagnóstico y evaluación integral del paciente oncológico</li>
            <li>Tratamientos con quimioterapia, inmunoterapia y terapias dirigidas</li>
            <li>Seguimiento clínico y control post-tratamiento</li>
            <li>Soporte nutricional y psicológico especializado</li>
            <li>Coordinación con radioterapia y cirugía oncológica</li>
          </ul>

          <h3 className="text-xl font-semibold text-purple-700 mb-3">Nuestro compromiso</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Brindamos una atención humana, cercana y profesional, priorizando el bienestar del paciente 
            y su entorno. Apostamos por la innovación médica, la contención emocional y la coordinación 
            con otras especialidades médicas.
          </p>

          {/* Médicos */}
          <h3 className="text-xl font-semibold text-purple-700 mb-4">Nuestro equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {doctors.map((doctor, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{doctor.name}</h4>
                {doctor.specialty && (
                  <div>
                    {doctor.specialty.map((spec, i) => (
                      <p key={i} className="text-purple-600 font-medium mb-1">
                        {spec}
                      </p>
                    ))}
                  </div>
                )}
                {doctor.experience && (
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Award className="h-4 w-4 mr-2" /> {doctor.experience} de experiencia
                  </div>
                )}
                {doctor.email && (
                  <div className="flex items-center text-gray-600 text-sm mb-1">
                    <Mail className="h-4 w-4 mr-2 text-purple-600" /> {doctor.email}
                  </div>
                )}
                {doctor.phone && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="h-4 w-4 mr-2 text-purple-600" /> {doctor.phone}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón WhatsApp */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20más%20información%20sobre%20el%20servicio%20de%20Oncología."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-all"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Oncologia;
