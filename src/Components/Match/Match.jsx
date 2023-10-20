import matchstyles from "./Match.module.css"
import Banner from "../../Assets/Home/match-banner.png"
import { Link } from "react-router-dom"

function Match(){
  return(
    <div class={matchstyles.container}>
      <div class={matchstyles.containerimg}>
        <img src={Banner} alt="Banner"/>
      </div>
      <div class={matchstyles.descricao}>
        <h2>O match perfeito!</h2>
        <p class={matchstyles.p1}>Tenha mais visibilidade com a Busca por Nutricionista</p>
        <p>Uma solução pensada para conectar pacientes a nutricionistas</p>
        <div class={matchstyles.botao}>
          <Link to ="">
            <button>Encontre um profissional</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Match;