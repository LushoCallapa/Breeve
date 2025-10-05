import WeeklyForecast from "../components/WeeklyForecast";

export default function CalidadAire() {
  const weeklyForecastData = [
    { day: "Hoy", value: 191, color: "bg-red-400" },
    { day: "Lunes", value: 180, color: "bg-red-400" },
    { day: "Martes", value: 174, color: "bg-red-400" },
    { day: "Miércoles", value: 160, color: "bg-red-400" },
    { day: "Jueves", value: 184, color: "bg-orange-400" },
    { day: "Viernes", value: 134, color: "bg-orange-300" },
    { day: "Sábado", value: 125, color: "bg-yellow-300" },
  ];

  const pronosticoHora = [
    { hora: "Ahora", valor: 192, gas: "CO₂ / NO₂" },
    { hora: "13:00", valor: 192, gas: "CO₂ / NO₂" },
    { hora: "14:00", valor: 192, gas: "CO₂ / NO₂" },
    { hora: "15:00", valor: 192, gas: "CO₂ / NO₂" },
    { hora: "16:00", valor: 192, gas: "CO₂ / NO₂" },
  ];

  return (
    <div className="w-full bg-[#f5f7fb] text-[#113a58] p-6 flex flex-col items-center gap-6">
      {/* Leyenda */}
      <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold mt-10 lg:mt-0">
        <span className="bg-green-300 px-3 py-1 rounded">0–50 Bueno</span>
        <span className="bg-yellow-300 px-3 py-1 rounded">51–100 Moderado</span>
        <span className="bg-orange-300 px-3 py-1 rounded">
          101–150 Perjudicial (grupos sensibles)
        </span>
        <span className="bg-red-300 px-3 py-1 rounded">
          151–200 Perjudicial
        </span>
        <span className="bg-rose-300 px-3 py-1 rounded">201–300 Peligroso</span>
        <span className="bg-purple-300 px-3 py-1 rounded">
          301+ Muy perjudicial
        </span>
      </div>

      <p className="text-center text-sm text-gray-600">
        μg/m³ = Microgramos por metro cúbico.
      </p>

      {/* Tarjeta principal */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Sección izquierda */}
        <div className="bg-[#f9b0a6] rounded-lg p-4 sm:p-6 flex-1 text-white shadow-lg">
          <div className="flex items-center justify-between">
            {/* Columna izquierda */}
            <div>
              <div>
                <p className="font-bold text-base sm:text-lg text-[#9e0c0d]">
                  La Paz, Bolivia
                </p>
                <p className="text-sm sm:text-md text-[#9e0c0d]">
                  4 de Octubre 2025
                </p>
              </div>

              <div className="bg-[#f65e5f] rounded-2xl mt-3 sm:mt-4 p-2 sm:p-3 text-center">
                <p className="text-xs sm:text-sm">PM 2.5</p>
                <p className="text-4xl sm:text-6xl font-bold leading-none">
                  191
                </p>
                <p className="text-xs sm:text-sm text-right">μg/m³</p>
              </div>
            </div>

            {/* Texto principal */}
            <p className="font-bold text-2xl sm:text-4xl text-[#9e0c0d] pt-4 sm:pt-8">
              Perjudicial
            </p>

            {/* Imagen */}
            <div className="text-right">
              <img
                src="/mask.png"
                alt="Ícono de mascarilla"
                className="w-16 sm:w-24 mx-auto mt-2 opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Pronóstico por hora */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
          <h2 className="font-bold text-lg text-[#113a58] mb-2">
            Pronóstico por hora
          </h2>
          <p className="text-xs text-gray-600 mb-3">
            Pronóstico del Índice de Calidad del Aire por Partículas Finas (PM)
          </p>

          <div className="grid grid-cols-5 gap-3">
            {pronosticoHora.map((item) => (
              <div
                key={item.hora}
                className="text-center border rounded-lg p-2 bg-[#fde5e5] text-[#c14b4b]"
              >
                <p className="font-semibold">{item.hora}</p>
                <p className="text-lg font-bold">{item.valor}</p>
                <p className="text-xs text-gray-700">{item.gas}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pronóstico por día */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl">
        <h2 className="font-bold text-lg text-[#113a58] mb-2">
          Pronóstico por día
        </h2>
        <p className="text-xs text-gray-600 mb-4">
          Pronóstico del Índice de Calidad del Aire por Partículas Finas (PM)
        </p>

        <WeeklyForecast forecasts={weeklyForecastData} />
      </div>
    </div>
  );
}
