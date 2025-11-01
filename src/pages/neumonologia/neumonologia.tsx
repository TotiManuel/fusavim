import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsappButton';
import { Award, Mail, Phone } from 'lucide-react';

const Neumonologia: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Médicos de Neumonología
  const doctors = [
    {
      name: 'Dr. Zanotti Martín',
      specialty: ['Trastornos Respiratorios del Sueño'],
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
        <section className="py-20 bg-sky-700 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Neumonología</h1>
          <p className="max-w-3xl mx-auto text-lg text-sky-100">
            Diagnóstico, tratamiento y prevención de enfermedades respiratorias agudas y crónicas.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Atención integral respiratoria</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El servicio de <strong>Neumonología</strong> se dedica al estudio y manejo de las enfermedades del aparato respiratorio, 
            abarcando desde patologías agudas hasta enfermedades crónicas pulmonares. Nuestro equipo ofrece una atención integral 
            que combina tecnología moderna, experiencia médica y un enfoque humano.
          </p>

          <h3 className="text-xl font-semibold text-sky-700 mb-3">Servicios ofrecidos</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Diagnóstico y tratamiento de asma y EPOC</li>
            <li>Evaluación de infecciones respiratorias agudas y crónicas</li>
            <li>Estudios de función pulmonar (espirometría, oximetría, entre otros)</li>
            <li>Manejo de trastornos respiratorios del sueño</li>
            <li>Control y seguimiento post-COVID</li>
            <li>Rehabilitación respiratoria</li>
          </ul>

          <h3 className="text-xl font-semibold text-sky-700 mb-3">Compromiso con la salud pulmonar</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nuestros especialistas en <strong>Neumonología</strong> trabajan para mejorar la calidad de vida de los pacientes, 
            promoviendo la prevención, el diagnóstico precoz y el tratamiento efectivo de las enfermedades respiratorias.
          </p>

          {/* Médicos */}
          <h3 className="text-xl font-semibold text-sky-700 mb-4">Nuestro equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {doctors.map((doctor, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{doctor.name}</h4>
                {doctor.specialty && (
                  <div>
                    {doctor.specialty.map((spec, i) => (
                      <p key={i} className="text-sky-600 font-medium mb-1">
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
                    <Mail className="h-4 w-4 mr-2 text-sky-600" /> {doctor.email}
                  </div>
                )}
                {doctor.phone && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="h-4 w-4 mr-2 text-sky-600" /> {doctor.phone}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón WhatsApp */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20más%20información%20sobre%20el%20servicio%20de%20Neumonología."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-800 transition-all"
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

export default Neumonologia;
