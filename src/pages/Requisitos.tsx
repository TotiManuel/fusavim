import { useState } from "react";
import { jsPDF } from "jspdf";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Requisitos() {
  const [tipo, setTipo] = useState("");
  const [subtipo, setSubtipo] = useState("");
  const [error, setError] = useState("");
  const [mensaje] = useState("");

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

  // Generar PDF con logo e información
  const generarPDF = async () => {
    if (!tipo || !subtipo) {
      setError("Seleccioná el tipo y subtipo antes de generar el PDF.");
      return;
    }

    const requisitos = data[tipo as keyof typeof data]?.[subtipo] || [];

    const doc = new jsPDF();
    const colorPrincipal = { r: 0, g: 140, b: 186 }; // Azul Fusavim
    let y = 20;

    try {
      // Cargar logo
      const logo = new Image();
      logo.src = "/images/logo.png";
      await new Promise((resolve) => {
        logo.onload = resolve;
      });
      doc.addImage(logo, "PNG", 15, 10, 25, 25);
    } catch {
      console.warn("No se pudo cargar el logo.");
    }

    // Encabezado
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(colorPrincipal.r, colorPrincipal.g, colorPrincipal.b);
    doc.text("Clínica Fusavim", 45, 25);
    y = 45;

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Requisitos Médicos", 20, y);
    y += 10;

    // Línea separadora
    doc.setDrawColor(colorPrincipal.r, colorPrincipal.g, colorPrincipal.b);
    doc.setLineWidth(0.8);
    doc.line(20, y, 190, y);
    y += 10;

    // Detalles
    doc.setFontSize(13);
    doc.text(`Tipo: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`, 20, y);
    y += 8;
    doc.text(`Subtipo: ${subtipo}`, 20, y);
    y += 12;

    // Lista de requisitos
    doc.setFont("helvetica", "bold");
    doc.setTextColor(colorPrincipal.r, colorPrincipal.g, colorPrincipal.b);
    doc.text("Requisitos:", 20, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    requisitos.forEach((r) => {
      doc.text(`• ${r}`, 25, y);
      y += 8;
    });


    // Pie de página
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Generado automáticamente por la plataforma Fusavim", 20, 280);

    doc.save(`Requisitos_${tipo}_${subtipo}.pdf`);
    
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
              {Object.keys(data[tipo as keyof typeof data]).map((s) => (
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
