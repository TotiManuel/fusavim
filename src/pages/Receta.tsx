import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RecetaMedica() {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [obraSocial, setObraSocial] = useState("");
  const [afiliado, setAfiliado] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleEnviar = () => {
    if (!dni || !nombre || !obraSocial || !afiliado || !diagnostico || !medicamentos) {
      setError("Por favor completá todos los campos antes de enviar.");
      setMensaje("");
      return;
    }

    // Simulación de envío al backend
    setTimeout(() => {
      setMensaje("Tu solicitud de receta médica fue enviada correctamente. Un profesional revisará la información y te contactará.");
      setError("");
      setDni("");
      setNombre("");
      setObraSocial("");
      setAfiliado("");
      setDiagnostico("");
      setMedicamentos("");
    }, 800);
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
          Completá el siguiente formulario para solicitar tu receta médica digital.  
          Nuestro equipo revisará la información y te enviará una copia firmada.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "40px",
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
            }}
          />

          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Apellido y Nombre"
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
            }}
          />

          <input
            type="text"
            value={obraSocial}
            onChange={(e) => setObraSocial(e.target.value)}
            placeholder="Obra Social"
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
            }}
          />

          <input
            type="text"
            value={afiliado}
            onChange={(e) => setAfiliado(e.target.value)}
            placeholder="Número de Afiliado"
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
            }}
          />

          <textarea
            value={diagnostico}
            onChange={(e) => setDiagnostico(e.target.value)}
            placeholder="Diagnóstico"
            rows={3}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
              resize: "none",
            }}
          />

          <textarea
            value={medicamentos}
            onChange={(e) => setMedicamentos(e.target.value)}
            placeholder="Medicamentos solicitados"
            rows={4}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
              resize: "none",
            }}
          />

          <button
            onClick={handleEnviar}
            style={{
              padding: "10px 24px",
              borderRadius: "50px",
              backgroundColor: "#008CBA",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              alignSelf: "center",
              marginTop: "10px",
            }}
          >
            Enviar Solicitud
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

        {mensaje && (
          <p
            style={{
              color: "green",
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {mensaje}
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
