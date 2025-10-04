import LogoBreeve from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#113a58] text-white fixed top-0 left-0 w-full shadow-md z-50 flex justify-between px-4 h-16">
      <img src={LogoBreeve} alt="Breeve Logo" className="h-8 mt-4" />
      <ul className="flex space-x-4 p-4 end-4 mr-10">
        <li>
          <a href="/" className="hover:underline mr-5 font-Helvetica">
            Inicio
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline mr-5 font-Helvetica">
            Mapa
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline mr-5 font-Helvetica">
            Información
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline font-Helvetica">
            Quienes somos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
