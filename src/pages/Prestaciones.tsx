// src/pages/Prestaciones.tsx
import React, { useEffect, useState, type JSX } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappButton";
import { HeartPulse, Activity, Microscope, Stethoscope, Wind } from "lucide-react";

interface Study {
  name: string;
  category: string;
  description: string;
  icon: JSX.Element;
}

const Prestaciones: React.FC = () => {
  const [filter, setFilter] = useState("");

  const studies: Study[] = [
    {
      name: "Estudios Cardiológicos",
      category: "Cardiología",
      description: "Evaluación del corazón mediante electrocardiogramas, ecocardiogramas y pruebas de esfuerzo.",
      icon: <HeartPulse className="text-teal-600 w-10 h-10" />,
    },
    {
      name: "Ecografías",
      category: "Imagenología",
      description: "Permiten visualizar órganos y tejidos internos mediante ultrasonido, sin radiación.",
      icon: <Activity className="text-teal-600 w-10 h-10" />,
    },
    {
      name: "Análisis de laboratorio",
      category: "Laboratorio",
      description: "Exámenes clínicos de sangre, orina y otros fluidos para diagnóstico y seguimiento de enfermedades.",
      icon: <Microscope className="text-teal-600 w-10 h-10" />,
    },
    {
      name: "Servicio de Imágenes",
      category: "Imagenología",
      description: "Radiografías y estudios complementarios para evaluación de estructuras óseas y torácicas.",
      icon: <Microscope className="text-teal-600 w-10 h-10" />,
    },
    {
      name: "Endoscopías",
      category: "Gastroenterología",
      description: "Procedimientos diagnósticos y terapéuticos del sistema digestivo con cámara endoscópica.",
      icon: <Stethoscope className="text-teal-600 w-10 h-10" />,
    },
    {
      name: "Pruebas respiratorias",
      category: "Neumonología",
      description: "Espirometrías y otros estudios que permiten evaluar la capacidad y función pulmonar.",
      icon: <Wind className="text-teal-600 w-10 h-10" />,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStudies = studies.filter((study) =>
    study.category.toLowerCase().includes(filter.toLowerCase())
  );

  const categories = Array.from(new Set(studies.map((study) => study.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Encabezado */}
        <section className="py-20 bg-gradient-to-br from-teal-700 to-sky-500 text-white text-center shadow-md">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4 tracking-wide">Prestaciones Médicas</h1>
            <p className="text-lg text-teal-100">
              En Clínica Fusavim ofrecemos estudios y servicios diseñados para el diagnóstico,
              prevención y tratamiento de distintas patologías.
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-8">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                <option value="">Todas las categorías</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Lista de prestaciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-start text-left border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {study.icon}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 before:content-['•'] before:mr-2 before:text-teal-600">
                        {study.name}
                      </h3>

                      <p className="text-sm text-teal-700 font-medium">{study.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{study.description}</p>
                </div>
              ))}

              {filteredStudies.length === 0 && (
                <p className="text-center col-span-full text-gray-600">
                  No se encontraron prestaciones para esta categoría.
                </p>
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

export default Prestaciones;
