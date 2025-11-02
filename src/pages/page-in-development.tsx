// src/pages/EnDesarrollo.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const EnDesarrollo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">🚧 Página en Desarrollo 🚧</h1>
      <p className="text-gray-600 mb-6 text-center">
        Esta sección aún no está disponible. Estamos trabajando para traerte el contenido pronto.
      </p>
      <Link 
        to="/" 
        className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default EnDesarrollo;
