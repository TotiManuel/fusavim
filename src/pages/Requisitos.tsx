import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Requisitos() {
  const [tipo, setTipo] = useState("");
  const [detalle, setDetalle] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [mensaje] = useState("");
  const [contactos, setContactos] = useState<{ nombre: string; numero: string }[]>([]);
  const [nuevoContacto, setNuevoContacto] = useState({ nombre: "", numero: "" });
  const [destinatario, setDestinatario] = useState("");
  const [error, setError] = useState("");

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
    if (!tipo || !detalle) {
      setError("Completá los campos antes de generar el PDF.");
      return;
    }

    const contenido = `
      Requisito médico:
      - Tipo: ${tipo}
      - Detalle: ${detalle}
      - Observaciones: ${observaciones || "Ninguna"}
    `;
    const blob = new Blob([contenido], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Requisito_${tipo}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Enviar por WhatsApp
  const enviarWhatsApp = () => {
    if (!tipo || !detalle || !destinatario) {
      setError("Completá todos los campos antes de enviar por WhatsApp.");
      return;
    }

    const contacto = contactos.find((c) => c.nombre === destinatario);
    if (!contacto) {
      setError("Seleccioná un contacto válido.");
      return;
    }

    const texto = encodeURIComponent(
      `🩺 *Requisito Médico*\n\n` +
        `📋 Tipo: ${tipo}\n` +
        `📄 Detalle: ${detalle}\n` +
        (observaciones ? `🗒️ Observaciones: ${observaciones}\n` : "") +
        `\nEnviado desde la plataforma de Fusavim.`
    );

    const url = `https://wa.me/${contacto.numero}?text=${texto}`;
    window.open(url, "_blank");
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
        <h1 style={{ textAlign: "center", color: "#008CBA", fontSize: "2.3rem", marginBottom: "30px" }}>
          Requisitos Médicos
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
            }}
          >
            <option value="">Seleccioná tipo de requisito</option>
            <option value="Estudio">Estudio</option>
            <option value="Cirugía">Cirugía</option>
            <option value="Internación">Internación</option>
          </select>

          <input
            type="text"
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
            placeholder={
              tipo === "Estudio"
                ? "Ejemplo: Resonancia magnética"
                : tipo === "Cirugía"
                ? "Ejemplo: Cirugía laparoscópica"
                : tipo === "Internación"
                ? "Ejemplo: Internación por observación"
                : "Detalle del requisito"
            }
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
            }}
          />

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
