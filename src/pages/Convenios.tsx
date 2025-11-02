import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from "../components/WhatsappButton";

interface Convenio {
  nombre: string;
  descripcion: string;
  logo?: string;
  link?: string;
}

export default function Convenios() {
  const convenios: Convenio[] = [
    {
      nombre: "PAMI",
      descripcion: "Convenio con cobertura total para afiliados PAMI.",
      logo: "public/convenios/logo_pami.svg",
      link: "https://www.pami.org.ar/"
    },
    {
      nombre: "Apross",
      descripcion: "Convenio para afiliados Apross.",
      logo: "public/convenios/apross_logo.png",
      link: "https://www.pami.org.ar/"
    },
    {
      nombre: "Swiss Medical",
      descripcion: "Cobertura de obras sociales y planes privados.",
      logo: "public/convenios/swiss-medical-logo.png",
      link: "https://www.swissmedical.com.ar/"
    },
    {
      nombre: "OSDE",
      descripcion: "Convenio para afiliados OSDE con acceso a todos los servicios.",
      logo: "public/convenios/Logo_OSDE.png",
      link: "https://www.osde.com.ar/"
    },
    {
      nombre: "Sancor Salud",
      descripcion: "Convenio para afiliados de Sancor Salud.",
      logo: "public/convenios/sancosalud_logo.png",
      link: "https://www.osde.com.ar/"
    },
    {
      nombre: "Prevencion Salud",
      descripcion: "Convenio para afiliados de Prevencion Salud.",
      logo: "public/convenios/prevencion-salud-logo.jpg",
      link: "https://www.osde.com.ar/"
    },
  ];

  const [filtro, setFiltro] = useState("Todos");
  const filtrados = filtro === "Todos" ? convenios : convenios.filter(c => c.nombre === filtro);
  const nombres = ["Todos", ...convenios.map(c => c.nombre)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Nuestros Convenios</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Nuestra clínica trabaja con los siguientes convenios y obras sociales para brindar un servicio accesible.
          </p>
        </div>
      </section>

      {/* Filtro */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4 flex-wrap">
          {nombres.map((nombre, idx) => (
            <button
              key={idx}
              onClick={() => setFiltro(nombre)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                filtro === nombre 
                  ? "bg-teal-600 text-white"
                  : "bg-cyan-50 text-teal-700 border border-teal-600"
              }`}
            >
              {nombre}
            </button>
          ))}
        </div>
      </section>

      {/* Lista de convenios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtrados.map((convenio, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                {convenio.logo && (
                  <img
                    src={convenio.logo}
                    alt={convenio.nombre}
                    className="w-full h-32 object-contain mb-4"
                  />
                )}
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">{convenio.nombre}</h3>
                <p className="text-gray-600 mb-4">{convenio.descripcion}</p>
                {convenio.link && (
                  <a
                    href={convenio.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Ver más
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
 