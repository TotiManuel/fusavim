import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RecetaDigital() {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleEnviar = () => {
    if (!dni || !nombre || !medicamento) {
      setError("Por favor completá todos los campos antes de enviar.");
      setMensaje("");
      return;
    }

    // Simulación de envío
    setTimeout(() => {
      setMensaje("Tu solicitud de receta fue enviada correctamente. Nos contactaremos a la brevedad.");
      setError("");
      setDni("");
      setNombre("");
      setMedicamento("");
    }, 600);
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
          Solicitud de Receta Digital
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#004F6E",
            fontSize: "1.2rem",
            marginBottom: "40px",
          }}
        >
          Completá los datos del formulario para solicitar tu receta.  
          Nuestro equipo médico la revisará y te enviará una copia digital.
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
            placeholder="Nombre completo"
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #008CBA",
              fontSize: "1rem",
            }}
          />

          <textarea
            value={medicamento}
            onChange={(e) => setMedicamento(e.target.value)}
            placeholder="Medicamento solicitado"
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
