import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../Screens/Home/Home";
import PrivateRoutes from ".";
import Login from "../Screens/Login/index";
import Profile from "../Screens/Profile";
import { Fragment } from "react";

function AppRoutes() {
  return (
    // Rotas

    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Perfil" element={<PrivateRoutes />} >
            <Route path="/Perfil" element={<Profile />} />
          </Route>

          
       </Routes>
      </Fragment>
    </Router>
  );
}

export default AppRoutes;