import './Contato.css'
import Footer from '../../Components/Footer/Footer'
import ContatoForm from '../../Components/Contato/ContatoForm'


function Contato(){

  return (
    <div>
      
      <div className="container contato-div">
        <h1 className="title">Contato</h1>

        <div className="div-content">

          <div className="column">
            <ContatoForm/>
          </div>

        </div>
            
      </div>
      <Footer/>

    </div>
    
  )
}

export default Contato;