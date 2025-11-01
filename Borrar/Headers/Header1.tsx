import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>({});
  const timeoutRef = useRef<{ [key: string]: number | null }>({});
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
    { name: 'Medicos', href: '/doctors' },
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
    {
      name: 'Más',
      dropdown: [
        { name: 'Convenios', href: '/convenios' },
        { name: 'Recidencias', href: '/recidencias' },
        { name: 'Trabaja con nosotros', href: '/trabaja-con-nosotros' },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current[name]) clearTimeout(timeoutRef.current[name]);
    setOpenDropdown(prev => ({ ...prev, [name]: true }));
  };

  const handleMouseLeave = (name: string) => {
    timeoutRef.current[name] = window.setTimeout(() => {
      setOpenDropdown(prev => ({ ...prev, [name]: false }));
    }, 100); // 1 segundo
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-teal-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(353) 510-6738</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>secretarias.fusavim@gmail.com</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Lun - Vie: 7:00 AM - 21:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm">
                <img
                  src="src/images/logo.png"
                  alt="Clínica Fusavim"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sky-500 font-bold text-xl">Clinica Fusavim</span>
            </Link>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => item.dropdown && handleMouseLeave(item.name)}
              >
                <Link
                  to={item.href || '#'}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href || '') ? 'bg-teal-600 text-white' : 'text-slate-900 hover:bg-sky-500 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>

                {item.dropdown && openDropdown[item.name] && (
                  <div className="absolute bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50">
                    {item.dropdown.map(sub => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 text-sm text-slate-900 hover:bg-sky-500 hover:text-white"
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
              className="bg-gradient-to-r from-teal-600 to-sky-500 text-white px-6 py-2 rounded-lg font-medium hover:from-teal-700 hover:to-sky-600 transition-all"
            >
              Reservar Turno
            </Link>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-900 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 rounded-md p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href || '#'}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href || '') ? 'bg-teal-600 text-white' : 'text-slate-900 hover:bg-sky-500 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4">
                      {item.dropdown.map(sub => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-sky-500 hover:text-white"
                          onClick={() => setIsMenuOpen(false)}
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
                className="block w-full text-center bg-gradient-to-r from-teal-600 to-sky-500 text-white px-3 py-2 rounded-md text-base font-medium hover:from-teal-700 hover:to-sky-600 transition-all mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar Turno
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
