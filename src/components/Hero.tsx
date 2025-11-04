import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-600 via-sky-500 to-cyan-400 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Tu Salud es Nuestra
              <span className="block text-cyan-200">Prioridad</span>
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Experimenta atención médica excepcional con nuestro equipo de profesionales dedicados. Proporcionamos servicios médicos integrales en un entorno cómodo y cariñoso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
              >
                Ponete en contacto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/prestaciones"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/Imagen1.jpg"
              alt="Modern medical facility"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Cuidado Confiable</p>
                  <p className="text-gray-600 text-sm">Desde 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">5000+</h3>
            <p className="text-cyan-100">Pacientes Felices</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-cyan-100">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p className="text-cyan-100">Atención de Emergencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;