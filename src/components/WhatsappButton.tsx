import React, { useState } from "react";

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "5493535106738"; // Cambiar por el número real
  const message = "Hola, quisiera hacer una consulta.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const [hover, setHover] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        backgroundColor: "#25D366",
        borderRadius: "30px",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
        transform: hover ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      {/* Tooltip */}
      {hover && (
        <span
          style={{
            position: "absolute",
            right: "100%",
            marginRight: "10px",
            backgroundColor: "#333",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "0.85rem",
            whiteSpace: "nowrap",
          }}
        >
          Chateá con nosotros
        </span>
      )}

      {/* Ícono WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        width="28"
        height="28"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.651.867 5.101 2.33 7.089L4 29l7.172-2.302A11.922 11.922 0 0 0 16.001 27C22.627 27 28 21.627 28 15S22.627 3 16.001 3zm0 22c-1.787 0-3.479-.438-4.973-1.213l-.355-.182-4.26 1.365 1.394-4.07-.228-.352A9.932 9.932 0 0 1 6 15c0-5.514 4.486-10 10.001-10C21.515 5 26 9.486 26 15s-4.485 10-9.999 10z" />
        <path d="M21.478 18.978c-.363-.182-2.145-1.062-2.478-1.182-.332-.12-.574-.182-.815.182s-.939 1.182-1.149 1.424-.424.273-.787.091c-.363-.182-1.535-.566-2.924-1.808-1.08-.963-1.808-2.153-2.02-2.516-.211-.364-.022-.56.16-.742.164-.164.363-.424.545-.637.182-.213.242-.364.363-.606.12-.242.06-.455-.03-.637-.091-.182-.816-1.962-1.118-2.688-.295-.71-.595-.613-.815-.625l-.696-.012c-.212 0-.606.087-.924.424-.318.338-1.212 1.183-1.212 2.884s1.241 3.347 1.414 3.577c.173.23 2.446 3.735 5.92 5.09.828.358 1.474.572 1.977.731.83.264 1.586.227 2.184.138.667-.1 2.045-.834 2.334-1.639.289-.805.289-1.497.202-1.639-.087-.143-.318-.23-.681-.412z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
