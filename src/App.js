import React from 'react'
import Home from "./components/Home";
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import PokeDetalle from './components/PokeDetalle';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokeDetalle/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App