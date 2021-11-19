import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Painel from './pages/Painel';
import Historico from './pages/Historico';
import NovoGasto from './pages/NovoGasto';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Painel/>} />
        <Route path='/novogasto' element={<NovoGasto/>} />
        <Route path='/historico' element={<Historico/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
