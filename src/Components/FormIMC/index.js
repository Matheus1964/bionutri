import './FormIMC.css';
import React, { useState } from 'react';

function FormIMC(){

  const [sexo, setSexo] = useState(null);

  const handleClick = (sexoSelecionado) => {
    if (sexo !== sexoSelecionado) {
      setSexo(sexoSelecionado);
    }
  };

  function trocarPonto(numero){
    return numero.replace(".", ",");
  }

  function calcularIMC(){
    let idade = parseFloat(document.getElementById("idade").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    let imc = peso / ((altura / 100) ** 2)
    imc = imc.toFixed(2)
    let valorNovo = trocarPonto(imc)
    
    
    if (imc < 16){
      alert(`Seu IMC é: ${imc}\nMagreza Grave`);
    } else if(imc>= 16 && imc<17){
      alert(`Seu IMC é: ${imc}\nMagreza moderada`);
    } else if(imc>= 17 && imc<18.5){
      alert(`Seu IMC é: ${imc}\nMagreza leve`);
    } else if(imc>= 18.5 && imc<25){
      alert(`Seu IMC é: ${valorNovo}\nSaudável`);
    } else if(imc>= 25 && imc<30){
      alert(`Seu IMC é: ${imc}\nSobrepeso`);
    } else if(imc>= 30 && imc<35){
      alert(`Seu IMC é: ${imc}\nObesidade Grau I`);
    } else if(imc>= 35 && imc<40){
      alert(`Seu IMC é: ${imc}\nObesidade Grau II`);
    } else {
      alert(`Seu IMC é: ${imc}\nObesidade Grau III`);
    }

  }


  return (

      <div className="form-imc">
        <p className="form-subtitle">Sexo</p>
        <div className="btn-line">
          <button className={`btn-mulher btn-sexo ${sexo === 'mulher' ? 'active' : ''}`} 
          onClick={() => handleClick('mulher')}>Mulher</button>
          
          <button className={`btn-homem btn-sexo ${sexo === 'homem' ? 'active' : ''}`}
          onClick={() => handleClick('homem')}>Homem</button>
        </div>

        <p className="form-subtitle">Idade</p>
        <div className="input-line">
          <input className="input-form" type="number" id="idade" name="idade" placeholder="Ex: 35" />
          <label className="text-label">anos</label>
        </div>

        <p className="form-subtitle">Altura</p>
        <div className="input-line">
          <input className="input-form" type="number" id="altura" name="altura" placeholder="Ex: 162" />
          <label className="text-label">cm</label>
        </div>

        <p className="form-subtitle">Peso</p>
        <div className="input-line">
          <input className="input-form" type="number" id="peso" name="peso" placeholder="Ex: 62,5" />
          <label className="text-label">kg</label>
        </div>

        <div className="div-btn-calc">
          <button className="btn-calc" onClick={calcularIMC}>Calcular</button>
        </div>
      </div>
  )
}


export default FormIMC;