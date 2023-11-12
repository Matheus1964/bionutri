import React from "react"
import BotaoStyle from './BotaoSexo.module.css'

function BotaoSexo({text, type, isActive, onClick}){

  const classes = `${BotaoStyle.btn} ${type === 'm' ? BotaoStyle.btnM : BotaoStyle.btnF} ${isActive ? BotaoStyle.active : ''}`

  return(
    <div>
      <button className={classes} onClick={onClick}>
          {text}
      </button>
    </div>
  )
  
}

export default BotaoSexo;