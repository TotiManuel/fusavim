import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Estudio {
  nombre: string;
  archivo: string; // URL o ruta del PDF/archivo
  fecha: string;
}

export default function Estudios() {
  // Base de datos simulada
  const estudiosDB: Record<string, Record<string, Estudio[]>> = {
    "12345678": {
      "ABC123": [
        { nombre: "Análisis de Sangre", archivo: "/estudios/abc123_sangre.pdf", fecha: "2025-10-15" },
        { nombre: "Radiografía Torácica", archivo: "/estudios/abc123_radiografia.pdf", fecha: "2025-10-18" },
      ],
    },
    "87654321": {
      "XYZ789": [
        { nombre: "Electrocardiograma", archivo: "/estudios/xyz789_ecg.pdf", fecha: "2025-09-10" },
      ],
    },
  };

  const [dni, setDni] = useState("");
  const [numeroEstudio, setNumeroEstudio] = useState("");
  const [estudios, setEstudios] = useState<Estudio[]>([]);
  const [error, setError] = useState("");

  const handleBuscar = () => {
    const dniData = estudiosDB[dni];
    if (dniData) {
      const estudiosEncontrados = dniData[numeroEstudio.toUpperCase()];
      if (estudiosEncontrados) {
        setEstudios(estudiosEncontrados);
        setError("");
        return;
      }
    }
    setEstudios([]);
    setError("No se encontraron estudios con ese DNI y número de estudio.");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main
        style={{
          padding: "60px 20px",
          fontFamily: "Arial, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#008CBA",
            fontSize: "2.5rem",
            marginBottom: "20px",
          }}
        >
          Consulta de Estudios
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#004F6E",
            fontSize: "1.2rem",
            marginBottom: "40px",
          }}
        >
          Ingresá tu DNI y el número de estudio para visualizar y descargar tus resultados.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="DNI"
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
              flex: 1,
              maxWidth: "200px",
            }}
          />
          <input
            type="text"
            value={numeroEstudio}
            onChange={(e) => setNumeroEstudio(e.target.value)}
            placeholder="Número de estudio"
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
              flex: 1,
              maxWidth: "200px",
            }}
          />
          <button
            onClick={handleBuscar}
            style={{
              padding: "10px 24px",
              borderRadius: "50px",
              backgroundColor: "#008CBA",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Buscar
          </button>
        </div>

        {error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {error}
          </p>
        )}

        {estudios.length > 0 && (
          <div style={{ display: "grid", gap: "20px" }}>
            {estudios.map((estudio, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #C8E6F3",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3 style={{ color: "#004F6E", marginBottom: "8px" }}>{estudio.nombre}</h3>
                  <p style={{ color: "#4B636E", fontSize: "0.95rem" }}>{estudio.fecha}</p>
                </div>
                <a
                  href={estudio.archivo}
                  download
                  style={{
                    padding: "8px 16px",
                    borderRadius: "50px",
                    backgroundColor: "#008CBA",
                    color: "#fff",
                    fontWeight: "bold",
                    textDecoration: "none",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Descargar
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
