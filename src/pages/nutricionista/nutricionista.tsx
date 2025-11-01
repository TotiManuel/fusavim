import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsappButton';
import { Award, Mail, Phone } from 'lucide-react';

const Nutricion: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Profesionales de Nutrición
  const doctors = [
    {
      name: 'Lic. Bustos Mikaela',
      specialty: ['Nutrición Clínica y Deportiva'],
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
        <section className="py-20 bg-green-600 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Nutrición</h1>
          <p className="max-w-3xl mx-auto text-lg text-green-100">
            Promovemos hábitos saludables a través de una alimentación equilibrada, personalizada y sostenible.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cuidado nutricional integral</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El servicio de <strong>Nutrición</strong> ofrece planes personalizados diseñados por profesionales, orientados 
            a mejorar la calidad de vida, prevenir enfermedades y alcanzar objetivos específicos de salud y bienestar. 
            Trabajamos con un enfoque interdisciplinario junto a otras especialidades médicas.
          </p>

          <h3 className="text-xl font-semibold text-green-700 mb-3">Servicios ofrecidos</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Evaluación nutricional completa y seguimiento personalizado</li>
            <li>Planes alimentarios para control de peso, hipertensión, diabetes y dislipemias</li>
            <li>Nutrición deportiva y rendimiento físico</li>
            <li>Nutrición infantil, embarazo y lactancia</li>
            <li>Educación alimentaria y talleres de hábitos saludables</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mb-3">Nuestro enfoque</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Promovemos una alimentación consciente, flexible y adaptada a las necesidades individuales. 
            Nos enfocamos en acompañar al paciente en cada etapa del proceso, priorizando el bienestar y la sostenibilidad 
            a largo plazo.
          </p>

          {/* Profesionales */}
          <h3 className="text-xl font-semibold text-green-700 mb-4">Nuestro equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {doctors.map((doctor, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{doctor.name}</h4>
                {doctor.specialty && (
                  <div>
                    {doctor.specialty.map((spec, i) => (
                      <p key={i} className="text-green-600 font-medium mb-1">
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
                    <Mail className="h-4 w-4 mr-2 text-green-600" /> {doctor.email}
                  </div>
                )}
                {doctor.phone && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="h-4 w-4 mr-2 text-green-600" /> {doctor.phone}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón WhatsApp */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20más%20información%20sobre%20el%20servicio%20de%20Nutrición."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
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

export default Nutricion;
