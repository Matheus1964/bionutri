import Styles from "./Match.module.css"
import Banner from "../../Assets/Home/match-banner.png"
import { Link } from "react-router-dom"

function Match(){
  return(
    <div classnames={Styles.container}>
      <div classnames={Styles.containerimg}>
        <img src={Banner} alt="Banner"/>
      </div>
      <div classnames={Styles.descricao}>
        <h2>O match perfeito!</h2>
        <p classnames={Styles.p1}>Tenha mais visibilidade com a Busca por Nutricionista</p>
        <p>Uma solução pensada para conectar pacientes a nutricionistas</p>
        <div classnames={Styles.botao}>
          <Link to ="">
            <button>Encontre um profissional</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Match;