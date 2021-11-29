import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from './pages/Login'
import Painel from './pages/Painel';
import Historico from './pages/Historico';
import NovoGasto from './pages/NovoGasto';
import Cadastrar from './pages/Cadastrar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/painel' element={<Painel/>} />
        <Route path='/novogasto' element={<NovoGasto/>} />
        <Route path='/historico' element={<Historico/>} />
        <Route path='/cadastrar' element={<Cadastrar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
