import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import StartEarthScreen from "./pages/StartEarthScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/earth" element={<StartEarthScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
