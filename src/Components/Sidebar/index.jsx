import styles from "./sideBar.module.css"
import React, { useState, useContext } from 'react'
import { AuthGoogleContext } from "../../Contexts/authGoogle";
import { Link } from 'react-router-dom'
function SideBar(){

  const { user: userJson } = useContext(AuthGoogleContext);
  const {  SignOut } = useContext(AuthGoogleContext)
  const user = JSON.parse(userJson); 
  return(
    <div className={styles.container}>
      <div className={styles.profiler}>
        <img src={user?.photoURL} alt="" className={styles.profile_img}/>
        <h1>{user?.displayName}</h1>
      </div>
      
      <div className={styles.container_menu}>
        <h2 className={styles.titulo_menu}>Alterar Senha</h2>
      </div> 
      <div className={styles.container_menu}>
        <Link to="/Consulta">
        <h2 className={styles.titulo_menu}>Consultas</h2>
        </Link>
      </div> 
      <div className={styles.container_menu}>
        <h2 className={styles.titulo_menu}>Editar Perfil</h2>
      </div> 
      <div className={styles.container_menu}>
        <h2 className={styles.titulo_menu} onClick={SignOut}>Sair</h2>
      </div> 
    </div>
  )


}

export default SideBar;