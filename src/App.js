import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Produccion from '../src/components/produccion/Produccion';
import Proyectos from "./components/proyectos/Proyectos";
import NotFound from './pages/NotFounf';
import Barra from "./components/layout/Barra";


function App() {
  
  
  return (

      <Router> 
        <Routes>
          <Route path="/" element={<Barra/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/nueva-cuenta" element={<NuevaCuenta/>}/>
          <Route path="/produccion" element={<Produccion/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
     
  );
}

export default App;
