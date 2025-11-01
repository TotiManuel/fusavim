import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsappButton';
import { Award, Mail, Phone } from 'lucide-react';

const CirugiaGeneral: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lista de médicos de Cirugía General
  const doctors = [
    {
      name: 'Dr. Salazar Castillo Enoc',
      specialty: ['Cirugia General', 'Gastroenterologia'],
      experience: '15 Años',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Fava Mauricio',
      specialty: ['Cirugia General', 'Gastroenterologia'],
      experience: '15 Años',
      email: '',
      phone: ''
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Encabezado */}
        <section className="py-20 bg-purple-600 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Cirugía General</h1>
          <p className="max-w-3xl mx-auto text-lg text-purple-100">
            Intervenciones quirúrgicas seguras y precisas para el tratamiento de múltiples afecciones, con un enfoque integral y personalizado.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Atención quirúrgica integral</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nuestro servicio de <strong>Cirugía General</strong> cubre desde procedimientos de rutina hasta intervenciones complejas, garantizando seguimiento postoperatorio y cuidado personalizado para cada paciente.
          </p>

          <h3 className="text-xl font-semibold text-purple-700 mb-3">Servicios incluidos</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Cirugías programadas y de emergencia</li>
            <li>Procedimientos laparoscópicos y mínimamente invasivos</li>
            <li>Atención preoperatoria y seguimiento postoperatorio</li>
            <li>Consultas y asesoramiento quirúrgico especializado</li>
          </ul>

          <h3 className="text-xl font-semibold text-purple-700 mb-3">Beneficios del servicio</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Contás con un equipo de cirujanos altamente capacitados, tecnología avanzada y protocolos de seguridad que garantizan la mejor atención en cada etapa del tratamiento.
          </p>

          {/* Médicos */}
          <h3 className="text-xl font-semibold text-purple-700 mb-4">Nuestro equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {doctors.map((doctor, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{doctor.name}</h4>
                {doctor.specialty && (
                  <p className="text-teal-600 font-medium mb-2">
                    {doctor.specialty.map((spec, i) => (
                      <span key={i}>{spec}{i < doctor.specialty.length - 1 ? ', ' : ''}</span>
                    ))}
                  </p>
                )}
                {doctor.experience && (
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Award className="h-4 w-4 mr-2" /> {doctor.experience} experiencia
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
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20más%20información%20sobre%20el%20servicio%20de%20Cirugía%20General."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all"
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

export default CirugiaGeneral;
