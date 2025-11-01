import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsappButton';
import { Award, Mail, Phone } from 'lucide-react';

const Ginecologia: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Médicos de Ginecología
  const doctors = [
    {
      name: 'Dr. Barrios Federico',
      specialty: ['Ginecología', 'Salud Femenina Integral'],
      experience: '20 Años',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Oyola Candela',
      specialty: ['Ginecología', 'Obstetricia'],
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
        <section className="py-20 bg-pink-600 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Ginecología</h1>
          <p className="max-w-3xl mx-auto text-lg text-pink-100">
            Atención integral para la salud de la mujer, en todas las etapas de su vida, con un enfoque humano y profesional.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cuidamos la salud femenina con compromiso y confianza</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El servicio de <strong>Ginecología</strong> brinda atención personalizada en la prevención, diagnóstico y tratamiento de enfermedades del sistema reproductor femenino, promoviendo el bienestar integral en cada consulta.
          </p>

          <h3 className="text-xl font-semibold text-pink-700 mb-3">Servicios incluidos</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Controles ginecológicos anuales</li>
            <li>Papanicolaou, colposcopía y estudios de laboratorio</li>
            <li>Atención en anticoncepción y planificación familiar</li>
            <li>Diagnóstico y tratamiento de infecciones ginecológicas</li>
            <li>Seguimiento del embarazo y control obstétrico</li>
            <li>Asesoramiento en menopausia y salud hormonal</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-700 mb-3">Beneficios del servicio</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Contamos con profesionales dedicadas a acompañar cada etapa de la vida de la mujer, brindando atención cálida, tecnología moderna y un enfoque integral que combina prevención, cuidado y educación.
          </p>

          {/* Médicos */}
          <h3 className="text-xl font-semibold text-pink-700 mb-4">Nuestro equipo</h3>
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
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20más%20información%20sobre%20el%20servicio%20de%20Ginecología."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all"
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

export default Ginecologia;
