import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Information from './pages/Information'
import AirQualityMap from './pages/Map'
import Data from './pages/Data'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/mapa" element={<AirQualityMap />} />
          <Route path="/data" element={<Data/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
