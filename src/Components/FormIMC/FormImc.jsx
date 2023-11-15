import FormImcStyles from './FormImc.module.css';
import React, { useState } from 'react';

function FormIMC(){

  const [valorImc, setValorImc] = useState(null);
  const [imcNivel, setImcNivel] = useState(null);
  const [inputIdadeErro, setInputIdadeErro] = useState('')
  const [inputPesoErro, setInputPesoErro] = useState('')
  const [inputAlturaErro, setInputAlturaErro] = useState('')
  const [divVisibilidade, setDivVisibilidade] = useState(false)

  const classesIdade = `${FormImcStyles.inputForm} ${inputIdadeErro} `
  const classesAltura = `${FormImcStyles.inputForm} ${inputAlturaErro}`
  const classesPeso = `${FormImcStyles.inputForm} ${inputPesoErro}`

  function trocarPonto(numero){
    return numero.replace(".", ",");
  }

  function calcularIMC(){
    let idade, altura, peso

    idade = parseFloat(document.getElementById("idade").value);
    altura = parseFloat(document.getElementById("altura").value);
    peso = parseFloat(document.getElementById("peso").value);

    if(Number.isNaN(idade) && Number.isNaN(altura) && Number.isNaN(peso)){
      setInputIdadeErro(FormImcStyles.inputErro)
      setInputAlturaErro(FormImcStyles.inputErro)
      setInputPesoErro(FormImcStyles.inputErro)
    } else if(Number.isNaN(idade) && Number.isNaN(altura)){
      setInputIdadeErro(FormImcStyles.inputErro)
      setInputAlturaErro(FormImcStyles.inputErro)
    } else if(Number.isNaN(idade) && Number.isNaN(peso)){
      setInputIdadeErro(FormImcStyles.inputErro)
      setInputPesoErro(FormImcStyles.inputErro)
    } else if(Number.isNaN(altura) && Number.isNaN(peso)){
      setInputAlturaErro(FormImcStyles.inputErro)
      setInputPesoErro(FormImcStyles.inputErro)
    } else if(Number.isNaN(idade)){
      setInputIdadeErro(FormImcStyles.inputErro)
    } else if(Number.isNaN(altura)){
      setInputAlturaErro(FormImcStyles.inputErro)
    } else if(Number.isNaN(peso)){
      setInputPesoErro(FormImcStyles.inputErro)
    } else {
      let imc = peso / ((altura / 100) ** 2)
      imc = imc.toFixed(2)
      let valorNovo = trocarPonto(imc)

      setValorImc(valorNovo)

      if (imc < 16){
        setImcNivel("Magreza grave");
      } else if(imc>= 16 && imc<17){
        setImcNivel("Magreza moderada");
      } else if(imc>= 17 && imc<18.5){
        setImcNivel("Magreza leve");
      } else if(imc>= 18.5 && imc<25){
        setImcNivel("Saudável");
      } else if(imc>= 25 && imc<30){
        setImcNivel("Sobrepeso")
      } else if(imc>= 30 && imc<35){
        setImcNivel("Obesidade Grau I");
      } else if(imc>= 35 && imc<40){
        setImcNivel("Obesidade Grau II (considerada severa)");
      } else {
        setImcNivel("Obesidade Grau III (considerada mórbida)");
      }

      setDivVisibilidade(true)
    }

  }

  function inputCheck(event, setClasseCampo){
    const valorCampo = parseFloat(event.target.value)
    if (isNaN(valorCampo) || valorCampo <= 0) {
      setClasseCampo(FormImcStyles.inputErro)
    } else {
      setClasseCampo('')
    }
  }

  function closeResults(){
    setDivVisibilidade(false)
  }

  return (
    <div class={FormImcStyles.formDiv}>
      <div class={FormImcStyles.formImc}>

        <p class={FormImcStyles.formSubtitle}>Idade</p>
        <div class={FormImcStyles.inputLine}>
          <input class={classesIdade} 
          type="number" 
          id="idade" 
          name="idade" 
          placeholder="Ex: 35" 
          onBlur={(e) => inputCheck(e, setInputIdadeErro)}
          onFocus={() => setInputIdadeErro('')}/>
          <label class={FormImcStyles.textLabel}>anos</label>
          {inputIdadeErro ===  FormImcStyles.inputErro && (
            <p class={FormImcStyles.aviso}>Valor inválido</p>
          )}
        </div>

        <p class={FormImcStyles.formSubtitle}>Altura</p>
        <div class={FormImcStyles.inputLine}>
          <input class={classesAltura} 
          type="number" 
          id="altura" 
          name="altura" 
          placeholder="Ex: 162" 
          onBlur={(e) => inputCheck(e, setInputAlturaErro)}
          onFocus={() => setInputAlturaErro('')}/>
          <label class={FormImcStyles.textLabel}>cm</label>
          {inputAlturaErro === FormImcStyles.inputErro && (
            <p class={FormImcStyles.aviso}>Valor inválido</p>
          )}
        </div>

        <p class={FormImcStyles.formSubtitle}>Peso</p>
        <div class={FormImcStyles.inputLine}>
          <input class={classesPeso} 
          type="number" 
          id="peso" 
          name="peso" 
          placeholder="Ex: 62,5" 
          onBlur={(e) => inputCheck(e, setInputPesoErro)}
          onFocus={() => setInputPesoErro('')}/>
          <label class={FormImcStyles.textLabel}>kg</label>
          {inputPesoErro === FormImcStyles.inputErro && (
            <p class={FormImcStyles.aviso}>Valor inválido</p>
          )}
        </div>

        <div class={FormImcStyles.divBtnCalc}>
          <button class={FormImcStyles.btnCalc} onClick={calcularIMC}>Calcular</button>
        </div>

        <div class={FormImcStyles.divResult}
        style={{ display: divVisibilidade ? 'block' : 'none' }}>
          <h4>Resultado</h4>
          <p>Seu IMC é: {valorImc}</p>
          <p>Classificação: {imcNivel}</p>
          <p class={FormImcStyles.buttonAlign}><button class={FormImcStyles.buttonClose} onClick={closeResults}>Fechar</button></p>
        </div>
      </div>
    </div>
  )
}

export default FormIMC