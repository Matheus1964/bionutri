import { auth, googleProvider } from "../../../Services/firebaseConfig";
import { Link } from 'react-router-dom'
import {
  signInWithPopup,
} from "firebase/auth";
import Styles from './loginForm.module.css'
import Porta from '../../../Assets/Login/porta.png'
import Logo from '../../../Assets/Login/logo.png'

const Auth = () => {

  /*
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }; */

  return (
    <div className={Styles.container}> 

      <img className={Styles.porta} src={Porta} alt="Pessoa abrindo porta" />
     
      <div className={Styles.conteudo}>

        <img className={Styles.logo} src={Logo} alt="Bionutri Logo" />

        <div className={Styles.entrar}>
          <button /* onClick={signInWithGoogle} */ type="button" className={Styles.botaoGoogle}>
            Entrar com google
          </button>
          <button type="button" className={Styles.botaoGoogle}>
            Entrar com Facebook
          </button>
        </div>
  
        <div className={Styles.login}>
          <p className={Styles.ou}>OU</p>
          <input placeholder="Login" type="name" maxLength="40" minLength="2" required />
  
          <div className={Styles.conectado}>
            <label>
              <input type="checkbox"/>
              Permanecer Conectado
            </label>

         
            <Link href="#">Esqueceu Sua Senha?</Link>
          </div>
  
          <input placeholder="Senha" type="password" maxLength="40" minLength="2" required />
          <p>
            Não tem uma conta? <Link href="#">Inscrever-se</Link>
          </p>
          <button className={Styles.iniciar}>Iniciar Sessão</button>
        </div>
      </div>
      </div>
  );
};
export default Auth;
