import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Clock, Heart } from 'lucide-react';
import WhatsAppButton from '../components/WhatsappButton';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Acerca de Clinica Fusavim</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Durante más de 15 años, Clínica Fusavim se ha dedicado a proporcionar servicios de atención médica excepcionales a nuestra comunidad. Combinamos tecnología médica de vanguardia con atención compasiva para asegurar los mejores resultados para nuestros pacientes.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nuestro equipo de profesionales de la salud experimentados se compromete a entregar planes de tratamiento personalizados que aborden las necesidades únicas de cada paciente.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">5000+</div>
                    <div className="text-gray-600">Patientes Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-500 mb-2">25+</div>
                    <div className="text-gray-600">Medicos Especialistas</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="src\images\frente.jpg"
                  alt="Medical team"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Comprencion</h3>
                <p className="text-gray-600">Tratamos a cada paciente con empatía y comprensión.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Excelencia</h3>
                <p className="text-gray-600">Nos esforzamos por los más altos estándares en la atención médica.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Trabajo en Equipo</h3>
                <p className="text-gray-600">Enfoque colaborativo en la atención y el tratamiento del paciente.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Confiabilidad</h3>
                <p className="text-gray-600">Servicios médicos consistentes, confiables y en los que puedes confiar.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;