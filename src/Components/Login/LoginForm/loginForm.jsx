import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthGoogleContext } from '../../../Contexts/authGoogle'

import Styles from './loginForm.module.css';
import Porta from '../../../Assets/Login/porta.png';
import Logo from '../../../Assets/Login/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext)

  function navigate() {
    window.location.href = "/"
  }

   async function loginGoogle(){
    await signInGoogle();
   }
  const [visible, setVisibility] = useState(false);

  const usePasswordToggle = () => {
    const Icon = (
      <FontAwesomeIcon
        icon={visible ? faEyeSlash : faEye}
        onClick={() => setVisibility((visibility) => !visibility)}
      />
    );

    const InputType = visible ? 'text' : 'password';

    return [InputType, Icon];
  };

  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  if(!signed){
    return (
      <div className={Styles.container}>
        <img className={Styles.porta} src={Porta} alt="Pessoa abrindo porta" />
        <div className={Styles.conteudo}>
          <img className={Styles.logo} src={Logo} alt="Bionutri Logo" />
          <div className={Styles.entrar}>
            <button type="button" className={Styles.botaoGoogle} onClick={loginGoogle}>
              Entrar com Google
            </button>
            <button type="button" className={`${Styles.botaoGoogle} ${Styles.botaoFacebook}`}>
              Entrar com Facebook
            </button>
          </div>
          <div className={Styles.login}>
            <p className={Styles.ou}>OU</p>
            <input placeholder="Login" type="text" maxLength="40" minLength="2" required />
            <div className={Styles.conectado}>
              <label className={Styles.checkboxLabel}>
                <input type="checkbox" />
                Permanecer Conectado
              </label>
              <Link className={Styles.esqueceu} to="#">Esqueceu Sua Senha?</Link>
            </div>
            <div className={Styles.senha}>
              <input placeholder="Senha" maxLength="40" minLength="2" required type={PasswordInputType} />
              <label className={Styles.passwordIcon}>{ToggleIcon}</label>
            </div>
            <p>
              Não tem uma conta? <Link to="#">Inscrever-se</Link>
            </p>
            <button className={Styles.iniciar}>Iniciar Sessão</button>
          </div>
        </div>
      </div>
    )
  } else {
    return ( 
      <div>{navigate()}</div>
    )
  }
  
};

export default LoginForm;
