import { NavLink } from 'react-router-dom';
import LogoBreeve from '../assets/logo.png';

const Navbar = () => {
  const linkClasses = (isActive: boolean) =>
    `font-helvetica hover:underline ${isActive ? 'font-bold' : 'font-normal'}`;

  return (
    <nav className="bg-[#a9d3c5] text-[#113a58] fixed top-0 left-0 w-full shadow-md z-50 h-[70px] flex items-center px-6 border-b border-[#f5f5e9]">
      <div className="flex items-center space-x-3 h-full">
        <img src={LogoBreeve} alt="Breeve Logo" className="h-10" />
        <span className="font-helvetica font-bold text-lg">BREEVE</span>
      </div>

      <ul className="flex space-x-6 ml-auto h-full items-center">
        <li>
          <NavLink to="/" className={({ isActive }) => linkClasses(isActive)}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/mapa" className={({ isActive }) => linkClasses(isActive)}>
            Mapa
          </NavLink>
        </li>
        <li>
          <NavLink to="/information" className={({ isActive }) => linkClasses(isActive)}>
            Información
          </NavLink>
        </li>
        <li>
          <NavLink to="/quienes-somos" className={({ isActive }) => linkClasses(isActive)}>
            Quienes somos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
