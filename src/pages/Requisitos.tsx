import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Requisitos() {
  const [tipo, setTipo] = useState("");
  const [subtipo, setSubtipo] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [mensaje] = useState("");
  const [contactos, setContactos] = useState<{ nombre: string; numero: string }[]>([]);
  const [nuevoContacto, setNuevoContacto] = useState({ nombre: "", numero: "" });
  const [destinatario, setDestinatario] = useState("");
  const [error, setError] = useState("");

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

  // Cargar contactos guardados localmente
  useEffect(() => {
    const guardados = localStorage.getItem("contactos");
    if (guardados) setContactos(JSON.parse(guardados));
  }, []);

  // Guardar contactos en localStorage
  const guardarContactos = (lista: any) => {
    setContactos(lista);
    localStorage.setItem("contactos", JSON.stringify(lista));
  };

  // Agregar nuevo contacto
  const agregarContacto = () => {
    if (!nuevoContacto.nombre || !nuevoContacto.numero) {
      setError("Por favor completá el nombre y número del contacto.");
      return;
    }
    const lista = [...contactos, nuevoContacto];
    guardarContactos(lista);
    setNuevoContacto({ nombre: "", numero: "" });
    setError("");
  };

  // Generar PDF (simulado: descarga de un blob)
  const generarPDF = () => {
    if (!tipo || !subtipo) {
      setError("Seleccioná el tipo y subtipo antes de generar el PDF.");
      return;
    }

    const requisitos = data[tipo as keyof typeof data]?.[subtipo] || [];
    const contenido = `
      Requisito médico:
      - Tipo: ${tipo}
      - Subtipo: ${subtipo}
      - Requisitos:
        ${requisitos.map((r) => `• ${r}`).join("\n")}
      - Observaciones: ${observaciones || "Ninguna"}
    `;

    const blob = new Blob([contenido], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Requisitos_${tipo}_${subtipo}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Enviar por WhatsApp
  const enviarWhatsApp = () => {
    if (!tipo || !subtipo || !destinatario) {
      setError("Completá todos los campos antes de enviar por WhatsApp.");
      return;
    }

    const contacto = contactos.find((c) => c.nombre === destinatario);
    if (!contacto) {
      setError("Seleccioná un contacto válido.");
      return;
    }

    const requisitos = data[tipo as keyof typeof data]?.[subtipo] || [];
    const texto = encodeURIComponent(
      `🩺 *Requisito Médico*\n\n` +
        `📋 Tipo: ${tipo}\n` +
        `📄 Subtipo: ${subtipo}\n\n` +
        `📑 *Requisitos:*\n${requisitos.map((r) => `• ${r}`).join("\n")}\n\n` +
        (observaciones ? `🗒️ Observaciones: ${observaciones}\n\n` : "") +
        `Enviado desde la plataforma de Fusavim.`
    );

    const url = `https://wa.me/${contacto.numero}?text=${texto}`;
    window.open(url, "_blank");
  };

  const tipos = Object.keys(data);
  const subtipos = tipo ? Object.keys(data[tipo as keyof typeof data]) : [];

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
        <h1 style={{ textAlign: "center", color: "#008CBA", fontSize: "2.3rem", marginBottom: "30px" }}>
          Requisitos Médicos
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* Selector principal */}
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

          {/* Subtipo dinámico */}
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

          {/* Requisitos mostrados dinámicamente */}
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

          <textarea
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            placeholder="Observaciones (opcional)"
            rows={3}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
              resize: "none",
            }}
          />

          {/* CONTACTOS */}
          <h3 style={{ color: "#004F6E", marginTop: "20px" }}>📱 Contactos personales</h3>

          <select
            value={destinatario}
            onChange={(e) => setDestinatario(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
            }}
          >
            <option value="">Seleccioná un contacto</option>
            {contactos.map((c, i) => (
              <option key={i} value={c.nombre}>
                {c.nombre}
              </option>
            ))}
          </select>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={nuevoContacto.nombre}
              onChange={(e) => setNuevoContacto({ ...nuevoContacto, nombre: e.target.value })}
              placeholder="Nombre nuevo contacto"
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #008CBA",
              }}
            />
            <input
              type="tel"
              value={nuevoContacto.numero}
              onChange={(e) => setNuevoContacto({ ...nuevoContacto, numero: e.target.value })}
              placeholder="Número (sin + ni 0)"
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #008CBA",
              }}
            />
            <button
              onClick={agregarContacto}
              style={{
                backgroundColor: "#008CBA",
                color: "#fff",
                border: "none",
                padding: "10px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ➕ Agregar
            </button>
          </div>

          {/* BOTONES */}
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "25px" }}>
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

            <button
              onClick={enviarWhatsApp}
              style={{
                padding: "10px 24px",
                borderRadius: "50px",
                backgroundColor: "#25D366",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              📤 Enviar por WhatsApp
            </button>
          </div>

          {error && <p style={{ color: "red", textAlign: "center", marginTop: "15px" }}>{error}</p>}
          {mensaje && <p style={{ color: "green", textAlign: "center", marginTop: "15px" }}>{mensaje}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
