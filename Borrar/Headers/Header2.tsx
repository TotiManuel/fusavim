import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const HeaderNuevo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Novedades', href: '/news' },
    {
      name: 'Pacientes',
      dropdown: [
        { name: 'Estudios', href: '/estudios' },
        { name: 'Receta Digital', href: '/receta-digital' },
        { name: 'Requisitos de estudios e internación', href: '/requisitos' },
      ],
    },
    { name: 'Servicios', href: '/services' },
    { name: 'Médicos', href: '/doctors' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
    {
      name: 'Más',
      dropdown: [
        { name: 'Convenios', href: '/convenios' },
        { name: 'Residencias', href: '/recidencias' },
        { name: 'Trabaja con nosotros', href: '/trabaja-con-nosotros' },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 400);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-md transition-all">
      <div className="bg-gradient-to-r from-teal-600 to-sky-500 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(353) 510-6738</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>secretarias.fusavim@gmail.com</span>
            </div>
          </div>
          <span className="hidden md:block">Lun - Vie: 7:00 a 21:00</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="src/images/logo.png"
              alt="Clínica Fusavim"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-sky-600 tracking-tight">
              Clínica Fusavim
            </span>
          </Link>

          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href || '#'}
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                    isActive(item.href || '')
                      ? 'text-white bg-gradient-to-r from-teal-600 to-sky-500'
                      : 'text-slate-800 hover:text-sky-600'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 text-sky-500 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200 animate-fadeIn z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-5 py-2 text-sm text-slate-700 hover:bg-sky-500 hover:text-white transition-colors"
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
              className="ml-4 bg-gradient-to-r from-teal-600 to-sky-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-teal-700 hover:to-sky-600 transition-all"
            >
              Reservar Turno
            </Link>
          </div>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 hover:text-sky-600"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg border border-slate-200 p-4 animate-fadeIn">
            {navigation.map((item) => (
              <div key={item.name} className="mb-2">
                <Link
                  to={item.href || '#'}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-slate-800 font-medium py-2 hover:text-sky-600"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 border-l pl-3 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-slate-600 py-1 hover:text-sky-600"
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
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-teal-600 to-sky-500 text-white font-semibold rounded-lg py-2 mt-3"
            >
              Reservar Turno
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNuevo;
