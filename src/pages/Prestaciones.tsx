import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappButton";

interface Categoria {
  nombre: string;
  prestaciones: string[];
}

const Prestaciones: React.FC = () => {
  const categorias: Categoria[] = [
    {
      nombre: "Cardiología",
      prestaciones: [
        "Electrocardiograma (ECG)",
        "Ecocardiograma Doppler",
        "Prueba de esfuerzo",
      ],
    },
    {
      nombre: "Imagenología",
      prestaciones: [
        "Ecografías generales y especializadas",
        "Radiografías digitales",
        "Mamografías",
      ],
    },
    {
      nombre: "Laboratorio Clínico",
      prestaciones: [
        "Análisis de sangre y orina",
        "Pruebas hormonales",
        "Estudios de coagulación",
      ],
    },
    {
      nombre: "Gastroenterología",
      prestaciones: [
        "Endoscopías digestivas altas",
        "Colonoscopías",
        "Test de Helicobacter pylori",
      ],
    },
    {
      nombre: "Neumonología",
      prestaciones: [
        "Espirometrías",
        "Oximetría de pulso",
        "Evaluaciones de función pulmonar",
      ],
    },
    {
      nombre: "Nefrología",
      prestaciones: [
        "Pruebas de función renal",
        "Estudios de orina de 24 horas",
        "Análisis de electrolitos",
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Encabezado */}
        <section className="py-20 bg-gradient-to-br from-teal-700 to-sky-500 text-white text-center shadow-md">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4 tracking-wide">Prestaciones Médicas</h1>
            <p className="text-lg text-teal-100">
              En Clínica Fusavim brindamos un servicio integral, con tecnología moderna y profesionales especializados.
            </p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {categorias.map((cat, index) => (
              <div key={index} className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-teal-700 mb-4 border-b border-teal-100 pb-2">
                  {cat.nombre}
                </h2>
                <ul className="list-none pl-4 space-y-2 text-gray-800">
                  {cat.prestaciones.map((prestacion, i) => (
                    <li
                      key={i}
                      className="before:content-['•'] before:mr-2 before:text-teal-600 text-lg leading-relaxed"
                    >
                      {prestacion}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Prestaciones;
