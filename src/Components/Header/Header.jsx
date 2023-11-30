import { AuthGoogleContext } from '../../Contexts/authGoogle'
import React, { useState, useContext } from 'react'
import HeaderStyle from './Header.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import Triangle from '../../Assets/triangle.png'
import aaaaa from '../../Assets/user-icon.png'

function Header() {
  const [userMenuVisible, setUserMenuVisible] = useState(false)
  const consultaRoute = '/consulta'
  const { signed, SignOut } = useContext(AuthGoogleContext)
  const { user: userJson } = useContext(AuthGoogleContext)
  const user = JSON.parse(userJson)

  const userRole =
    user?.email === 'bionutripi@gmail.com' ||
    user?.email === 'matheusao@unipam.edu.br'
      ? true
      : false

  function toggleUserMenu() {
    setUserMenuVisible(!userMenuVisible)
  }

  function openNav() {
    if (window.innerWidth < 450) {
      document.getElementById('mySidenav').style.width = '100%'
    } else {
      document.getElementById('mySidenav').style.width = '250px'
    }
  }

  function closeNav() {
    document.getElementById('mySidenav').style.width = '0'
  }

  const userMenu = signed && userMenuVisible && (
    <div class={HeaderStyle.userMenu}>
      <Link to="/Perfil">Meus Dados</Link>
      <a href={consultaRoute}>Consultas</a>
      <a href="#" onClick={SignOut}>
        Sair
      </a>
    </div>
  )

  return (
    <header class={HeaderStyle.header}>
      <div class={HeaderStyle.divAlign}>
        <div class={HeaderStyle.hamburgerMenu} onClick={openNav}>
          <span class={HeaderStyle.line}></span>
          <span class={HeaderStyle.line}></span>
          <span class={HeaderStyle.line}></span>
        </div>

        <div class={HeaderStyle.logoDiv}>
          <a href="/">
            <img
              class={HeaderStyle.logoImg}
              src={Logo}
              alt="Logotipo do site"
            />
          </a>
        </div>

        <nav class={HeaderStyle.menu}>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Contato">Contato</Link>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <Link to="/Consulta">Consulta</Link>
            </li>
            {userRole && (
              <li>
                <Link to="/Adm">Administrador</Link>
              </li>
            )}
          </ul>
        </nav>

        {signed ? (
          <div class={HeaderStyle.action} onClick={toggleUserMenu}>
            <img class={HeaderStyle.userIcon} src={user?.photoURL} />
            <img class={HeaderStyle.icon} src={Triangle} />
            {userMenu}
          </div>
        ) : (
          <div class={HeaderStyle.loginRegister}>
            <ul>
              <li>
                <a href="Login">Login</a>
              </li>
              <li>
                <Link to="/Registrar">Registrar</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div id="mySidenav" class={HeaderStyle.sidenav}>
        <a
          href="javascript:void(0)"
          class={HeaderStyle.closebtn}
          onClick={closeNav}
        >
          &times;
        </a>
        <Link to="/">Início</Link>
        <Link to="/Contato">Contato</Link>
        <a href="#">Sobre</a>
        <a href="/consulta">Consulta</a>
        {!signed ? (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/Registrar">Registrar</Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  )
}

export default Header
