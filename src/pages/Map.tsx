export default function AirQualityMap() {
  return (
    <div className="relative w-full lg:min-h-[calc(100vh-69px)] bg-black flex flex-col md:flex-row pt-14 lg:pt-0 overflow-hidden">
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 bg-[url('/star.png')] bg-cover bg-center"></div>

      {/* Sección de información */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center gap-8 px-8 py-8 lg:px-12 lg:pt-12">
        {/* Formulario de búsqueda */}
        <form className="w-full max-w-md relative">
          <input
            type="text"
            defaultValue="Madrid"
            className="w-full px-4 py-3 text-xl rounded-full border-2 border-white text-white bg-black/30 backdrop-blur-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </span>
        </form>

        {/* Tarjeta de datos */}
        <div className="w-full max-w-md pt-4 px-4 pb-6 rounded-3xl bg-black/30 backdrop-blur-md text-white flex flex-col gap-4 border-2 border-white">
          <div className="flex justify-between items-center">
            <span className="font-bold pl-2 text-3xl">PM</span>
            <span className="text-2xl">Partículas Finas</span>
            <span className="bg-green-500 px-2 py-1 rounded text-md">11 μg/m³</span>
          </div>
          <div className="text-md lg:text-xl">
            <div className="bg-[#2b2f48]/60 p-2 rounded-full mb-6 text-center">
              Posición global: <strong>12</strong>
            </div>
            <div className="mt-2 bg-[#2b2f48]/60 p-2 mb-6 rounded-full">
              <div className="flex items-center justify-between gap-4">
                <div className="text-center">Pronóstico de PM:</div>
                <div className="text-center">Lunes<br />12</div>
                <div className="text-center">Martes<br />40</div>
                <div className="text-center">Miércoles<br />22</div>
              </div>
            </div>
            <div className="mt-2 bg-[#2b2f48]/60 p-2 rounded-full text-center">
              Ubicación: <strong>Madrid, España</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de imagen */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center px-8 pt-8 lg:px-12 lg:pt-0">
        <div className="w-full max-w-full h-auto aspect-square rounded-full shadow-lg overflow-hidden">
          <img
            src="/tierra.gif"
            alt="Tierra"
            className="w-full h-full object-cover scale-90"
            style={{ animationPlayState: "paused" }}
          />
        </div>
      </div>
    </div>
  );
}
