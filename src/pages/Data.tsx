import WeeklyForecast from "../components/WeeklyForecast";

export default function CalidadAire() {
  const weeklyForecastData = [
    { day: "Hoy", value: 51, color: "bg-yellow-400" },
    { day: "Lunes", value: 55, color: "bg-yellow-400" },
    { day: "Martes", value: 54, color: "bg-yellow-400" },
    { day: "Miércoles", value: 52, color: "bg-yellow-400" },
    { day: "Jueves", value: 52, color: "bg-yellow-400" },
    { day: "Viernes", value: 53, color: "bg-yellow-300" },
    { day: "Sábado", value: 55, color: "bg-yellow-300" },
  ];

  const pronosticoHora = [
    { hora: "Ahora", valor: 51, gas: "CO₂ / NO₂" },
    { hora: "13:00", valor: 53, gas: "CO₂ / NO₂" },
    { hora: "14:00", valor: 53, gas: "CO₂ / NO₂" },
    { hora: "15:00", valor: 52, gas: "CO₂ / NO₂" },
    { hora: "16:00", valor: 51, gas: "CO₂ / NO₂" },
  ];

  return (
    <div className="w-full bg-[#f5f7fb] text-[#113a58] p-6 flex flex-col items-center gap-6">
      {/* Leyenda */}
      <div className="w-full mt-16 lg:mt-0 overflow-x-auto overflow-y-hidden">
        <div className="flex gap-2 px-2 py-2 min-w-max lg:justify-center">
          <span className="bg-green-300 px-3 py-1 rounded flex-shrink-0 whitespace-nowrap">
            0–50 Bueno
          </span>
          <span className="bg-yellow-300 px-3 py-1 rounded flex-shrink-0 whitespace-nowrap">
            51–100 Moderado
          </span>
          <span className="bg-orange-300 px-3 py-1 rounded flex-shrink-0 whitespace-nowrap">
            101–150 Perjudicial (grupos sensibles)
          </span>
          <span className="bg-red-300 px-3 py-1 rounded flex-shrink-0 whitespace-nowrap">
            151–200 Perjudicial
          </span>
          <span className="bg-rose-300 px-3 py-1 rounded flex-shrink-0 whitespace-nowrap">
            201–300 Peligroso
          </span>
          <span className="bg-purple-300 px-3 py-1 rounded flex-shrink-0 whitespace-nowrap">
            301+ Muy perjudicial
          </span>
        </div>
      </div>

      <p className="text-center text-sm text-gray-600">
        μg/m³ = Microgramos por metro cúbico.
      </p>

      {/* Tarjeta principal */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Sección izquierda */}
        <div className="bg-yellow-300 rounded-lg p-4 sm:p-6 flex-1 text-white shadow-lg">
          <div className="flex items-center justify-between">
            {/* Columna izquierda */}
            <div>
              <div>
                <p className="font-bold text-base sm:text-lg text-orange-900">
                  La Paz, Bolivia
                </p>
                <p className="text-sm sm:text-md text-[#9e0c0d]">
                  4 de Octubre 2025
                </p>
              </div>

              <div className="bg-yellow-100  rounded-2xl mt-3 sm:mt-4 p-2 sm:p-3 text-center text-orange-700">
                <p className="text-xs sm:text-sm">PM 2.5</p>
                <p className="text-4xl sm:text-6xl font-bold leading-none">
                  51
                </p>
                <p className="text-xs sm:text-sm text-right">μg/m³</p>
              </div>
            </div>

            {/* Texto principal */}
            <p className="font-bold text-2xl sm:text-4xl text-[#9e0c0d] pt-4 sm:pt-8">
              Moderado
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
        <WeeklyForecast forecasts={weeklyForecastData} />
        <p className="text-sm text-gray-700 mt-4 leading-relaxed">
          El PM2.5 son partículas muy pequeñas que están en el aire, producidas por el humo de autos, fábricas, incendios o la quema de basura y leña. Al respirar, ingresan a los pulmones y pasan a la sangre, provocando enfermedades como asma, bronquitis, neumonía, problemas cardíacos, derrames cerebrales y cáncer de pulmón. Los más afectados son los niños, las personas mayores y las mujeres embarazadas.
        </p>
      </div>
    </div>
  );
}