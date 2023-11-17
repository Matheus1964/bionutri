import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../Screens/Home/Home";
import Nutricionistas from "../Screens/Nutricionistas/Nutricionistas";
import Contato from '../Screens/Contato/index'
import Login from '../Components/Login/Login'

function AppRoutes() {
  return (
    // Rotas

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulta" element={<Nutricionistas />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/login" element={<Login/>}/>
       </Routes>
    </Router>
  );
}

export default AppRoutes;