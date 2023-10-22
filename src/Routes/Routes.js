import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../Screens/Home/Home";

function AppRoutes() {
  return (
    // Rotas

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          

          
       </Routes>
      
    </Router>
  );
}

export default AppRoutes;