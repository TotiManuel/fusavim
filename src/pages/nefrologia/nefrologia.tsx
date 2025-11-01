import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsappButton';
import { Award, Mail, Phone } from 'lucide-react';

const Nefrologia: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Médicos de Nefrología
  const doctors = [
    {
      name: 'Dr. Ledesma Hugo',
      specialty: ['Nefrología Pediátrica'],
      experience: '12 Años',
      email: '',
      phone: ''
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Encabezado */}
        <section className="py-20 bg-emerald-600 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Nefrología</h1>
          <p className="max-w-3xl mx-auto text-lg text-emerald-100">
            Diagnóstico, tratamiento y seguimiento de enfermedades del riñón, con atención integral y personalizada.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cuidado renal especializado</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El servicio de <strong>Nefrología</strong> se dedica al estudio y tratamiento de las enfermedades renales, 
            brindando diagnóstico precoz, prevención y manejo integral de los trastornos que afectan el funcionamiento 
            de los riñones. Nuestro objetivo es mantener y mejorar la calidad de vida de los pacientes con patologías renales.
          </p>

          <h3 className="text-xl font-semibold text-emerald-700 mb-3">Servicios incluidos</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Evaluación y control de enfermedades renales agudas y crónicas</li>
            <li>Seguimiento de pacientes con insuficiencia renal</li>
            <li>Control de hipertensión arterial y trastornos metabólicos asociados</li>
            <li>Asesoramiento nutricional en pacientes renales</li>
            <li>Coordinación con el servicio de diálisis y trasplante renal</li>
          </ul>

          <h3 className="text-xl font-semibold text-emerald-700 mb-3">Beneficios del servicio</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nuestro equipo de especialistas en <strong>Nefrología</strong> ofrece un enfoque multidisciplinario 
            y personalizado, utilizando tecnología moderna para el diagnóstico y tratamiento, promoviendo la 
            detección temprana y el control eficaz de las enfermedades renales.
          </p>

          {/* Médicos */}
          <h3 className="text-xl font-semibold text-emerald-700 mb-4">Nuestro equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {doctors.map((doctor, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{doctor.name}</h4>
                {doctor.specialty && (
                  <p className="text-teal-600 font-medium mb-2">
                    {doctor.specialty.join(', ')}
                  </p>
                )}
                {doctor.experience && (
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Award className="h-4 w-4 mr-2" /> {doctor.experience} de experiencia
                  </div>
                )}
                {doctor.email && (
                  <div className="flex items-center text-gray-600 text-sm mb-1">
                    <Mail className="h-4 w-4 mr-2 text-teal-600" /> {doctor.email}
                  </div>
                )}
                {doctor.phone && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="h-4 w-4 mr-2 text-teal-600" /> {doctor.phone}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón WhatsApp */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20más%20información%20sobre%20el%20servicio%20de%20Nefrología."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all"
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

export default Nefrologia;
