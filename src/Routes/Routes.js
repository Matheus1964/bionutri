import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Fragment } from 'react'
import { useState } from 'react'

import Home from '../Screens/Home/Home'
import PrivateRoutes from '.'
import Cadastro from '../Screens/Cadastro/index'
import Login from '../Screens/Login/Login'
import Profile from '../Screens/Private/Profile/index'
import Nutri from '../Screens/Nutricionistas/Nutricionistas'
import { Chat } from '../Screens/Nutricionistas/Chat'
import Adm from '../Screens/Private/Admin'
import Header from '../Components/Header/Header'
import TesteContext from '../Contexts/texteContext'
import Contato from '../Screens/Contato'
import Sobre from '../Screens/Sobre'

function AppRoutes() {
  const [num, setNum] = useState(0)
  return (
    // Rotas

    <TesteContext.Provider value={setNum}>
      <Router>
        <Header />
        <Fragment>
          <Routes>
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Registrar" element={<Cadastro />} />
            <Route path="/" element={<Home />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Consulta" element={<Nutri />} />

            <Route path="/Chat/:nutriId" element={<PrivateRoutes />}>
              <Route path="/Chat/:nutriId" element={<Chat />} />
            </Route>
            <Route path="/Perfil" element={<PrivateRoutes />}>
              <Route path="/Perfil" element={<Profile />} />
            </Route>
            <Route path="/Adm" element={<PrivateRoutes />}>
              <Route path="/Adm" element={<Adm />} />
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </TesteContext.Provider>
  )
}

export default AppRoutes
