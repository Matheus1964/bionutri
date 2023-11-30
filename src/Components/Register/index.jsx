import style from './Register.module.css'
import logo from "../../Assets/logo_register.svg"
import fundo from "../../Assets/testefundo.svg"
import IconLogin from "../../Assets/iconLogin.svg"
import IconSenha from "../../Assets/iconSenha.svg"
import IconEmail from "../../Assets/iconMsg.svg"


function Register(){
  return(
      
    <form action="">
    <img src={fundo} alt="" className={style.fundoo}/>
    <div className={style.register_app}>
      <div className={style.register_conta}>
        <h1 className={style.titulo_}>Você já tem uma conta ?</h1>
        <button className={style.register__button}>Entrar</button>
      </div>
      <div className={style.register_container}>
        <img src={logo} alt=""className={style.titulo} />
        <div className={style.matheus}> 
          <img src={IconLogin} alt="" />
          <input className={style.register_input} type="text" placeholder='Login'/>
        </div>
        <div className={style.matheus}> 
          <img src={IconSenha} alt="" />
        <input className={style.register_input} type="password" name="" placeholder='Password'/>
        </div>
        <div className={style.matheus}> 
          <img src={IconEmail} alt="" />
        <input className={style.register_input} type="email" name="" placeholder='Email'/>
        </div>
        <button className={style.register_button} autoFocus>Cadastrar</button>
      </div>
    </div>
    </form>
  )
}

export default Register;