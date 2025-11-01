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
    {
      name: 'Pacientes',
      dropdown: [
        { name: 'Estudios', href: '/estudios' },
        { name: 'Receta Digital', href: '/receta-digital' },
        { name: 'Requisitos', href: '/requisitos' },
      ],
    },
    { name: 'Contacto', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="src/images/logo.png"
              alt="Clínica Fusavim"
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-semibold text-sky-600 tracking-tight">
              Clínica Fusavim
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href || '#'}
                  className={`text-[15px] font-medium transition-all duration-200 ${
                    isActive(item.href || '')
                      ? 'text-sky-600 border-b-2 border-sky-600 pb-1'
                      : 'text-slate-700 hover:text-sky-500'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-xl mt-3 py-2 w-48">
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
              className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:shadow-md hover:from-sky-600 hover:to-teal-600 transition-all"
            >
              Turnos
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
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-slate-200">
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
              className="block w-full text-center bg-gradient-to-r from-sky-500 to-teal-500 text-white py-2 rounded-full font-semibold hover:from-sky-600 hover:to-teal-600 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Turnos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
