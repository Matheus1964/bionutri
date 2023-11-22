import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";

import Home from "../Screens/Home/Home";
import PrivateRoutes from ".";
import Login from "../Screens/Login/Login";
import Profile from "../Screens/Private/Profile/index";
import Nutri from "../Screens/Nutricionistas/Nutricionistas";
import { Chat } from "../Screens/Nutricionistas/Chat";

function AppRoutes() {
  return (
    // Rotas

    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Nutri" element={<Nutri />} />
          <Route path="/Chat/:nutriId" element={<Chat />} />
          <Route path="/Perfil" element={<PrivateRoutes />} >
            <Route path="/Perfil" element={<Profile />} />
          </Route>

          
       </Routes>
      </Fragment>
    </Router>
  );
}

export default AppRoutes;