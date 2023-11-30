import { useContext } from 'react'
import { AuthGoogleContext } from '../../../Contexts/authGoogle'
import TexteContext from '../../../Contexts/texteContext'
import SideBar from '../../../Components/Sidebar'
import styles from './profile.module.css'
import img from '../../../Assets/profileImg.svg'
import Footer from "../../../Components/Footer/Footer"

function Profile() {
  const testeContextValue = useContext(TexteContext)
  const { user: userJson } = useContext(AuthGoogleContext)
  const user = JSON.parse(userJson)
  return (
    <main className={styles.footerr}>
    <div className={styles.container}>
      <SideBar />
      <div className={styles.conteudo}>
        <h1>Seja Bem-Vindo! {user?.displayName}</h1>
        <div className={styles.testee}>
          
          <div className={styles.teste1}>
            <div className={styles.profileDados}>
              <label htmlFor="">Login*</label>
              <input
                type="email"
                name=""
                id=""
                placeholder={user?.email}
                disabled
              />
            </div>
            <div className={styles.profileDados}>
              <label htmlFor="">Nome*</label>
              <input
                type="email"
                name=""
                id=""
                placeholder={user?.displayName}
                disabled
              />
            </div>
            <div className={styles.profileDados}>
              <label htmlFor="">Telefone*</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="(xx)xxxxx-xxxx"
                disabled
              />
            </div>
            <div className={styles.profileDados}>
              <label htmlFor="">Data de Nascimento*</label>
              <input
                type="email"
                name=""
                id=""
                placeholder={user?.email}
                disabled
              />
            </div>
          </div>
          <div className={styles.profile_icon}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      
    </div>
      <Footer/>
    </main>
  )
}
export default Profile;
