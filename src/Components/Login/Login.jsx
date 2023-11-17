import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import LoginForm from "./LoginForm/LoginForm"
import Fundo from "../../Assets/Login/fundo.svg"
import Styles from './Login.module.css';

import React from "react"

function Login (){
  return (
    <>
      <Header/>
      <img className={Styles.imagem} src={Fundo} alt="Fundo verde" />
      <div className={Styles.container}>
        <LoginForm/>
      </div>
      <Footer/>
    </>
  )
}
export default Login;