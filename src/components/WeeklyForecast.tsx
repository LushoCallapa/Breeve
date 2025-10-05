import React from 'react';

interface WeeklyForecastData {
  day: string;
  value: number;
  color: string;
}

interface WeeklyForecastProps {
  forecasts: WeeklyForecastData[];
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ forecasts }) => {
  const maxValue = 300;

  return (
    <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Pronóstico por día</h3>
      <p className="text-sm text-gray-600 mb-8">
        Pronóstico del Índice de Calidad del Aire por Partículas Finas (PM)
      </p>

      {/* Contenedor con scroll horizontal si no entra */}
      <div className="overflow-x-auto">
        <div className="relative min-w-max px-2">
          {/* Líneas de referencia */}
          <div className="absolute inset-0 flex flex-col justify-between h-48 pointer-events-none">
            {[300, 250, 200, 150, 100, 50, 0].map((value) => (
              <div key={value} className="relative">
                <div className="border-t border-gray-200 w-full"></div>
                <span className="absolute right-2 -top-2 text-xs text-gray-400">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Gráfico */}
          <div className="flex items-end justify-between lg:h-60 h-52 pt-4 pb-8 px-4 relative z-10">
            {forecasts.map((forecast, index) => {
              const height = (forecast.value / maxValue) * 100;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center flex-none mx-3"
                >
                  <div className="relative flex items-end h-40">
                    <div
                      className={`rounded-t-md min-w-[32px] ${forecast.color} relative shadow-sm transition-all duration-300 hover:shadow-md`}
                      style={{ height: `${height}%` }}
                    >
                      <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow-sm">
                        {forecast.value}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 mt-3 text-center">
                    {forecast.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
