import React from "react";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
}

export default App;
