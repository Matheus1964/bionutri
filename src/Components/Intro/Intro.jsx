import Styles from "./Intro.module.css"
import Banner from "../../Assets/Home/intro-banner.png"
import { Link } from "react-router-dom"

function Intro(){
  return(
    <div classnames={Styles.container}>
      <div classnames={Styles.descricao}>
        <h2>Software de Nutrição completo com as melhores soluções!</h2>
        <p>Tudo que o Nutricionista precisa para facilitar a rotina, gerir seu consultório e fidelizar pacientes - em um só lugar.</p>
        <div classnames={Styles.botoes}>
          <Link to ="">
            <button classnames={Styles.consultabtn}>Marque uma Consulta agora mesmo</button>
          </Link>
          <Link to ="">
            <button classnames={Styles.acessarbtn}>Acessar</button>
          </Link>
        </div>
      </div>
      <div classnames={Styles.containerimg}>
        <img src={Banner} alt="Banner"/>
      </div>
    </div>
  )
}
export default Intro;