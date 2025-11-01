import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/services' },
    { name: 'Médicos', href: '/doctors' },
    { name: 'Novedades', href: '/news' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
    {
      name: 'Pacientes',
      dropdown: [
        { name: 'Estudios', href: '/estudios' },
        { name: 'Receta Digital', href: '/receta-digital' },
        { name: 'Requisitos', href: '/requisitos' },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="src/images/logo.png"
              alt="Clínica Fusavim"
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-sky-600 tracking-tight">
              Clínica Fusavim
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href || '#'}
                  className={`text-[15px] font-semibold pb-1 transition-all duration-300 ${
                    isActive(item.href || '')
                      ? 'text-sky-600 border-b-2 border-sky-600'
                      : 'text-slate-700 hover:text-sky-600 hover:border-b-2 hover:border-sky-600'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg mt-3 py-2 w-48 border border-slate-100">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-sky-100 hover:text-sky-600"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/appointment"
              className="ml-4 bg-sky-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-sky-700 transition-all"
            >
              Reservar Turno
            </Link>
          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-md">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-slate-100">
              <Link
                to={item.href || '#'}
                className="block px-6 py-3 text-slate-800 font-medium hover:bg-sky-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="bg-sky-50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className="block px-8 py-2 text-slate-700 hover:bg-sky-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="p-4">
            <Link
              to="/appointment"
              className="block w-full text-center bg-sky-600 text-white py-2 rounded-full font-semibold hover:bg-sky-700 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservar Turno
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
