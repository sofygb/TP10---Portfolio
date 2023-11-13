import logo from './logo.svg';
import './App.css';
import UsuarioProvider from './context/UsuarioContext';
import CreationProvider from './context/CreationContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Login from './components/Login';
import Home from './components/Home';
import InfoPersonal from './components/InfoPersonal';
import MisCreaciones from './components/MisCreaciones';
import Perfil from './components/Perfil';
import Favoritos from './components/Favoritos';
import DetalleCreacion from './components/DetalleCreacion';

function App() {
  return (
    <UsuarioProvider>
      <CreationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route element={<Layout />}>
              <Route path="/info-personal" element={<InfoPersonal />}></Route>
              <Route path="/mis-creaciones" element={<MisCreaciones />}></Route>
              <Route path="/detalle-creacion" element={<DetalleCreacion />}></Route>
              <Route path="/favoritos" element={<Favoritos />}></Route>
              <Route path="/perfil" element={<Perfil />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CreationProvider>
    </UsuarioProvider>
  );
}

export default App;
