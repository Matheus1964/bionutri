import React, { useState } from 'react'
import HeaderStyle from './Header.module.css'
import Logo from "../../Assets/logo.png"
import Triangle from "../../Assets/triangle.png"
import UserIcon from "../../Assets/user-icon.png"

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userMenuVisible, setUserMenuVisible] = useState(false)

  function toggleUserMenu() {
    setUserMenuVisible(!userMenuVisible)
  }

  function openNav() {
    if(window.innerWidth < 450){
      document.getElementById("mySidenav").style.width = "100%"
    } else {
      document.getElementById("mySidenav").style.width = "250px"
    }
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
  }

  const userMenu = isLoggedIn && userMenuVisible && (
    <div class={HeaderStyle.userMenu}>
      <a href="#">Meus Dados</a>
      <a href="#">Consultas</a>
      <a href="#">Sair</a>
    </div>
  );

  return (
    <header class={HeaderStyle.header}>
      <div class={HeaderStyle.divAlign}>
        <div class={HeaderStyle.hamburgerMenu} onClick={openNav}> 
          <span class={HeaderStyle.line}></span> 
          <span class={HeaderStyle.line}></span> 
          <span class={HeaderStyle.line}></span>  
        </div>
      
        <div class={HeaderStyle.logoDiv}>
          <a href="/"><img class={HeaderStyle.logoImg} src={Logo} alt='Logotipo do site'/></a>
        </div>

        <nav class={HeaderStyle.menu}>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Consulta</a></li>
          </ul>
        </nav>
        
        {isLoggedIn ? (
          <div class={HeaderStyle.action} onClick={toggleUserMenu}>
            <img class={HeaderStyle.userIcon} src={UserIcon}/>
            <img class={HeaderStyle.icon} src={Triangle}/>
            {userMenu}
            
          </div>
        ) : (
          <div class={HeaderStyle.loginRegister}>
            <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Registrar</a></li>
          </ul>
          </div>
        )}
      </div>

      <div id="mySidenav" class={HeaderStyle.sidenav}>
        <a href="javascript:void(0)" class={HeaderStyle.closebtn} onClick={closeNav}>&times;</a>
        <a href="/">Início</a>
        <a href="#">Contato</a>
        <a href="#">Sobre</a>
        <a href="#">Consulta</a>
        {!isLoggedIn ? 
        (
          <>
            <a href="#">Login</a>
            <a href="#">Registrar</a> 
            
          </>)
          :
            <></>
        }
        
      </div>  

    </header>
    
  );
}

export default Header;
