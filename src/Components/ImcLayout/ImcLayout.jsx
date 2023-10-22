import ImcLayoutStyles from './ImcLayout.module.css'
import FormIMC from '../FormIMC/FormImc'
import React from 'react'

function ImcLayout(){
  
  return (
    <div class={ImcLayoutStyles.divContainer}>
      <div class={ImcLayoutStyles.divClassificacao}>
        <h3 class={ImcLayoutStyles.Subtitle}>Calcule seu IMC</h3>
        <h4>IMC - Classificação</h4>
        <p>
          Menor que 16 - Magreza grave
        </p>
        <p>
          16 a menor que 17 - Magreza moderada
        </p>
        <p>
          17 a menor que 18,5 - Magreza leve
        </p>
        <p>
          18,5 a menor que 25 - Saudável
        </p>
        <p>
          25 a menor que 30 - Sobrepeso
        </p>
        <p>
          30 a menor que 35 - Obesidade Grau I
        </p>
        <p>
          35 a menor que 40 - Obesidade Grau II (considerada severa)
        </p>
        <p>
        Maior que 40 - Obesidade Grau III (considerada mórbida)
        </p>
      </div >
        
      <div class={ImcLayoutStyles.FormImcDiv}>
        <FormIMC/>
      </div>
    </div>
  )

}

export default ImcLayout