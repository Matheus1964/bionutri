import Styles from './Match.module.css'
import Banner from '../../Assets/Home/match-banner.png'
import { Link } from 'react-router-dom'
import React from 'react'

function Match() {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerimg}>
        <img src={Banner} alt="Banner" />
      </div>
      <div className={Styles.descricao}>
        <h2>O match perfeito!</h2>
        <p className={Styles.p1}>
          Tenha mais visibilidade com a Busca por Nutricionista
        </p>
        <p className={Styles.p2}>
          Uma solução pensada para conectar pacientes a nutricionistas
        </p>
        <div className={Styles.botao}>
          <Link to="/Consulta">
            <button>Encontre um profissional</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Match
