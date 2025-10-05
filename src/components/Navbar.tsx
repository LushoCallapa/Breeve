import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoBreeve from '../assets/logo.png';
import LogoMovil from '../assets/breeve.png';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClasses = (isActive: boolean) =>
    `font-helvetica hover:underline ${isActive ? 'font-bold' : 'font-normal'}`;

  const navLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Mapa', to: '/mapa' },
    { name: 'Información', to: '/information' },
    { name: 'Quienes somos', to: '/quienes-somos' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 h-[70px] flex items-center px-6 
                     bg-transparent md:bg-[#f5f5e9] 
                     text-[#f5f5e9] md:text-[#113a58]
                     shadow-none md:shadow-[0_6px_20px_rgba(0,0,0,0.4)] 
                     transition-all duration-300">
        <div className="flex items-center space-x-3 h-full relative">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden relative z-10">
            <div className="absolute -top-4 -left-6 w-24 h-24 bg-[#413A01] rounded-br-full -z-10"></div>
            <img src={LogoMovil} alt="Breeve Logo Móvil" className="h-10" />
          </button>
          <img src={LogoBreeve} alt="Breeve Logo" className="h-10 hidden md:block" />
          <span className="font-helvetica font-bold text-lg hidden md:block">BREEVE</span>
        </div>

        <ul className="hidden md:flex flex-row space-x-6 ml-auto h-full items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.to} className={({ isActive }) => linkClasses(isActive)}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setSidebarOpen(false)}>
          <div
            className="bg-[#f5f5e9] w-64 h-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-6 font-bold text-lg"
              onClick={() => setSidebarOpen(false)}
            >
              Cerrar
            </button>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => linkClasses(isActive)}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
