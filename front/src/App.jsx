import { Home } from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Alumnos from "./Views/Alumnos";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/alumnos" element={<Alumnos />} />
    </Routes>
  );
}

export default App;
