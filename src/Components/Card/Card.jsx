import React from "react"
import cardStyle from './Card.module.css'

function Card({id, nome, clinica, especialidades, uf, cidade, localizacao, imagemPerfil, handleClick}){

  return(
    <div class={cardStyle.divCard}>
      <img class={cardStyle.userImg} src={imagemPerfil}/>

      <div class={cardStyle.textContent}>
        <p class={cardStyle.nameLink}><b>{nome}</b></p>
        <p><b>Clínica: </b>{clinica}</p>
        <p><b>Especialidade: </b>{especialidades}</p>
        <p><b>UF:</b> {uf}</p>
        <p><b>Cidade: </b>{cidade}</p>
        <p><b>Localização:</b> {localizacao}</p>
        
      </div>
      <div class={cardStyle.buttonDiv}>
        <button class={cardStyle.btnCard} onClick={handleClick}>Conversar</button>
      </div>
    
    </div>
  )

}

export default Card;
