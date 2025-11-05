import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Estudios', href: '/prestaciones' },
    { name: 'Médicos', href: '/doctors' },
    { name: 'Novedades', href: '/news' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Convenios', href: '/convenios' },
    {
      name: 'Pacientes',
      dropdown: [
        { name: 'Estudios', href: '/estudios' },
        { name: 'Receta Digital', href: '/recetas' },
        { name: 'Requisitos', href: '/requisitos' },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000); // 🔹 Espera 1 segundo
  };

  return (
    <header className="backdrop-blur-md bg-white/70 border-b border-sky-200 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="Clínica Fusavim"
                className="w-12 h-12 rounded-full border border-sky-300 shadow-sm"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
              Clínica Fusavim
            </span>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href || '#'}
                  className={`text-[15px] font-semibold transition-all duration-300 ${
                    isActive(item.href || '')
                      ? 'text-sky-600 border-b-2 border-sky-600 pb-1'
                      : 'text-slate-700 hover:text-sky-600 hover:border-b-2 hover:border-sky-400 pb-1 border-transparent'
                  }`}
                >
                  {item.name}
                </Link>

                {/* DROPDOWN */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute bg-white/90 backdrop-blur-lg shadow-md rounded-lg mt-3 py-2 w-48 border border-sky-100 transition-all">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-sky-100 hover:text-sky-600 rounded-md transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-sky-600 to-teal-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition-all"
            >
              Contacto
            </Link>
          </nav>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-sky-700 hover:text-teal-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sky-200 shadow-md">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-sky-100">
              <Link
                to={item.href || '#'}
                className="block px-6 py-3 text-slate-800 font-medium hover:bg-sky-50 hover:text-sky-600 transition-all"
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
                      className="block px-8 py-2 text-slate-700 hover:bg-sky-100 hover:text-sky-600"
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
              to="/contact"
              className="block w-full text-center bg-gradient-to-r from-sky-600 to-teal-500 text-white py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
