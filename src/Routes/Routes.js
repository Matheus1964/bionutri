import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../Screens/Home/Home";
import Contato from "../Screens/Contato/index";

function AppRoutes() {
  return (
    // Rotas

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contato />} />
          

          
       </Routes>
      
    </Router>
  );
}

export default AppRoutes;