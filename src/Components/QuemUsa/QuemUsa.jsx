import Styles from "./QuemUsa.module.css"
import Carrousel from "./Carrousel/Carrousel";


function QuemUsa(){
  return(
    <>
      <div className={Styles.container}>
        <div className={Styles.descricao}>
            <h2>Quem usa o BioNutri</h2>
            <p>Os melhores nutricionista do Brasil estão no BioNutri. Veja quem são</p>
        </div>
            <Carrousel/>
      </div>
    </>
  )
}
export default QuemUsa;