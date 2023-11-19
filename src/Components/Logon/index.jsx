import style from './logon.module.css'
import {Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../Contexts/authGoogle'






function Logon(){
  const { signInGoogle, signed } = useContext(AuthGoogleContext)

  function navigate() {
    window.location.href = "/"
  }

   async function loginGoogle(){
    await signInGoogle();
   }
  if(!signed){
    return(

      <div className={style.container}>
  
        <div>
          <img  className={style.logon_img} src="" alt="" />
        </div>
  
        <div className={style.forns}>
          <div className={style.logo_titulo}>
            <h2 className={style.logo_tituloF}>FullDive</h2>
            <img src="" alt="" />
  
          </div>
          <div className={style.buttons}>
            <div className={style.social}>
              <img src="" alt="" />
              <button className={style.button_redes}onClick={loginGoogle}>Entrar com Google</button>
            </div>
            <div className={style.social2}>
              <img src="" alt="" />
              <button className={style.button_redes2}>Entrar com Facebook</button>
            </div>
          </div>
  
          <div className={style.dados}>
            <h2>OU</h2>
            <input type="text" placeholder='Login'/>
          </div>
  
          <div className={style.dados2}>
            <h2 className={style.teste9}>Esqueceu sua Senha?</h2>
            <input type="text" placeholder='Password'/>
          </div>
  
          <div className={style.xxx}>
            <input className={style.checkbox} type="checkbox" name=""/>
            <h2 className={style.checkbox_h2}>Permancer Conectado</h2>
            <Link to="/Cadastro"><h2 className={style.checkbox_h2_}>Criar Conta</h2></Link>
          </div>
  
          <button className={style.enviar}>Iniciar sessão</button>
  
        </div>
      </div>
    )
  } else {
    return ( 
      <div>{navigate()}</div>
    )
  }
  
}
export default Logon;