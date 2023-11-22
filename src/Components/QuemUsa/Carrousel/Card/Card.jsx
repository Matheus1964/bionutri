import Styles from "./Card.module.css"
import ProfilePic from "../../../../Assets/Carrousel/default-profilepic.png"


function Card() {
  return (
   <>
   <div className={Styles.container}>
    <div className={Styles.wrapper}>
    <div className={Styles.identidade}>
        <img className={Styles.imagem} src={ProfilePic} alt="Imagem de perfil" />
        <h3 className={Styles.nome}>Nome</h3>
    </div>
    <p className={Styles.descricao}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, quisquam commodi! Illo repellendus a exercitationem distinctio quae reprehenderit temporibus officia ducimus labore dignissimos sint, dolorem quis ea necessitatibus iure voluptate sed tenetur! Nostrum minima laborum provident facere voluptas error consequatur?</p>
    </div>
   </div>
   </>
  );
};

export default Card;