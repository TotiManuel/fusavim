import React, { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, Phone } from 'lucide-react';

const Appointment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-teal-600 to-sky-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Reservar un Turno</h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Programa tu visita con nuestros profesionales de la salud experimentados. Estamos aquí para proporcionarte la mejor atención médica.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Confirmar</h3>
                  <p className="text-gray-600">Proporciona tus Datos y Confirma</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Departamento *
                  </label>
                  <select
                    id="department"
                    name="department"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    required
                  >
                    <option value="">Seleccionar Departamento</option>
                    <option value="rrhh">RR HH</option>
                    <option value="facturacion">Facturación</option>
                    <option value="admision">Admisión</option>
                    <option value="auditoria">Auditoría Médica</option>
                    <option value="cirugias">Cirugías</option>
                    <option value="secretaria">Secretaría</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Razón de la visita
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="Por favor describe tus motivos o la razón del contacto..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-600 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    Acepto los términos y condiciones y la política de privacidad *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-sky-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-sky-600 transition-all text-lg"
                >
                  Enviar
                </button>
              </form>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">¿Necesitas Ayuda?</h3>
                  <p className="text-gray-600 mb-2">
                    Si necesitas asistencia inmediata o tienes preguntas sobre reservar tu cita, llámanos directamente.
                  </p>
                  <p className="text-teal-600 font-semibold">Teléfono: (353) 510-6738</p>
                  <p className="text-gray-600 text-sm">Disponible Lunes - Viernes, 07:00 AM - 21:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
