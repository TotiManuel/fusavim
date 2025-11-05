import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SolicitudReceta() {
  const [dni, setDni] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [obraSocial, setObraSocial] = useState("");
  const [afiliado, setAfiliado] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
  const [medico, setMedico] = useState("");
  const [error, setError] = useState("");

  // 🔒 Mapa interno con los números de cada médico (no visibles en la UI)
  const numerosMedicos: Record<string, string> = {
    "Dra. López": "5491122334455",
    "Dr. García": "5491144455566",
    "Dra. Fernández": "5491166677788",
  };

  const handleEnviarWhatsApp = () => {
    if (
      !dni ||
      !apellido ||
      !nombre ||
      !obraSocial ||
      !afiliado ||
      !diagnostico ||
      !medicamentos ||
      !medico
    ) {
      setError("Por favor completá todos los campos antes de enviar.");
      return;
    }

    setError("");

    const numero = numerosMedicos[medico];
    if (!numero) {
      setError("El médico seleccionado no tiene número asignado.");
      return;
    }

    const mensaje = `*Solicitud de Receta Médica Digital*\n\n👩‍⚕️ *Médico/a:* ${medico}\n👤 *Paciente:* ${apellido}, ${nombre}\n🪪 *DNI:* ${dni}\n🏥 *Obra Social:* ${obraSocial}\n🧾 *N° de Afiliado:* ${afiliado}\n⚕️ *Diagnóstico:* ${diagnostico}\n💊 *Medicamentos Solicitados:*\n${medicamentos}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
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
          Solicitud de Receta Médica
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#004F6E",
            fontSize: "1.2rem",
            marginBottom: "40px",
          }}
        >
          Completá tus datos y seleccioná el médico.  
          Se abrirá WhatsApp con un mensaje listo para enviar.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <input
            type="text"
            placeholder="DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Obra Social"
            value={obraSocial}
            onChange={(e) => setObraSocial(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Número de afiliado"
            value={afiliado}
            onChange={(e) => setAfiliado(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="Diagnóstico"
            value={diagnostico}
            onChange={(e) => setDiagnostico(e.target.value)}
            rows={2}
            style={textAreaStyle}
          />

          <textarea
            placeholder="Medicamentos solicitados"
            value={medicamentos}
            onChange={(e) => setMedicamentos(e.target.value)}
            rows={4}
            style={textAreaStyle}
          />

          {/* Selector de médico */}
          <select
            value={medico}
            onChange={(e) => setMedico(e.target.value)}
            style={{
              ...inputStyle,
              backgroundColor: "#f9f9f9",
              fontWeight: "bold",
            }}
          >
            <option value="">Seleccioná el médico</option>
            {Object.keys(numerosMedicos).map((nombre) => (
              <option key={nombre} value={nombre}>
                {nombre}
              </option>
            ))}
          </select>

          <button onClick={handleEnviarWhatsApp} style={buttonStyle}>
            Enviar por WhatsApp
          </button>
        </div>

        {error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {error}
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "1px solid #008CBA",
  fontSize: "1rem",
};

const textAreaStyle: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "1px solid #008CBA",
  fontSize: "1rem",
  resize: "none",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px 30px",
  borderRadius: "50px",
  backgroundColor: "#008CBA",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  alignSelf: "center",
  marginTop: "10px",
};
