import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Requisitos() {
  const [tipo, setTipo] = useState("");
  const [subtipo, setSubtipo] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Requisitos organizados
  const data = {
    estudio: {
      "Análisis de sangre": [
        "Ayuno de 8 a 12 horas.",
        "Evitar actividad física intensa el día previo.",
        "Traer orden médica y DNI.",
      ],
      "Ecografía abdominal": [
        "Ayuno de 6 horas.",
        "Tomar 1 litro de agua una hora antes sin orinar.",
        "Traer estudios anteriores (si los hubiera).",
      ],
      "Radiografía": [
        "Traer orden médica y autorización de la obra social.",
        "Evitar llevar elementos metálicos.",
        "No requiere ayuno.",
      ],
    },
    cirugia: {
      "Cirugía menor": [
        "Ayuno de 8 horas.",
        "Traer preoperatorio completo y autorización de la obra social.",
        "Evitar maquillajes, cremas o esmalte de uñas.",
      ],
      "Cirugía mayor": [
        "Ayuno absoluto desde la medianoche.",
        "Presentarse con acompañante adulto responsable.",
        "Traer análisis preoperatorios y consentimiento informado firmado.",
      ],
    },
    internacion: {
      "Internación programada": [
        "Traer DNI, estudios previos y orden de internación.",
        "Autorización de la obra social o prepaga.",
        "Objetos personales básicos (pijama, cepillo, pantuflas, etc.).",
      ],
      "Internación por urgencia": [
        "Se solicita DNI y cobertura médica (si corresponde).",
        "No traer objetos de valor.",
        "Informar alergias y medicación actual al ingreso.",
      ],
    },
  };

  const tipos = Object.keys(data);
  const subtipos = tipo ? Object.keys(data[tipo as keyof typeof data]) : [];

  // Generar PDF (simulado)
  const generarPDF = () => {
    if (!tipo || !subtipo) {
      setError("Seleccioná el tipo y subtipo antes de generar el PDF.");
      return;
    }

    const requisitos = data[tipo as keyof typeof data]?.[subtipo] || [];
    const contenido = `
Requisitos Médicos
-------------------------
Tipo: ${tipo}
Subtipo: ${subtipo}

Requisitos:
${requisitos.map((r) => `• ${r}`).join("\n")}

`;

    const blob = new Blob([contenido], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Requisitos_${tipo}_${subtipo}.pdf`;
    link.click();
    URL.revokeObjectURL(url);

    setMensaje("PDF generado correctamente.");
    setError("");
  };

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
            fontSize: "2.3rem",
            marginBottom: "30px",
          }}
        >
          Requisitos Médicos
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* Selector de tipo */}
          <select
            value={tipo}
            onChange={(e) => {
              setTipo(e.target.value);
              setSubtipo("");
            }}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
            }}
          >
            <option value="">Seleccioná tipo</option>
            {tipos.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>

          {/* Selector de subtipo */}
          {tipo && (
            <select
              value={subtipo}
              onChange={(e) => setSubtipo(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #008CBA",
                fontSize: "1rem",
              }}
            >
              <option value="">Seleccioná subtipo</option>
              {subtipos.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          )}

          {/* Mostrar requisitos */}
          {subtipo && (
            <ul
              style={{
                background: "#eaf6fb",
                borderRadius: "10px",
                padding: "15px 20px",
                listStyleType: "disc",
              }}
            >
              {data[tipo as keyof typeof data][subtipo].map((r, i) => (
                <li key={i} style={{ marginBottom: "8px", color: "#004F6E" }}>
                  {r}
                </li>
              ))}
            </ul>
          )}

          {/* BOTÓN DESCARGAR PDF */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <button
              onClick={generarPDF}
              style={{
                padding: "10px 24px",
                borderRadius: "50px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              📄 Descargar PDF
            </button>
          </div>

          {error && (
            <p
              style={{ color: "red", textAlign: "center", marginTop: "15px" }}
            >
              {error}
            </p>
          )}
          {mensaje && (
            <p
              style={{ color: "green", textAlign: "center", marginTop: "15px" }}
            >
              {mensaje}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
