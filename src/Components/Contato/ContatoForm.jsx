import './ContatoForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContatoForm(){
  //console.log(process.env.REACT_APP_TOKEN)
  
  const form = useRef();
  
  const TOKEN = process.env.REACT_APP_TOKEN;
  const TOKEN_TEMPLATE = process.env.REACT_APP_TOKEN_TEMPLATE;
  const TOKEN_SERVICEID = process.env.REACT_APP_TOKEN_SERVICEID;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(TOKEN_SERVICEID, TOKEN_TEMPLATE, e.target, TOKEN)
      .then((result) => {
        alert("deu certo");
      }, (error) => {
          alert("não deu certo");
      });
  };



  return(
    <div className="div-form">
      <div className="card-form">
        <h2>CONTATE-NOS</h2>

        <div className="line-form">

        </div>

        <div className="card-body-form">

          <form onSubmit = {sendEmail}>

            <div className="fields">
              <label>Nome:</label>
              <input type="text" name="name" placeholder="Nome" maxlength="40" minlength="2" required/>
            </div>

            <div className="fields">
              <label>E-mail:</label>
              <input type="Email" name="email" placeholder="E-mail"maxlength="40" minlength="2" required />
            </div>

            <div className="fields">
              <label>Mensagem:</label>
              <textarea type="text" name="message" placeholder="Sua Mensagem"maxlength="600" minlength="2" required ></textarea>
            </div>

            <div className="btn-form">
              <button type="submit" value={sendEmail}>Enviar mensagem</button>
            </div>

          </form>

        </div>
      </div>
    </div>
    
  )
}

export default ContatoForm;