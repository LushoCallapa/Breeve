import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Information from './pages/Information'
import AirQualityMap from './pages/Map'
import WeeklyForecast from './pages/Data'

function App() {
  const weeklyForecastData = [
    { day: 'Hoy', value: 191, color: 'bg-red-400' },
    { day: 'Lunes', value: 180, color: 'bg-red-400' },
    { day: 'Martes', value: 174, color: 'bg-red-400' },
    { day: 'Miércoles', value: 160, color: 'bg-red-400' },
    { day: 'Jueves', value: 184, color: 'bg-orange-400' },
    { day: 'Viernes', value: 134, color: 'bg-orange-300' },
    { day: 'Sábado', value: 125, color: 'bg-yellow-300' },
  ]; 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/mapa" element={<AirQualityMap />} />
          <Route path="/data" element={<WeeklyForecast forecasts={weeklyForecastData}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
