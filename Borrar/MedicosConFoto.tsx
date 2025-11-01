import React, { useEffect, useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Mail, Phone, Award } from 'lucide-react';

const Doctors: React.FC = () => {
  const [search, setSearch] = useState("");
  const doctors = [
    {
      name: 'Dr. Salazar Castillo Enoc',
      specialty: ['Cirugia General', 'Gastroenterologia'],
      experience: '15 Años',
      education: '',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Specializes in interventional cardiology and heart disease prevention.',
      email: '',
      phone: ''
    },
    {
      name: 'Dr. Griguol Luis',
      specialty: ['Unidad de Terapia Intensiva'],
      experience: '12 years',
      education: 'MD, Johns Hopkins University',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Expert in stroke treatment and neurological disorders.',
      email: '',
      phone: '(555) 123-4568'
    },
    {
      name: 'Dra. Planas Melisa',
      specialty: ['Unidad de Terapia Intensiva'],
      experience: '10 years',
      education: 'MD, Stanford University',
      image: 'public/medicos/medico.jpg',
      description: '',
      email: 'emily.rodriguez@privateclinic.com',
      phone: ''
    },
    {
      name: 'Dr. Zazetti Francisco',
      specialty: ['Unidad de Terapia Intensiva'],
      experience: '',
      education: 'MD, Mayo Clinic',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Specializes in joint replacement and sports medicine.',
      email: 'david.thompson@privateclinic.com',
      phone: '(555) 123-4570'
    },
    {
      name: 'Dra. Laciar Vanesa',
      specialty: ['Unidad de Terapia Intensiva'],
      experience: '14 years',
      education: 'MD, UCLA Medical School',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: '',
      email: 'lisa.park@privateclinic.com',
      phone: '(555) 123-4571'
    },
    {
      name: 'Dra. Almagro Marcela',
      specialty: ['Cardiologia'],
      experience: '14 years',
      education: 'MD, UCLA Medical School',
      image: 'public/medicos/medico.jpg',
      description: 'Expert in cataract surgery and retinal diseases.',
      email: 'lisa.park@privateclinic.com',
      phone: '(555) 123-4571'
    },
    {
      name: 'Dr. Gerbaudo Claudio',
      specialty: ['Hemodinamia', 'Cardiologia'],
      experience: '14 years',
      education: 'MD, UCLA Medical School',
      image: 'public/medicos/medico.jpg',
      description: 'Expert in cataract surgery and retinal diseases.',
      email: 'lisa.park@privateclinic.com',
      phone: '(555) 123-4571'
    },
    {
      name: 'Dr. Zanotti Martin',
      specialty: ['Neumonologia'],
      experience: '20 years',
      education: 'MD, University of Pennsylvania',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Provides comprehensive primary care and preventive medicine.',
      email: 'robert.wilson@privateclinic.com',
      phone: '(555) 123-4572'
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
                  {doctor.image && (
                    <img
                      src={doctor.image}
                      alt={doctor.name || "Doctor"}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6">
                    {doctor.name && (
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {doctor.name}
                      </h3>
                    )}
                    {doctor.specialty && (
                      <p className="text-teal-600 font-medium mb-2">
                        {doctor.specialty.join(', ')}
                      </p>
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
    </div>
  );
};

export default Doctors;