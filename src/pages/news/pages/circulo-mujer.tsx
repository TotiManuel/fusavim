import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const CirculoMujer: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-sky-500 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Círculo de la Mujer</h1>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Un programa integral pensado para acompañar la salud y el bienestar de cada mujer, 
            en todas las etapas de su vida.
          </p>
        </section>
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md mt-10 mb-20">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Un espacio dedicado a la salud femenina</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El <strong>Círculo de la Mujer</strong> es un nuevo programa de nuestra clínica que ofrece chequeos 
            integrales, estudios preventivos y acompañamiento médico especializado para promover la detección temprana 
            de enfermedades y fomentar hábitos saludables.
          </p>

          <h3 className="text-xl font-semibold text-teal-700 mb-3">Servicios incluidos</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Chequeos ginecológicos anuales (PAP, colposcopía, ecografía pélvica y mamaria).</li>
            <li>Evaluación nutricional y control de peso.</li>
            <li>Consultas con especialistas en endocrinología y salud hormonal.</li>
            <li>Asesoramiento psicológico y manejo del estrés.</li>
            <li>Programas personalizados de prevención cardiovascular en mujeres.</li>
          </ul>

          <h3 className="text-xl font-semibold text-teal-700 mb-3">Beneficios del programa</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Las pacientes adheridas al Círculo de la Mujer acceden a beneficios exclusivos, 
            descuentos en estudios complementarios, recordatorios automáticos de turnos y un seguimiento 
            médico integral coordinado por nuestro equipo profesional.
          </p>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/5493535106738?text=Hola!%20Quiero%20más%20información%20sobre%20el%20programa%20Círculo%20de%20la%20Mujer."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CirculoMujer;
