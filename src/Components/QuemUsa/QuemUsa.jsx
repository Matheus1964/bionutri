import Styles from "./QuemUsa.module.css"
import Carrousel from "./Carrousel/Carrousel";
import Medico from "./../../Assets/Carrousel/medico.svg"
import Medica from "./../../Assets/Carrousel/medica.svg"

function QuemUsa(){
  return(
    <>
      <div className={Styles.container}>
        <img className={Styles.medico} src={Medico} alt="Imagem de uma mulher" />
        <div className={Styles.descricao}>
            <h2>Quem usa o <span>BioNutri</span></h2>
            <p>Os melhores nutricionista do Brasil estão no <span>BioNutri</span>. Veja quem são</p>
        </div>
        <Carrousel/>
        <img className={Styles.medica} src={Medica} alt="Imagem de uma mulher" />
      </div>
    </>
  )
}
export default QuemUsa;