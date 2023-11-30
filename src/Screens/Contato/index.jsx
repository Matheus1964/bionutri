import './Contato.css'
import Footer from '../../Components/Footer/Footer'
import ContatoForm from '../../Components/Contato/ContatoForm'
import img_contato from '../../Assets/img contato.svg'

function Contato() {
  return (
    <div className="container">
      <div>
        <div className="container_img">
          <img src={img_contato} alt="" />
        </div>

        <div className="teste_form">
          <ContatoForm />
        </div>
      </div>

      <div className="teste_footer">
        <Footer />
      </div>
    </div>
  )
}

export default Contato
