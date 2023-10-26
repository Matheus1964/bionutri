import React, { useState } from 'react';
import HeaderStyle from './Header.module.css';
import Logo from "../../Assets/logo.png"

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  function toggleUserMenu() {
    setUserMenuVisible(!userMenuVisible);
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
        <div class={HeaderStyle.hamburgerMenu}> 
          <span class={HeaderStyle.line}></span> 
          <span class={HeaderStyle.line}></span> 
          <span class={HeaderStyle.line}></span>  
        </div>

      
        <div class={HeaderStyle.logoDiv}>
          <a href="#"><img class={HeaderStyle.logoImg} src={Logo} alt='Logotipo do site'/></a>
        </div>
        <nav class={HeaderStyle.menu}>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Consulta</a></li>
          </ul>
        </nav>
        {isLoggedIn ? (
          <div class={HeaderStyle.action} onClick={toggleUserMenu}>
            <img  class={HeaderStyle.userIcon}/>
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
      


    </header>

    
  );
}

export default Header;
