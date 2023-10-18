import introstyles from "./Intro.module.css"
import Banner from "../../Assets/Home/intro-banner.png"
import { Link } from "react-router-dom"

function Intro(){
  return(
    <div class={introstyles.container}>
      <div class={introstyles.descricao}>
        <h2>Software de Nutrição completo com as melhores soluções!</h2>
        <p>Tudo que o Nutricionista precisa para facilitar a rotina, gerir seu consultório e fidelizar pacientes - em um só lugar.</p>
        <div class={introstyles.botoes}>
          <Link to ="">
            <button class={introstyles.consultabtn}>Marque uma Consulta agora mesmo</button>
          </Link>
          <Link to ="">
            <button class={introstyles.acessarbtn}>Acessar</button>
          </Link>
        </div>
      </div>
      <div class={introstyles.containerimg}>
        <img src={Banner} alt="Banner"/>
      </div>
    </div>
  )
}
export default Intro;