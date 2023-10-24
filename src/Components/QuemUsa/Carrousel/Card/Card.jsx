import Styles from "./Card.module.css"
import ProfilePic from "../../../../Assets/Carrousel/default-profilepic.png"


function Carrousel() {
  return (
   <>
   <div className={Styles.container}>
    <div className={Styles.identidade}>
        <img className={Styles.imagem} src={ProfilePic} alt="Imagem de perfil" />
        <h3 className={Styles.nome}>Nome</h3>
    </div>
    <p className={Styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sem elementum, cursus arcu ac, blandit massa. Nunc et elementum risus. Pellentesque ac augue id sapien vestibulum dignissim.</p>
   </div>
   </>
  );
};

export default Carrousel;