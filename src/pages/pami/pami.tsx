import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsappButton';
import { Award, Mail, Phone } from 'lucide-react';

const PAMI: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Personal a cargo del área PAMI
  const staff = [
    {
      name: 'Dr. Cruz Maldonado Jorge',
      specialty: ['Coordinadora de Convenios PAMI'],
      experience: '12 Años',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Rossi Mercedes',
      specialty: ['Gestión de Turnos y Autorizaciones'],
      experience: '8 Años',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Segovia Carolina',
      specialty: ['Atención Médica PAMI'],
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
        <section className="py-20 bg-cyan-700 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">PAMI</h1>
          <p className="max-w-3xl mx-auto text-lg text-cyan-100">
            Atención exclusiva y personalizada para afiliados de PAMI, con cobertura integral 
            en estudios, tratamientos y seguimiento médico.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Comprometidos con el bienestar de nuestros afiliados</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            En nuestro servicio de <strong>PAMI</strong>, brindamos atención médica integral y gestión administrativa 
            eficiente para que cada afiliado reciba la asistencia que necesita de forma rápida, 
            cómoda y con un trato humano. Nos ocupamos de todo el proceso, desde la solicitud de turnos 
            hasta la entrega de resultados.
          </p>

          <h3 className="text-xl font-semibold text-cyan-700 mb-3">Servicios disponibles</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Gestión de turnos y autorizaciones médicas</li>
            <li>Atención en consultorios y estudios con cobertura total</li>
            <li>Coordinación de internaciones y derivaciones</li>
            <li>Entrega y seguimiento de recetas electrónicas</li>
            <li>Asesoramiento administrativo para afiliados</li>
          </ul>

          <h3 className="text-xl font-semibold text-cyan-700 mb-3">Beneficios del servicio</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ofrecemos una atención dedicada y profesional, priorizando la comodidad y la confianza 
            de cada afiliado. Nuestro equipo se encarga de simplificar todos los trámites 
            para que puedas centrarte en tu salud.
          </p>

          {/* Equipo PAMI */}
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">Nuestro equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {staff.map((person, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{person.name}</h4>
                {person.specialty && (
                  <div>
                    {person.specialty.map((spec, i) => (
                      <p key={i} className="text-cyan-600 font-medium mb-1">
                        {spec}
                      </p>
                    ))}
                  </div>
                )}
                {person.experience && (
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Award className="h-4 w-4 mr-2" /> {person.experience} de experiencia
                  </div>
                )}
                {person.email && (
                  <div className="flex items-center text-gray-600 text-sm mb-1">
                    <Mail className="h-4 w-4 mr-2 text-cyan-600" /> {person.email}
                  </div>
                )}
                {person.phone && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="h-4 w-4 mr-2 text-cyan-600" /> {person.phone}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón WhatsApp */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20más%20información%20sobre%20el%20servicio%20PAMI."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-800 transition-all"
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

export default PAMI;
