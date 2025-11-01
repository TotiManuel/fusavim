import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, Award } from 'lucide-react';
import WhatsAppButton from '../components/WhatsappButton';

const Doctors: React.FC = () => {
  const [search, setSearch] = useState("");
  const doctors = [
    {
      name: 'Dr. Salazar Castillo Enoc',
      specialty: ['Cirugia General', 'Gastroenterologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Griguol Luis',
      specialty: ['Clinica Medica'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Almagro Marcela',
      specialty: ['Cardiologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Gerbaudo Claudio',
      specialty: ['Hemodinamia', 'Cardiologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Zanotti Martin',
      specialty: ['Neumonologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Montenegro Elizabeth',
      specialty: ['Cardiologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Artigues Romina',
      specialty: ['Cardiologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Fava Mauricio',
      specialty: ['Cirugia General', 'Gastroenterologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Cruz Maldonado Jorge',
      specialty: ['Clinica Medica', 'PAMI'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Rossi Mercedes',
      specialty: ['Clinica Medica', 'PAMI'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Racca Ricardo',
      specialty: ['Clinica Medica', 'PAMI'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Robles Adalberto',
      specialty: ['Cardiologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Gimenez Abril',
      specialty: ['Ecografista'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Reartes Analia',
      specialty: ['Ecografista'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Ortiz Nelson',
      specialty: ['Ecografista'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Brignone Nicolas',
      specialty: ['Gastroenterologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Arnut Victor',
      specialty: ['Gastroenterologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Peralta Miguel',
      specialty: ['Gastroenterologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Barrios Federico',
      specialty: ['Ginecologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Oyola Candela',
      specialty: ['Ginecologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Ledesma Hugo',
      specialty: ['Nefrologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Bustos Mikaela',
      specialty: ['Nutricionista'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Pedraza Maria',
      specialty: ['Oncologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Nardi Mario',
      specialty: ['Clinica Medica', 'PAMI'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dra. Salgado Romina',
      specialty: ['Psiquiatria'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Cardozo Sebastian',
      specialty: ['Traumatologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Baldoncini Javier',
      specialty: ['Traumatologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Manavella Hernan',
      specialty: ['Urologia'],
      experience: '15 Años',
      education: 'Universidad Nacional Villa Maria',
      description: 'Especialista e Intervencionista en Urologia.',
      email: 'Manavella.Hernan@gmail.com',
      phone: '(353)510-6738'
    },
    {
      name: 'Dr. Manavella Jorge',
      specialty: ['Urologia'],
      experience: '',
      education: '',
      description: '',
      email: '',
      phone: ''
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Filtrado por especialidad (insensible a mayúsculas/minúsculas)
  const filteredDoctors = doctors.filter(doc =>
    doc.specialty.some(spec => spec.toLowerCase().includes(search.toLowerCase()))
  );
  // Extraer todas las especialidades únicas para el select
  const specialties = Array.from(
    new Set(doctors.flatMap(doc => doc.specialty))
  );
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-teal-600 to-sky-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Conoce Nuestros Medicos</h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Nuestro equipo de profesionales de la salud experimentados está dedicado a proporcionarte la más alta calidad de atención médica y tratamientos personalizados.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
            <select
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Todas las especialidades</option>
              {specialties.map((spec, idx) => (
                <option key={idx} value={spec}>{spec}</option>
              ))}
            </select>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    {doctor.name && (
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {doctor.name}
                      </h3>
                    )}
                    {doctor.specialty && (
                      <div className="text-teal-600 font-medium mb-2">
                        {doctor.specialty.map((spec, index) => (
                          <p key={index}>{spec}</p>
                        ))}
                      </div>
                    )}
                    {doctor.experience && (
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <Award className="h-4 w-4 mr-2" />
                        {doctor.experience} experiencia
                      </div>
                    )}
                    {doctor.education && (
                      <p className="text-gray-600 text-sm mb-3">{doctor.education}</p>
                    )}
                    {doctor.description && (
                      <p className="text-gray-700 mb-4">{doctor.description}</p>
                    )}

                    {(doctor.email || doctor.phone) && (
                      <div className="space-y-2">
                        {doctor.email && (
                          <div className="flex items-center text-gray-600 text-sm">
                            <Mail className="h-4 w-4 mr-2 text-teal-600" />
                            <a
                              href={`mailto:${doctor.email}`}
                              className="hover:text-teal-600 transition-colors"
                            >
                              {doctor.email}
                            </a>
                          </div>
                        )}
                        {doctor.phone && (
                          <div className="flex items-center text-gray-600 text-sm">
                            <Phone className="h-4 w-4 mr-2 text-teal-600" />
                            <a
                              href={`tel:${doctor.phone}`}
                              className="hover:text-teal-600 transition-colors"
                            >
                              {doctor.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {filteredDoctors.length === 0 && (
                <p className="text-center col-span-full text-gray-600">No se encontraron médicos para esta especialidad.</p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Doctors;