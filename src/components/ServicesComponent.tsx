import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import { Heart, Dna, Droplet, Bone, Stethoscope, Pill, HeartPulse, Wind, Users, Activity, Droplets, Utensils } from 'lucide-react';

const ServicesComponent: React.FC = () => {
  const [search, setSearch] = useState("");

  const services = [
    { title: 'Cardiologia', description: 'Atención cardiovascular integral con opciones de diagnóstico y tratamiento avanzadas.', icon: Heart, color: 'text-red-500' },
    { title: 'Cirugia General', description: 'Intervenciones quirúrgicas seguras y precisas para el tratamiento de múltiples afecciones.', icon: Stethoscope, color: 'text-purple-500' },
    { title: 'Dialisis', description: 'Tratamientos especializados de hemodiálisis y diálisis peritoneal.', icon: Droplet, color: 'text-blue-500' },
    { title: 'Traumatologia', description: 'Tratamiento para afecciones óseas, articulares y musculoesqueléticas.', icon: Bone, color: 'text-orange-500' },
    { title: 'Gastroenterologia', description: 'Diagnóstico y tratamiento de enfermedades del sistema digestivo.', icon: Pill, color: 'text-blue-500' },
    { title: 'Ginecologia', description: 'Atención integral de la salud femenina.', icon: HeartPulse, color: 'text-blue-500' },
    { title: 'Hemodinamia', description: 'Diagnóstico y tratamiento de enfermedades cardiovasculares.', icon: Activity, color: 'text-blue-500' },
    { title: 'Nefrologia', description: 'Cuidado y tratamiento de los riñones.', icon: Droplets, color: 'text-blue-500' },
    { title: 'Neumonologia', description: 'Atención de enfermedades del sistema respiratorio.', icon: Wind, color: 'text-blue-500' },
    { title: 'Nutricionista', description: 'Asesoramiento en alimentación y nutrición saludable.', icon: Utensils, color: 'text-blue-500' },
    { title: 'Oncologia', description: 'Prevención y tratamiento del cáncer.', icon: Dna, color: 'text-blue-500' },
    { title: 'PAMI', description: 'Atención especial para afiliados a PAMI.', icon: Users, color: 'text-blue-500' },
    { title: 'Urologia', description: 'Diagnóstico y tratamiento del sistema urinario.', icon: Droplet, color: 'text-blue-500' },
    { title: 'Medicina General', description: 'Servicios de atención primaria para todas tus necesidades médicas.', icon: Stethoscope, color: 'text-green-500' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  const specialties = Array.from(new Set(services.map(service => service.title)));

  return (
    <div className="min-h-screen">
      {/* Encabezado con degradado */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-sky-500 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Nuestras Especialidades Médicas</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Ofrecemos una gama integral de servicios médicos entregados por profesionales de la salud experimentados utilizando tecnología de vanguardia.
          </p>
        </div>
      </section>

      {/* Selector de especialidad */}
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

        {/* Grid de servicios */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  to={`/${service.title.toLowerCase()}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6 block"
                >
                  <div className={`w-16 h-16 ${service.color} bg-opacity-10 rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </Link>
              );
            })}

            {filteredServices.length === 0 && (
              <p className="text-center col-span-full text-gray-600">No se encontraron especialidades para esta búsqueda.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesComponent;
