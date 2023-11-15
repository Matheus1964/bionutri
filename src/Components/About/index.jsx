import Styles from './About.module.css'
import Img from '../../Assets/About/undraw_review_re_kgg1 1.svg'
import React from 'react'


function About(){
  return(
    <div className={Styles.Container_About}>
      <img src={Img} alt="Imagem de uma mulher" />
      <div className={Styles.About}>
        <h1>Sobre</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequatur, deserunt, consectetur officia natus, id modi molestias nemo placeat harum porro. Ad asperiores vel vitae facilis enim. Tempore, molestiae mollitia!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequatur, deserunt, consectetur officia natus, id modi molestias nemo placeat harum porro. Ad asperiores vel vitae facilis enim. Tempore, molestiae mollitia!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequatur, deserunt, consectetur officia natus, id modi molestias nemo placeat harum porro. Ad asperiores vel vitae facilis enim. Tempore, molestiae mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequatur, deserunt, consectetur officia natus, id modi molestias nemo placeat harum porro. Ad asperiores vel vitae facilis enim. Tempore, molestiae mollitia!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequatur, deserunt, consectetur officia natus, id modi molestias nemo placeat harum porro. Ad asperiores vel vitae facilis enim. Tempore, molestiae mollitia!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequatur, deserunt, consectetur officia natus, id modi molestias nemo placeat harum porro. Ad asperiores vel vitae facilis enim. Tempore, molestiae mollitia!
        </p>
      </div>
    </div>
  )
}
export default About