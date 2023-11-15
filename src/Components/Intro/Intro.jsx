import Styles from "./Intro.module.css"
import Banner from "../../Assets/Home/intro-banner.png"
import { Link } from "react-router-dom"
import React from "react"

function Intro(){
  return(
    <div className={Styles.container}>
      <div className={Styles.descricao}>
        <h2>Software de Nutrição completo com as melhores soluções!</h2>
        <p>Tudo que o Nutricionista precisa para facilitar a rotina, gerir seu consultório e fidelizar pacientes - em um só lugar.</p>
        <div className={Styles.botoes}>
          <Link to ="">
            <button>Marque uma Consulta agora mesmo</button>
          </Link>
          <Link to ="">
            <button>Acessar</button>
          </Link>
        </div>
      </div>
      <div className={Styles.containerimg}>
        <img src={Banner} alt="Banner"/>
      </div>
    </div>
  )
}
export default Intro;