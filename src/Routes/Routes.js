import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../Screens/Home/Home";
import Nutricionistas from "../Screens/Nutricionistas/Nutricionistas";

function AppRoutes() {
  return (
    // Rotas

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulta" element={<Nutricionistas />}/>

          
       </Routes>
      
    </Router>
  );
}

export default AppRoutes;