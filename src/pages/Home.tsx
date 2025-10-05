import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/data");
  };

  const handleClick = () => {
    navigate("/data");
  };

  return (
    <div className="relative bg-[#06243a] lg:bg-[#000000] text-white flex flex-col overflow-hidden h-screen lg:h-[calc(100vh-64px)]">
      {/* Fondo */}
      <div className="absolute bottom-0 left-0 w-full lg:h-5/6 overflow-hidden">
        <img
          src="/earth.webp"
          alt="Planeta"
          className="w-full h-[200%] lg:h-[280%] object-cover object-top lg:opacity-40 scale-200 lg:scale-115 pt-20 lg:pt-0"
        />
      </div>

      {/* Título */}
      <div className="relative z-10 lg:p-8 mt-40 lg:mt-20">
        <h1 className="text-5xl lg:text-6xl lg:font-bold ml-12 lg:ml-24 font-helvetica">Breeve</h1>
        <p className="mt-4 text-lg lg:text-2xl w-[70%] lg:w-[40%] font-dmsans ml-12 lg:ml-24 mt-8">
          Comprueba el nivel de calidad del aire para poder cuidarte y cuidar a
          los demás
        </p>
      </div>

      {/* Buscador */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md p-8 lg:m-24 lg:mx-auto lg:mt-auto lg:mb-30"
      >
        <input
          type="text"
          placeholder="Busca tu ciudad"
          className="text-lg font-dmsans w-full px-4 py-3 rounded-full bg-black/20 backdrop-blur-sm text-white placeholder-white/40 placeholder:focus:opacity-0 focus:placeholder-transparent border-2 border-[#f5f5e9] focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12 text-center"
        />
        <button
          type="button"
          onClick={handleClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#f5f5e9] hover:scale-110 transition-transform pr-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
