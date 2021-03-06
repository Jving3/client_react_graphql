import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Produccion from '../src/components/produccion/Produccion';
import Proyectos from "./components/proyectos/Proyectos";
import NotFound from './pages/NotFounf';
import Barra from "./components/layout/Barra";
import AutoStore from "./components/autostore/Autostore";

import ProyectoState from './context/proyectos/proyectoState';


function App() {
  
  
  return (
      <ProyectoState>
          <Router> 
              <Routes>
                <Route path="/" element={<Barra/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/nueva-cuenta" element={<NuevaCuenta/>}/>
                <Route path="/proyectos" element={<Proyectos/>}/>
                <Route path="/produccion" element={<Produccion/>}/>
                <Route path="/autostore" element={<AutoStore/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
          </Router>
      </ProyectoState>
  );
}

export default App;
